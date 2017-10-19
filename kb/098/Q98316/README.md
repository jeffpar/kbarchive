---
layout: page
title: "Q98316: Carmen San Diego Game Interrupted After Digitized Sound Played"
permalink: /kb/098/Q98316/
---

## Q98316: Carmen San Diego Game Interrupted After Digitized Sound Played

	Article: Q98316
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS-based game "Where in the World Is Carmen San Diego" may work with
	interruptions when running with Windows. In Windows enhanced mode, the game can
	run from MS-DOS Prompt in a full screen with Sound Blaster emulation from
	Windows Sound System; but in some cases, you may need to turn off the virtual
	interrupt request line (IRQ) for the game to run properly.
	
	MORE INFORMATION
	================
	
	The MS-DOS-based game, "Carmen San Diego USA/Deluxe and World/Deluxe Versions"
	from Broderbund can run in Windows enhance mode from MS-DOS Prompt in a full
	screen with Sound Blaster support after you configure the Windows Sound System
	for Sound Blaster emulation. Sound Blaster emulation will allow the game to play
	digitized sounds while you run the game. However, in some cases the game may be
	interrupted after a digitized sound is played, and you may have to press the ESC
	key to continue.
	
	When this happens, you will need to turn off the virtual hard drive IRQ from
	Windows, which is on by default for AT-class machines. Turning this off allows
	Windows to terminate the hard drive interrupt without having to go to the
	read-only memory (ROM). To turn off the virtual hard drive IRQ, make the
	following modification to your SYSTEM.INI file:
	
	1. From MS-DOS, open the SYSTEM.INI file in a text editor. The SYSTEM.INI file
	  should be located in your Windows directory.
	
	2. Locate the [386enh] section and add or modify the following line:
	
	        VirtualHDIRQ=False
	
	3. Save the changes, exit the editor, and run Windows in enhanced mode.
	
	4. From Windows enhanced mode, start MS-DOS Prompt and run the game.
	
	  NOTE: Disabling VirtualHDIRQ may degrade the performance of Windows in 386
	  enhanced mode.
	
	For more information about the game, contact the game's manufacturer.
	
	Additional query words: 1.00a Broderbun stuck escape
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
