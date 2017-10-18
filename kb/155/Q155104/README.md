---
layout: page
title: "Q155104: XCON: Event ID 178 Results if Mailbox Has No X.400 Address"
permalink: kb/155/Q155104/
---

## Q155104: XCON: Event ID 178 Results if Mailbox Has No X.400 Address

	Article: Q155104
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent might generate the following
	warning in Event Viewer if a message is sent from a user whose mailbox has no
	associated X.400 address:
	
	  Event ID 178,Source:MSExchangeMTA,Category:X400 Service An error occurred
	  while transferring in message C=US;A= ;P=Org;L=MTAName-#############-##
	  because the Directory name could not be expanded to an O/R Address. An X.400
	  API Association (XAPIA) unable-to-transfer reason code and
	  unrecognized-OR-name diagnostic code were returned. (MTA SUBMIT 16 73)(14)
	
	The following Non-Delivery Report (NDR) will be returned to the sender:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: The subject
	  Sent: 8/21/96 9:56:10 pm
	
	  The following recipient(s) could not be reached:
	
	  'John Smith' on 8/21/96 9:58:28 am
	  Unable to deliver the message due to a recipient problem
	  MSEXCH:MSExchangeIS:SiteName:MTAName
	
	RESOLUTION
	==========
	
	The problem can be corrected by adding a valid X.400 address to the sender's
	mailbox properties on the Email Addresses tab in the Microsoft Exchange
	Administrator program.
	
	MORE INFORMATION
	================
	
	A similar condition might also result if the recipient of the message does not
	have a valid X.400 address.
	
	This condition does not affect message delivery between mailboxes on the same
	Microsoft Exchange Server because the Information Store submits the message to
	the mailbox directly. It will only occur when the message is being routed to
	another Microsoft Exchange Site via one of the Site Connectors, when the message
	is going between two Microsoft Exchange Servers in the same Site, or when a
	message is addressed to go out a connector to a foreign system, in other words,
	using the Microsoft Exchange Internet Mail Connector.
	
	The X.400 addresses in Microsoft Exchange should never be deleted because
	Microsoft Exchange is a native X.400 messaging system.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
