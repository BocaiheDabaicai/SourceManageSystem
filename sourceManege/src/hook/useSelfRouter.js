import {ref} from "vue";
import {useRouter} from "vue-router";

export default function () {
    const router = useRouter()
    const statusRef = ref(false)

    function changeStatus(detail){
        statusRef.value = !statusRef.value
        setTimeout(()=>{
            // console.log("跳转至",detail)
            statusRef.value = !statusRef.value
            router.push({
                name:detail
            })
        },1000)
    }

    return {statusRef,changeStatus}
}