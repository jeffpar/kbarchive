---
layout: page
title: "Q71842: File Icons in File Manager Do Not Match File Type"
permalink: kb/071/Q71842/
---

## Q71842: File Icons in File Manager Do Not Match File Type

	Article: Q71842
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In File Manager, it may not be possible to view some documents with document
	file icons.
	
	The four types of file icons are:
	
	- Directories
	
	- Program files
	
	- Document files
	
	- All other files
	
	MORE INFORMATION
	================
	
	File Manager determines a file's icon based upon the three-letter extension of
	the filename, and whether this extension is listed on the "program=" line or in
	the [extensions] section of the WIN.INI file. Therefore, a file need not be a
	text file to have a document file icon.
	
	Examples of some non-text files with document file icons are:
	
	- TETRIS.INI, which goes with the Microsoft Entertainment Pack.
	
	- MW.INI, which goes with Microsoft Word for MS-DOS.
	
	CONFIG.SYS, which is a text file, does not have a document file icon.
	
	Additional query words: 3.00 3.0 3.00a 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
