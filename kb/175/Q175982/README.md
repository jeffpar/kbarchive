---
layout: page
title: "Q175982: XFOR: Outbound SMTP Mail Never Leaves Microsoft Exchange Server"
permalink: /kb/175/Q175982/
---

## Q175982: XFOR: Outbound SMTP Mail Never Leaves Microsoft Exchange Server

	Article: Q175982
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages are not sent out over the Microsoft Exchange Server Internet Mail
	Service (IMS), they remain in the queue. It may look like the IMS is not
	functioning and restarting it will resolve this problem.
	
	If you dump the status of the TCP connections to the Microsoft Exchange Server
	using the NETSTAT command, you will see several connections that are in the
	established state. You may also notice that these connections have been
	established for a long time.
	
	CAUSE
	=====
	
	Once a TCP connection is established, the IMS will timeout (5 minutes is the
	default time period) waiting for the banner to be sent. If the Banner doesn't
	arrive during this time, the IMS should terminate the connection and clean up
	the Socket. In this case, the connection count against the destination domain is
	being leaked and as a result, the IMS never terminates the connection and cleans
	up the socket.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: IMS Urgent OOD
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
