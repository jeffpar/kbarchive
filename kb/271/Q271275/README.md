---
layout: page
title: "Q271275: XADM: Event IDs 11506 or 11508 with error 0x2740 Are Logged"
permalink: /kb/271/Q271275/
---

## Q271275: XADM: Event IDs 11506 or 11508 with error 0x2740 Are Logged

	Article: Q271275
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Exchange Server information store, some or all of the
	following event ID messages may be logged in the Application event log:
	
	  Event Type: Error
	  Event Source: MSExchange Pop3 Interface
	  Event Category: Configuration
	  Event ID: 11508
	  Description:
	  Accept clients on POP3 interface failed in function HrRegisterProtocol with
	  error 0x2740.
	
	  Event Type: Error
	  Event Source: MSExchangeIS
	  Event Category: General
	  Event ID: 1194
	  Description:
	  Accept clients on external interface POP3 failed with error 0x80004005.
	
	  Event Type: Error
	  Event Source: MSExchange NNTP Interface
	  Event Category: Configuration
	  Event ID: 11506
	  Description:
	  Accept clients on NNTP interface failed in function HrRegisterProtocol with
	  error 0x2740.
	
	  Event Type: Error
	  Event Source: MSExchangeIS
	  Event Category: General
	  Event ID: 1194
	  Description:
	  Accept clients on external interface NNTP failed with error 0x80004005.
	
	  Event Type: Error
	  Event Source: MSExchange IMAP4 Interface
	  Event Category: Configuration
	  Event ID: 11506
	  Description:
	  Accept clients on IMAP4 interface failed in function HrRegisterProtocol with
	  error 0x2740.
	
	  Event Type: Error
	  Event Source: MSExchangeIS
	  Event Category: General
	  Event ID: 1194
	  Description:
	  Accept clients on external interface IMAP4 failed with error 0x80004005.
	
	NOTE: If the error code 0x2740 is not present in the event ID 11506 or event ID
	11508 message, then this article does not describe the issue you are
	experiencing.
	
	CAUSE
	=====
	
	This issue can occur if another program is using the Transmission Control
	Protocol (TCP) port that the information store uses for the corresponding
	protocol. If a program is already using port 110, 119 or 143, the information
	store is unable to open these ports for the Post Office Protocol, version 3
	(POP3), Network News Transport Protocol (NNTP) or Internet Message Access
	Protocol, version 4rev1 (IMAP4) protocols respectively.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit the program or service that is using the ports that
	the information store uses, or configure the program to use different ports.
	
	MORE INFORMATION
	================
	
	You can use the Netstat.exe utility to display the ports that are in use on the
	Exchange Server computer. To do so:
	
	1. Open a command prompt, and then run the following command:
	
	  netstat -an
	
	2. In the Local Address column, look for an Internet protocol (IP) address and
	  port combination that ends with the port in question.
	
	For example, if you receive an error message that indicates that the information
	store is unable to register the POP3 port (110), stop the Information Store
	service, run netstat -an, and then look in the Local Address column for a line
	ending in ":110". This line indicates that port 110 is currently in use.
	
	
	Additional query words: proxy socket
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
