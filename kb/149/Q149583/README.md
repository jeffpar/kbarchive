---
layout: page
title: "Q149583: XCLN: Directory Could Not be Expanded to an O/R Address"
permalink: kb/149/Q149583/
---

## Q149583: XCLN: Directory Could Not be Expanded to an O/R Address

	Article: Q149583
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client sends a message, they receive an error message from the
	MSExchangeMTA that states:
	
	  An error occurred while transferring in a message C=<country>;A=<
	  >; P=<Organization>;L=<servername> because the Directory could
	  not be expanded to an O/R address.
	
	  Event ID 178.
	
	CAUSE
	=====
	
	The account designated as the Microsoft Exchange Internet Mail Connector (IMC)
	administrator is missing an X400 address.
	
	RESOLUTION
	==========
	
	You need to either give the administrator's account an X400 address or assign a
	different account as the IMC administrator. Adding an X400 address is done on
	the E-Mail Addresses tab of the account's property page. Assigning a different
	administrator account is done by clicking the Change button on the IMC's
	property page.
	
	MORE INFORMATION
	================
	
	If the IMC service is stopped with the administrator's X400 address missing, it
	will not restart with a Dr. Watson and a 1067 error.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
