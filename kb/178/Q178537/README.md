---
layout: page
title: "Q178537: XCON: NDR and Event ID 3150 When Sending to PAB Entry"
permalink: /kb/178/Q178537/
---

## Q178537: XCON: NDR and Event ID 3150 When Sending to PAB Entry

	Article: Q178537
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send mail to an X.400 personal address book (PAB) entry or one-off
	address, you may receive the following non-delivery report (NDR):
	
	  The following recipient(s) could not be reached:
	
	     'Recipient' on 10/16/97 8:13 AM
	           Unable to deliver the message due to a recipient problem
	           MSEXCH:MSExchangeIS:SiteName:ServerName
	
	In addition, the following event will be logged in the application log of the
	Microsoft Exchange Server computer:
	
	  Event ID: 3150
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X400 Service
	
	  Description:
	  An internal MTA error occurred. Object 06000056 failed integrity
	  verification. DB attribute: 0. OM attribute: 0. Entity name:
	
	  /o=Organization/ou=SiteName/cn=Configuration/cn=Servers/cn=Servername/cn
	  =Organization Private MDB. [XAPI  APPLICATION 31 130 (14)
	
	The object ID referenced in the event description will vary.
	
	CAUSE
	=====
	
	The target X.400 address does not have a value for Surname(s). According to the
	X.400 specification, a surname is required for an X.400 address to be valid.
	
	RESOLUTION
	==========
	
	To resolve this problem, add a surname to the PAB entry or one-off address.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
