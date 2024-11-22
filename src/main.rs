use std::env;
use std::path::Path;
use std::process;

const PROG: &str = env!("CARGO_PKG_NAME");

fn main() {
    println!("{PROG} - Tool to extract IDA decompiler's pseudo-code");
    println!("Copyright (c) 2024 Marco Ivaldi <raptor@0xdeadbeef.info>");
    println!();

    // Force IDA Pro to stay quiet
    idalib::force_batch_mode();

    // Parse command line arguments
    let args: Vec<String> = env::args().collect();

    let prog = Path::new(&args[0])
        .file_name()
        .unwrap()
        .to_str()
        .unwrap_or(PROG);

    let filename = match args.len() {
        2 => &args[1],
        _ => "-",
    };
    if filename.starts_with('-') {
        usage(prog);
    }

    // Let's do it
    match haruspex::run(Path::new(filename)) {
        Ok(_) => (),
        Err(err) => {
            eprintln!("[!] Error: {err}");
            process::exit(1);
        }
    }
}

/// Print usage information and exit
fn usage(prog: &str) {
    println!("Usage:");
    println!("$ ./{prog} <binary_file>");

    process::exit(1);
}