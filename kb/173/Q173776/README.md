---
layout: page
title: "Q173776: XADM: Custom Recipients Cannot Be Accessed via IMAP or POP3"
permalink: kb/173/Q173776/
---

## Q173776: XADM: Custom Recipients Cannot Be Accessed via IMAP or POP3

	Article: Q173776
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following events may be logged in the Microsoft Windows NT Application Event
	Log during an attempt to log on to a custom recipient from an IMAP client:
	
	  Event ID: 1023
	
	  Source: MSExchangeIS Private
	
	  Type: Failure Audit
	
	  Category: Logons
	
	  Description:  DOMAIN\username was validated as
	
	  /o=OrgName/ou=SiteName/cn=Recipients/cn=mailboxname but was unable to
	
	  log on to /o=OrgName/ou=SiteName/cn=Recipients/cn=mailboxname.
	
	  Event ID: 13003
	
	  Source: MSExchange IMAP4
	
	  Type: Error
	
	  Category: Authentication
	
	  Description: Logon attempt from 1.1.1.1 to username/mailboxname has failed:
	
	  EcDoPrivateLogon() call failed with error Logon failure.
	
	  Event ID: 11202
	
	  Source: MSExchange IMAP4
	
	  Type: Success Audit
	
	  Category: Authentication
	
	  Description: An IMAP4 client 1.1.1.1 successfully logged on to the mailbox username/mailboxname.
	
	This last event is only logged if Diagnostics Logging for the Authentication
	category is set to at least minimum.
	
	The following event may be logged in the Application Event Log during an attempt
	to log on to a custom recipient from a POP3 client:
	
	  Event ID: 13003
	
	  Source: MSExchange POP3
	
	  Type: Error
	
	  Category: Authentication
	
	  Logon attempt from 1.1.1.1 to username/mailboxname has failed:
	
	  EcGetMailboxDN() call failed with error. The requested mailbox is not
	
	  available on this server.
	
	CAUSE
	=====
	
	A custom recipient object on a Microsoft Exchange Server computer does not have
	a physical mailbox associated with it. Therefore, it is not possible for a POP3
	or IMAP client to access a custom recipient object on a Microsoft Exchange
	Server computer. This behavior is by design.
	
	MORE INFORMATION
	================
	
	None of the protocols listed on the Protocols tab of a custom recipient object
	can be used to access a custom recipient.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2
	Version           : :5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2
	
	=============================================================================
	
