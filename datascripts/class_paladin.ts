import { std } from "wow/wotlk";

// BASE STATS
var agilityCallback = (old: number, race: number, level: number) : number => { return 0 };
var intellectCallback = (old: number, race: number, level: number) : number => { return 0 };
var spiritCallback = (old: number, race: number, level: number) : number => { return 0 };
var staminaCallback = (old: number, race: number, level: number) : number => { return 1 };
var strengthCallback = (old: number, race: number, level: number) : number => { return 1 };
var baseManaCallback = (old: number, level: number) : number => { return 1000 };
var baseHpCallback = (old: number, level: number) : number => { return 999 };
var baseMeleeCritCallback = (old: number, level: number) : number => { return 0.05 };
var baseSpellCritCallback = (old: number, level: number) : number => { return 0.05 };

std.Classes.load("PALADIN")
.Stats.Agility.set(agilityCallback)
.Stats.Intellect.set(intellectCallback)
.Stats.Spirit.set(spiritCallback)
.Stats.Stamina.set(staminaCallback)
.Stats.Strength.set(strengthCallback)
.Stats.BaseMana.set(baseManaCallback)
.Stats.BaseHP.set(baseHpCallback)
.Stats.BaseMeleeCrit.set(baseMeleeCritCallback)
.Stats.BaseSpellCrit.set(baseSpellCritCallback)
.Stats.DodgeBase.set(0.05)

// // AP -100
// export const PALADIN_PASSIVE_1 = std.Spells.create('master-quest', 'paladin-passive-1', 27970);
// PALADIN_PASSIVE_1.Effects.get(0).setPoints(-101, 1, 0, 0);
// PALADIN_PASSIVE_1.Name.enGB.set('PALADIN_PASSIVE_1');

// PHYSICAL HIT +100
export const PALADIN_PASSIVE_2 = std.Spells.create('master-quest', 'paladin-passive-2', 43689);
PALADIN_PASSIVE_2.Effects.get(0).setPoints(4, 1, 0, 0);
PALADIN_PASSIVE_2.Name.enGB.set('PALADIN_PASSIVE_2');

// CRUSADER STRIKE
export const CRUSADER_STRIKE = std.Spells.create('master-quest', 'crusader-strike', 35395)
.Cooldown.set(6000, 0, 1000, 133)
.Mana.setMana(1);
// CRUSADER_STRIKE.Attributes.IGNORE_HIT_RESULT.set(true);
// Not usable, prevents CS from being dodged

// JUDGEMENT
export const JUDGEMENT = std.Spells.create('master-quest', 'judgement', 68017);
JUDGEMENT.Description.enGB.set('Judges the enemy for $s1 Holy damage.');
JUDGEMENT.Icon.setPath('spell_holy_righteousfury');
JUDGEMENT.Name.enGB.set('Judgement');
JUDGEMENT.Mana.setMana(1);
JUDGEMENT.Range.setSimple(0, 8);
JUDGEMENT.Effects.get(0).setPoints(9, 5, 0, 0);
JUDGEMENT.Cooldown.set(3000, 0, 1000, 133);
JUDGEMENT.Attributes.TRIGGERED_FROM_EFFECT.set(false);
JUDGEMENT.Attributes.CANT_BE_REFLECTED.set(false);
JUDGEMENT.Category.set(0);
JUDGEMENT.Priority.set(0);

// EXORCISM - make CD 6s and restart the CD on judgement
export const EXORCISM = std.Spells.create('master-quest','exorcism', 879)
.Mana.setMana(1)

// WINGS
export const WINGS = std.Spells.create('master-quest','wings', 31884)
.Mana.setMana(1)
.Duration.setSimple(10000)

// CLEANSE
export const CLEANSE = std.Spells.create('master-quest', 'cleanse', 4987)
.Range.setSimple(0, 8)
.Mana.setMana(1)

// CONSECRATION
export const CONSECRATION = std.Spells.create('master-quest', 'consecration', 26573)
.Mana.setMana(1)

