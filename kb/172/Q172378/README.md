---
layout: page
title: "Q172378: Error Message: Error Loading. You Must Reinstall Windows."
permalink: /kb/172/Q172378/
---

## Q172378: Error Message: Error Loading. You Must Reinstall Windows.

	Article: Q172378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  Error loading. You must reinstall Windows.
	
	CAUSE
	=====
	
	This error message can occur if the "shell=" line in the System.ini file is
	missing the reference to the Explorer.exe file.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the System.ini file in the
	  Windows folder.
	
	2. Modify the "shell=" line so that it reads:
	
	  " shell=explorer.exe " (without the quotation marks)
	
	3. Save and then close the System.ini file, and then restart Windows 95.
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Hardware          : x86
	
	=============================================================================
	
