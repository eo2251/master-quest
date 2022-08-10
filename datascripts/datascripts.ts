import { std } from "wow/wotlk";

//TELEPORTATION ITEM
export const TELE_SPELL =
    std.Spells.create('master-quest', 'tele-spell', 18960)
TELE_SPELL.Name.enGB.set('Teleport: GM Island');
TELE_SPELL.Description.enGB.set('Teleports the caster to GM Island.')
TELE_SPELL.CastTime.setSimple(4000);
TELE_SPELL.Power.PowerCostBase.set(10);
TELE_SPELL.Effects.get(0).TargetPosition.set({
    x: 16206.3,
    y: 16216.6,
    z: 1.1,
    o: 1.06,
    map: 1
})

export const TELE_ITEM =
    std.Items.create('master-quest', 'tele-item', 6948)
TELE_ITEM.Name.enGB.set('Teleportation Rune: GM Island')
TELE_ITEM.Spells.get(0).Spell.set(TELE_SPELL.ID);
TELE_ITEM.DisplayInfo.setSimpleIcon('inv_misc_gem_pearl_05');
//===============================

//COMBAT DUMMIES
export const TEST_DUMMY =
    std.CreatureTemplates.create('master-quest', 'test-dummy', 31144)
const DUMMY_SPAWNS = TEST_DUMMY.Spawns.addGet('master-quest', 'dummy-spawn', [
    { map: 1, x: 16237, y: 16275, z: 14.76, o: 5.35 },
    { map: 1, x: 16258, y: 16282, z: 15.09, o: 5.25 },
    { map: 1, x: 16261.5, y: 16284, z: 14.79, o: 4.92 },
    { map: 1, x: 16268.5, y: 16306, z: 14.29, o: 0 },
    { map: 1, x: 16268.8, y: 16309.4, z: 14.14, o: 6.18 },
    { map: 1, x: 16269.2, y: 16313.3, z: 14.06, o: 5.95 },
])
//===============================

//TEST WRATH RANK 1
export const WRATH_TEST = 
    std.Spells.create('master-quest', 'wrath-test', 5176)
WRATH_TEST.Power.setMana(1);
WRATH_TEST.Attributes.IGNORE_RESISTANCES.set(true);
WRATH_TEST.Attributes.IGNORE_HIT_RESULT.set(true);

console.log(WRATH_TEST.Attributes.objectify());