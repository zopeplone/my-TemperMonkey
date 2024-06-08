

const storageKey = 'codes'
export async function getCodesFromLocal(){
  let res = await chrome.storage.local.get([storageKey])
  return res[storageKey]
}

export async function addNewCodes(str) {
  let res = await chrome.storage.local.get([storageKey])
  if (res[storageKey]) {
    res = res[storageKey]
  }
  else res = []
  res.push(str)
  let obj = {}
  obj[storageKey] = res
  await chrome.storage.local.set(obj)
  return
}