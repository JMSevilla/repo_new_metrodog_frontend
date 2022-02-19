class DataHandling {
    HTTPHandling(object) {
        var data = new FormData()
        for(const props in object){
            data.append(`${props}`, `${object[props]}`)
        }
        return data
    }
}

export default new DataHandling()