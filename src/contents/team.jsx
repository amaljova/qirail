import { TeamCard } from '../components'
import { mainTeam, clinicalTeam } from '../data/team.data';
import { Section } from '../components';
import { Typography, Grid, Container } from '@mui/material';


export default function team() {
  return (
    <div id="team">
      <Section title="Our Team">
        <Container key='main'>
          <Typography variant='h4' align='center' color='textSecondary' sx={{
            fontWeight: 'bold', my: '2.5rem'
          }}
            gutterBottom>{mainTeam.title}</Typography >
          <Grid container spacing={12}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {
              mainTeam.members.map((member, idx) => (
                <Grid item key={idx}>
                  <TeamCard
                    name={member.name}
                    about={member.about}
                    department={member.department}
                    src={member.image}
                    desig={member.designation}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Container>
        <Container key='clinical'>

          <Typography variant='h4' align='center' color='textSecondary' sx={{
            fontWeight: 'bold', my: '2.5rem'
          }} gutterBottom>{clinicalTeam.group}</Typography >

          {
            clinicalTeam.subTeam.map((sub, idx) => (
              <Container key={idx}>
                <Typography
                  variant='h5'
                  align='center'
                  sx={{
                    fontWeight: 'bold', my: '2.5rem'
                  }}
                  gutterBottom>
                  {sub.title} {'Team'}
                </Typography >
                <Grid container spacing={12}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  {
                    sub.members.map((member, idx) => (
                      <Grid item key={idx}>
                        <TeamCard
                          name={member.name}
                          about={member.about}
                          department={member.department}
                          src={member.image}
                          desig={member.designation}
                        />
                      </Grid>
                    ))
                  }
                </Grid>
              </Container>
            ))
          }
        </Container>
      </Section>
    </div>
  );
}
