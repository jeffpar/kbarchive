---
layout: page
title: "Q81637: CTRL+D EOF Character in PostScript Print Job May Cause Error"
permalink: kb/081/Q81637/
---

## Q81637: CTRL+D EOF Character in PostScript Print Job May Cause Error

	Article: Q81637
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use a Windows-supported driver, PostScript-generated output always
	starts and ends with a CTRL+D (ASCII 04) key sequence.
	
	CTRL+D is an end-of-file (EOF) reset code used to ensure that the printer is set
	correctly for the next print job. However, this character can cause a job not to
	print through UNIX-based networks (for example, Banyan VINES, AT&T Star
	Group, and Sun) and other printing-control software.
	
	MORE INFORMATION
	================
	
	Follow the appropriate procedure below to allow your print job to finish.
	
	Windows 3.1 and 3.11
	--------------------
	
	1. Edit the WIN.INI file [ModelName,Port] section with an ASCII text editor,
	  such as Windows Notepad.
	
	  NOTE: When you install a PostScript printer for the first time, you must go
	  into Printer Setup in Control Panel for this setting to work correctly.
	  Simply installing the printer is not enough. The [ModelName,Port] section is
	  not written into the WIN.INI file until you choose the Setup button in the
	  Printers area of Control Panel.
	
	2. Add the following:
	
	  " CTRLD=0" (without the quotation marks)
	
	  NOTE: The Options menu in the PostScript printer driver allows you to create
	  encapsulated PostScript (EPS) files. These files do not contain CTRL+D
	  characters. EPS files do not contain any of the printer-specific instruction
	  codes, which are sometimes necessary, that a PostScript file does. EPS files
	  are primarily intended to be graphics or other output that is imported into
	  another application and not printed directly.
	
	Windows 3.0 and 3.0a
	--------------------
	
	The only way to eliminate the CTRL+D character from the PostScript file is to
	create a PRN file, then load it into a text editor and manually remove the
	character.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 postscript UNIX control diamond
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
