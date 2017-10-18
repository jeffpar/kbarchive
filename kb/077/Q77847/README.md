---
layout: page
title: "Q77847: MS-DOS 5.0 Setup Fails with Lightning Disk Cache 5.52"
permalink: kb/077/Q77847/
---

## Q77847: MS-DOS 5.0 Setup Fails with Lightning Disk Cache 5.52

	Article: Q77847
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
	
	When you attempt to install MS-DOS 5.0 while running the DacEasy Lightning Disk
	Cache version 5.52, Setup may repeatedly prompt you to insert Upgrade Disk 1.
	
	MORE INFORMATION
	================
	
	Lightning Disk Cache (L.COM) is a terminate-and-stay-resident (TSR) program that
	may conflict with the MS-DOS 5.0 Setup program. To eliminate possible conflicts,
	do the following:
	
	1. Remove or REMark the line that executes the software from the AUTOEXEC.BAT.
	
	2. Reboot the computer.
	
	3. Run the MS-DOS 5.0 Setup.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Reference(s):
	
	DacEasy: (214) 248-0205
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
