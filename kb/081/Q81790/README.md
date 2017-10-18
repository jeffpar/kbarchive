---
layout: page
title: "Q81790: 'VM ERROR' from Lotus 1-2-3 Release 3.1"
permalink: kb/081/Q81790/
---

## Q81790: 'VM ERROR' from Lotus 1-2-3 Release 3.1

	Article: Q81790
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles describes the following error messages that you may receive when
	you run Lotus 1-2-3 release 3.1:
	
	  VM ERROR [6]: INTERNAL ERROR
	
	  VM ERROR [19]:not enough memory to start 1-2-3 -or- Cannot load file
	  driver-L13 file
	
	MORE INFORMATION
	================
	
	VM ERROR [6]: INTERNAL ERROR
	----------------------------
	
	According to Lotus technical support, if your CONFIG.SYS file contains only
	HIMEM.SYS and DOS=HIGH, the error message
	
	  VM ERROR [6]: INTERNAL ERROR
	
	may be displayed when shelling out from 1-2-3 release 3.1 using /SYSTEM. You may
	be able to work around the problem by including the following lines in your
	CONFIG.SYS file
	
	     files=X
	     buffers=X
	     device=c:\dos\himem.sys
	     device=c:\dos\emm386.exe nnn ram
	     dos=high,umb
	
	(where nnn is the amount of expanded memory).
	
	If the error occurs on an 80286 machine, do not load MS-DOS high.
	
	VM ERROR [19]: Not Enough Memory to Start 1-2-3
	-----------------------------------------------
	
	If the error message
	
	  VM ERROR [19]:not enough memory to start 1-2-3
	
	  -or-
	
	  Cannot load file driver-L13 file
	
	is displayed when starting Lotus 1-2-3 release 3.1, there is not enough extended
	memory to start 1-2-3.
	
	1-2-3 release 3.1 requires a minimum of 384K of free extended memory to run; when
	the minimum is not available, one of the above error messages may be displayed
	when starting 1-2-3.
	
	The Lotus product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.3a 3.30 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
