---
layout: page
title: "Q117337: Full Network Printer Path Not Shown in Microsoft Excel 5.0"
permalink: /kb/117/Q117337/
---

## Q117337: Full Network Printer Path Not Shown in Microsoft Excel 5.0

	Article: Q117337
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Excel for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Print on the File menu in Microsoft Excel 5.0, the full path to
	the network printer is not displayed.
	
	
	NOTE: Microsoft Excel 4.0 for Windows, Microsoft Word 6.0 for Windows, and other
	programs correctly display the full network printer path in the Print dialog
	box.
	
	WORKAROUND
	==========
	
	To view the entire path for the network printer, click the Printer Setup button
	in the Print dialog box.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you print to a network printer using Microsoft Excel 5.0 in Windows 95, the
	Print dialog box displays the share name for the network printer. It does not
	display the computer name. For example, if the printer is shared on a computer
	with the name PRINTSERV and the share name is PRINTER1, the Print dialog box
	displays the following information:
	
	  Printer: <type of printer> on PRINTER1
	
	The expected display should read:
	
	  Printer: <type of printer> on \\PRINTSERV\PRINTER1
	
	This does not affect the ability of Microsoft Excel 5.0 to use to network
	printers.
	
	Additional query words: xl print net
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbWin95search kbExcel500 kbZNotKeyword3
	
	=============================================================================
	
