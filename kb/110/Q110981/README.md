---
layout: page
title: "Q110981: Removing WinFax Pro from Windows for Troubleshooting"
permalink: /kb/110/Q110981/
---

## Q110981: Removing WinFax Pro from Windows for Troubleshooting

	Article: Q110981
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the items added to the WIN.INI and SYSTEM.INI files by
	Delrina WinFax Pro products. For testing purposes, you may need to disable
	WinFax Pro by commenting out these lines.
	
	MORE INFORMATION
	================
	
	WinFax Pro 2.0 and WinFax Lite make the following changes in the WIN.INI file:
	
	- Adding a [winfax] section.
	
	- Adding an entry in the [printerports] and [devices] sections for the WinFax
	  printer driver.
	
	- Adding the following two entries in the [windows] section:
	
	        device=WINFAX,WINFAX,COM1:
	        DelrinaAppInstalled=Yes
	
	WinFax Pro 3.0 makes two additional changes to the WIN.INI file:
	
	- Adding a [wfxpblinks] section.
	
	- Adding an [anyfax] section.
	
	The SYSTEM.INI file is not changed unless the COMM.DRV is changed to accommodate
	a 16550 UART or the COMxFIFO setting is changed in the [386Enh] section to
	disable FIFO buffering. The COMxFIFO setting is ignored unless the serial port
	has a 16550 UART.
	
	NOTE: If the COMM.DRV changed, it equals WFXCOMM.DRV. In this case, comment out
	the line by adding a semicolon to its beginning, and then insert a new line with
	the setting COMM.DRV=COMM.DRV.
	
	You can comment out all these changes by adding a semicolon before each line that
	contains WinFax Pro information, including any section headers in brackets.
	
	The WinFax Pro products included here are manufactured by Delrina Technology, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty tshoot light
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