// FLASH OF LIGHT
export const FLASH_OF_LIGHT = std.Spells.create('master-quest', 'flash-of-light', 19750)
.Mana.setMana(1)

// HAMMER OF JUSTICE
export const HAMMER_OF_JUSTICE = std.Spells.create('master-quest', 'hammer-of-justice', 853)
.Mana.setMana(1)

// HAMMER OF WRATH
export const HAMMER_OF_WRATH = std.Spells.create('master-quest', 'hammer-of-wrath', 24275)
.Attributes.TRIGGER_ACTIVATE.set(false)
.TargetAuraState.Include.set(0)
.Cooldown.set(12000, 0, 1000, 133)
.Mana.setMana(1)
.Description.enGB.set('Hurls a hammer that strikes an enemy for $m1 to $M1 Holy damage.')
.CastTime.setSimple(1500)
// .ClassMask
HAMMER_OF_WRATH.Effects.get(0).setPoints(43, 19, 0, 0)

// SEAL OF COMMAND (CHANGE BACK TO % OF WEAPON DMG, MAKE CONSUME CHARGE ON WHITE HIT INSTEAD OF SET DURATION)
export const SEAL_OF_COMMAND = std.Spells.create('master-quest', 'seal-of-command', 20375)
.Duration.setSimple(12000)
.Cooldown.set(0, 0, 1000, 133)
.Mana.setMana(1)

// ART OF WAR
export const ART_OF_WAR = std.Spells.create('master-quest', 'art-of-war', 53488)
export const ART_OF_WAR_PROC = std.Spells.create('master-quest', 'art-of-war-proc', 59578)
ART_OF_WAR.Effects.get(1).TriggerSpell.set(ART_OF_WAR_PROC.ID)
// ART_OF_WAR_PROC.ClassMask.C.set(4, undefined)

console.log(ART_OF_WAR_PROC.ClassMask.objectify())
console.log(EXORCISM.ClassMask.objectify())
console.log(FLASH_OF_LIGHT.ClassMask.objectify())
console.log(ART_OF_WAR_PROC.objectify())

// console.log(HAMMER_OF_WRATH.objectify())
// console.log(FLASH_OF_LIGHT.objectify());
// console.log(EXORCISM.objectify());
// console.log(ART_OF_WAR.objectify());
// console.log(ART_OF_WAR_PROC.objectify());
// console.log(std.Spells.load(53376).objectify())
// console.log(std.Spells.load(53376).Effects.objectify())

//magic friendly - priest, paladin
//magic enemy - priest, shaman
//poison - shaman, druid, paladin
//disease - shaman, paladin
//curse - druid, mage

// RANDOM NOTES AND IDEAS

// sunder armor should be a taunt with a varying duration
// ie. hit sunder once, mob is taunted for 3 seconds
// hit sunder again, taunt debuff will extend by 3 seconds (instead of setting value to 6)
// sunder (1.5s global), second sunder hits at 1.5 and extends duration to 4.5s

// a paladin item should make consecrate taunt for a few seconds, resetting each tick
// this will be the paladin's aoe aggro spell
// the paladin will need assistance from a teammate to pull individual mobs in and out of the pack
// ex. a warrior can taunt or a hunter can distracting shot (will have taunt behavior) and run the mob through consecrate
// sticking it to the paladin. getting a mob out of the consecrate is trickier 

// THREAT IDEA BY TANK
// warrior - the ultimate tank, easy to ESTABLISH and HOLD aggro on mobs. best tanking 1-3 mobs. avoid/mitigate dmg through parrying, dodging and blocking large hits
// paladin - aoe tank, harder to ESTABLISH but easier to HOLD aggro on mobs. best tanking 4+ mobs. avoid/mitigate dmg primarily through blocking many small hits
// druid  - single target OT, easy to ESTABLISH but harder to HOLD aggro on mobs. The druid must spam a threat ability each global to maintain aggro on a single mob. dmg sponge with high armor 