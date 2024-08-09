'use client'
import { Container } from 'react-bootstrap';
import { PageHeading } from '@/widgets';
import { ExceptionSetting } from '@/sub-components';
import SystemForm from '@/sub-components/dashboard/SystemForm';

const AddWhiteListDomain = () => {

    return (
        <Container fluid className="p-6">
            <PageHeading heading="White List Domains" />
        <SystemForm pageName={"WhitelistDomain"} isEdit={false} />
        </Container>
    );
};
export default AddWhiteListDomain;
