---
layout: page
title: "Q128399: MS-DOS-Based Application Checks for Existence of Windows"
permalink: /kb/128/Q128399/
---

## Q128399: MS-DOS-Based Application Checks for Existence of Windows

	Article: Q128399
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS-based application in Windows 95, the application may try
	to exit Windows 95 or you may receive an error message similar to the following
	message:
	
	  This program does not run under Windows.
	
	CAUSE
	=====
	
	Some MS-DOS-based applications are designed to check for the existence of
	Windows and fail if Windows is found to be running.
	
	WORKAROUND
	==========
	
	Windows 95 has an option for this type of MS-DOS-based application. Follow these
	steps to use the "Prevent MS-DOS-based programs from detecting Windows" option:
	
	1. Use the right mouse button to click the icon for the MS-DOS-based program,
	  then click Properties on the menu that appears.
	
	2. Click the Program tab, then click the Advanced button.
	
	3. Click the "Prevent MS-DOS-based programs from detecting Windows" check box,
	  then click the OK button twice.
	
	MORE INFORMATION
	================
	
	When you choose the "Prevent MS-DOS-based programs from detecting Windows"
	option, Windows 95 does the following:
	
	- Removes WINDIR as an environment variable for that application.
	
	- Returns a message stating that Windows is not running if the MS-DOS- based
	  application checks to see if Windows is running or what mode Windows is
	  running in.
	
	
	NOTE: If you use this option you cannot run Windows-based applications from this
	command prompt.
	
	Additional query words: stealth virtual machine vm
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
