---
layout: page
title: "Q265070: XCLN: Error Message Occurs When You Reply to Or Forward E-mail"
permalink: /kb/265/Q265070/
---

## Q265070: XCLN: Error Message Occurs When You Reply to Or Forward E-mail

	Article: Q265070
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Outlook 97 and Outlook 98, when you attempt to reply to or forward an e-mail
	message, you may receive the following error message:
	
	  Cannot load the template for the item. Please reinstall Microsoft Outlook.
	
	CAUSE
	=====
	
	This behavior can occur if the folders or files in the C:\Program
	Files\Microsoft Office\Office\Headers folder have been moved or deleted.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the C:\Program Files\Microsoft Office\Office\Headers
	folder from a working machine to the affected machine.
	
	You can also remove and reinstall Outlook to regenerate the Headers folder and
	its contents, but this is not required if you have access to a functioning
	Headers folder from another machine.
	
	MORE INFORMATION
	================
	
	This issue can occur when you install an Outlook 97 or Outlook 98 program that
	has a damaged or missing Headers folder. The issue occurs regardless of the mail
	message format you use for editing. When this issue occurs, new e-mail messages
	can still be created. This error message does not occur in Outlook 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	
