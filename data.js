

    const OPERATOR = 
    {
        add: "+",
        sub: "-",
        mult: "*",
        div: "/",
        pow: "^"
    };

    
    function calculator({a, b, operation})
    {
      let result = null;
      switch(operation)
      {
        case OPERATOR.add:
            result = add(a, b);
            break;
        case OPERATOR.sub:
            result = sub(a, b);
            break;
        case OPERATOR.mult:
            result = mult(a, b);
            break;
        case OPERATOR.div:
            result = div(a, b);
            break;
        case OPERATOR.pow:
            result = pow(a, p);
            break;
      }

    }

