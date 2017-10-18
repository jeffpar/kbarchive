---
layout: page
title: "Q174030: XWEB: Outlook Web Access Client Fails if JavaScript Disabled"
permalink: kb/174/Q174030/
---

## Q174030: XWEB: Outlook Web Access Client Fails if JavaScript Disabled

	Article: Q174030
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When you attempt to open a Microsoft Exchange Mailbox using Outlook Web Access
	(OWA), the mailbox may appear frozen or hung without displaying any error
	messages. The mailbox itself is viewable, but no functions can be performed.
	
	CAUSE
	=====
	
	JavaScript may be disabled in your Internet browser. This will allow the mailbox
	to be opened, but because the functions are dependent upon JavaScript, nothing
	can be done. The Microsoft Exchange Server knows nothing about the client
	configuration so there are no error messages displayed to warn the user that no
	functionality is available.
	
	RESOLUTION
	==========
	
	Enable JavaScript in the browser and reopen the mailbox or refresh the browser.
	This will allow the changes to take effect and the client will function
	properly.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
