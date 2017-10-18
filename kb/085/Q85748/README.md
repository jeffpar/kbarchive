---
layout: page
title: "Q85748: Windows Err Msg: I/O Address Cannot Be Found in SYSTEM.INI"
permalink: kb/085/Q85748/
---

## Q85748: Windows Err Msg: I/O Address Cannot Be Found in SYSTEM.INI

	Article: Q85748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start Control Panel:
	
	  I/O address cannot be found in SYSTEM.INI
	
	CAUSE
	=====
	
	This problem occurs when the SoundBlaster Mixer icon from Multimedia Extensions
	version 1.0 is present in Control Panel.
	
	MORE INFORMATION
	================
	
	This icon is an audio-mixing board for the Creative Labs SoundBlaster Pro sound
	cards.
	
	To determine if the icon is from version 1.0 of the Multimedia Extensions, do the
	following:
	
	1. At a MS-DOS command prompt, type:
	
	  cd\windows\system
	
	2. Type:
	
	  dir sbpmixer.cpl
	
	3. If the directory shows the following, you have Multimedia Extensions version
	  1.0:
	
	    SBPMIXER  CPL   25504      10/17/91
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Update the SoundBlaster drivers.
	
	  -or-
	
	- Remove the SBPMIXER.CPL file from the WINDOWS\SYSTEM directory.
	
	The updated SoundBlaster Drivers are available from Creative Labs.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
