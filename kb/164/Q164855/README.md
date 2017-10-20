---
layout: page
title: "Q164855: XCON: Japanese Exchange May Show a Subject Line of ????????"
permalink: /kb/164/Q164855/
---

## Q164855: XCON: Japanese Exchange May Show a Subject Line of ????????

{% raw %}

	Article: Q164855
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are using the Japanese Microsoft Exchange Server and Client to send a
	message to an X.400 recipient. The message's subject line contains Double- Byte
	Character Set (DBCS) characters and contains a colon. This results in the
	following subject line:
	
	  ?????????:<DBCS characters>
	
	CAUSE
	=====
	
	The colon is incorrectly interpreted as a prefix delimiter.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
