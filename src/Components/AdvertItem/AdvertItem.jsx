import {Wrapper, Image, AdvertInfo, AdvertModel, ImageThumb, Button, AdvertDetiles, DetailesItem} from "./AdvertItem.styled"

export default function AdvertItem({ advert }) {
    const address = advert.address.split(' ');
    const indexCity = address.length - 2;
    const indexCountry = address.length - 1;
    const city = [...address].splice(indexCity, 1).join('').slice(0, -1);
    const country = [...address].splice(indexCountry, 1).join('');

  return (
      <Wrapper>
          <ImageThumb>
              <Image src={advert.img} alt={advert.model} />
          </ImageThumb>
          <AdvertInfo>
              <div><span>{advert.make}</span> <AdvertModel>{advert.model}</AdvertModel>, <span>{ advert.year}</span></div>
              <span>{advert.rentalPrice}</span>
          </AdvertInfo>
          <div>
              <AdvertDetiles>
                  <DetailesItem>{city}</DetailesItem>
              <DetailesItem>{country}</DetailesItem>
              <DetailesItem>{advert.rentalCompany}</DetailesItem>
              {/* <li>{advert.}</li> */}
              </AdvertDetiles>
              <AdvertDetiles>
                  <DetailesItem>{advert.type}</DetailesItem>
              <DetailesItem>{advert.make}</DetailesItem>
              <DetailesItem>{advert.id}</DetailesItem>
              <DetailesItem>{advert.functionalities[0]}</DetailesItem>
              </AdvertDetiles>
          </div>
          <Button type="submit">Learn more</Button>
    </Wrapper>
  )
}
