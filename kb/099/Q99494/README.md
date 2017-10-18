---
layout: page
title: "Q99494: Err Msg Starting Windows: Access to Specified Device, Path..."
permalink: kb/099/Q99494/
---

## Q99494: Err Msg Starting Windows: Access to Specified Device, Path...

	Article: Q99494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbtool kberrmsg kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows or Windows for Workgroups after installing new
	software, you receive the following error message:
	
	  Access to specified device, path, or file is denied.
	
	This error occurs after you install new software.
	
	CAUSE
	=====
	
	Loading the VSafe utility (VSAFE.COM) from MS-DOS 6.0 (or a Central Point
	Software program), installing new software, and then starting Windows or Windows
	for Workgroups generates this error message because some of the file sizes have
	changed (for example, you have an existing MOUSE.COM file and you install
	Microsoft Mouse driver version 9.0, which replaces your MOUSE.COM file).
	
	RESOLUTION
	==========
	
	To correct the problem, run Microsoft Anti-Virus (or CPAV.EXE from Central Point
	Software) to update the files. For example:
	
	1. Run MSAV.EXE (MS-DOS 6.0).
	
	2. Run Detect.
	
	3. After you receive the "Verify Error" message, choose the Update button to
	  update each of the above files.
	
	4. Restart Windows.
	
	If you installed Microsoft Mouse version 9.0, update MOUSE.EXE, MOUSEMGR.EXE,
	POINTER.EXE, and README.EXE.
	
	Additional query words: winboot 3.00 3.10 9.00 6.00 msdos Carrera virus scan
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
