---
layout: page
title: "Q146944: XFOR: IMC Does Not Check Hosts Table If DNS Server Down"
permalink: kb/146/Q146944/
---

## Q146944: XFOR: IMC Does Not Check Hosts Table If DNS Server Down

	Article: Q146944
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a DNS server defined on the Exchange NT server and have the
	Internet Mail Connector (IMC) configured to "Use DNS," outgoing messages will
	not be delivered if the DNS is unavailable.
	
	If the DNS server identified is unavailable, the IMC will NOT look to the Host
	file for another available DNS. It will place the outgoing message in the
	Imcdata\out directory for future delivery.
	
	
	Additional query words: winnt dns imc
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
