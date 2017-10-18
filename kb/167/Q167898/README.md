---
layout: page
title: "Q167898: XCLN: Error Opening .xls from Public Folder"
permalink: kb/167/Q167898/
---

## Q167898: XCLN: Error Opening .xls from Public Folder

	Article: Q167898
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.03 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The problem described in this article occurs when you use a Microsoft Exchange
	Windows 95 client or Microsoft Outlook client and attempt to open a Microsoft
	Excel 7.0 spreadsheet, PowerPoint 7.0 presentation, or Word 97 document that has
	been posted to an Exchange public folder. The following error message will
	appear:
	
	On Exchange 4.0 and 5.0 clients:
	
	  A problem occurred while working with, or connecting to, a
	  linked or embedded object or its source application.
	
	On Outlook clients:
	
	  Outlook could not track the program used to open this
	  document. Any changes you make to the document will
	  not be saved to the original document.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Start Excel before you open the spreadsheet. Start Word before you open the
	  document. Start PowerPoint before you open the presentation.
	
	  -or-
	
	- For Excel, remove the AutoSave Add-in. Start Excel. On the Tools menu, click
	  Add-ins. Clear the AutoSave check box.
	
	- For Word, start the program. On the Tools menu, click Options, click the Save
	  tab. Clear the Allow Background Saves check box.
	
	  -or-
	
	- For Excel:
	
	  1. Open the Excel file from another workstation.
	
	  2. Save the file as an Excel 5.0/95 worksheet.
	
	  3. Repost the new file to the public folder.
	
	- For Word:
	
	  1. Open the Word 97 file from another workstation.
	
	  2. Save the file in another format, for example, save it as a Word 6.0/95
	     document.
	
	  3. Repost the new file to the public folder.
	
	- For PowerPoint:
	
	  1. Open the PowerPoint presentation from another workstation.
	
	  2. Save the file in another format such as PowerPoint 95 or Rich Text Format.
	
	  3. Repost the new file to the public folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook803 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.03
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
