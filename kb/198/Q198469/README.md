---
layout: page
title: "Q198469: XCLN: How to Rename the Inbox in Outlook"
permalink: kb/198/Q198469/
---

## Q198469: XCLN: How to Rename the Inbox in Outlook

	Article: Q198469
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,95,98; :8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Outlook special folders cannot be renamed from within the Outlook client
	interface, and must be modified using the Microsoft Exchange Client.
	
	MORE INFORMATION
	================
	
	The following steps outline how to change the name of an Outlook special folder
	back to the default name (Inbox, Sent Items, Contacts, Journal, Tasks), or to
	another custom name.
	
	1. Exit and log off of Outlook.
	
	2. Click Start, Run, type "exchng32.exe" (without the quotation marks) in the
	  Open text box, and click OK.
	
	  -or-
	
	  Log on to the Exchange Server maibox using a computer with Exchng32.exe
	  installed.
	
	3. From within the Exchange Client, click the View menu, and click Folder.
	
	4. Right-click the folder that is to be renamed, and select Rename.
	
	5. Exit and log off of the Exchange Client, and log back on to Outlook.
	
	For additional information about possible problems moving mailboxes if the Inbox
	has been renamed, please see following article in the Microsoft Knowledge Base:
	
	  Q168188 XADM: Possible Loss of Mail with Move Mailbox
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,95,98; :8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
