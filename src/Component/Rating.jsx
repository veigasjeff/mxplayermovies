import React from 'react'
import {InlineReactionButtons} from 'sharethis-reactjs';

const Rating = () => {
  return (
    <div>
    <h1>Movie Ratings</h1>
    <style dangerouslySetInnerHTML={{__html: `
    html, body {
      margin: 0;
      padding: 0;
      text-align: center;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
    }
    hr {
      margin-bottom: 40px;
      margin-top: 40px;
      width: 50%;
    }
  `}} />
    <InlineReactionButtons
    config={{
      alignment: 'center',  // alignment of buttons (left, center, right)
      enabled: true,        // show/hide buttons (true, false)
      language: 'en',       // which language to use (see LANGUAGES)
      min_count: 0,         // hide react counts less than min_count (INTEGER)
      padding: 12,          // padding within buttons (INTEGER)
      reactions: [          // which reactions to include (see REACTIONS)
        'slight_smile',
        'heart_eyes',
        'laughing',
        'astonished',
        'sob',
        'rage'
      ],
      size: 48,             // the size of each button (INTEGER)
      spacing: 8,           // the spacing between buttons (INTEGER)
    }}
    />
    </div>
  )
}

export default Rating
