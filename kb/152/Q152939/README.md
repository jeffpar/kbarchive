---
layout: page
title: "Q152939: XADM: Meeting Requests Written to Assistant's Calendar"
permalink: /kb/152/Q152939/
---

## Q152939: XADM: Meeting Requests Written to Assistant's Calendar

{% raw %}

	Article: Q152939
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange PC Message Transfer Agent (MTA) and Microsoft
	Exchange MTA configurations as a back-bone for MS Mail for PC Networks
	Postoffices, Schedule+ meeting requests forwarded to and accepted by an
	assistant will be booked in the assistant's appointment book, not the original
	attendee.
	
	MORE INFORMATION
	================
	
	User1 sends a meeting request to User2, who has an assistant. When the assistant
	opens the Schedule+ meeting request and accepts the meeting, the meeting will be
	booked in the assistant's calendar file, not the original attendee's.
	
	                      (MS Exchange MTA)
	  ExchSrvr1-----------------------------------------ExchSrvr2
	     |                                                 |
	     |                                                 |
	  Shadow PO   (Shadow PO's have same Net/PO Name)   Shadow PO
	     |        (since they belong to the same site.)    |
	     |                                                 |
	     |            (MS Mail Connector and)              |
	     |            (MSMI used between SFS)              |
	SFS Postoffice 1   (Postoffices. Routing is in-)    SFS Postoffice 2
	     |            (direct via Shadow PO's)             |
	     |                                                 |
	   User1                                             UserA
	   User2 (assistant is SFS PO2/UserA)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Service Pack 3 of Microsoft Exchange
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
