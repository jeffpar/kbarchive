---
layout: page
title: "Q146677: Host Names Beginning With Digits Not Accepted in IMC"
permalink: kb/146/Q146677/
---

## Q146677: Host Names Beginning With Digits Not Accepted in IMC

	Article: Q146677
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to use a host name that contains a numerical digit as the first
	character in the IMC Properties Connections page, the following error message
	appears:
	
	  The host name or IP is not valid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 4.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Exchange Server does not allow a host name to begin with a numeric value for the
	following directives in the IMC Properties Connections page:
	
	- E-mail domain
	
	- Forward all messages to host
	
	- Forward all messages for this domain to host
	
	This behavior does not comply with Section 2.1 of RFC1123, which states the
	following:
	
	  2.1 Host Names and Numbers
	
	  The syntax of a legal Internet host name was specified in RFC-952 [DNS:4]. One
	  aspect of host name syntax is hereby changed: the restriction on the first
	  character is relaxed to allow either a letter or a digit. Host software MUST
	  support this more liberal syntax.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
