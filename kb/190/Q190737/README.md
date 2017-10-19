---
layout: page
title: "Q190737: XADM: Message Size Limits Do Not Affect Public Folder Replicatio"
permalink: /kb/190/Q190737/
---

## Q190737: XADM: Message Size Limits Do Not Affect Public Folder Replicatio

	Article: Q190737
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setting a maximum message size limit on the Exchange Message Transfer Agent
	(MTA) does not prevent Exchange Server public folder replication messages from
	being sent to other Exchange Server computers if the size of the replication
	message surpasses the message size limit.
	
	MORE INFORMATION
	================
	
	Public folder replication messages are considered "system" messages. Therefore
	the size limits set on the MTA do not prevent these messages from being
	delivered to other servers containing public folder replicas.
	
	Additional query words: pf replica ndr
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
