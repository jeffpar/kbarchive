---
layout: page
title: "Q258538: PRB: Printing to a USB Printer Could Cause Fatal Exception Error"
permalink: /kb/258/Q258538/
---

## Q258538: PRB: Printing to a USB Printer Could Cause Fatal Exception Error

{% raw %}

	Article: Q258538
	Product(s): Microsoft FoxPro
	Version(s): 6.0,95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet kbO
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing to a Hewlett Packard Universal Serial Bus (USB) port printer may cause
	a Fatal Exception error.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a computer that is running one of the platforms listed above, install two
	  printers:
	
	   - One parallel port printer, set as the default printer.
	
	   - One Hewlett Packard USB printer.
	
	2. Copy the following code to a program file, and change "MyReport" to the name
	  of a test report that you have created:
	
	  lcName = ""
	  lcName = GETPRINTER()
	  IF !EMPTY(lcName)
	    SET PRINTER TO NAME (lcName)
	    REPORT FORM MyReport TO PRINTER NOCONSOLE
	  ENDIF
	
	3. Run the program.
	
	4. When prompted, select the USB printer.
	
	5. When prompted with the Printer Not Ready message, click OK.
	
	This generates a Fatal Exception Error C0000005, and quits Visual FoxPro.
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: C0000005
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport kbCodeSnippet kbOSWinME 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :6.0,95,98,98 Second Edition
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
