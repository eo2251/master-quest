import { std } from "wow/wotlk";

export const TELE_SPELL =
    std.Spells.create('master-quest', 'tele-spell', 18960)
TELE_SPELL.Name.enGB.set('Teleport: Testing Location');
TELE_SPELL.Description.enGB.set('Teleports the caster to Testing Location.')
TELE_SPELL.CastTime.setSimple(4000);
TELE_SPELL.Power.PowerCostBase.set(10);
TELE_SPELL.Effects.get(0).TargetPosition.set({
    x: 7992,
    y: -2680,
    z: 512,
    o: 0,
    map: 1
})

export const TELE_ITEM =
    std.Items.create('master-quest', 'tele-item', 6948)
TELE_ITEM.Name.enGB.set('Teleportation Rune: Testing Location')
TELE_ITEM.Spells.get(0).Spell.set(TELE_SPELL.ID);
TELE_ITEM.DisplayInfo.setSimpleIcon('inv_misc_gem_pearl_05');

console.log();