---
layout: page
title: "Q91193: Windows Err Msg:  Missing / Unable to Load"
permalink: /kb/091/Q91193/
---

## Q91193: Windows Err Msg:  Missing / Unable to Load

	Article: Q91193
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you try to start Microsoft
	Windows or Windows for Workgroups in 386 enhanced mode:
	
	  : Missing / Unable to Load
	
	CAUSE
	=====
	
	This error message may be caused by an outdated or corrupt version of the
	WIN386.EXE file on the system.
	
	
	WORKAROUND
	==========
	
	Cause 1: Duplicate or Outdated Copy of WIN386.EXE
	-------------------------------------------------
	
	The most common cause of this error message is the presence of the Windows 3.0
	version of WIN386.EXE file in the Windows directory. Windows finds this file
	instead of the correct (3.1) version of the file located in the Windows \SYSTEM
	directory.
	
	To correct this problem, delete or rename the outdated file.
	
	Search the hard drive for all copies of WIN386.EXE present. If your machine is
	running Microsoft MS-DOS version 5.0 or later, you can use the DIR command with
	the /S switch from the root directory of each drive by typing the following:
	
	  CD\ <ENTER>
	  DIR WIN386.EXE /S
	
	This generates a report showing the directory location of each instance of the
	WIN386.EXE file. All copies of the file besides the one in the Windows \SYSTEM
	subdirectory should be renamed or deleted.
	
	Cause 2: Corrupt WIN386.EXE
	---------------------------
	
	The WIN386.EXE file should have the same date as the rest of the Windows .EXE
	files, such as WRITE.EXE. The date may vary depending on OEM versions of
	Windows, but all .EXE files should match. It is also possible that the file has
	the correct date but is still corrupt. If there is only one copy of WIN386.EXE
	on the hard drive, rename the file and use the EXPAND.EXE utility to expand it
	from the original Windows disks, as follows:
	
	  EXPAND A:\WIN386.EX_ C:\WINDOWS\SYSTEM\WIN386.EXE
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
