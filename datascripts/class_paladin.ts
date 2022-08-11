import { std } from "wow/wotlk";

export const PALADIN_PASSIVE_1 =    // MELEE AP -100
    std.Spells.create('master-quest', 'paladin-passive-1', 27970);
PALADIN_PASSIVE_1.Effects.get(0).setPoints(-101, 1, 0, 0);
PALADIN_PASSIVE_1.Name.enGB.set('PALADIN_PASSIVE_1');

export const PALADIN_PASSIVE_2 =    // PHYSICAL HIT +100
    std.Spells.create('master-quest', 'paladin-passive-2', 43689);
PALADIN_PASSIVE_2.Effects.get(0).setPoints(4, 1, 0, 0);
PALADIN_PASSIVE_2.Name.enGB.set('PALADIN_PASSIVE_2');

export const CRUSADER_STRIKE =
    std.Spells.create('master-quest', 'crusader-strike', 35395);
// CRUSADER_STRIKE.Attributes.IGNORE_HIT_RESULT.set(true); -Not usable, prevents CS from being dodged

export const JUDGEMENT_OF_RIGHTEOUSNESS =
    std.Spells.create('master-quest', 'judgement-of-righteousness', 33554);
JUDGEMENT_OF_RIGHTEOUSNESS.Icon.setPath('spell_holy_righteousfury');
JUDGEMENT_OF_RIGHTEOUSNESS.Name.enGB.set('Judgement of Righteousness');
JUDGEMENT_OF_RIGHTEOUSNESS.Range.setSimple(0, 10);

console.log(JUDGEMENT_OF_RIGHTEOUSNESS.objectify())