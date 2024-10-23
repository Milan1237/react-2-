Use Context: 
Use context is an very usefull hook where you need to pass data to various number components. It acts as global value. Suppose that , there are class of students 
and each student should get a message. So instead of telling everyone the same details, we used useContext hook with create context . 

Steps to make an context 
step 1:  create the context: 
const context = createContext(initialvalue);

step 2 : make an counsumer context to spread the data 
function GlobalComponent({children}){
    <context.provider value= {......values}>
    {children}
    </context.provider>
}
step 3 : create an custom hook to acess the value
const useVlaue = useContext(GlobalComponent);


