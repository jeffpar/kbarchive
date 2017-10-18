---
layout: page
title: "Q253619: XCON: MTA Logs Event 3150 Receiving Invalid Message"
permalink: kb/253/Q253619/
---

## Q253619: XCON: MTA Logs Event 3150 Receiving Invalid Message

	Article: Q253619
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An event similar to the following may be logged in the application event log:
	
	  Event ID: 3150
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description:
	  An internal MTA error occurred. Object 00000000 failed integrity verification.
	  DB Attribute: 0. OM attribute: 0. Entity Name:
	  /o=Site/ou=Server/cn=Configuration/cn=Connections/cn=Internet Mail Connector
	  (SERVERNAME). [XAPI GATEWAY 30 1 130 (14).
	
	The incoming message is lost and the sender does not receive a non-delivery
	report (NDR).
	
	CAUSE
	=====
	
	This issue can occur if the Internet Mail Service builds an invalid X.400
	message. The message is invalid because the MTS Identifier (MTS-ID) is missing
	the global domain identifier; only the local string identifier is present.
	
	This can occur if the X.400 address of the administrator mailbox for the Internet
	Mail Service is comprised of uppercase characters, for example:
	
	  C=US; A=ADMD; P=PRMD; S=Administrator
	
	The Internet Mail Service can only process the "c=," "a=," and "p=" if they are
	lowercase characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, edit the E-mail Addresses raw property of the
	administrator mailbox for the Internet Mail Service, and change the "C=," "A=,"
	and "P=" in the X.400 address to "c=," "a=," and "p=."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: imc ims
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
