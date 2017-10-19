---
layout: page
title: "Q74930: America Online AOL Command Hangs with MS-DOS 5 and later"
permalink: /kb/074/Q74930/
---

## Q74930: America Online AOL Command Hangs with MS-DOS 5 and later

	Article: Q74930
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to America Online and type "AOL" (without the quotation marks) to
	load the service's terminal program, your system may stop responding (hang) or
	it may display the following error message and then return you to the MS-DOS
	command prompt:
	
	  System error - bad handle passed to system
	
	CAUSE
	=====
	
	This problem occurs because AOL.BAT loads a program called GEOS.EXE, which
	checks the version of MS-DOS on your machine. GEOS.EXE does not recognize MS-DOS
	version 5.0 or later.
	
	WORKAROUND
	==========
	
	To correct this problem, you can use the MS-DOS 5.0 or later SETVER command to
	change the version number that MS-DOS reports to GEOS.EXE. To change the version
	number, type the following at the command prompt:
	
	  " setver c:\dos geos.exe 4.00 " (without the quotation marks)
	
	After typing the above command, restart your system to make the new SETVER
	active. MS-DOS now reports version 4.0 to GEOS.EXE when it requests the MS-DOS
	version number. When AOL is executed, GEOS.EXE loads and functions correctly.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
