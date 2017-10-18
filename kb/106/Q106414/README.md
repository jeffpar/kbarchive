---
layout: page
title: "Q106414: Err Msg After Upgrading from 3.3 to 6.2: Incorrect DOS Version"
permalink: kb/106/Q106414/
---

## Q106414: Err Msg After Upgrading from 3.3 to 6.2: Incorrect DOS Version

	Article: Q106414
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you upgrade to MS-DOS 6.2 or 6.21 from MS-DOS 3.3, some MS-DOS 3.3 files are
	left in the directory containing your MS-DOS files (typically C:\DOS).
	
	When you run some of these file, you receive an "Incorrect DOS version" error
	message (even if you attempt to use SETVER.EXE).
	
	MORE INFORMATION
	================
	
	The following MS-DOS 3.3 files are left in the directory containing your MS-DOS
	files:
	
	  4201.CPI
	  5202.CPI
	  ASSIGN.COM
	  COMP.COM
	  EDLIN.COM
	  EXE2BIN.EXE
	  GRAFTABL.COM
	  JOIN.EXE
	  RECOVER.COM
	  BACKUP.COM
	  GWBASIC.EXE
	  LCD.CPI
	  LINK.EXE
	  PRINTER.SYS
	
	RESOLUTION
	==========
	
	To work around this problem, obtain the MS-DOS Supplemental Disk by using the
	coupon located in the back of your printed MS-DOS documentation. Follow the
	instructions included with the Supplemental Disk to install the programs and
	files you need.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
