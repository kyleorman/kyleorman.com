{
  description = "Development shell for kyleorman.com";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
          ];

          shellHook = ''
            echo "kyleorman.com dev shell ready"
            echo "Run: npm install && npm run dev"
          '';
        };
      });
}
