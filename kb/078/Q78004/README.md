---
layout: page
title: "Q78004: Compaticard, AMI BIOS, and MS-DOS 5.0"
permalink: kb/078/Q78004/
---

## Q78004: Compaticard, AMI BIOS, and MS-DOS 5.0

	Article: Q78004
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Compaticard IV, a floppy controller card, may exhibit a problem when running
	in a machine with an American Megatrends Inc. (AMI) BIOS when EMM386.EXE is
	loaded. The machine may fail to boot when the Compaticard IV device driver,
	CC4DRV.SYS, is loaded.
	
	MORE INFORMATION
	================
	
	There is one solution and one possible workaround to this problem.
	
	RESOLUTION
	==========
	
	Micro Solutions has a patch available for CC4DRV.SYS, and will send out a
	corrected copy to customers who request it. Customers should contact Micro
	Solutions directly to obtain the new file.
	
	WORKAROUND
	==========
	
	Often the problem can be worked around by adding the parameter D=n to EMM386.EXE
	where n is a number greater than or equal to 128. For example:
	
	  device=c:\dos\emm386.exe d=128
	
	The workaround should only be used as a temporary fix. The patch should be
	obtained from Micro Solutions as soon as possible.
	
	Compaticard IV is a floppy controller card that can add up to four floppy drives
	(two may be external) to any IBM-compatible with an available expansion slot. It
	can be used as a primary or a secondary controller. It supports 5.25-, 3.5-, and
	8-inch drives, including 2.88 MB 3.5-inch drives, and can optionally booted from
	any attached drive.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	Micro Solutions technical support: (815) 756-3411 9:00-6:00 central time
	(815) 756-2928 fax 24 hours
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
