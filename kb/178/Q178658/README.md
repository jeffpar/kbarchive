---
layout: page
title: "Q178658: XADM: KCC Uses Increasingly Large Amounts of Memory"
permalink: /kb/178/Q178658/
---

## Q178658: XADM: KCC Uses Increasingly Large Amounts of Memory

	Article: Q178658
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	As the number of sites in an organization grows, the knowledge consistency
	checker (KCC) consumes more and more memory each time it runs. With 212+
	servers, the directory service has been observed to use 110 MB of virtual memory
	routinely, and at peak has grown to the point where all virtual memory in the
	system is used, causing out-of- memory failures in the directory service and
	other services. Whenever the KCC runs in such cases, Windows NT and Exchange
	become almost entirely unresponsive and replication slows drastically.
	
	The Exchange Administrator program may also crash with a memory violation when
	you try to select the global address list on a server that contains a great
	number of sites.
	
	CAUSE
	=====
	
	The Exchange database uses 4-KB pages and sets up the maximum record size to be
	3,784 bytes each. The directory stores the information for the sites in one
	object, each taking about 12-20 bytes of space. When the record size is too
	large, the directory accepts the additional information and does not record any
	problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
