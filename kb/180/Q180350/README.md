---
layout: page
title: "Q180350: XADM: Remote Monitoring Increases Open Handles on Server"
permalink: /kb/180/Q180350/
---

## Q180350: XADM: Remote Monitoring Increases Open Handles on Server

{% raw %}

	Article: Q180350
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Performance Monitor and connect to a remote Microsoft Exchange
	Server computer, the number of handles open on the server increases. When you
	quit Performance Monitor, the number of handles open on the server decreases,
	but it may still be higher than before you connected to the server. If you
	repeatedly start and quit Performance Monitor remotely, the increase in the
	number of open handles may be significant.
	
	This problem also occurs with other programs that are used to remotely monitor
	the performance of a Microsoft Exchange Server computer. The problem does not
	occur when you use Performance Monitor locally.
	
	CAUSE
	=====
	
	When a program connects to the registry on a remote server to obtain information
	about the server's performance, multiple handles are opened by one or more
	Microsoft Exchange Server dynamic-link libraries (DLLs). When the connection
	ends, the DLLs do not properly close the handles.
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, use Performance Monitor locally instead
	of remotely.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When a program connects to a remote registry to obtain performance information,
	it uses a different method than it uses to connect to the local registry. The
	problem described in this article only occurs when the remote method is used.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
