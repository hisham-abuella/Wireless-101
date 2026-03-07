#!/usr/bin/env node
/**
 * Wireless 101 — Audio Generator (wrapper)
 *
 * Convenience wrapper around the generic ElevenLabs tool at:
 *   /Users/hishamabuella/Work/Elevenlabs-voice/generate.js
 *
 * Usage:
 *   node scripts/generate-audio.js <course> <lesson> [en|ar|both]
 *
 * Examples:
 *   node scripts/generate-audio.js wrl101 m1-l1 en
 *   node scripts/generate-audio.js wrl101 m1-l1 ar
 *   node scripts/generate-audio.js wrl101 m1-l1       # both languages
 */

const { execFileSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GENERATOR = '/Users/hishamabuella/Work/Elevenlabs-voice/generate.js';

const args = process.argv.slice(2);

if (args[0] === '--usage' || args[0] === '--voices' || args[0] === '--help' || args[0] === '-h') {
    execFileSync('node', [GENERATOR, args[0]], { stdio: 'inherit' });
    process.exit(0);
}

if (args.length < 2) {
    console.log(`
Wireless 101 — Audio Generator

Usage:
  node scripts/generate-audio.js <course> <lesson> [en|ar]

Examples:
  node scripts/generate-audio.js wrl101 m1-l1 en
  node scripts/generate-audio.js wrl101 m1-l1 ar
  node scripts/generate-audio.js wrl101 m1-l1       # both languages
  node scripts/generate-audio.js --voices
  node scripts/generate-audio.js --usage
    `);
    process.exit(0);
}

const course = args[0];
const lesson = args[1];
const lang = args[2]; // undefined = both

function run(language) {
    const transcript = path.join(ROOT, 'transcripts', language, course, `${lesson}.json`);
    const output = path.join(ROOT, 'audio', language, course, lesson);
    console.log(`\n── ${language.toUpperCase()} ──`);
    execFileSync('node', [GENERATOR, transcript, output], { stdio: 'inherit' });
}

if (lang) {
    run(lang);
} else {
    run('en');
    run('ar');
}
