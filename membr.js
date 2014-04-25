// TODO: ADD STEPS, STAGES, AND STATES to MEMBRANE
function Rule(r) {
  if (typeof r === 'array') return Rule(r[0]+'->'+r[1]);
  var fn = r.split('->');
  this.rule = r;
  this.applyRule= function(x) {
    return (fn[0] === x) ? fn[1] : '';
  };
  return this;
}

function Catalyst(symbls) {
  var symbolSeq = symbls.split('');
  this.symbols = symbls;
  this.tree = {};
  for(var i = 0; i< symbolSeq.length; i++) {
    this.tree[symbolSeq[i]] = symbolSeq[i];
  }
  return this;
};

function Membrane(brane) {
  if (brane) {
    var membrane = new Membrane();
    this.membranes = this.membranes || {};
    this.membranes[brane] = membrane;
  }
  this.container = {};
  return this;
};

Membrane.prototype.addRule= function(r) {
  var rule = new Rule(r);
  this.rules = this.rules || {};
  this.rules[r] = rule;
  return this;
};

Membrane.prototype.addCatalyst= function(ctlyst) {
  var catalyst = new Catalyst(ctlyst);
  this.catalysts = this.catalysts || {};
  this.catalysts[ctlyst] = catalyst;
  return this;
};

Membrane.prototype.addMembrane= function(mmbrn) {
  var membrane = new Membrane(mmbrn);
  this.membranes = this.membranes || {};
  this.membranes[mmbrn] = membrane;
  return this;
};

var mem = new Membrane();
console.log(mem);
mem.addRule('a->b');
console.log(mem);
mem.addRule('b->ab');
mem.addRule('c->cc');
mem.addRule('abc->a\\');
mem.addRule('a->b');
console.log(mem);
mem.addCatalyst('a');
mem.addCatalyst('abd');
mem.addCatalyst('cc');
console.log(mem);
mem.addMembrane('page');
console.log(mem);
