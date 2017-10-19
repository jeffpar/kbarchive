---
layout: page
title: "Q126593: Err Msg: Error Reading Spooler Temp File"
permalink: /kb/126/Q126593/
---

## Q126593: Err Msg: Error Reading Spooler Temp File

	Article: Q126593
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print a document in Microsoft Windows or Windows for Workgroups
	version 3.1 or 3.11 after you upgrade from Windows version 3.0, you receive the
	error message:
	
	  Error reading spooler temp file
	
	CAUSE
	=====
	
	This error occurs if you are using Windows version 3.0 Print Manager in Windows
	or Windows for Workgroups version 3.1 or 3.11.
	
	RESOLUTION
	==========
	
	To correct this problem, expand the PRINTMAN.EX_ file from your original Windows
	or Windows for Workgroups version 3.1 or 3.11 disks to your Windows directory
	using the command
	
	  expand <source>:\printman.ex_
	  <dest>:\<windows>\printman.exe
	
	where <source> is the floppy disk drive containing the original Windows or
	Windows for Workgroups disk, <dest> is the hard disk on your computer
	containing your Windows directory, and <windows> is the Windows directory.
	For example, if the original Windows disk is in drive A and your Windows
	directory is called WINDOWS on drive C, use the command:
	
	  expand a:\printman.ex_ c:\windows\printman.exe
	
	The PRINTMAN.EX_ file is located on the following disks:
	
	  Product/Version               3.5" HD Disk #   5.25" HD Disk #
	  --------------------------------------------------------------
	  Windows 3.1                         4                4
	  Windows 3.11                        4                5
	  Windows for Workgroups 3.1          5                7
	  Windows for Workgroups 3.11         3                5
	
	Additional query words: 3.10 3.11 printman
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
