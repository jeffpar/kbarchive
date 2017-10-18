---
layout: page
title: "Q106616: No Sound During Fly-By in Multimedia Golf"
permalink: kb/106/Q106616/
---

## Q106616: No Sound During Fly-By in Multimedia Golf

	Article: Q106616
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JAN-2000
	
	kbusage kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, multimedia edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Fly By Music is selected when you click Options from the Sound menu, you
	should hear background music during a fly by in Microsoft Golf (Fly By Music is
	only available in the CD multimedia version of Golf.) If you don't hear music,
	there may be a problem with Media Player. The steps below explain how to
	troubleshoot this problem.
	
	RESOLUTION
	==========
	
	TROUBLESHOOTING
	---------------
	
	Verify that the Fly By Music is enabled:
	
	1. In Golf, click Sound from the Options menu.
	
	2. Verify that the Fly By Music check box is selected.
	
	To test the Media Player with a known MIDI file under Windows 3.1:
	
	1. In Program Manager, open the Accessories program group.
	
	2. From the Accessories group, run Media Player.
	
	3. In Media Player, click Open from the File menu.
	
	4. Under List Files Of Type, click Midi Sequencer.
	
	5. Under File Name, click <drive letter>:\<windows dir>\CANYON.MID
	  where <drive letter> is the drive where your Windows directory resides
	  and <windows dir> is the name of your Windows directory).
	
	6. Click OK. The play controls of the Media Player are now displayed.
	
	7. Press the play button [>].
	
	To test the Media Player with a known MIDI file under Windows 95:
	
	1. Click Start, then click Run.
	
	2. On the command line, type "mplayer" (without the quotation marks). Click OK.
	
	3. In Media Player, click Open from the File menu.
	
	4. Under List Files Of Type, click Midi Sequencer.
	
	5. Under File Name, click <drive letter>:\<windows dir>\CANYON.MID
	  where <drive letter> is the drive where your Windows directory resides
	  and <windows dir> is the name of your Windows directory).
	
	6. Click OK. The play controls of the Media Player are now displayed.
	
	7. Press the play button [>].
	
	If you can't hear anything, check the volume settings on your sound card. Many
	sound cards have separate volume settings for MIDI/FM audio, CD audio, and AM
	audio. If you don't know how to set the volume, consult the manual for your
	sound card (the volume setting on the sound card determines the volume in
	Golf).
	
	If the CANYON.MID file won't play, call the manufacturer of the sound card. Have
	them check the settings on your Media Player. Once you can play CANYON.MID, the
	fly by music should play too.
	
	If CANYON.MID plays correctly, test Golf's MIDI files:
	
	1. In Media Player, click Open from the File menu.
	
	2. Under List Files Of Type, click Midi Sequencer.
	
	3. Under Drive, click your CD-ROM drive (for example, drive D).
	
	4. Under Directory, click the \TORREY_P\MIDI subdirectory.
	
	5. Under File Name, click FLYBY1.MID or any other *.MID file in that directory.
	
	6. Click OK. The play controls of the Media Player are displayed.
	
	7. Press the play button [>].
	
	If these Golf *.MID files play in the Media Player but not in Golf, or if
	CANYON.MID plays, but the Golf MIDI files do not, call Microsoft Product Support
	at (425) 637-9308.
	
	MORE INFORMATION
	================
	
	The sounds that play for the fly-bys are not waveform files (*.WAV); they are a
	MIDI files (*.MID). These are two different ways of describing sounds. A MIDI
	file is a set of instructions that defines a sound. Waveform files are a digital
	representation of the sound.
	
	Additional query words: 1.00 CD multi-media
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
