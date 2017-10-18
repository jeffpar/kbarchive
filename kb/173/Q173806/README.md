---
layout: page
title: "Q173806: XCLN: MS Fax and Exchange Run Slowly in Same Profile"
permalink: kb/173/Q173806/
---

## Q173806: XCLN: MS Fax and Exchange Run Slowly in Same Profile

	Article: Q173806
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add the Microsoft Exchange Server service to a profile already
	containing Microsoft Fax, operations such as composing a new fax, startup, or
	sending mail may slow down considerably. This only affects clients attaching
	remotely to the Microsoft Exchange Server computer through a dial up connection.
	If the client is set to work offline, this problem does not occur.
	
	CAUSE
	=====
	
	When you open the Exchange profile or compose a new fax, Microsoft Fax is trying
	to initialize the communications port. At the same time, the Exchange Server
	service is trying to check for new mail, and use the communications port as
	well.
	
	WORKAROUND
	==========
	
	To work around this problem, set up separate profiles for Microsoft Fax and
	Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Win95
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
