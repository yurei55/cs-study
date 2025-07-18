function createReactiveObject(target, callback) {
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            if (value !== obj[prop]) {
                const prev = obj[prop]
                obj[prop] = value
                callback(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다.`)
            }
            return true
        }
    })
    return proxy
}
const a = {
    "나" : "갓생"
}
const b = createReactiveObject(a, console.log)
b.나 = "갓생"
b.나 = "백수"
// 나가 [갓생] >> [백수] 로 변경되었습니다.
