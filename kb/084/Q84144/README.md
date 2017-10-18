---
layout: page
title: "Q84144: CodeView 3.05 Won't Start with Windows 3.1"
permalink: kb/084/Q84144/
---

## Q84144: CodeView 3.05 Won't Start with Windows 3.1

	Article: Q84144
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run CodeView for Windows version 3.05 or earlier with
	Microsoft Windows 3.1, the mouse cursor changes into an hourglass momentarily
	and then back to an arrow without starting CodeView.
	
	CAUSE
	=====
	
	To run versions 3.05 and earlier of CodeView for Windows under Windows 3.1, the
	file WINDEBUG.DLL is required.
	
	NOTE: CodeView versions 3.07 and later are compatible with Windows 3.1 and do not
	require this file.
	
	WORKAROUND
	==========
	
	To workaround this problem, you can do one of the following:
	
	- Upgrade to CodeView for Windows version 3.07, which is included with the
	  Windows 3.1 Software Development Kit (SDK).
	
	  -or-
	
	- Download the file WINDEBUG.DLL from CompuServe and place it in the Windows
	  \SYSTEM directory.
	
	Obtaining WINDEBUG.DLL
	----------------------
	
	WINDEBUG.DLL can be obtained from CompuServe as follows:
	
	1. Type "GO WINSDK" (without the quotation marks) at the CompuServe "!" prompt.
	
	2. Type "LIB 3" (without the quotation marks) at the CompuServe "!" prompt to
	  get to Library 3.
	
	3. Type "DOW" (without the quotation marks) to start the download process. The
	  filename is WINDBG.ZIP.
	
	If you do not have a CompuServe account, you can obtain WINDEBUG.DLL by calling
	Microsoft SDK Setup/Install support at (425) 635-3329.
	
	Additional query words: 3.10 3.11 CodeView Code View CVW WINDEBUG windbg
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
