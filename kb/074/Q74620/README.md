---
layout: page
title: "Q74620: Problems Printing to FILE:="
permalink: /kb/074/Q74620/
---

## Q74620: Problems Printing to FILE:=

	Article: Q74620
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When FILE:= is below the tenth line in the [ports] section, the print command
	issued within an application prints directly to a file called FILE in the
	application's directory.
	
	FILE:= will be below the tenth line in the [Ports] section of the WIN.INI file,
	when the following conditions are true:
	
	- You select a default printer connected to FILE in the Control Panel.
	
	- Each time the print option is selected in a Windows application, a dialog box
	  reports "Sending to Printer."
	
	- You are not prompted for the name of the output file.
	
	MORE INFORMATION
	================
	
	To check the [Ports] section of the WIN.INI file, follow these steps:
	
	1. Open the WIN.INI file.
	
	2. Scroll to the [Ports] section.
	
	3. Check to see which line contains FILE:=.
	
	Repositioning FILE:= above the eleventh line, saving the WIN.INI file, exiting
	Windows, and restarting Windows allows you to successfully print to a user-named
	file. (When printing from within a Windows application, you are prompted for the
	filename).
	
	Additional query words: 3.00 3.0 3.0a 3.00a windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
