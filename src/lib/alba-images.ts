const shot = (id: string, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

export const albaImages = {
  hero: shot("1519823551278-64ac92734fb1", 2000),
  treatment: shot("1600334129128-685c5582fd35"),
  interior: shot("1596178065887-1198b6148b2b"),
  ritual: shot("1544161515-4ab6ce6db874"),
  scalp: shot("1562322140-8baeececf3df"),
  oils: shot("1608571423902-eed4a5ad8108"),
  towels: shot("1540555700478-4be289fbecef"),
  candles: shot("1470259078422-826894b933aa"),
  water: shot("1507652313519-d4e9174996dd"),
  couple: shot("1515377905703-c4788e51af15"),
  reception: shot("1560066984-138dadb4c035"),
  massage: shot("1519824145371-296894a0daa9"),
  hair: shot("1522337360788-8b13dee7a37e"),
  facial: shot("1616394584738-fc6e612e71b9"),
  calm: shot("1552693673-1bf958298935"),
  stones: shot("1532926381893-7542290edf1d"),
  portraitMaya: shot("1544005313-94ddf0286df2", 900),
  portraitAnanya: shot("1438761681033-6461ffad8d80", 900),
  portraitSofia: shot("1534528741775-53994a69daeb", 900),
  portraitDiya: shot("1524504388940-b1c1722653e1", 900),
  portraitRhea: shot("1580489944761-15a19d654956", 900),
} as const;

export type AlbaImageKey = keyof typeof albaImages;

export const heroVideo = "https://assets.mixkit.co/videos/4158/4158-720.mp4";

export const imageFallback = albaImages.interior;

export function albaImage(key?: string | null) {
  if (!key) return imageFallback;
  if (key.startsWith("http")) return key;
  return albaImages[key as AlbaImageKey] ?? imageFallback;
}
