---
layout: page
title: "Q140959: XADM: Incorrect Buffering of X.121 Address for X.25"
permalink: /kb/140/Q140959/
---

## Q140959: XADM: Incorrect Buffering of X.121 Address for X.25

{% raw %}

	Article: Q140959
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outgoing connections through several X.400 connectors over X.25 might fail when
	the X.121 addresses of the remote Message Transfer Agents (MTAs) are of
	different length.
	
	CAUSE
	=====
	
	Due to an incorrect buffering of these addresses, a short address (for example,
	9 digits) becomes corrupted in a X.25 call request packet if a longer address
	(for example, 11 digits) has been used previously.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
