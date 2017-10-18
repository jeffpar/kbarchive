---
layout: page
title: "Q114820: Sound: GP Fault When Opening Control Panel or Browser"
permalink: kb/114/Q114820/
---

## Q114820: Sound: GP Fault When Opening Control Panel or Browser

	Article: Q114820
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SoundBits, Hanna-Barbera 
	- Microsoft SoundBits, MGM Movies 
	- Microsoft SoundBits, Musical Instruments 
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have added many SoundBits custom events, you may find that a general
	protection (GP) fault (usually in USER.EXE or KRNL386.EXE) occurs when you run
	either the Sound option in the Windows Control Panel or the Set Sounds option in
	Media Browser. Windows may also return you to the MS-DOS prompt.
	
	This problem occurs if you have more than 107 custom event entries in the
	[Sounds] section of the WIN.INI file. A custom event is any event in Windows
	(such as Windows Start, Windows Exit, Word Minimize, and so on) that has a sound
	attached to it.
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To avoid this problem, make sure you do not have more than 107 custom event
	entries in the [Sounds] section of your WIN.INI file.
	
	
	Additional query words: multi media multimedia multi-media gpf gp fault exits closes kicks out quits drops section snd.cpl advanced sound control panel kbmm limit limits maximum maximize
	
	======================================================================
	Keywords          :  
	Technology        : kbSoundBitsSearch kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200 kbWinSoundSys200a
	Version           : :1.0,1.0a,2.0,2.0a
	
	=============================================================================
	
