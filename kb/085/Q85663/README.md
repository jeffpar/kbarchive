---
layout: page
title: "Q85663: Description of Windows for Pen Computing Pens"
permalink: /kb/085/Q85663/
---

## Q85663: Description of Windows for Pen Computing Pens

	Article: Q85663
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,1.0a; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, versions 1.0, 1.0a 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two types of pens used in the Windows for Pen operating system:
	tethered, and untethered. They act similarly in every respect; the only
	difference is that one is attached to the machine and the other is tethered by a
	small cable.
	
	Pen input devices must have an installable device driver, similar to a mouse
	driver, in the SYSTEM.INI file to communicate with the system. There are several
	distinct differences between mouse and pen drivers:
	
	- Pen drivers must report x,y coordinate location information at much higher
	  resolutions than mice. Pens must record at least 120 events per second and
	  have a resolution of at least 200 spots per inch. Pen data is reported to the
	  Pen device driver (PENWIN.DLL) at .0001 inch resolution. Though this
	  resolution is not fully used at this time, it allows for subsequent
	  improvements in pen hardware.
	
	- Pen drivers may also report pressure, angle of rotation, or other pen state
	  information.
	
	- Pen drivers use a private interface to manage the high data rate, thus
	  avoiding a large amount of useless information.
	
	In addition to the differences above, some pen device drivers have a feature
	known as proximity sensing. This detects the x,y coordinate of the pen without
	actually touching the tablet or screen.
	
	Working in conjunction with the Pen device driver, Windows for Pen also uses a
	special display driver that communicates with the Pen device driver. This is
	required to allow a close interaction between the use of the pen and the display
	of electronic ink on the screen.
	
	Additional query words: 3.10 PENWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinPen100 kbWinPen100a
	Version           : :1.0,1.0a; WINDOWS:3.1,3.11
	
	=============================================================================
	
