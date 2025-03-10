import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompany from "../CompanyProfile/SimilarCompany";

const CompanyPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs" />
            <Button my="md" onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} color="bright-sun.4" variant="light">Back</Button>
            <div className="flex gap-5 justify-between">
                <Company />
                <SimilarCompany />
            </div>
        </div>
    )
}
export default CompanyPage;