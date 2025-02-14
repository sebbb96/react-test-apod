import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { DetailsPage, Home } from "./routes/index.ts";
import NotFound from "./error-page.tsx";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<DetailsPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
);
