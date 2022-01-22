import React,{useState} from 'react';
import './home.css';
import Upload from '../../assets/images/upload.svg'
const Home = () => {

    //states here 
    const [validation, setValidation] = useState<string>('');
    const [file, setFile] = useState<string>('');
    const [checked, setChecked] = useState('');


    //function to pick the file type
    const handleFile = (e:any) => {

        const targetFile = e.target.files[0];
        
        console.log(targetFile.name)
        
        //match file type with regular expression
        const expression = new RegExp(/pdf|docx|txt /i)
            if (targetFile.name.match(expression)) {
                setChecked(targetFile.name)
                
            } else {
               
                setValidation('file can only be .pdf .txt or .docx')
            }

        
        
    };


    //function to upload pdf

    const uploadFile = (extension:string) => {
            const ext = extension;
            
        
            
    };


    //upload document
    const preventSubmit = (e:any) => {
        e.preventDefault();
        uploadFile('pdf')
        

        //call all functions inside here 
        
    }
    return (
        <>

            <div >

                <div className="whole">
                    {/* part to upload the documentes */}


                    <form 
                    onSubmit={preventSubmit}
                    >

                        <label htmlFor="upload">
                            <img src={Upload} alt="" />
                        </label>
                        <div>
                        <input type="file" name="upload" id="upload" 
                        style={{display:'none'}}
                        onChange={handleFile}
                        />
                        </div>
                        
                        <small className="validate">
                          {

                              //check if regex matches the state 
                             (() => {
                                if(checked) {
                                    return <span>{checked}</span>
                                } 

                                else if(validation) {
                                    return <span>{validation}</span>
                                } 
                                else {
                                    return <span></span>
                                }
                             })()
                          }
                        </small>
                         
                            <br />
                         <button className="bg-btn-green px-5 py-3 my-4">
                             Upload
                          </button>

                    </form>
                   
                </div>

            </div>
        
        </>
    )
}

export default Home;