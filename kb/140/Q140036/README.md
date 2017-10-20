---
layout: page
title: "Q140036: Slow Network Printing from MS-DOS-Based Programs"
permalink: /kb/140/Q140036/
---

## Q140036: Slow Network Printing from MS-DOS-Based Programs

{% raw %}

	Article: Q140036
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork kbprint win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from an MS-DOS-based program, it may take from 60 to 90 seconds
	before printing begins, causing the program to pause. Quitting the program
	causes printing to begin immediately.
	
	This behavior may also occur when you use the PRINT SCREEN key in an MS-DOS-based
	program.
	
	CAUSE
	=====
	
	This problem can occur if the MS-DOS-based program does not close the printer
	port. By default, Windows 95 waits 45 seconds after the program stops sending
	information before printing the document.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the following lines to the appropriate sections of
	the System.ini file, and then restart your computer:
	
	  [Network]
	  PrintBufTime=10
	
	  [IFSMGR]
	  PrintBufTime=10
	
	NOTE: If the [Network] or [IFSMGR] sections do not exist in the System.ini file,
	add the sections after the [386Enh] section of the file.
	
	These settings are in seconds. The lower the value you use, the sooner the
	document is printed. If you do not receive any printout, or documents are
	printed over multiple pages, the settings may be too low. Increase the settings
	until documents are printed correctly.
	
	MORE INFORMATION
	================
	
	The entry in the [Network] section controls the network printing timeout using
	the real-mode redirector (outside of Windows 95). The entry in the [IFSMGR]
	section controls the network printing timeout using the protected- mode
	redirector (within Windows 95). By default, this value is set to 45 seconds.
	
	Note that these settings may affect local as well as network printing.
	
	======================================================================
	Keywords          : kbnetwork kbprint win95 kbPrinting 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
