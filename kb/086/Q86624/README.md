---
layout: page
title: "Q86624: Windows: Playing Audio CDs on Earlier CD-ROM Drives"
permalink: /kb/086/Q86624/
---

## Q86624: Windows: Playing Audio CDs on Earlier CD-ROM Drives

	Article: Q86624
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some earlier CD-ROM drives may not be able to play audio CDs. The MCI CD Audio
	device driver released with Windows will install regardless of the CD drive's
	ability to play CD audio.
	
	The manufacturer of the CD drive should be contacted for an updated device driver
	or CD drive.
	
	MORE INFORMATION
	================
	
	The MCI CD Audio device driver will install in the Driver dialog box of Control
	Panel. No errors will be received, until an attempt is made to play the audio
	CD. Media Player, for example, might display this error message:
	
	  No MCI drivers present.
	
	Looking back at the installed drivers list in Control Panel will show that the
	MCI CD Audio driver is properly installed. You can choose the Setup button and a
	message will appear:
	
	  One CDROM drive was detected. Installation is complete.
	
	At this point, you should check that you have the current, supported versions of
	MSCDEX.EXE (Microsoft CD Extensions) and CD drive software with the manufacturer
	of the CD drive.
	
	Additional query words: amdek 3.10 3.11 older 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
