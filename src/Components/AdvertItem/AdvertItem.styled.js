import styled from "styled-components";

export const Wrapper = styled.li`
width: 274px;
`
export const ImageThumb = styled.div`
width: 100%;
height: 268px;
overflow: hidden;
margin-bottom: 14px
`

export const Image = styled.img`
height: 100%;
object-fit: cover;
border-radius: 14px;
`

export const AdvertInfo = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8px;
font-size: 16px;
font-weight: 500;
line-height: 24px
`
export const AdvertModel = styled.span`
color: var(--accent-blue-color)`;

export const AdvertDetiles = styled.ul`
display: flex;
flex-wrap: wrap;
margin-bottom: 4px;

&:last-child {
    margin-bottom: 28px
}
`
export const DetailesItem = styled.li`
padding: 0 6px;
border-right: 1px solid var(--border-gray-color);
color: var(--secondary-text-color);
font-size: 12px;

&:first-child {
    text-transform: lowercase;
    padding-left:0
};
&:last-child {
    padding-right: 0;
    border-right: none
};

&:first-letter{
    text-transform: capitalize;
}`

export const Button = styled.button`
display: block;
width: 100%;
padding: 12px 0;
text-align: center;
background-color: var(--accent-blue-color);
color: var(--white-color);
border: transparent;
border-radius: 12px;
cursor: pointer;
transition: background-color var(--transition);

&:hover, &:focus { 
background-color: var(--blue-hover-color);
}
`