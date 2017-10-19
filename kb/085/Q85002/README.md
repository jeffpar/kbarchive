---
layout: page
title: "Q85002: Media Player Can't Open CDAudio After Opening CD-ROM File"
permalink: /kb/085/Q85002/
---

## Q85002: Media Player Can't Open CDAudio After Opening CD-ROM File

	Article: Q85002
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to the Media Player and to Windows version 3.1.
	
	If you play a disk and you have configured the Media Player for CDAudio by
	choosing CDAudio from the Device menu, you may receive the following error
	message
	
	  System Error - Cannot read from drive <x>
	
	where <x> is the drive letter of the CD-ROM. After selecting Cancel,
	another error is displayed:
	
	  Cannot open file or device
	
	WORKAROUND
	==========
	
	There are two possible workarounds for this problem:
	
	- Open a different device from the Media Player Device menu (WaveAudio, MIDI
	  Sequencer, or Animation). Open a file, and then choose CDAudio from the
	  Device menu again.
	
	- Exit the Media Player and restart it. CDAudio will now function correctly.
	
	This problem occurs when you attempt to open a file after changing CD-ROM disks.
	The CD-ROM is still using the previous default directory, which is now invalid
	because you have changed disks. When Windows tries to open the CDAudio driver
	(MCICDA.DRV), it looks first in the current drive/directory, which is now
	invalid. Because Windows does not allow the Ignore option to be placed in the
	dialog box on a critical error, you cannot choose to ignore the current drive
	error and continue looking along the rest of the path for the driver.
	
	Additional query words: 3.00 3.00a 3.10 3.11 CD err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
