---
layout: page
title: "Q135141: Installing Media Vision Windows 3.1 Drivers Causes GP Fault"
permalink: kb/135/Q135141/
---

## Q135141: Installing Media Vision Windows 3.1 Drivers Causes GP Fault

	Article: Q135141
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Windows 3.1 drivers for your Media Vision MV-1100 sound
	card and then restart your computer, you may receive an error message stating
	that the Mcicda.drv, Mmmixer.dll, Msmixer.dll, and Mvi514mx.drv files have been
	replaced with older versions and that you should run Setup again. If you do not
	run Setup, but instead restart Windows 95, you receive a general protection (GP)
	fault error message. Afterward, you can start Windows 95 only in Safe mode.
	
	CAUSE
	=====
	
	The Media Vision Deluxe Windows 3.1 drivers are not compatible with Windows 95.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart your computer to a command prompt, and then run
	Setup again to reinstall Windows 95 over the existing installation. To do this,
	follow these steps:
	
	1. Restart Windows 95, press the F8 key when you see the "Starting Windows 95"
	  message, and then choose Command Prompt Only from the Startup menu.
	
	2. Reinstall Windows 95 and choose to verify files if you are prompted.
	
	NOTE: If you installed Windows 95 from a CD-ROM, you may need to enable the
	Mscdex.exe line in the Autoexec.bat file or reinstall the real-mode CD-ROM
	drivers included with the CD-ROM drive before you can reinstall Windows 95.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kberrmsg kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
