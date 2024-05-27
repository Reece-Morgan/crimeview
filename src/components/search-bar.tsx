import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface FormProps {
  postcode: string;
}

function SearchBar() {
  const { register, handleSubmit } = useForm<FormProps>();

  // use useNavigate hook to push user to data-view poage with postcode query
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: FormProps) => {
    if (!data.postcode) {
      return;
    }

    // format postcode and navigate to data view
    const postcode = data.postcode.replace(/ /g, "+");
    navigate(`/data-view?postcode=${postcode}`);
  });

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          id="postcode"
          placeholder="Enter Post Code"
          {...register("postcode")}
        />
        {/* TODO: add validation for postcode */}
        <Button>Search</Button>
      </Form>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border: 0;
  background-color: #d3d3d3;
  color: #000;
  font-size: 24px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 0;
  background-color: #054605;
  color: #fff;
  font-size: 20px;
`;
