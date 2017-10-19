---
layout: page
title: "Q82773: How Setup Determines a File Version"
permalink: /kb/082/Q82773/
---

## Q82773: How Setup Determines a File Version

	Article: Q82773
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows version 3.1 Setup program, SETUP.EXE, can extract file version
	information from Windows and from some MS-DOS executable files.
	
	MORE INFORMATION
	================
	
	Windows Setup does not use the file date or the file size to determine file
	version information. Windows is now able to extract file version information
	from Windows or MS-DOS executable files through a new VER API (Application
	Programming Interface), which is built into Windows 3.1.
	
	The VER API exists in VER.DLL for Windows applications and is also available as a
	static link library for MS-DOS applications. The version information is
	physically stored as a resource for Windows binary files. Version information
	for MS-DOS binary files is simply stored as additional binary information
	appended to the executable file.
	
	Note: This does not allow for "version stamping" of MS-DOS device drivers (*.SYS
	files).
	
	All "stampable" files that ship with Windows 3.1 are "version stamped" at
	Microsoft. The version stamp contains the following information:
	
	- Date the file was built
	
	- An actual file version
	
	- The languages the file supports
	
	- The manufacturer of the file
	
	- Other optional information
	
	Setup, or more precisely VER.DLL, decides whether or not to update a file based
	on the files version stamp. If a file does not have a version stamp, it is
	assumed to be older than a file of the same name that has a version stamp. If
	neither the new file or the existing file have a version stamp, VER.DLL always
	copies the file.
	
	Additional query words: 3.10 3.11 VERINFO
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
