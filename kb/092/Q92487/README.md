---
layout: page
title: "Q92487: Windows 3.x and Hardcard Drivers"
permalink: /kb/092/Q92487/
---

## Q92487: Windows 3.x and Hardcard Drivers

	Article: Q92487
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following topics are covered in this article:
	
	- Windows 3.1 and Hardcard Plus 80 II
	
	- Windows 3.0 and Hardcard 40/80 II
	
	- General information about Hardcard Plus
	
	MORE INFORMATION
	================
	
	Windows 3.1 and Hardcard Plus 80 II
	-----------------------------------
	
	When you run Windows 3.1 on a computer with a Hardcard Plus 80 II, you must have
	version 1.4 or later of the Hardcard driver to run MS-DOS-based applications in
	386 enhanced mode. Earlier driver versions cause the following error message:
	
	  Serious Disk Error:
	
	  A serious disk error has occurred while writing to drive C Continue will retry
	  to the operation.
	
	  Press any key to continue
	
	Use ATDOSHC2.SYS version 1.4 or later in your CONFIG.SYS file, and make sure
	VIRTUALHDIRQ=OFF is in the [386Enh] section of SYSTEM.INI file.
	
	Windows 3.0 and Hardcard 40/80 II
	---------------------------------
	
	ATDOSHC2.SYS version 1.3 has been known to cause erratic disk reads under Windows
	3.0. According to Plus Development, this problem has been corrected in version
	1.31 for the Hardcard II 40 and 80 cards.
	
	The new driver has the following file date and size:
	
	  ATDOSHC2.SYS     22310 05-17-90
	
	(According to Plus Development, the 1.31 drivers' disks have "Revision C" printed
	on the label.)
	
	There are currently no Windows 3.0 drivers available for the Hardcard 20 or 40.
	
	General Information on Hardcard Plus
	------------------------------------
	
	There are three separate types of Hardcard Plus cards and they fall into the
	following categories.
	
	Card & Size     Model       Driver          Version      VIRTUALHDIRQ=
	----------------------------------------------------------------------
	
	20 MB           8-bit       ATDOSHC2.SYS    1.31         yes
	40 MB           8-bit       ATDOSHC2.SYS    1.31         yes
	40 MB           Standard    ATDOSHC2.SYS    1.4          yes
	80 MB           Standard    ATDOSHC2.SYS    1.4          yes
	50 MB           XL          ATDOSXL.SYS     1.5 or 1.7   no
	105 MB          XL          ATDOSXL.SYS     1.5 or 1.7   no
	
	ATDOSXL.SYS version 1.5 requires a /W parameter. None of the XL models need the
	Windows VIRTUALHDIRQ statement.
	
	
	The following table lists the address ranges that the specific Hardcard Plus
	cards may use in the upper memory area (UMA). If there is a memory conflict, try
	using an exclude statement on the EMM386.EXE line in CONFIG.SYS (X=A000-EFFF).
	If the exclude solves the problem, you can use this table to further narrow down
	the exclude range.
	
	UMA USED       20       40      40II    80II    XL50     XL105
	--------------------------------------------------------------
	
	C800-C9FF       X        X       X       X       X        X
	
	CA00-CBFF       X        X       X       X       X        X
	
	CC00-CDFF                        X       X       X        X
	
	CE00-CFFF                        X       X       X        X
	
	D000-D1FF                        X       X       X        X
	
	D200-D3FF                        X       X       X        X
	
	D400-D5FF                        X       X       X        X
	
	Updated drivers can be obtained from Plus Development's bulletin board service
	(BBS) or from Plus Development technical support.
	
	The Plus Development products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
