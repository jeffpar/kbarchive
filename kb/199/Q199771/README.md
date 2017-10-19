---
layout: page
title: "Q199771: XFOR: Event ID 4106 and 4037 When Starting IMS with Dial-up"
permalink: /kb/199/Q199771/
---

## Q199771: XFOR: Event ID 4106 and 4037 When Starting IMS with Dial-up

	Article: Q199771
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server Internet Mail Service and messages
	are waiting to be delivered, the following Application error message is
	displayed:
	
	  msexcimc.exe -Application Error
	  The instruction at "0x0044e903" referenced memory at "0x000000bd". The memory
	  could not be "read".
	  Click on OK to terminate the application
	  Click on CANCEL to debug the application
	
	In the Microsoft Windows NT Event Viewer, one or both of the following events are
	displayed:
	
	  Event ID 4106
	  Source: MSExchangeIMC
	  Type: Error
	  Category: SMTP Interface Events
	  Description: The dial-up connection <name here> could not be made. The
	  error reported was: (87) The parameter is incorrect.
	
	  Event ID 4037
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal Processing
	  Description: An exception has occurred which was handled internally by the
	  Internet Mail Service. This may have resulted in a message not being
	  delivered. Code: 0xc0000005 Flags: 0x00000000 Address: 0x0044e05c
	
	CAUSE
	=====
	
	To confirm the settings on the Internet Mail Service connector, start the
	Exchange Server Administrator program. The connector configuration that
	generates this error is a dial-up connector that has logon information defined.
	The Domain field contains a name that has 18 or more characters.
	
	WORKAROUND
	==========
	
	The name defined in the Domain field for logon information is the Windows NT
	domain, not an SMTP domain name. Valid Windows NT domain names have 15 or fewer
	characters. Change the value of this field to the appropriate Windows NT domain
	name and restart the computer.
	
	MORE INFORMATION
	================
	
	If you use an invalid domain name in the Logon Information field, you may still
	be able to make the dial-up connection and deliver mail. This happens when you
	dial a UNIX host that discards the logon information.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
