---
layout: page
title: "Q166622: XADM: SA Crashes When Generating Offline Address Book"
permalink: /kb/166/Q166622/
---

## Q166622: XADM: SA Crashes When Generating Offline Address Book

{% raw %}

	Article: Q166622
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server version 5.0, the system attendant may stop
	responding when generating the Offline Address Book.
	
	CAUSE
	=====
	
	This is caused by the total details of an object being greater than 1 KB. In
	Microsoft Exchange Server version 5.0, an object detail greater than 1 KB will
	cause the system attendant to stop responding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 5.0 . This
	problem was corrected in the latest Microsoft Exchange Server 5.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SP1 OAB SA Dr. Watson event 2026
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
