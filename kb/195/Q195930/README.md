---
layout: page
title: "Q195930: Memory Usage by MS-DOS Application Steadily Increases"
permalink: kb/195/Q195930/
---

## Q195930: Memory Usage by MS-DOS Application Steadily Increases

	Article: Q195930
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Memory usage by any MS-DOS application that repeatedly calls the functions
	_dos_findfirst or _dos_findnext may continue to grow until the application
	quits. When you view the working set or private bytes using a diagnostic tool
	such as Performance Monitor, the size may steadily increase over time.
	
	CAUSE
	=====
	
	MS-DOS applications run on Windows NT under the Windows NT Virtual DOS Machine
	(NTVDM) subsystem. Each time an MS-DOS application calls the _dos_findfirst API,
	memory is allocated by the NTVDM and is used to keep the necessary search
	context information needed to handle subsequent calls to _dos_findnext. This
	memory is not deallocated until the directory search is complete or the process
	ends. The amount of memory allocated for each _dos_findfirst request varies
	based on the version of Windows NT, but is in the range of 1 KB to 2 KB for each
	request.
	
	RESOLUTION
	==========
	
	The only way the NTVDM can be sure a directory search has completed is when
	either _dos_findfirst or _dos_findnext returns non-zero, which indicates no
	matching entry. Applications should be written to finish each search, or the
	application can be rewritten as a 32-bit application. Under Win32, the functions
	FindFirstFile and FindNextFile replace the functions _dos_findfirst and
	_dos_findnext respectively. The Win32 function FindClose is provided to
	deallocate all related memory when the search handle is no longer required.
	
	Additional query words: ntee ee console memory
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351xsearch kbWinNT400xsearch kbWinNTW351xsearch kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbWinNTS351xsearch
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
