---
layout: page
title: "Q216682: XADM: Perfwiz Doesn't Recognize Logical Partitions on Clustered"
permalink: /kb/216/Q216682/
---

## Q216682: XADM: Perfwiz Doesn't Recognize Logical Partitions on Clustered

{% raw %}

	Article: Q216682
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Optimizer may fail to recognize logical partitions on a
	clustered resource.
	
	CAUSE
	=====
	
	The code that enumerates through the cluster drive resources stopped at the
	first instance returned that matched a partition type.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Optimizer
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Perfwiz.exe | 5.5.2548.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
