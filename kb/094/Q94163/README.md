---
layout: page
title: "Q94163: Disabling Carbon Copy for Windows"
permalink: kb/094/Q94163/
---

## Q94163: Disabling Carbon Copy for Windows

	Article: Q94163
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While troubleshooting problems with Microsoft Windows, you may need to disable
	Carbon Copy for Windows. The following information explains how to do this.
	
	MORE INFORMATION
	================
	
	Carbon Copy for Windows is a remote communications program that replaces several
	key Windows drivers, and modifies the SYSTEM.INI file during its installation.
	
	It may be necessary to disable the Carbon Copy drivers while troubleshooting some
	problems in Windows.
	
	The following changes are made to the [boot] section of the SYSTEM.INI file by
	Carbon Copy for Windows:
	
	     keyboard.drv=cckbd.drv
	     mouse.drv=ccmouse.drv
	     sound.drv=ccsound.drv
	     display.drv=ccvga.drv
	     comm.drv=cccom.drv
	
	The following changes must be made to the [boot] section of the SYSTEM.INI file
	to disable Carbon Copy for Windows:
	
	     keyboard.drv=keyboard.drv
	     mouse.drv=mouse.drv
	     sound.drv=mmsound.drv
	     display.drv=vga.drv
	     comm.drv=comm.drv
	
	Make sure that these files exist in the Windows SYSTEM subdirectory.
	
	These changes to the [boot] section of the SYSTEM.INI file assume Windows has
	been set up to run with a 101- or 102-key keyboard, Microsoft Mouse, and
	standard VGA display. If a different hardware configuration is in use:
	
	1. Run Windows Setup from the MS-DOS command prompt by exiting Windows and
	  typing "setup" (without the quotation marks).
	
	2. Reinstall the correct drivers.
	
	To obtain further information on running Carbon Copy for Windows, contact
	Microcom technical support.
	
	Carbon Copy for Windows is manufactured by a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	KBCategory: kb3rdparty kbdisplay kbsound kbtshoot
	KBSubcategory: win30 win31
	
	Additional query words: tshoot 3.00 3.00a 3.10 3.11 3.0a Disable IBM PS/2 CCW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
