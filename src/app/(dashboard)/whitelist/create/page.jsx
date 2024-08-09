'use client'
import { Container } from 'react-bootstrap';
import { PageHeading } from '@/widgets';
import CheckExistDataSystemForm from '@/sub-components/dashboard/CheckExistDataSystemForm';
import { useState, useEffect } from 'react';
import DataList from '@/sub-components/dashboard/DataListWrapper';
import { fetchWhitelist } from '@/app/api/datalist';
import DataListWrapper from '@/sub-components/dashboard/DataListWrapper';
const AddWhiteListDomain = () => {
    const [totalPages, setTotalPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount,setTotalCount] = useState(null)
    const [isLoading, setLoading] = useState(false);
    const [pageSize,setPageSize] = useState(0)
    const [initialData, setInitialData] = useState([]);
    const itemsDisplayed = Math.min(pageNumber * pageSize, totalCount);
    const handlePageChange = (page) => {
        setPageNumber(page);
    };
    useEffect(() => {
        const fetchTotalPages = async () => {
            setLoading(true);
            try {
                const responseData = await fetchWhitelist(pageNumber);
                if(responseData?.statusCode ===200){
                    setTotalPages(responseData?.data?.totalPages);
                    setPageSize(responseData?.data?.pageSize)
                    setInitialData(
                        responseData?.data?.data === null ? [] : responseData?.data?.data
                      );
                      setTotalCount(responseData?.data?.totalCount)
                      setLoading(false);
                }else{
                    setLoading(false);
                }
            
            
            } catch (error) {
                console.error('Error fetching total pages:', error);
                setLoading(false);
            }
        };

        fetchTotalPages();
    }, []);
    
    

    return (
        <Container fluid className="p-6">
            <PageHeading heading="White List Domains" />
            <CheckExistDataSystemForm pageName={"WhitelistDomain"} />
        </Container>
    );
};

export default AddWhiteListDomain;
