import React,{useState} from 'react';
import './home.css';
import Upload from '../../assets/images/upload.svg'
import { MdCloudUpload } from 'react-icons/md';
const Home = () => {

    //states here 
    const [validation, setValidation] = useState<string>('');
    const [file, setFile] = useState<string>('');
    const [checked, setChecked] = useState('');
    const [disabled, setDisabled] = useState<boolean>(true);


    //function to pick the file type
    const handleFile = async (e:any) => {

        const targetFile = e.target.files[0];
        console.log(process.env.REACT_APP_FIREBASE_API_KEY)
        console.log(targetFile)
        
        //match file type with regular expression
        const expression = new RegExp(/pdf|docx|txt /i)
            if (targetFile.name.match(expression)) {
                setChecked(targetFile.name)
                //undisable button 
                setDisabled(false)
                
                //create instance for the supabase instance
                const { data, error } = await supabase.storage.createBucket('avatars')
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
                            <h1 className='upload-file'>
                                <MdCloudUpload/>
                            </h1>
                            <small className='text text-muted'>Click to upload document</small>
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
                         <button className="bg-btn-green px-5 py-3 my-4 text-white rounded"
                          disabled={disabled}
                         >
                             Upload
                          </button>

                    </form>
                   
                </div>

            </div>
        
        </>
    )
}

export default Home;