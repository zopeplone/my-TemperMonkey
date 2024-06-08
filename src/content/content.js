import { getCodesFromLocal } from '@/api/codes'

console.log(evalCore)
const evil = evalCore.getEvalInstance(window);
let codes = await getCodesFromLocal();
for(let code of codes){
  evil(code);
}
