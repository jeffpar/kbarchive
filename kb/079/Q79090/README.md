---
layout: page
title: "Q79090: Michaelangelo Virus Disables Floppy Drive"
permalink: kb/079/Q79090/
---

## Q79090: Michaelangelo Virus Disables Floppy Drive

	Article: Q79090
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The error message "general failure error" may occur when trying to access a
	floppy drive on a system infected by the Michaelangelo virus. If the virus is
	present, the error message can occur regardless of which MS-DOS version is
	running at the time. If the machine is booted from a floppy disk, the virus is
	inactive and the error message will not be displayed.
	
	MORE INFORMATION
	================
	
	If the Michaelangelo virus is present on a hard drive, it will disable (make
	unreadable) the boot record of any floppy disk (that is not write-protected)
	when the disk drive is accessed. The virus resides in the partition table and
	cannot be destroyed by repartitioning.
	
	NOTE: McAfee's ScanV82 can detect this virus. The code name for the Michaelangelo
	virus is "MICH." For more information about this virus detection software,
	contact McAfee Associates at:
	
	  McAfee Associates
	  4423 Cheeney Street
	  Santa Clara, CA 95054
	  (408) 988-3832
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the product's performance
	or reliability.
	
	Additional query words: 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 3rdparty err msg "michelangelo"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a
	
	=============================================================================
	
