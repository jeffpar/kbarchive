---
layout: page
title: "Q99415: Hard Disk Controller BIOS Error Codes"
permalink: /kb/099/Q99415/
---

## Q99415: Hard Disk Controller BIOS Error Codes

{% raw %}

	Article: Q99415
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the error messages you may receive if you have a hardware
	failure on the hard disk, the hard disk controller, or both. The errors listed
	below normally occur during a low-level format but may also occur anytime after
	the low-level format is done (for example, when you are installing MS-DOS,
	Windows, or other software).
	
	MORE INFORMATION
	================
	
	Code               Description
	  ------------------------------------------------
	  00H                No Error
	  01H                Bad Command
	  02H                Address Mark Not Found
	  03H                Write Protect
	  04H                Request Sector Not Found
	  05H                Reset Failed
	  06H                Media Change
	  07H                Initialization Failed
	  09H                Cross 64K DMA Boundary
	  0AH                Bad Sector Flag Detected
	  0BH                Bad Track Flag Detected
	  10H                Bad ECC on Disk Read
	  11H                ECC Corrected Data Error
	  20H                Controller Has Failed
	  40H                Seek Operation Failed
	  80H                Drive Failed to Respond
	  AAH                Drive Not Ready
	  BBH                Undefined Error
	  CCH                Write Fault
	  0EH                Register Error
	  FFH                Sense Operation Failed
	
	
	Additional query words: 6.22 2.0 3.0 3.00 3.10 3.1 3.3 3.30 3.3a 3.30a 4.0 4.00 4.01 4.01a 5.00 5.0 5.00a 5.0a 6 6.00 6.0 6.20 msdos ms dos hard drive errors failures lowlevel low level format
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
