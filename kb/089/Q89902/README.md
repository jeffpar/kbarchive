---
layout: page
title: "Q89902: MIDI Sequencing Software Issues with Windows Sound System"
permalink: kb/089/Q89902/
---

## Q89902: MIDI Sequencing Software Issues with Windows Sound System

	Article: Q89902
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some known issues with Microsoft Windows Sound System and
	the following MIDI sequencing software packages:
	
	- All MIDI sequencing software
	
	- Midisoft Studio for Windows
	
	- Passport Encore for Windows
	
	- Coda Music Software Finale for Windows
	
	- Passport Master Tracks Pro 4 for Windows
	
	MORE INFORMATION
	================
	
	All MIDI Sequencing Software
	----------------------------
	
	Sound Finder does not play MIDI files (.MID and .RMI file extensions) while a
	MIDI sequencing program is running.
	
	Midisoft Studio for Windows
	---------------------------
	
	Run Studio for Windows while Windows is in 386 enhanced mode.
	
	While playing MIDI files, a note may play continuously. Choose the Stop button to
	eliminate this problem.
	
	Passport Encore for Windows
	---------------------------
	
	You may receive the following error with Encore for Windows:
	
	  Error opening the record port. A device ID has been used that is out of range
	  for your system.
	
	Try changing the MIDI configuration using MIDI Mapper in Windows Control Panel.
	
	Coda Music Software Finale for Windows
	--------------------------------------
	
	MIDI files created by Finale do not play through any of the Windows Sound System
	programs because Finale depends upon its own driver to send MIDI information to
	a MIDI output device.
	
	The following procedure may allow Windows Sound System to play a MIDI file
	created by Finale for Windows:
	
	1. Start Finale for Windows.
	
	2. From the File menu, choose Open.
	
	3. Select a MIDI file.
	
	4. From the File menu, choose Save As.
	
	5. Select MIDI Type 1.
	
	6. Try playing the sound from Sound Finder.
	
	Passport Master Tracks Pro 4 for Windows
	----------------------------------------
	
	Master Tracks Pro 4 is not compatible with the Windows Sound System. Running
	Master Tracks Pro 4 with Windows Sound System version 1.0 may cause data loss.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
