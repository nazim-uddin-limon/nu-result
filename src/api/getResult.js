import axios from "axios";

const URL =
  "http://results.nu.ac.bd/honours/first_year_result_show.php?roll_number=&reg_no=21228242413&exam_year=2022";


const getResult = async (url = URL) => {
    const result = await axios.get(url)
    console.log(result)
    return result
}

export default getResult