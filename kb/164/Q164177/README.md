---
layout: page
title: "Q164177: XFOR: Error 2410 When Starting the MSMI"
permalink: /kb/164/Q164177/
---

## Q164177: XFOR: Error 2410 When Starting the MSMI

	Article: Q164177
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Mail Connector Interchange (MSMI), you may receive
	the following event:
	
	  Event ID: 2410
	  Type: Error
	  Source: MSExchangeMSMI
	  Category: Session Error
	  Description:
	
	  MS Mail Connector Interchange has failed to establish a session
	  with the Directory services. The return code is 0x105.
	
	CAUSE
	=====
	
	The MSMI cannot establish a session with the Exchange directory service. The
	MSMI still starts and appears to run, but it will not deliver any mail. This
	occurs if the System Account is selected instead of the Exchange service
	account.
	
	RESOLUTION
	==========
	
	To resolve this problem, check the startup parameters for the MSMI. Make sure
	"This Account" is selected in the Log On As box and the Exchange service account
	is selected.
	
	To verify this:
	
	1. Open Control Panel.
	
	2. Double-click the Services icon.
	
	3. Double-click the Microsoft Mail Connector Interchange service.
	
	4. Verify that the Exchange service account is listed as the startup account.
	
	Additional query words: queued queue
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
