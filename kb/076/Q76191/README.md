---
layout: page
title: "Q76191: Installing Tips Plus Version 1.5 with MS-DOS 5.0"
permalink: kb/076/Q76191/
---

## Q76191: Installing Tips Plus Version 1.5 with MS-DOS 5.0

	Article: Q76191
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tips Plus version 1.5 may have trouble installing after Microsoft MS-DOS version
	5.0 has been installed.
	
	MORE INFORMATION
	================
	
	Tips Plus, manufactured by True Vision, is a graphics paint product that is used
	with a True Vision Targa Board. After MS-DOS 5.0 is installed, the Tips Plus
	program may have difficulty installing. If the message "Packed file corrupt"
	appears, you should use the MS-DOS LOADFIX command as follows:
	
	  loadfix [drive:][path]INSTALL.EXE
	
	The program should now install correctly. However, if Tips Plus gets partially
	through its installation and displays the error message "program failed to
	load," you must use the following workarounds:
	
	WORKAROUND
	==========
	
	1. Load DOS low. This is done in the CONFIG.SYS file as follows:
	
	     device=[drive:][path]himem.sys
	     dos=low
	
	2. According to True Vision technical support, when installing Tips Plus under
	  MS-DOS 5.0, INSTALL.EXE should be added to the MS-DOS version table as
	  follows;
	
	     setver [drive:path] install.exe x.xx
	
	  where x.xx is the MS-DOS version number, which should be set to 4.01. The
	  version number can also be set to 3.x; however, this does not ensure
	  successful Tips Plus 1.5 installation.
	
	3. 
	  a. Boot from a previous DOS system disk (DOS 3.x has not been reliable for
	     successful Tips Plus installation according to True Vision; DOS 4.x is
	     suggested)
	
	  b. Install Tips Plus 1.5.
	
	  c. Reboot from the hard drive under MS-DOS 5.
	
	
	Reference(s):
	
	True Vision: (800) 858-8783
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
