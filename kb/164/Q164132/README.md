---
layout: page
title: "Q164132: SideWinder Pro 3D Joystick Not Recognized with PAS 16 Sound Card"
permalink: kb/164/Q164132/
---

## Q164132: SideWinder Pro 3D Joystick Not Recognized with PAS 16 Sound Card

	Article: Q164132
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbmm kbsound kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect your Microsoft SideWinder 3D Pro to a MediaVision Pro Audio
	Spectrum 16 sound card, Microsoft Windows NT version 4.0 does not recognize the
	SideWinder 3D Pro. If you run the Joystick utility in Control Panel and then
	click the Joystick tab, the Calibrate and Test buttons are not available and the
	following message is displayed:
	
	  Your joystick is not connected correctly.
	
	
	CAUSE
	=====
	
	The retail version of Windows NT does not provide support for the SideWinder 3D
	Pro.
	
	RESOLUTION
	==========
	
	The CD-ROM version of Windows NT 4.0 Service Pack 2 includes a driver that
	provides support for the SideWinder 3D Pro. This new driver is not installed by
	the Service Pack 2 update process. To install the new driver, follow these
	steps:
	
	1. Log on as Administrator.
	
	2. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Multimedia.
	
	3. Click the Devices tab and then click Add.
	
	4. Click Unlisted or Updated Driver and then click OK.
	
	5. Insert the path to install the SideWinder driver. For example, for
	  Intel-based computers, the path is:
	
	  <Drive Letter>:\Drvlib\Joystick\Sidewind\I386
	
	
	6. Click OK, click Microsoft SideWinder 3D Pro Joystick, and then click OK.
	
	7. Click OK to close the Microsoft SideWinder Joystick Configuration dialog box.
	
	8. Restart your computer.
	
	
	Additional query words: prodnt side winder gamepad greyed out grayed grey gray alpha i386 ppc sp2
	
	======================================================================
	Keywords          : kbhw kbmm kbsound kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Hardware          : ALPHA PPC x86
	
	=============================================================================
	
