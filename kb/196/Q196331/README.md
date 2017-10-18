---
layout: page
title: "Q196331: XADM: X.500 Proxy Address Creation by Move Server Wizard"
permalink: kb/196/Q196331/
---

## Q196331: XADM: X.500 Proxy Address Creation by Move Server Wizard

	Article: Q196331
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When the Microsoft Exchange Server Move Server Wizard (MSW) is run, an X.500
	proxy address is created for each user using the old Organization and Site name.
	This address is set as the primary X.500 proxy address.
	
	MORE INFORMATION
	================
	
	If the same server is moved again, a second X.500 proxy address is created using
	the old Organization and Site name resulting from the first server move. This
	address is set as the primary X.500 proxy address, with the first X.500 address
	still present as a secondary proxy address.
	
	The X.500 address is used to enable replies from the old site to be redirected to
	the correct user in the new site. This feature works in conjunction with a
	message transfer agent (MTA) change in Exchange Server 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
