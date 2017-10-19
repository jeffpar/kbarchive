---
layout: page
title: "Q131748: Setup Hangs Accessing CD-ROM Drive with CD17F14A.SYS"
permalink: /kb/131/Q131748/
---

## Q131748: Setup Hangs Accessing CD-ROM Drive with CD17F14A.SYS

	Article: Q131748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95 over an existing version of Windows or
	Windows for Workgroups version 3.x on an AT&T Globalyst model 515 or 590
	computer, the computer may stop responding (hang) when Setup accesses the CD-ROM
	drive.
	
	
	This problem is known to occur with the NEC CDR-260 CD-ROM drive with the Oak
	CD17F14A.SYS CD-ROM driver version 1.7_F14A.
	
	CAUSE
	=====
	
	The CD17F14A.SYS driver uses INT14h to access the CD-ROM drive, which also
	causes a problem in Windows and Windows for Workgroups 3.x. This problem occurs
	when you access the CD-ROM drive in File Manager in Windows or Windows for
	Workgroups 3.x as well, and is not a problem with Windows 95 Setup.
	
	RESOLUTION
	==========
	
	To work around the problem, restart your computer and install Windows 95 from an
	MS-DOS command prompt. If Windows 3.x starts automatically when you start your
	computer, quit Windows 3.x before you install Windows 95.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
