---
layout: page
title: "Q255192: Terminal Server Client Cannot Perform Send To/Mail Recipient"
permalink: /kb/255/Q255192/
---

## Q255192: Terminal Server Client Cannot Perform Send To/Mail Recipient

	Article: Q255192
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Terminal Server client, when you try to send a file from Windows Explorer
	as an attachment to an e-mail message by right-clicking the file, clicking Send
	To, and then clicking Mail Recipient, Outlook may not start and you may receive
	the following error message:
	
	  The object could not be found
	
	When you start Outlook manually before you use the Send To option, the process
	works properly.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following procedures:
	
	- Copy the Frmcache.dat file from the C:\Windows\Forms folder to the user's
	  %SystemRoot%\Profiles\%username%\Windows\Forms folder.
	
	  -or-
	
	- Delete or rename the Home Directory Forms folder.
	
	MORE INFORMATION
	================
	
	To prevent this behavior in the future, run the Windows Messaging compatibility
	script.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOSWinSearch kbOSWinNT400 kbOutlook98Search kbZNotKeyword3 kbOSWinNTSearch
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
