---
layout: page
title: "Q44880: Definition of Windows Temporary Files"
permalink: /kb/044/Q44880/
---

## Q44880: Definition of Windows Temporary Files

	Article: Q44880
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	A Windows "temporary" file is created under these circumstances:
	
	- Windows Desktop (Write, etc.) and MDI (multiple document interface)
	  applications (such as Excel) create temporary files to handle necessary user
	  editing.
	
	  Because a Desktop application cannot have multiple documents open at once, it
	  must immediately create a temporary file that allows you to "undo" any
	  editing, etc. MDI applications create temporary files only when needed (for
	  related editing), rather than for every worksheet that is open.
	
	- When running an MS-DOS standard application under Windows/286, Windows/286
	  creates a temporary file (for example, ~PIFCHFA.TMP) so it can swap to disk
	  to make room for other applications to use memory.
	
	- When printing from Windows or any Windows application with the spooler
	  enabled, Windows creates temporary files on the hard disk. Windows spools the
	  print job to the temporary file and then sends it to the appropriate printer
	  as a background operation.
	
	Microsoft recommends that there be approximately 2 MB of free disk
	space available for the creation of temporary files.
	
	Additional query words: 2.0 2.03 2.1 2.10 2.11 3.0 3.00 3.1 3.10 win31 3.11 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
