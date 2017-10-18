---
layout: page
title: "Q89191: File Manager Displaying Garbled Information"
permalink: kb/089/Q89191/
---

## Q89191: File Manager Displaying Garbled Information

	Article: Q89191
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the system attribute is set to "on" for the WIN.INI file, File Manager for
	Windows 3.1 displays garbled information. Directory and filenames may contain
	random characters, invalid filenames, numerical strings, or files may be
	displayed as directories in the file window.
	
	To resolve this problem, turn the system attribute for WIN.INI off by typing the
	following at the MS-DOS command line:
	
	  ATTRIB -S WIN.INI
	
	MORE INFORMATION
	================
	
	Some of the effects noted are:
	
	- The file dates may be invalid, for example "8/0/=1."
	
	- Total disk space may be an invalid number, such as "-1,382,993,828 bytes
	  total."
	
	- The volume name may be garbled or nonexistent.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
