import styled from '@emotion/styled';

export const Card = styled.div`
width: 300px;
margin: 0 auto;
background-color: #e8dede;
border: 1px solid black;
border-radius: 5px;
`

export const UserInfo = styled.div`
padding: 15px 0;
text-align: center;

`
export const Avatar = styled.img`
display: block;
background-color: grey;
margin: 0 auto;
width: 100px;
height: 100px;
border-radius: 50%;
`

export const StatsList = styled.ul`
    display: flex;
`
export const StatsItem = styled.li`
    display: flex;
    width: 100px;
    padding: 10px 0;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
`
export const UserName = styled.p`
    margin: 10px 0;
    font-size: 20px;
    font-weight: 600;
`
export const Quantity = styled.p`
font-weight: 600;
    color: #4e4949;
`