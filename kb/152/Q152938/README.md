---
layout: page
title: "Q152938: XADM: Checking Knowledge Consistency Msg Freezes at 33 Percent"
permalink: /kb/152/Q152938/
---

## Q152938: XADM: Checking Knowledge Consistency Msg Freezes at 33 Percent

{% raw %}

	Article: Q152938
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
	
	The Microsoft Exchange Server Administrator program may stop responding when you
	click the "Check Now" button in the Directory service dialog box. The Microsoft
	Exchange Server stops responding at the point when the Knowledge Consistency
	Checker "percent complete" message reaches 33 percent.
	
	CAUSE
	=====
	
	This is because of the path where Microsoft Exchange Server is installed. The
	path D:\Local\Exchsrvr can cause this to happen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
