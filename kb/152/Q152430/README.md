---
layout: page
title: "Q152430: XCLN: Exchange NT Client will not Allow Terminal Window"
permalink: /kb/152/Q152430/
---

## Q152430: XCLN: Exchange NT Client will not Allow Terminal Window

	Article: Q152430
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Office 97 for Windows, Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange client or Outlook client for Windows NT in
	remote mode and click Connect from the Tools menu, the following error might be
	displayed:
	
	  An error occurred during the connection. ERROR_INTERACTIVE_MODE.
	
	If you select either Deliver Now or Synchronize from the Tools menu, you might
	receive a session time-out without an error message.
	
	CAUSE
	=====
	
	These problems occur when the specified connection has the Terminal option
	selected via the Advanced Security Settings of the Remote Access Service (RAS)
	manager.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of the Microsoft
	Exchange client for Windows NT and the Service Release 1 version of the
	Microsoft Outlook client for Windows NT. We are researching this problem and
	will post new information here in the Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	You can establish the RAS connection before starting either of the clients.
	
	
	Additional query words: SecurityID WinNT Security Dynamics IMEP
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOffice97Search kbZNotKeyword3 kbExchange400NT kbOffice97SR1
	Version           : WINDOWS:4.0,97
	
	=============================================================================
	
