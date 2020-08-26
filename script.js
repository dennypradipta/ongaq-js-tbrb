/* Define the drums */
const drums = new Part({
  sound: 'my_band_drums',
});

// Kicks
drums.add(
  new Filter({
    key: 'kick',
    active: (n, measure) => n === 0 || (measure % 2 === 0 && n === 6) || (measure % 2 !== 0 && n == 4),
  })
);
drums.add(
  new Filter({
    key: 'kick2',
    active: (n, measure) => n === 0 || (measure % 2 === 0 && n === 6) || (measure % 2 !== 0 && n == 4),
  })
);

// Snare
drums.add(
  new Filter({
    key: 'snare',
    active: (n) => n === 8,
  })
);
drums.add(
  new Filter({
    key: 'snare2',
    active: (n) => n === 8,
  })
);

/* Define the chords */
const piano = new Part({
  sound: 'my_piano',
  measure: 14,
});

// Intro yang keren
piano.add(
  new Filter({
    key: new Chord('D#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 0,
  })
);

piano.add(
  new Filter({
    key: new Chord('Fm'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 1,
  })
);

piano.add(
  new Filter({
    key: new Chord('Gm'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 2,
  })
);

piano.add(
  new Filter({
    key: new Chord('G#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 3,
  })
);

// Putih bersi...
piano.add(
  new Filter({
    key: new Chord('D#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 4,
  })
);
// iiih berseri...
piano.add(
  new Filter({
    key: new Chord('A#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 5,
  })
);
// iii... a...
piano.add(
  new Filter({
    key: new Chord('G#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 6,
  })
);
// roooma yang memi...
piano.add(
  new Filter({
    key: new Chord('A#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 7,
  })
);
// kat. Bahan yang...
piano.add(
  new Filter({
    key: new Chord('D#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 8,
  })
);
// see...
piano.add(
  new Filter({
    key: new Chord('Dm'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 9,
  })
);
// eeerbaguna...
piano.add(
  new Filter({
    key: new Chord('G'),
    length: 16,
    active: (beat, measure) => beat === 8 && measure === 9,
  })
);
// aaaaa....
piano.add(
  new Filter({
    key: new Chord('Cm'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 10,
  })
);
// ....tepung
piano.add(
  new Filter({
    key: new Chord('G#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 11,
  })
);
// beras
piano.add(
  new Filter({
    key: new Chord('A#'),
    length: 16,
    active: (beat, measure) => beat === 8 && measure === 11,
  })
);
// rose brand~
piano.add(
  new Filter({
    key: new Chord('D#'),
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 12,
  })
);

/* Bassline */
const bass = new Part({
  sound: 'flat_bassist',
  measure: 14,
});

// Intro yang keren
bass.add(
  new Filter({
    key: () => ['D2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 0,
  })
);

bass.add(
  new Filter({
    key: () => ['F2'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 1,
  })
);

bass.add(
  new Filter({
    key: () => ['G2'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 2,
  })
);

bass.add(
  new Filter({
    key: () => ['G2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 3,
  })
);

// Putih bersi...
bass.add(
  new Filter({
    key: () => ['D2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 4,
  })
);
// iiih berseri...
bass.add(
  new Filter({
    key: () => ['A2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 5,
  })
);
// iii... a...
bass.add(
  new Filter({
    key: () => ['G2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 6,
  })
);
// roooma yang memi...
bass.add(
  new Filter({
    key: () => ['A2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 7,
  })
);
// kat. Bahan yang...
bass.add(
  new Filter({
    key: () => ['D2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 8,
  })
);
// see...
bass.add(
  new Filter({
    key: () => ['D2'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 9,
  })
);
// eeerbaguna...
bass.add(
  new Filter({
    key: () => ['G2'],
    length: 16,
    active: (beat, measure) => beat === 8 && measure === 9,
  })
);
// aaaaa....
bass.add(
  new Filter({
    key: () => ['C2'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 10,
  })
);
// ....tepung
bass.add(
  new Filter({
    key: () => ['G2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 11,
  })
);
// beras
bass.add(
  new Filter({
    key: () => ['A2#'],
    length: 16,
    active: (beat, measure) => beat === 8 && measure === 11,
  })
);
// rose brand~
bass.add(
  new Filter({
    key: () => ['D2#'],
    length: 16,
    active: (beat, measure) => beat === 0 && measure === 12,
  })
);

// Lead!
const lead = new Part({
  sound: 'violin',
  measure: 14,
});

// Intro
const intro_keys = ['G3', 'F3', 'G3', 'G3#', 'G3', 'G3#', 'A3#', 'D4#', 'A3#', 'C4', 'A3#', 'G3#', 'G3'];
const intro_beatArray = [0, 6, 10, 0, 6, 10, 0, 6, 10, 0, 6, 10];
const intro_measureArray = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
const intro_lengthArray = [8, 5, 7, 8, 5, 7, 8, 5, 7, 8, 5, 7];
intro_keys.forEach((item, index) => {
  let arrayKey = [];
  arrayKey.push(item);
  lead.add(
    new Filter({
      key: () => arrayKey,
      length: intro_lengthArray[index],
      active: (b, measure) => b === intro_beatArray[index] && measure === intro_measureArray[index],
    })
  );
});

// Putih bersih, berseri, aroma yang memikat...
const verse1_key = ['G3', 'G3#', 'A3#', 'F4', 'D4#', 'D4', 'D4#', 'C4', 'D4#', 'D4', 'C4', 'A3#', 'C4', 'G3'];
const verse1_beatArray = [8, 10, 12, 14, 10, 12, 14, 14, 0, 4, 8, 10, 12, 0];
const verse1_measureArray = [4, 4, 4, 4, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8];
const verse1_lengthArray = [3, 3, 5, 12, 3, 3, 12, 3, 5, 5, 3, 3, 5, 8];
verse1_key.forEach((item, index) => {
  let arrayKey = [];
  arrayKey.push(item);
  lead.add(
    new Filter({
      key: () => arrayKey,
      length: verse1_lengthArray[index],
      active: (b, measure) => b === verse1_beatArray[index] && measure === verse1_measureArray[index],
    })
  );
});

// Bahan yang serbaguna, tepung beras rose brand...
const verse2_key = ['G3', 'G3#', 'A3#', 'F4', 'G4', 'F4', 'D4#', 'D4', 'D4#', 'D4', 'D4#', 'D4', 'D4#'];
const verse2_beatArray = [8, 10, 12, 0, 10, 12, 14, 4, 6, 8, 10, 12, 14];
const verse2_measureArray = [8, 8, 8, 9, 9, 9, 9, 11, 11, 11, 11, 11, 11];
const verse2_lengthArray = [4, 4, 6, 10, 3, 3, 12, 3, 3, 3, 3, 3, 14];
verse2_key.forEach((item, index) => {
  let arrayKey = [];
  arrayKey.push(item);
  lead.add(
    new Filter({
      key: () => arrayKey,
      length: verse2_lengthArray[index],
      active: (b, measure) => b === verse2_beatArray[index] && measure === verse2_measureArray[index],
    })
  );
});

// Build the song
const ongaq = new Ongaq({
  api_key: '0cc2c54894bd42d685963652eb238c11',
  volume: 100,
  bpm: 60,
  onReady: () => {
    const button = document.getElementById('button');
    button.className = 'button start';

    button.onclick = () => {
      if (ongaq.params.isPlaying) {
        ongaq.pause();
        button.className = 'button start';
      } else {
        ongaq.start();
        button.className = 'button pause';
      }
    };
  },
});

ongaq.add(drums);
ongaq.add(piano);
ongaq.add(bass);
ongaq.add(lead);
