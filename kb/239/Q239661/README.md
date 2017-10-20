---
layout: page
title: "Q239661: XIMS: Err Mss: The Service Configuration Dynamic Link Library..."
permalink: /kb/239/Q239661/
---

## Q239661: XIMS: Err Mss: The Service Configuration Dynamic Link Library...

{% raw %}

	Article: Q239661
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Exchange Server 5.5 Chat services on a computer running
	Windows 2000 Server, you may receive the following error message when you try to
	administer the Chat service:
	
	  Internet Services Manager
	  The service configuration dynamic link library 'chatcfg.dll' failed to load
	  correctly. The specified module could not be found.
	
	CAUSE
	=====
	
	In Exchange Server versions earlier than Exchange Server 5.5 Service Pack 1,
	Chat runs as an Internet Server Application Programming Interface (ISAPI)
	extension, and is dependant upon Internet Services Manager for configuration and
	administration.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 1.
	
	MORE INFORMATION
	================
	
	If you apply the latest Exchange Server 5.5 service pack, you update the Chat
	service to run as its own service; it is no longer dependent upon the Internet
	Service Manager and you can administer and configure it by using its own
	Microsoft Management Console (MMC).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
