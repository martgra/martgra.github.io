# Use Microsoft's Debian Bookworm base image
FROM mcr.microsoft.com/devcontainers/base:bookworm
ARG USERNAME=vscode

# Pre-create directories that will be used by volumes and set proper permissions
RUN mkdir -p /workspace/node_modules \
    && chown -R ${USERNAME}:${USERNAME} /workspace \
    && mkdir -p /home/${USERNAME}/.cache \
    && mkdir -p /home/${USERNAME}/.npm \
    && mkdir -p /home/${USERNAME}/.vscode-server/extensions \
    && mkdir -p /home/${USERNAME}/commandhistory \
    && chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.cache \
    && chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.npm \
    && chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.vscode-server \
    && chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/commandhistory

# Switch to vscode user to install Node.js
USER ${USERNAME}

# Install Node.js using nvm
ENV NVM_DIR=/home/vscode/.nvm
ENV NODE_VERSION=22.13.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION \
    && nvm alias default $NODE_VERSION

# Add Node.js to PATH
ENV PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash && \
    echo 'export PATH="$HOME/.bun/bin:$PATH"' >> /home/${USERNAME}/.zshrc && \
    echo 'export PATH="$HOME/.bun/bin:$PATH"' >> /home/${USERNAME}/.bashrc
ENV BUN_INSTALL=/home/vscode/.bun
ENV PATH=$BUN_INSTALL/bin:$PATH

# Configure zsh history persistence (using zsh's precmd instead of bash PROMPT_COMMAND)
RUN echo 'export HISTFILE=/home/vscode/commandhistory/.zsh_history' >> /home/${USERNAME}/.zshrc \
    && echo 'export HISTSIZE=10000' >> /home/${USERNAME}/.zshrc \
    && echo 'export SAVEHIST=10000' >> /home/${USERNAME}/.zshrc \
    && echo 'setopt SHARE_HISTORY' >> /home/${USERNAME}/.zshrc \
    && echo 'setopt HIST_IGNORE_DUPS' >> /home/${USERNAME}/.zshrc \
    && echo 'setopt HIST_IGNORE_ALL_DUPS' >> /home/${USERNAME}/.zshrc \
    && echo 'setopt HIST_FIND_NO_DUPS' >> /home/${USERNAME}/.zshrc \
    && touch /home/${USERNAME}/commandhistory/.zsh_history

# Switch back to root for any remaining setup (if needed by features)
USER root

