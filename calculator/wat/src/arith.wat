(module
    (export "_add" (func $add))
    (export "_subtract" (func $subtract))
    (export "_multiply" (func $multiply))
    (export "_divide" (func $divide))

    (func $add (param $num1 f64) (param $num2 f64) (result f64)
        local.get $num1
        local.get $num2
        f64.add
    )

    (func $subtract (param $num1 f64) (param $num2 f64) (result f64)
        local.get $num1
        local.get $num2
        f64.sub
    )

    (func $multiply (param $num1 f64) (param $num2 f64) (result f64)
        local.get $num1
        local.get $num2
        f64.mul
    )

    (func $divide (param $num1 f64) (param $num2 f64) (result f64)
        local.get $num1
        local.get $num2
        f64.div
    )
)