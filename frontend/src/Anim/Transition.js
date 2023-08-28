import {motion} from "framer-motion"

const transition =(OgComponent)=>
{
    return ()=>
    (
        <>
        <OgComponent/>
        <motion.div
            className="slide-ineee"
            initial={{scaleY:0}}
            animate={{scaleY:0}}
            exit={{scaley:1}}
            transition={{duration:1,ease:[0.22,1,0.36,1]}}
        ></motion.div>
        <motion.div
            className="slide-out"
            initial={{scaleY:1}}
            animate={{scaleY:0}}
            exit={{scaley:0}}
            transition={{duration:1,ease:[0.22,1,0.36,1]}}
        ></motion.div>
        </>
    )
}
export default transition;