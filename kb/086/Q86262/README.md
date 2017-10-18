---
layout: page
title: "Q86262: DOC: PENWIN.DLL Requires Windows 3.1"
permalink: kb/086/Q86262/
---

## Q86262: DOC: PENWIN.DLL Requires Windows 3.1

	Article: Q86262
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.1 of the Microsoft Windows Software Development Kit (SDK), the
	section of the TIPS.HLP online help file that describes the contents of the
	redistributable files directory incorrectly states that all the dynamic- link
	libraries (DLLs) in the directory operate under Microsoft Windows versions 3.0
	and 3.1.
	
	PENWIN.DLL implements the Pen Extensions under Microsoft Windows 3.1. The Pen
	Extensions to Windows, and the OEM product Microsoft Windows for Pen Computing,
	each require the Windows 3.1 environment. Applications based solely on the Pen
	Extensions will not run under Windows 3.0. An application that uses the Pen
	Extensions should do one of the following:
	
	- Use the Resource Compiler /31 switch to prevent the application from running
	  under Windows 3.0.
	
	- Code the application to dynamically configure itself according to the
	  installed version of Windows.
	
	Additional query words: 1.00 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
