---
layout: page
title: "Q148710: XCLN: Appears to Hang on Start w/ Profile Dialog Open"
permalink: /kb/148/Q148710/
---

## Q148710: XCLN: Appears to Hang on Start w/ Profile Dialog Open

	Article: Q148710
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Profiles dialog box is open when the Microsoft Exchange client is
	started, the client will appear to hang with the opening screen.
	
	NOTE: You will not receive an error message.
	
	
	CAUSE
	=====
	
	This is by design.
	
	Messaging Application Programming Interface (MAPI) has a mutex on the provider
	property sheet and will not let go until the Properties dialog box is closed.
	
	RESOLUTION
	==========
	
	Close the Profiles dialog box, and you can run the Microsoft Exchange client.
	
	Additional query words: hang properties exchange
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
