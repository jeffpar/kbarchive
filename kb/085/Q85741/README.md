---
layout: page
title: "Q85741: Set Default Directory Starting Applications from Command Line"
permalink: /kb/085/Q85741/
---

## Q85741: Set Default Directory Starting Applications from Command Line

	Article: Q85741
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Microsoft Windows version 3.1 and a Windows-based application
	simultaneously from the MS-DOS command prompt, the application default directory
	will vary depending on whether or not you specify a path for the application.
	This behavior differs from that of Windows 3.0.
	
	MORE INFORMATION
	================
	
	The following examples demonstrate the behavioral differences between Windows
	3.0 and 3.1 when you start Windows and a Windows-based application
	simultaneously from the MS-DOS command prompt.
	
	Example 1
	---------
	
	This example assumes you are at the MS-DOS command prompt and the current
	directory is C:\DOCS. The following command line starts Windows and Write. The
	default directory for Write will be C:\DOCS, the same as the current directory
	at MS-DOS before you start Windows. This behavior is true for both Windows 3.0
	and 3.1. Type the following at the MS-DOS command prompt:
	
	  win write.exe
	
	Example 2
	---------
	
	This example assumes you are at the MS-DOS command prompt and the current
	directory is C:\DOCS. The following command line starts Windows and Write
	(WRITE.EXE). The default directory will be different depending on the version of
	Windows being used (see below).
	
	  win c:\windows\write.exe
	
	For Windows 3.0, the default directory for Write will be C:\DOCS, the same as the
	current directory at MS-DOS before starting Windows.
	
	For Windows 3.1, the default directory for Write will be C:\WINDOWS, the same as
	the directory specified for the WRITE.EXE file.
	
	The default directory information applies to all applications started
	simultaneously with Windows from the command line; however, some applications
	such as Word version 2.0 for Windows have an .INI file setting that will
	override the default directory provided by Windows.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
