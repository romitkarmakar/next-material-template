import { Typography } from "@material-ui/core";
import { useSelector } from 'react-redux'

export default ({}) => {
    const clicked = useSelector(state => state.clicked)

    return <Typography>Button is clicked {clicked} times</Typography>
}