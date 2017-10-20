---
layout: page
title: "Q155684: XFOR: IMC Support for VRFY Command"
permalink: /kb/155/Q155684/
---

## Q155684: XFOR: IMC Support for VRFY Command

{% raw %}

	Article: Q155684
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP2
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RFC 821 that defines the Simple Mail Transport Protocol (SMTP) states that
	"The VRFY and EXPN commands are not included in the minimum implementation." The
	VRFY command is used to verify that an address is valid on a given SMTP host.
	This command is not implemented in the Microsoft Exchange Internet Mail
	Connector (IMC), version 4.0. The use of the VRFY command is considered a
	security hole by some organizations.
	
	STATUS
	======
	
	Microsoft is aware that the VRFY command is used by some DNS registration
	authorities for domain validation. For example, in France, the National Network
	Information Center relies on an automatic procedure for verifying that the
	Postmaster and Hostmaster E-mail addresses of a new DNS domain are valid.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	4.0. This problem was corrected in the latest Microsoft Exchange Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: VRFY IMC XSRVInCon
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP2
	Version           : winnt:4.0 SP2
	
	=============================================================================
	

{% endraw %}
