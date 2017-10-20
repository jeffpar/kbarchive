---
layout: page
title: "Q166523: XFOR: 5.0 Mapi Causes IMS to be 10% Slower"
permalink: /kb/166/Q166523/
---

## Q166523: XFOR: 5.0 Mapi Causes IMS to be 10% Slower

{% raw %}

	Article: Q166523
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service (IMS) is 10 percent slower across the board using the
	Mapi32.dll in comparison with the Microsoft Exchange Server 4.0 Mapi32.dll.
	
	CAUSE
	=====
	
	The problem is due to the changes made to MAPI and EMSMDB to handle access from
	multiple security contexts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The net result of the change planned for Microsoft Exchange Server 5.0 Service
	Pack 1 is a 78 percent increase in throughput in the IMS over 5.0 (and a 40
	percent improvement over 4.0). There will probably be similar improvements in
	any single-security context application (for example, Microsoft Exchange Client,
	Outlook, and so on.)
	
	To test the change, run the IMS (or any single-security context MAPI application)
	and observe that performance is better.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
