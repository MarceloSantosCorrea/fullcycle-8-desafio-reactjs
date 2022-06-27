import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography
} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Full Cycle Desafio ReactJS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </Router>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;