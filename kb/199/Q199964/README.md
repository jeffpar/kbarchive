---
layout: page
title: "Q199964: XCLN: Err Msg: The Delegate Page Is Not Available. Unable to Acc"
permalink: kb/199/Q199964/
---

## Q199964: XCLN: Err Msg: The Delegate Page Is Not Available. Unable to Acc

	Article: Q199964
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:95,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access the Delegate tab in the Microsoft Outlook client, you
	may receive the following error message:
	
	  The Delegate page is not available. Unable to access Outlook folder.
	
	CAUSE
	=====
	
	This error may be caused by a corrupt Exchange Server mailbox.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Download all the information in the mailbox to a .pst file (personal folder)
	  by changing the delivery location in the properties for the Exchange Server
	  service.
	
	2. Remove the corrupt mailbox using the Exchange Server Admin program and create
	  a new Exchange Server mailbox.
	
	3. Mail from the personal folders can be uploaded to the server again by
	  manually dragging the messages back to the mailbox folders.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :; WINDOWS:95,98
	
	=============================================================================
	
