---
layout: page
title: "Q90708: WIN.INI Programs= Line, File Extensions, and Execution Order"
permalink: /kb/090/Q90708/
---

## Q90708: WIN.INI Programs= Line, File Extensions, and Execution Order

	Article: Q90708
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows looks at file extensions and filenames when searching for and running
	executable files specified on the command line accessed by choosing Run from the
	File. This is slightly different than the method used by MS- DOS, and can affect
	processing order.
	
	MORE INFORMATION
	================
	
	The MS-DOS command processor ignores filename extensions at first and looks in
	itself for a string matching the command to be processed. If it finds none, it
	looks in the current directory and then along the PATH for filenames matching
	the issued command and having, in this order, the .COM, .EXE, or .BAT extension.
	This is a search order only -- MS-DOS always executes .COM files before .EXE
	files, regardless of any extension you specify on the command line. If, for
	instance, it finds a MYPROG.COM and a MYPROG.EXE in the same place, MS-DOS
	always runs MYPROG.COM first. However, the processor runs MYPROG.EXE before
	MYPROG.COM if MYPROG.EXE is found first during the PATH search.
	
	Windows behaves differently, using the executable file extension defined in the
	Programs= line of WIN.INI. The typical listing order for executable extensions
	is COM, EXE, BAT, and PIF. If you choose Run from the File menu in File Manager
	or Program Manager, and enter the string MYPROG without an extension in the
	command line, Windows executes MYPROG.COM before MYPROG.EXE. If you specify the
	full name and extension in the command line, Windows uses the extension to
	determine which file to load. While this also is true of MS-DOS, Windows allows
	you to change the search order.
	
	If you run only Windows executable files and do not specify an extension, you may
	be able to boost system performance slightly by listing .EXE files before .COM
	files.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, pages 52-53
	
	WININI.TXT file included with Windows 3.0
	
	"Microsoft Windows User's Guide," version 3.1, page 134
	
	WININI.WRI file included with Windows 3.1
	
	Additional query words: 3.00 3.00a 3.10 3.11 executables
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
