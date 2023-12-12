import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { ControlledTextInput } from "../../../../components";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = () => {
  const { formProps, onSubmit } = useLoginForm();
  const { control } = formProps;
  return (
    <Card className="max-w-md">
      <CardHeader
        title="ورود"
        subheader="برای ورود شماره تلفن‌همراه و رمزعبور خود را وارد کنید."
      />
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ControlledTextInput
                control={control}
                fullWidth
                id="outlined-basic"
                name="phone"
                label="تلفن‌همراه"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <ControlledTextInput
                control={control}
                name="password"
                fullWidth
                id="outlined-basic"
                label="رمز‌‌عبور"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex px-10 w-full justify-center">
                <Button fullWidth type="submit" variant="outlined">
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
