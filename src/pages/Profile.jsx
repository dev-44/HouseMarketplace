import {useState} from 'react'
import { useNavigate, Link} from 'react-router-dom'
import {getAuth, updateProfile} from 'firebase/auth'
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'

function Profile() {

    const auth = getAuth()

    const [changeDetails, setChangeDetails] = useState(false)
    //const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    const {name, email} = formData

    const navigate = useNavigate()

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const onSubmit = async() =>{
        try {
            if(auth.currentUser.displayName !== name) {
                //Update display name in Firebase
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                //Update in Firestore
                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name: name
                })

                toast.success('Data Update Successfully')
            }
        } catch (error) {
            toast.error('Could not update profile details')
            //toast.error(error)
        }
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    //useEffect(() => {
    //    setUser(auth.currentUser)
    //},[])

    //return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
    return <div className='profile'>
        <header className="profile-header">
            <p className="page-header">My Profile</p>
            <button type='button' className="logOut" onClick={onLogout}>
                Logout
            </button>
        </header>

        <main>
            <div className="profileDetailsHeader">
                <p className="profileDetailsText">Personal Details</p>
                <p className="changePersonalDetails" onClick={() => {
                    changeDetails && onSubmit()
                    setChangeDetails((prevState) => !prevState)
                }}>
                    {changeDetails ? 'done' : 'change'}
                </p>
            </div>

            <div className="profileCard">
                <form>
                    <input type="text" id="name" 
                        className={!changeDetails ? 'profileName' : 'profileNameActive'}
                        disabled={!changeDetails}
                        value={name}
                        onChange={onChange}
                    />
                    <input type="text" id="email" 
                        className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
                        disabled={!changeDetails}
                        value={email}
                        onChange={onChange}
                    />
                </form>
            </div> 
        </main>
    </div>
  }
  
  export default Profile;
  

  //To Check if there´s an object in user we must set useState by default in null