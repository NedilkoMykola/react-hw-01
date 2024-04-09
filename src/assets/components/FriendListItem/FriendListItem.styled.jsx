import styled from '@emotion/styled';



export const FriendCard = styled.div`
    width: 120px;
    padding: 15px 0;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
`

export const Avatar = styled.img`
    display: block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
`

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 600;
`


export const Status = styled.p`
    margin-top: 5px;
    color: ${(props) => props.status? 'green' : 'red'}
`