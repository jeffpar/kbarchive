---
layout: page
title: "Q166562: XFOR: Store.exe GPFs When POP3 Client Submits Bad Message Header"
permalink: /kb/166/Q166562/
---

## Q166562: XFOR: Store.exe GPFs When POP3 Client Submits Bad Message Header

{% raw %}

	Article: Q166562
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive a general protection fault (GPF) in the Microsoft Exchange
	Server information store service (Store.exe).
	
	CAUSE
	=====
	
	This problem is caused by POP3 clients submitting messages that contain bad
	message transport headers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	CAUTION: Installing the service pack to fix this problem may cause another
	problem in POP3 clients. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q168245 POP3 Clients Unable to Download All Msgs
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
