---
layout: page
title: "Q91048: Transmission Retry Field Displays 100 Instead of 1000"
permalink: kb/091/Q91048/
---

## Q91048: Transmission Retry Field Displays 100 Instead of 1000

	Article: Q91048
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the Transmission Retry field in the Connect dialog box to 996, 997,
	998, or 999 and choose the OK button, the setting is rounded to 1000. Because
	the Transmission Retry field is limited to three digits, the number 100 is
	displayed. (To set the Transmission Retry field, choose the Printer icon from
	the Control Panel window, select your printer, and choose the Connect button.)
	
	To view the last zero in the number 1000, you must highlight the entire
	Transmission Retry field with the mouse. The actual value (that is, 1000) is set
	for the printer driver in the [windows] section of the WIN.INI file.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
