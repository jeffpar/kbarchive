---
layout: page
title: "Q132656: Quattro Pro 6.0: Problems Setting Up to NetWare drive"
permalink: /kb/132/Q132656/
---

## Q132656: Quattro Pro 6.0: Problems Setting Up to NetWare drive

	Article: Q132656
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Quattro Pro version 6.0 from disks on a computer running Windows
	version 3.1 and choose a NetWare mapped network drive as the destination drive,
	Windows 3.1 prompts you to choose whether to set up Quattro Pro as a shared
	network installation on the server, or to set up Quattro Pro on a local hard
	drive. This prompt appears just after the setup page that asks for the
	installation path.
	
	In Windows 95, this prompt does not appear, so that the program is always set up
	as a single-user installation.
	
	CAUSE
	=====
	
	The Quattro Pro Setup program is looking for a Windows 3.x line in the [boot]
	section of the System.ini file that is removed by Windows 95 Setup. The line in
	the [boot] section reads as follows:
	
	     [boot]
	     SecondNet.drv=netware.drv
	
	RESOLUTION
	==========
	
	To work around the behavior, add the line
	
	     SecondNet.drv=netware.drv
	
	to the [boot] section of the System.ini file. The addition of this line does not
	seem to have any adverse effects on the proper operation of Windows 95.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
