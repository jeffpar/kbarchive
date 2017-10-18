---
layout: page
title: "Q124177: Application Error: SUWIN Caused an Illegal Instruction"
permalink: kb/124/Q124177/
---

## Q124177: Application Error: SUWIN Caused an Illegal Instruction

	Article: Q124177
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Netsetup.exe to perform a server-based setup of Windows 95
	on a system running Microsoft Workgroup Add-On for MS-DOS, you receive the
	following error:
	
	  Application Error "SUWIN caused an illegal instruction in module GDI.EXE at
	  0001:16EF."
	
	NOTE: This error can also occur on systems with insufficient hard disk space to
	create a temporary setup directory.
	
	CAUSE
	=====
	
	This error occurs on Workgroup Add-On for MS-DOS systems configured to use the
	basic network redirector. When Windows 95 is set up from an MS-DOS prompt, it
	loads a mini-version of Windows. This version is very sensitive to system files
	not being accessible or loadable. The basic redirector included with Workgroup
	Add-On for MS-DOS may occasionally drop file handles and/or network connections.
	After this occurs, the mini-version of Windows fails to load code segments or
	resources and generates the error message.
	
	RESOLUTION
	==========
	
	Run Setup after starting Workgroup Add-On for MS-DOS using the full redirector.
	To start Workgroup Add-On for MS-DOS with the full redirector, type "net stop"
	(without the quotation marks) at an MS-DOS prompt and log off the system. Then
	type "net start full" (without the quotation marks) and log on to the system.
	Setup should now run without generating the error message.
	
	Additional query words: err msg
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
