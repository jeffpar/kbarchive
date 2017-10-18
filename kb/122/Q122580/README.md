---
layout: page
title: "Q122580: PC Win: Excel 5.0 Attachments Fail to Open"
permalink: kb/122/Q122580/
---

## Q122580: PC Win: Excel 5.0 Attachments Fail to Open

	Article: Q122580
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	- Microsoft Excel for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a Microsoft Excel attachment from a Microsoft Mail for PC
	Networks Windows client, Excel starts but the file attachment is not loaded. The
	only menu options available are File and Help.
	
	CAUSE
	=====
	
	This behavior occurs if you have checked the Ignore Other Applications option in
	Excel. This option allows Excel to start, but tells Excel to ignore all
	parameters passed to it, including filenames. When Microsoft Mail opens an Excel
	attachment, it sends the command to start Excel and passes the attachment
	filename as a parameter.
	
	RESOLUTION
	==========
	
	You can open the file in Excel by choosing Open from the File menu.
	
	MORE INFORMATION
	================
	
	To check or uncheck the Ignore Other Applications option, perform the following
	steps:
	
	1. Start Excel.
	
	2. From the Tools menu, choose Options.
	
	3. Select the General tab.
	
	4. Check or uncheck the Ignore Other Applications box.
	
	Additional query words: 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbExcel500 kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a,5.0
	
	=============================================================================
	
