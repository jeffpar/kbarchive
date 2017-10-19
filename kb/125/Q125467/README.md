---
layout: page
title: "Q125467: Frank Lloyd Wright: No Sound, But Sound OK in Other Programs"
permalink: /kb/125/Q125467/
---

## Q125467: Frank Lloyd Wright: No Sound, But Sound OK in Other Programs

	Article: Q125467
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft The Ultimate Frank Lloyd Wright for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Ultimate Frank Lloyd Wright when running on Windows 3.x , you may
	not be able to hear the sounds in the program.
	
	Note that although you cannot hear sounds in Ultimate Frank Lloyd Wright, Wave
	Form Audio (.WAV) files may be played normally through Media Player; therefore,
	applications capable of playing .WAV files will play sounds as expected.
	
	CAUSE
	=====
	
	Ultimate Frank Lloyd Wright sends sound to the driver specified by the wave=
	line in the [drivers] section of the SYSTEM.INI file. Other applications may use
	the Sound Mapper settings, which allow a choice among several installed wave
	devices. Therefore, it is possible for sounds to work in programs that use Sound
	Mapper, but not in Ultimate Frank Lloyd Wright, which bypasses Sound Mapper.
	
	RESOLUTION
	==========
	
	To verify that the wave= line in the SYSTEM.INI [drivers] section is pointing to
	the correct wave driver, do the following:
	
	1. In a text editor, such as Windows Notepad, open the SYSTEM.INI file (this
	  file is located in the Windows directory).
	
	2. In the SYSTEM.INI file, locate the [drivers] section. If the [drivers]
	  section includes the following lines:
	
	        wave=speaker.drv
	        wave1=<driver>
	
	  where <driver> is the wave driver for your sound card, the Ultimate
	  Frank Lloyd Wright will send sound to the PC-Speaker driver (SPEAKER.DRV).
	  This driver cannot play all types of audio.
	
	3. To correct this problem, modify the lines to read:
	
	        wave=<driver>
	        wave1=speaker.drv
	
	4. Exit Windows and restart Windows.
	
	The Ultimate Frank Lloyd Wright should play sounds correctly.
	
	MORE INFORMATION
	================
	
	The currently installed devices are specified by the following entries in your
	SYSTEM.INI file
	
	  wave=
	  wave1=
	  wave2=
	
	Note that any wave<n>= entry (where <n> is a number) is a valid
	SYSTEM.INI entry.
	
	For more information on audio problems, refer to the Ultimate Frank Lloyd Wright
	README.TXT file, or the documentation that came with your sound card.
	
	
	Additional query words: multi media multimedia multi-media mmtitles flw
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbZNotKeyword6 kbGamesSearch kbZNotKeyword kbUltimateFLW kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a
	Version           : WINDOWS:1.0,3.x
	
	=============================================================================
	
