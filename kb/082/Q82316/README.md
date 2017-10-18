---
layout: page
title: "Q82316: Formbase 1.1 Loads Run-Time Windows"
permalink: kb/082/Q82316/
---

## Q82316: Formbase 1.1 Loads Run-Time Windows

	Article: Q82316
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A run-time version of Microsoft Windows 2.x is loaded when you run Formbase 1.1
	if you type the following at the command line when running Microsoft Windows 3.0
	or later:
	
	  formbase
	
	If this happens, you receive several file-open errors.
	
	If you type
	
	  formbase.exe
	
	the run-time version of Windows is not be executed and no errors occur.
	
	MORE INFORMATION
	================
	
	Windows executes filenames with the .COM extension before it executes filenames
	with .EXE extensions. There are two Formbase executable files, FORMBASE.COM and
	FORMBASE.EXE. The first automatically loads the run-time version of Windows.
	
	FORMBASE.COM should only be used if you do not have a copy of Windows installed
	on your system. If you are running Formbase from Windows 3.0 or 3.1, make sure
	you are entering the complete filename and extension (that is, FORMBASE.EXE).
	
	Additional query words: 3.10 3.00 3.00a 3.0 3.0a 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	
	=============================================================================
	
