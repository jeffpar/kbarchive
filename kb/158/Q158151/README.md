---
layout: page
title: "Q158151: XFOR: ErrMsg: Event ID 1035 - Unable to Open or Read a Message"
permalink: /kb/158/Q158151/
---

## Q158151: XFOR: ErrMsg: Event ID 1035 - Unable to Open or Read a Message

{% raw %}

	Article: Q158151
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Schedule+ Free/Busy Connector displays the following event log
	messages shortly before causing an application exception error:
	
	- 1035: Unable to open or read a message in the Microsoft Schedule+ Free/Busy
	  Connector Inbox from %1.
	
	- 1022: 1 inbound message processed.
	
	- 1038: Unable to access the Microsoft Schedule+ Free/Busy Information Folder
	
	If symbols are loaded, the Dr. Watson log normally indicates that an exception
	error occurred in the RtlEnterCriticalSection function, often at location
	77f6748e.
	
	CAUSE
	=====
	
	The Microsoft Schedule+ Free/Busy Connector may cause an exception error when
	processing a message containing Free/Busy data from another server that contains
	multiple users, and the users are not in the directory service. The users
	existed at one time and were deleted. The tombstone on the information has not
	yet expired, causing the last update of Free/Busy data to be sent.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Sched+ F/B rtlfreeheap mapifreeheap freepadrlist MSFBConn
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
