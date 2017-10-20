---
layout: page
title: "Q81795: CodeView Prior to 3.14 May Cause Data Loss with SMARTDrive 4.0"
permalink: /kb/081/Q81795/
---

## Q81795: CodeView Prior to 3.14 May Cause Data Loss with SMARTDrive 4.0

{% raw %}

	Article: Q81795
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use CodeView (CV.EXE) versions 3.0, 3.1, 3.11, 3.12, or 3.13 with
	SMARTDrive version 4.0, file allocation table (FAT) corruption may occur. To run
	these versions of CodeView safely, use the CV.COM file included with MS-DOS 5.0.
	If CV.COM is not available on the system (that is, MS-DOS 5.0 is not being run),
	you need to update CodeView to version 3.14 or later.
	
	MORE INFORMATION
	================
	
	To use CV.COM with MS-DOS 5.0:
	
	1. Copy the CV.COM file from the distribution disks to the directory that
	  contains your CV.EXE file.
	
	2. Type the following to start CodeView:
	
	  CV
	
	  -or-
	
	  CV.COM
	
	3. If you start CodeView by using a batch file or program item in a shell (such
	  as MS-DOS Shell), change the batch file or program item so that it specifies
	  CV.COM instead of CV.EXE.
	
	4. Make sure that you are using HIMEM.SYS version 3.07, which shipped with
	  Microsoft Windows 3.1. If you don't use HIMEM.SYS version 3.07 with
	  SMARTDrive 4.0 and CodeView, data corruption may still occur.
	
	This problem has been corrected in CodeView version 3.14. For information about
	obtaining CodeView, call the Microsoft Sales Information Center (MSIC) at (800)
	426-9400.
	
	Additional query words: 3.10 3.00 3.00a 3.11 code view win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
