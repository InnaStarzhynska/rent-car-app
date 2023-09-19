import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../Redux/selectors";
import { getAdvertsByQuery } from "../../Redux/operations";
import AdvertItem from "../AdvertItem/AdvertItem";
import { Adverts, Container } from "./AdvertsList.styled";

export default function AdvertsList() {
    const dispatch = useDispatch();
    const adverts = useSelector(selectAdverts);

    useEffect(() => {
        dispatch(getAdvertsByQuery({ page: 1 }));
    }, [dispatch]);

    return (
        <Container>
        <Adverts>
            {adverts.map(item => 
                <AdvertItem advert={item} key={item.id} />
            )}
            </Adverts>
            </Container>
  )
}  
