---
layout: page
title: "Q164861: XFOR: Cannot Configure French AT Server as Directory Requester"
permalink: /kb/164/Q164861/
---

## Q164861: XFOR: Cannot Configure French AT Server as Directory Requester

{% raw %}

	Article: Q164861
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to install the Directory Exchange Requester on a French AppleTalk
	Server with French MacMail, the configuration screen will not allow input into
	any field except the Send directory hour field. Also, other areas are displayed
	incorrectly, as shown by the following:
	
	  Exchange password: ?
	  Network Manager: Administrateur du (r[ASCII 232]seau is truncated)Password: ?
	
	The Fault, Include, and Export World List fields are all unavailable.
	
	CAUSE
	=====
	
	This problem is caused by the use of extended characters in the French server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
