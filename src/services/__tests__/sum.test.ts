import sum from ".././sum";


/*Dirty hacks because it and expect are globally defined and this is TypeScript*/
let it, expect:any;
let w: any = window;

it = w.it;
expect = w.expect;

it('adds 1 + 2 to equal 3 in TScript', ()=> {
    expect(sum(1, 2)).toBe(4);
});