import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ data }) {
    return (
        <Card sx={{ maxWidth: 345 }} className="project-card">
            <CardMedia
                component="img"
                height="190"
                image={data.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {data.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: '1rem' }}>
                    Created By  <b>{data.boldText}</b>
                </Typography>
                <Typography gutterBottom variant="p">
                    {data.bodyText}
                </Typography>
            </CardContent>
            <CardActions style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '1rem'
            }}>
                <Button size="small" variant="contained"
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#0c9e3c",
                        padding: "9px 15px",
                        fontSize: "14px",
                        color: 'white'
                    }}><a href="ho" style={{ color: 'white', fontWeight: '600' }}>View Site</a></Button>



            </CardActions >
        </Card >
    );
}
