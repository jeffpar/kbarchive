---
layout: page
title: "Q141389: DOCERR: Incorrect SET PRINTER Command Syntax for Net Printers"
permalink: /kb/141/Q141389/
---

## Q141389: DOCERR: Incorrect SET PRINTER Command Syntax for Net Printers

{% raw %}

	Article: Q141389
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Visual FoxPro Version 3.0 Help file, the syntax given for connecting to a
	network printer is incorrect.
	
	MORE INFORMATION
	================
	
	The incorrect syntax:
	
	     SET PRINTER TO [\\MachineName\PrinterName = Destination]
	
	The correct syntax:
	
	     SET PRINTER TO NAME [\\ServerName\PrinterName]
	
	This syntax is valid only in Windows NT. It does not work under Windows 95 or
	Win32s. Unlike Windows NT, neither Windows 95 nor Win32s supports automatic
	driver downloading. Without automatic driver downloading, the user must select a
	printer driver in the control panel to go along with the network address.
	
	This documentation error was corrected in Visual FoxPro 3.0b for Windows.
	
	For additional information on the SET PRINTER command, please see the "SET
	PRINTER" topic in the Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
