---
layout: page
title: "Q248791: XCLN: Send To from Office 97 Doesn't Work on Windows TS"
permalink: /kb/248/Q248791/
---

## Q248791: XCLN: Send To from Office 97 Doesn't Work on Windows TS

	Article: Q248791
	Product(s): Microsoft Exchange
	Version(s): ; winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- the operating system: Microsoft Windows NT 4.0 SP5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use a Microsoft Office 97 application such as Microsoft Word or
	Microsoft Excel and click Send To on the File menu, and then click Mail
	Recipient, you may get one of the following error messages
	
	  There was a problem starting Microsoft Schedule+. Memory is low. Close some
	  windows before continuing.
	
	followed by
	
	  The form you selected could not be displayed. The form required to view this
	  message cannot be displayed. Contact your administrator.
	
	-or-
	
	  The object could not be found.
	
	followed by:
	
	  Word couldn't send mail because of MAPI failure: "Unspecified Error".
	
	RESOLUTION
	==========
	
	To resolve this problem, modify the following registry entry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_CURRENT_USER/Software/Microsoft/Windows NT/Current Version/Windows
	  Messaging Subsystem/Simple MAPI- CMC/SendNoteUI = 1
	
	The default value is zero. Setting the value to one allows you to send mail from
	Office 97 applications using Outlook 97.
	
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :; winnt:4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
