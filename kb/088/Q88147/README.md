---
layout: page
title: "Q88147: Data Files Without Extensions Cause Command-Line Fault"
permalink: /kb/088/Q88147/
---

## Q88147: Data Files Without Extensions Cause Command-Line Fault

	Article: Q88147
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows-based applications cannot open data files without extensions when you
	use the Program Manager's or File Manager's Run command or when you use the
	Command Line box in Program Item Properties.
	
	If you attempt to open a data file without an extension, the application will
	automatically try and open the data file with the application's default
	extension, and will stop with a message about the file missing.
	
	For example, if you try and open a data file called TEST in Write, then Write
	display the following error message:
	
	  C:\TEST.WRI
	  File not Found
	
	  Please verify that the correct path and filename are given.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Make sure the data file has an extension. It does not need to be the
	  application's default extension.
	
	- Run the application first and then open the data file without extension
	  through the File menu's Open command.
	
	This problem has been tested in version 4.0 of Excel for Windows, version 2.0 of
	Word for Windows, Windows Write, and Windows Notepad.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
