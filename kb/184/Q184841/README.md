---
layout: page
title: "Q184841: XWEB: OWA Component for IIS May Cause Heap Corruption"
permalink: kb/184/Q184841/
---

## Q184841: XWEB: OWA Component for IIS May Cause Heap Corruption

	Article: Q184841
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to access an Exchange Server version 5.5 computer using Outlook Web
	Access (OWA), you may see some of the following symptoms:
	
	- The Internet browser hangs.
	
	- The Internet browser returns an ASP 0115 error.
	
	- An Event ID of 5 is logged to the application event log on the Internet
	  Information Server (IIS) computer. Note that the server is still available,
	  but the ASP page for the Outlook Web Access (OWA) client is unresponsive.
	
	NOTE: This problem may be seen in any environment. It may appear to be more
	prevalent on servers that support more concurrent users, depending on server
	memory configuration, but the problem is not dependent on server utilization or
	the amount of memory allocated to the service.
	
	CAUSE
	=====
	
	When the Deleted Items folder is emptied, a buffer is created that is too small
	in some circumstances. This causes the end of the buffer to be overwritten by
	data, causing corruption of the memory that follows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A common problem in application development can be heap corruption. This
	typically occurs when an application allocates a block of heap memory of a given
	size and then writes to memory addresses beyond the requested size of the heap
	block. Another common cause of heap corruption is writing to a block of memory
	that has already been used.
	
	
	Additional query words: exfclnfaq
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
