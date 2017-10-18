---
layout: page
title: "Q178721: Exchange Client Cannot Resolve Hidden Recipient"
permalink: kb/178/Q178721/
---

## Q178721: Exchange Client Cannot Resolve Hidden Recipient

	Article: Q178721
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0,8.00,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.00, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a new profile, you may receive a Check Name dialog box
	with the following error message:
	
	  The name could not be resolved. The name could not be matched to a name
	  in the address list.
	
	CAUSE
	=====
	
	The mailbox alias or name attempting to be resolved has been hidden from the
	Exchange Server Address Book.
	
	WORKAROUND
	==========
	
	Open the Exchange Administrator program and temporarily unhide the recipient
	from the Address Book by following these steps:
	
	1. From the View menu, select Hidden Recipients.
	
	2. Double click the Recipients container and highlight the mailbox desired.
	
	3. Double click to view the properties of the mailbox.
	
	4. Select the Advanced tab and uncheck the "Hide from Address Book" option.
	
	5. The name can be resolved at this point. Once this is completed, you can hide
	  the name from the Address Book again if needed.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0,8.00,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
