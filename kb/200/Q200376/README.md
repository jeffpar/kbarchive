---
layout: page
title: "Q200376: XFOR: Authentication Package DPA Errors"
permalink: /kb/200/Q200376/
---

## Q200376: XFOR: Authentication Package DPA Errors

{% raw %}

	Article: Q200376
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Event 11512 is logged in the application log 5 to 10 times each second on an
	Exchange Server 5.0 computer located in the same site as an Exchange Server 5.5
	computer.
	
	  Event: 11512 Source: MSExchangePOP3 Category: Configuration Description: The
	  authentication package DPA could not be found in the
	  Available-Authorization-Packages attribute.
	
	CAUSE
	=====
	
	This occurs if the Exchange Service Account administrator is not an
	administrator of the Windows NT domain or computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
