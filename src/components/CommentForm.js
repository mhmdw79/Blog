import { useMutation } from "@apollo/client";
import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COMMENT_SEND } from "../graphql/mutations";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { data, loading }] = useMutation(COMMENT_SEND, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
      setName("")
      setEmail("")
      setText("")
    } else {
      toast.warn("لطفا همه فیلد ها را پر کنید", { position: "top-center" });
    }

    if (data && pressed) {
      toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
        position: "top-center",
      });
      setPressed(false)
     
    }
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 4,
        mt: 5,
        py: 1,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام/نام خانوادگی"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            {" "}
            در حال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
