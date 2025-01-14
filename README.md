# haruspex

[![](https://img.shields.io/github/stars/0xdea/haruspex.svg?style=flat&color=yellow)](https://github.com/0xdea/haruspex)
[![](https://img.shields.io/crates/v/haruspex?style=flat&color=green)](https://crates.io/crates/haruspex)
[![](https://img.shields.io/crates/d/haruspex?style=flat&color=red)](https://crates.io/crates/haruspex)
[![](https://img.shields.io/badge/twitter-%400xdea-blue.svg)](https://twitter.com/0xdea)
[![](https://img.shields.io/badge/mastodon-%40raptor-purple.svg)](https://infosec.exchange/@raptor)
[![build](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
[![doc](https://github.com/0xdea/haruspex/actions/workflows/doc.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/doc.yml)

> "Hacking is the discipline of questioning all your assumptions all of the time."
>
> -- Dave Aitel

Haruspex is a blazing fast IDA Pro headless plugin that extracts pseudo-code generated by IDA Pro's
decompiler in a format that should be suitable to be imported into an IDE or parsed by static
analysis tools such as [Semgrep](https://semgrep.dev/) or [weggli](https://github.com/weggli-rs/weggli).

![](https://raw.githubusercontent.com/0xdea/haruspex/master/.img/screen01.png)

## Features

* Blazing fast, headless user experience courtesy of IDA Pro 9 and Binarly's idalib Rust bindings.
* Support for binary targets for any architecture implemented by IDA Pro's Hex-Rays decompiler.
* Pseudo-code of each function is stored in a separated file in the output directory for easy inspection.
* External crates can invoke `decompile_to_file()` to decompile a function and save its pseudo-code to disk.

## Blog post

* <https://security.humanativaspa.it/streamlining-vulnerability-research-with-ida-pro-and-rust> (*coming soon*)

## See also

* <https://github.com/0xdea/ghidra-scripts/blob/main/Haruspex.java>
* <https://github.com/0xdea/semgrep-rules>
* <https://github.com/0xdea/weggli-patterns>
* <https://docs.hex-rays.com/release-notes/9_0#headless-processing-with-idalib>
* <https://github.com/binarly-io/idalib>
* <https://github.com/xorpse/parascope>
* <https://security.humanativaspa.it/automating-binary-vulnerability-discovery-with-ghidra-and-semgrep>

## Installing

The easiest way to get the latest release is via [crates.io](https://crates.io/crates/haruspex):

1. Download, install, and configure IDA Pro (see <https://hex-rays.com/ida-pro>).
2. Download and extract the IDA SDK (see <https://docs.hex-rays.com/developer-guide>).
3. Install haruspex as follows:
   ```sh
   $ export IDASDKDIR=/path/to/idasdk90
   $ export IDADIR=/path/to/ida # if not set, the build script will check common locations
   $ cargo install haruspex
   ```

## Compiling

Alternatively, you can build from [source](https://github.com/0xdea/haruspex):

1. Download, install, and configure IDA Pro (see <https://hex-rays.com/ida-pro>).
2. Download and extract the IDA SDK (see <https://docs.hex-rays.com/developer-guide>).
3. Compile haruspex as follows:
    ```sh
    $ git clone https://github.com/0xdea/haruspex
    $ cd haruspex
    $ export IDASDKDIR=/path/to/idasdk90 # or edit .cargo/config.toml
    $ export IDADIR=/path/to/ida # if not set, the build script will check common locations
    $ cargo build --release
    ```

## Usage

1. Make sure IDA Pro is properly configured with a valid license.
2. Run haruspex as follows:
    ```sh
    $ haruspex <binary_file>
    ```
3. Find the extracted pseudocode of each decompiled function in the `binary_file.dec` directory.

## Tested with

* IDA Pro 9.0.240925 on macOS arm64 and Linux x64.
* IDA Pro 9.0.241217 on macOS arm64 and Linux x64.

*Note: not tested on Windows, check [idalib](https://github.com/binarly-io/idalib) documentation if you want to port it
yourself.*

## Changelog

* [CHANGELOG.md](CHANGELOG.md)

## TODO

* Integrate with Semgrep scanning (see <https://github.com/0xdea/semgrep-rules>).
* Integrate with weggli scanning (see <https://github.com/0xdea/weggli-patterns>).
* Improve decompiler output in the style of [HexRaysPyTools](https://github.com/igogo-x86/HexRaysPyTools)
  and [abyss](https://github.com/patois/abyss).
* Implement parallel analysis (see <https://github.com/fugue-re/fugue-mptp>).
