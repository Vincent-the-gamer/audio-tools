import useCurrentPlatform from "@/hooks/useCurrentPlatform"

// init directorys
export function getNcmDir(){
    const platform = useCurrentPlatform()
    if(localStorage.getItem("ncmDir")) return localStorage.getItem("ncmDir")
    else{
        if(platform === "win32" || platform === "win64"){
            return `C:\\Users\\Public\\ncm`
        }
        else return `/Users/Shared/ncm` 
    }
}

export function getMp3OutDir(){
    const platform = useCurrentPlatform()
    if(localStorage.getItem("mp3OutDir")) return localStorage.getItem("mp3OutDir")
    else{
        if(platform === "win32" || platform === "win64"){
            return `C:\\Users\\Public\\mp3`
        }
        else return `/Users/Shared/mp3` 
    } 
}

export function getSongCoverOutDir(){
    const platform = useCurrentPlatform()
    if(localStorage.getItem("songCoverOutDir")) return localStorage.getItem("songCoverOutDir")
    else{
        if(platform === "win32" || platform === "win64"){
            return `C:\\Users\\Public\\songcover`
        }
        else return `/Users/Shared/songcover` 
    }
}