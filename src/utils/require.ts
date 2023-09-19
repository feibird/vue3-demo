const require_ = (imgPath: string) => {
    try {
        const path = imgPath.replace('@', '..')
        console.log('path', path)
        return new URL(path, import.meta.url).href
    } catch (err) {
        console.log(err)
    }
}

export {require_}