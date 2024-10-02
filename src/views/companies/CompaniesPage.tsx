import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCompanies } from "./companiesSlice";
import type { AppDispatch } from "../../store";

function CompaniesPage() {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getCompanies());
	}, [dispatch]);

	return <div>Teste</div>;
}

export default CompaniesPage;
