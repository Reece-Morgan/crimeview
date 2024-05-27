import { useState } from "react";
import { useForm } from "react-hook-form";
import { PostCode } from "../types/types";

interface FormProps {
  postcode: string;
}

function SearchBar() {
  const [postcode, setPostcode] = useState<PostCode>();
  const { register, handleSubmit } = useForm<FormProps>();

  const onSubmit = handleSubmit(async (data: FormProps) => {
    if (!data.postcode) {
      return;
    }

    const postcode = data.postcode.replace(/ /g, "+");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.getthedata.com/postcode/${postcode}`);
    xhr.onload = function () {
      if (xhr.status === 200) {
        setPostcode(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="postcode"
          placeholder="Enter Post Code"
          {...register("postcode")}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default SearchBar;
