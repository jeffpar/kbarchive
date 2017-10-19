---
layout: page
title: "Q89873: WSS Compatibility with Sound Boards and MS-DOS Applications"
permalink: /kb/089/Q89873/
---

## Q89873: WSS Compatibility with Sound Boards and MS-DOS Applications

	Article: Q89873
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Sound System driver has limited compatibility with other sound
	boards.
	
	MORE INFORMATION
	================
	
	The Windows Sound System board is Adlib-compatible, which means that it only
	supports the FM synthesis used in games and other MS-DOS programs. It is also
	compatible with the SoundBlaster (Adlib-compatible model only).
	
	Using the Windows Sound System with MS-DOS Based Games
	------------------------------------------------------
	
	If an Adlib-compatible game does not recognize the Windows Sound System driver as
	Adlib-compatible at an MS-DOS command prompt, then try the game in MS-DOS after
	restarting the computer, but before running Windows. The Yamaha OPL3 synthesis
	chip has a incompatible mode that may have been set; restarting the computer
	clears this mode.
	
	If the game still doesn't recognize the Windows Sound System driver, then the
	game either does not support Adlib sound cards or has an incorrect interaction
	with the OPL3 synthesis chip. To resolve this problem, contact the game
	manufacturer.
	
	There is no software volume control for MS-DOS programs using Adlib
	compatibility; you may have to turn down your stereo or headphones when running
	a game. Windows cannot adjust the volume because the game takes over control of
	the Yamaha OPL3 chip, which prevents the Windows driver from adjusting the
	volume control.
	
	MIDI Control in Enhanced Mode
	-----------------------------
	
	If you run Windows 3.1 in enhanced mode, MIDI playback may not work after you
	play an Adlib-compatible game from the MS-DOS command prompt while the command
	prompt is still running. To prevent a conflict when the Yamaha OPL3 synthesis
	chip is used, the command prompt (virtual machine) prevents other virtual
	machines from accessing the I/O ports. The I/O ports are locked until you exit
	the command prompt that is using the Windows Sound System.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
