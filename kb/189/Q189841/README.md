---
layout: page
title: "Q189841: XCLN: Corrupt Calendar Causes &quot;Unable to Open This Item&quot; Message"
permalink: kb/189/Q189841/
---

## Q189841: XCLN: Corrupt Calendar Causes &quot;Unable to Open This Item&quot; Message

	Article: Q189841
	Product(s): Microsoft Exchange
	Version(s): 5.5,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2002 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open an appointment or meeting request in your Outlook
	Calendar, the following error may occur:
	
	  Unable to open this item.
	
	Closing and reopening the Outlook client and/or recreating the meeting request
	has no effect on this error message.
	
	CAUSE
	=====
	
	This error can occur if any of the following become corrupt:
	
	- The Calendar information in your Outlook client
	
	- Items in the Calendar
	
	- The Calendar folder
	
	WORKAROUND
	==========
	
	If deleting and recreating the items that cannot be opened does not correct the
	problem, perform the following steps:
	
	1. Back up all mailbox information by downloading messages to a PST. Personal
	  Folders can be added to your profile by selecting Services from the Tools
	  menu and choosing Add.
	
	2. In the Outlook client, select Import and Export from the File menu.
	
	3. Follow the Import and Export Wizard and select Export to a File.
	
	4. Select a file name and select Calendar as the file to Export from.
	
	5. Delete the Calendar folder; to do this, start an Exchange Client from the
	  command line by typing "exchng32" (without the quotation marks). The calendar
	  folder can be deleted from the Exchange Client because it is viewed as a
	  standard folder and not a required Calendar folder.
	
	6. Recreate the Calendar folder by starting Outlook from the command line using
	  "Outlook /resetfolders" (without the quotation marks).
	
	7. Move all messages back from the PST to the mailbox. From the File menu,
	  choose Import and Export and follow the Import and Export Wizard to import
	  the Calendar data from the file created in steps 3 and 4 above.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook97 kbZNotKeyword2 kbOutlook2000Search kbOutlook2002Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :5.5,8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
