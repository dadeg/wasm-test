all: math

math:
	rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib math.rs -o math.big.wasm
	wasm-gc math.big.wasm math.wasm
	rm *.big.*

clean:
		rm -rf *.wasm
