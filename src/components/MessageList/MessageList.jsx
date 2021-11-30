import { styled, Box, Paper, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MessageList = ({ messageList }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {messageList.map(({ id, user, messageText }) => (
          <Grid item xs={2} sm={4} md={4} key={id} className="messageBox">
            <Item className="user">{user}</Item>
            <Item className="message">{messageText}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
