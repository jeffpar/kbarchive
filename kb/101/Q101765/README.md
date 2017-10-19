---
layout: page
title: "Q101765: Windows Err Msg: Application Execution Error"
permalink: /kb/101/Q101765/
---

## Q101765: Windows Err Msg: Application Execution Error

	Article: Q101765
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Windows Setup or File Manager in the Main group of Program
	Manager in Windows 3.1 or Windows for Workgroups 3.1, you receive the following
	error message:
	
	  Application Execution Error
	  One of the library files needed to run this application is damaged.
	  Please reinstall this application.
	
	CAUSE
	=====
	
	This error message is displayed if VER.DLL, LZEXPAND.DLL, or COMMDLG.DLL is
	corrupted.
	
	WORKAROUND
	==========
	
	To correct the problem, do the following:
	
	1. Quit Windows or Windows for Workgroups.
	
	2. Delete VER.DLL, LZEXPAND.DLL, and COMMDLG.DLL from your Windows directory or
	  Windows SYSTEM subdirectory.
	
	3. Insert the disks with the files VER.DL_, LZEXPAND.DL_, and COMMDLG.DLL in the
	  floppy disk drive. The files are located on the following disks:
	
	  Disk Size    Filename      Win 3.1   Win 3.11   WFWG 3.1   WFWG 3.11
	  --------------------------------------------------------------------
	  5.25-inch    VER.DL_        Disk 2     Disk 3     Disk 3     Disk 2
	   (1.2-MB)    LZEXPAND.DL_   Disk 1     Disk 3     Disk 3     Disk 2
	               COMMDLG.DL_    Disk 4     Disk 4     Disk 6     Disk 2
	
	  3.5-inch     VER.DL_        Disk 2     Disk 2     Disk 3     Disk 2
	   (1.44-MB)   LZEXPAND.DL_   Disk 2     Disk 2     Disk 3     Disk 2
	               COMMDLG.DL_    Disk 4     Disk 4     Disk 5     Disk 1
	
	4. Type the following at the MS-DOS command prompt (provided the source floppy
	  disk drive is A) and press ENTER after each line:
	
	  expand a:\ver.dl_ c:\windows\system\ver.dll
	
	  expand a:\lzexpand.dl_ c:\windows\system\lzexpand.dll
	
	  expand a:\commdlg.dl_ c:\windows\system\commdlg.dll
	
	MORE INFORMATION
	================
	
	The VER.DLL file is a dynamic-link library (DLL) used to verify file versions in
	the Windows environment.
	
	Additional query words: err msg 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
