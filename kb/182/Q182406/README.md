---
layout: page
title: "Q182406: XFOR: Mail Looping When First Host Cannot Be Reached"
permalink: kb/182/Q182406/
---

## Q182406: XFOR: Mail Looping When First Host Cannot Be Reached

	Article: Q182406
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When there are two servers listed in an Exchange record and the first host is
	not available, the server then looks to itself to receive the messages. This is
	not desirable due to the potential of looping.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	An SMTP host should deliver messages destined for a remote host to itself. After
	you perform an Exchange record query, if one of the Exchange hosts is the host
	doing the query, it must remove itself and all Exchange hosts with a weight
	equal to its own from the list.
	
	This is done for two reasons:
	
	1. To prevent looping.
	
	2. To avoid message backward flow (that is, messages moving to a less preferred
	  Exchange host).
	
	The Internet Mail Service handles this as long as it is running on a host with
	one network interface card (NIC) that has one IP address.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
