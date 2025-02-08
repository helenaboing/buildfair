{
  description = "BuildFair - Smart Contract Construction Agreements";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    foundry.url = "github:shazow/foundry.nix/monthly";
  };

  outputs = { self, nixpkgs, flake-utils, foundry }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ foundry.overlay ];
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js environment
            nodejs_20
            nodePackages.pnpm
            nodePackages.typescript
            nodePackages.typescript-language-server

            # Ethereum & Solidity
            foundry-bin
            solc
            
            # Python for scripts
            python3
            
            # Development tools
            git
            gnumake
            
            # Formatting & Linting
            nodePackages.prettier
            nodePackages.eslint
            nixpkgs-fmt
            
            # Documentation
            texlive.combined.scheme-full
          ];

          shellHook = ''
            echo " "
            echo "🛠️  Welcome to BuildFair Development Environment 🏗️"
            echo "Available tools:"
            echo "  • Node.js $(node --version)"
            echo "  • pnpm $(pnpm --version)"
            echo "  • Foundry $(forge --version)"
            echo "  • Solc $(solc --version)"
            echo " "
            
            # Local npm configuration
            export PATH="$PWD/node_modules/.bin:$PATH"
            
            # Foundry configuration
            export FOUNDRY_PROFILE="default"
            
            # Git configuration
            git config --local core.hooksPath .githooks/
          '';
        };

        # Formatter configurations
        formatter = pkgs.nixpkgs-fmt;

        # Development environment checks
        checks = {
          format = pkgs.runCommand "check-format" { } ''
            ${pkgs.nixpkgs-fmt}/bin/nixpkgs-fmt --check ${./.}
            touch $out
          '';
        };
      });
} 