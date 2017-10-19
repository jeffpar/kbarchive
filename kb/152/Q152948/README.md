---
layout: page
title: "Q152948: XADM: IS Won't Stop and PerfMon Shows No Processing"
permalink: /kb/152/Q152948/
---

## Q152948: XADM: IS Won't Stop and PerfMon Shows No Processing

	Article: Q152948
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Activity in the Microsoft Exchange Information Store (IS) does not stop, and
	also may not show up in Performance Monitor. That is, when you use Performance
	Monitor, the MSExchangeIS object does not show any activity in the %Processor
	Time counter. The same symptoms may also occur with the MSExchangeIMC object, if
	an Internet Mail Connector (IMC) is configured and running.
	
	CAUSE
	=====
	
	The IS handles an error condition incorrectly for mail received through the
	IMC.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Service Pack 3 for Microsoft Exchange
	4.0. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
