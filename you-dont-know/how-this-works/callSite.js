function a() {
    // call-stack is: `a`
    // call-site is in the global scope

    console.log( "a" );
    b(); // call-site for `b`
}

function b() {
    // call-stack is: `a` -> `b`
    // call-site is in `a`

    console.log( "b" );
    c(); // <-- call-site for `c`
}

function c() {
    // call-stack is: `a` -> `b` -> `foco`
    // call-site is in `b`

    console.log( "c" );
}

a(); // <-- call-site for `a`