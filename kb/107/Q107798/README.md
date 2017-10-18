---
layout: page
title: "Q107798: WFWG 3.11 Err Msg: Executable Not Found"
permalink: kb/107/Q107798/
---

## Q107798: WFWG 3.11 Err Msg: Executable Not Found

	Article: Q107798
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows or Windows for Workgroups version 3.1 in standard mode or
	run Windows for Workgroups version 3.11 with the WIN.COM /D:T diagnostic switch,
	you receive the following error message:
	
	  Executable not found.
	
	CAUSE
	=====
	
	This error occurs if the WSWAP.EXE file is not located in the Windows SYSTEM
	subdirectory.
	
	RESOLUTION
	==========
	
	Use the EXPAND.EXE utility to expand a new copy of WSWAP.EXE from the original
	Windows or Windows for Workgroups disks. The WSWAP.EXE file is listed as
	WSWAP.EX_ on the following disks:
	
	Product                         3.5-inch 1.44 MB     5.25-inch 1.2 MB
	---------------------------------------------------------------------
	
	Windows 3.1                           Disk 5                 Disk 5
	Windows 3.11                          Disk 4                 Disk 5
	Windows for Workgroups 3.1            Disk 6                 Disk 8
	Windows for Workgroups 3.11           Disk 6                 Disk 7
	
	For more information about using the EXPAND.EXE utility, type the following at an
	MS-DOS command prompt and then press ENTER:
	
	  expand /?
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 can be loaded without the 386 enhanced mode drivers
	by using the following command:
	
	  win /d:t
	
	Loading Windows for Workgroups 3.11 with this command line can be helpful when
	you are troubleshooting issues associated with the 386 enhanced mode drivers.
	
	When 386 enhanced mode drivers are not loaded, the WSWAP.EXE terminate-and-
	stay-resident (TSR) program is used to allow Windows to switch between
	MS-DOS-based applications and Windows. This file must be present when you load
	Windows with the command line shown above.
	
	WSWAP.EXE is installed to the Windows SYSTEM subdirectory by the Windows Setup
	program and is always present unless it has been manually deleted from the hard
	disk.
	
	Additional query words: 3.10 3.11 error DOSX.EXE hangs locks win /s
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
