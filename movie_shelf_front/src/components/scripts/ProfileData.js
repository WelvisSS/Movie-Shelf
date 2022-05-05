import styles from "../styles/ProfileData.module.css"
import profile_pic from "../../assets/profile.png";

function ProfileData() {
    return (
        <div className={styles.profile_data}>
            <img className={styles.profile_data_pic} src={profile_pic} alt="profile data pic"></img>
            <div className={styles.profile_texts}>
                <p className={styles.profile_name}>Nome</p>
                <p className={styles.profile_info}>Info: cidade, idade, genero</p>
            </div>
        </div>
    );
}

export default ProfileData;