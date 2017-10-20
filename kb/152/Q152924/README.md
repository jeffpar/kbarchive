---
layout: page
title: "Q152924: XFOR: DXA Sends Invalid Replace (R) Transactions"
permalink: /kb/152/Q152924/
---

## Q152924: XFOR: DXA Sends Invalid Replace (R) Transactions

{% raw %}

	Article: Q152924
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Server is acting as a requestor to an MS Mail
	directory synchronization server, the Exchange requestor may send replace (R)
	transactions for the entire postoffice defined as the secondary proxy after
	manually adding a secondary MS Mail proxy for a user.
	
	CAUSE
	=====
	
	When sending an address from Microsoft Exchange, the directory synchronization
	service (DXA) gets all the proxies for an address and then scans them looking
	for the native address type. Once DXA finds the native address type, it
	considers using it as part of the DirSync cycle. If the DXA finds a secondary
	proxy that meets the string-insensitive comparison, the DXA uses it. It should
	always use only the primary proxy (which has an uppercase address prefix).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: dirsync requestor msmail replace GAL missing
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
