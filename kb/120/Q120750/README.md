---
layout: page
title: "Q120750: Setting Up VIDCAP32.EXE and Video Spigot"
permalink: /kb/120/Q120750/
---

## Q120750: Setting Up VIDCAP32.EXE and Video Spigot

	Article: Q120750
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up a video capture driver or Video Spigot and
	solve common problems encountered in this process.
	
	MORE INFORMATION
	================
	
	1. Shut down your machine and install the video card.
	
	2. Connect a camera and turn it on.
	
	3. Reboot.
	
	4. In Program Manager select Main, Control Panel, Drivers and Add.
	
	  NOTE: Drivers for this card for all three platforms (x86, MIPS, Alpha) are in
	  the NT CD-ROM in ntcdfree\drvlib\capture
	
	5. You need to select an interrupt and an address. For top of the line video
	  cards the address should be C8000 or greater. When you find an address that
	  works, select OK and Close to return to the Control Panel main display.
	
	  Even if the driver functions, you still may have a conflict with another
	  driver that does not correctly report its usage.
	
	6. Start VIDCAP32.EXE. (It's in the Software Development Toolkit (SDK) in the
	  MSTOOLS directory. If a picture is displayed when you start VIDCAP32.EXE, the
	  installation has been successful.
	
	7. If the screen remains black, select Options then Video Format. Use the list
	  box to select a format other than Palletized (something such as 16 bit RGB
	  5-5-5) and select OK.
	
	8. If the screen remains black, check your camera, power supply, cables and so
	  on. If the screen is a solid color, you probably have an address conflict.
	  Exit from VIDCAP32, go back to Control Panel and choose Video Spigot (often
	  the last driver in the list) and Setup.
	
	9. Select a new address and try again. You shouldn't need a new interrupt.
	
	Video Spigot is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
