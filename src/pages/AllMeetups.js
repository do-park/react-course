import { useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    'https://react-getting-started-be3c0-default-rtdb.firebaseio.com/meetups.json',
  ).then(response => {
    return response.json();
  }).then(data => {
    setIsLoading(false);
    setLoadedMeetups(data);
  });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetups page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
