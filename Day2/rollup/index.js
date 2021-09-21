import {foo} from "./foo"
import {age} from "./src/assets/data.json"
import answer from "the-answer"
import { createApp} from 'vue'
import { create } from "handlebars"
//分析出代码的信息
// webpack-> require自定义，动态，分析不出来
// esm -> 静态ast
//图->得到代码信息->数据结构->生成对应的代码
console.log(foo)
console.log(age)
console.log(answer)
console.log(createApp())