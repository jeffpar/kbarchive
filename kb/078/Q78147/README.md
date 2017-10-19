---
layout: page
title: "Q78147: Starting a Program Requiring LOADFIX.COM from the PIF Editor"
permalink: /kb/078/Q78147/
---

## Q78147: Starting a Program Requiring LOADFIX.COM from the PIF Editor

	Article: Q78147
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to run a non-Windows application from Microsoft Windows, you may get
	the error message "Packed File Corrupt." If this happens, you should execute the
	file LOADFIX.COM before starting a program from Microsoft Windows 3.0 or 3.1.
	You can start LOADFIX.COM from the PIF Editor, followed by the desired program
	as follows:
	
	  Program Filename:     LOADFIX.COM
	  Optional Parameters:  C:\MYDIR\MYPROG.EXE
	  Start-up Directory:   C:\MYDIR
	
	MORE INFORMATION
	================
	
	LOADFIX.COM, a utility provided with MS-DOS 5.0, addresses a problem with files
	that were compressed with the EXEPACK utility or the /EXEPACK linker option used
	in some Microsoft products. LOADFIX.COM prevents an error message that is a
	result of either the EXEPACK utility or the /EXEPACK linker, and is needed
	before the DOS application can be started.
	
	For more information concerning the MS-DOS implementation of LOADFIX.COM, query
	on the words:
	
	  Packed and File and Corrupt and MS-DOS and LOADFIX.COM
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 Packed File Corrupt 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
