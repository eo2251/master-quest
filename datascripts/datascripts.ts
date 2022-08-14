import { std } from "wow/wotlk";

//TELEPORTATION ITEM
export const TELE_SPELL = std.Spells.create('master-quest', 'tele-spell', 18960);
TELE_SPELL.Name.enGB.set('Teleport: GM Island');
TELE_SPELL.Description.enGB.set('Teleports the caster to GM Island.');
TELE_SPELL.CastTime.setSimple(4000);
TELE_SPELL.Power.PowerCostBase.set(10);
TELE_SPELL.Effects.get(0).TargetPosition.set({
    x: 16206.3,
    y: 16216.6,
    z: 1.1,
    o: 1.06,
    map: 1
});

export const TELE_ITEM = std.Items.create('master-quest', 'tele-item', 6948);
TELE_ITEM.Name.enGB.set('Teleportation Rune: GM Island');
TELE_ITEM.Spells.get(0).Spell.set(TELE_SPELL.ID);
TELE_ITEM.DisplayInfo.setSimpleIcon('inv_misc_gem_pearl_05');
//===============================

//COMBAT SPELLS & AURAS
var DODGE_BONUS = [];
for (let i = -100; i <= 100; i++) {
    var dodge_spell = std.Spells.create('master-quest', 'dodge-aura-' + (i < 0 ? 'minus' : 'plus') + Math.abs(i), 8273);
    DODGE_BONUS[i] = dodge_spell.ID.toString();
    dodge_spell.Name.enGB.set('BONUS_DODGE_' + i.toString());
    dodge_spell.Effects.get(0).setPoints(i - 1, 1, 0, 0);
}

var PARRY_BONUS = [];
for (let i = -100; i <= 100; i++) {
    var parry_spell = std.Spells.create('master-quest', 'parry-aura-' + (i < 0 ? 'minus' : 'plus') + Math.abs(i), 64651);
    PARRY_BONUS[i] = parry_spell.ID.toString();
    parry_spell.Name.enGB.set('BONUS_PARRY_' + i.toString());
    parry_spell.Effects.get(0).setPoints(i - 1, 1, 0, 0);
}

var BLOCK_BONUS = [];
for (let i = -100; i <= 100; i++) {
    var block_spell = std.Spells.create('master-quest', 'block-aura-' + (i < 0 ? 'minus' : 'plus') + Math.abs(i), 10021);
    BLOCK_BONUS[i] = block_spell.ID.toString();
    block_spell.Name.enGB.set('BONUS_BLOCK_' + i.toString());
    block_spell.Effects.get(0).setPoints(i - 1, 1, 0, 0);
}
//===============================

//COMBAT DUMMIES
export const TEST_DUMMY = std.CreatureTemplates.create('master-quest', 'test-dummy', 31144);
const DUMMY_SPAWNS = TEST_DUMMY.Spawns.addGet('master-quest', 'dummy-spawn', [
    { map: 1, x: 16237, y: 16275, z: 14.76, o: 5.35 },
    { map: 1, x: 16258, y: 16282, z: 15.09, o: 5.25 },
    { map: 1, x: 16261.5, y: 16284, z: 14.79, o: 4.92 },
    { map: 1, x: 16268.5, y: 16306, z: 14.29, o: 0 },
    { map: 1, x: 16268.8, y: 16309.4, z: 14.14, o: 6.18 },
    { map: 1, x: 16269.2, y: 16313.3, z: 14.06, o: 5.95 },
]);
TEST_DUMMY.Stats.ArmorMod.set(0);
TEST_DUMMY.Level.set(1);
TEST_DUMMY.FlagsExtra.NO_BLOCK.set(false);
TEST_DUMMY.Auras.set(PARRY_BONUS[-5] + ' ' + DODGE_BONUS[-5]);
//===============================

export const SMITE_PROC = std.Spells.create('master-quest', 'smite-proc', 585);

const TEST_SWORD = std.Items.load(23346);
TEST_SWORD.Delay.setAsMilliseconds(3300);
TEST_SWORD.Damage.mod(0, dmg => {
    dmg.min.set(28);
    dmg.max.set(32);
});

// TEST_SWORD.Spells.addMod(itemSpell => {
//     itemSpell.Spell.set(SMITE_PROC.ID);
//     itemSpell.Category.set(0);
//     itemSpell.Trigger.set("CHANCE_ON_HIT");
//     itemSpell.Charges.set("UNLIMITED");
//     itemSpell.ProcsPerMinute.set(4);
//     itemSpell.Cooldown.set(-1);
//     itemSpell.CategoryCooldown.set(-1);
// });

// console.log(std.Items.load(937).objectify());
// console.log(TEST_SWORD.objectify());