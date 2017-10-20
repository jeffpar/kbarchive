---
layout: page
title: "Q186043: XCON: ECB Usage Count Events Appear with Large Directories"
permalink: /kb/186/Q186043/
---

## Q186043: XCON: ECB Usage Count Events Appear with Large Directories

{% raw %}

	Article: Q186043
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message to a Microsoft Exchange Server computer with a directory
	that contains an extremely large number of mailboxes and distribution lists,
	numerous 9405 events may appear in the event log with a source of MSExchangeMTA.
	These events indicate that the problem is related to the number of entity
	control blocks (ECBs) that are being used. This problem can also occur when you
	perform directory replication with a directory that contains an extremely large
	number of mailboxes and distribution lists.
	
	CAUSE
	=====
	
	This problem occurs because the ECB usage count is maintained incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
