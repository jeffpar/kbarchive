---
layout: page
title: "Q185449: DLC 802.2 Connection Stays Pending After Remote System Restart"
permalink: /kb/185/Q185449/
---

## Q185449: DLC 802.2 Connection Stays Pending After Remote System Restart

{% raw %}

	Article: Q185449
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the remote system (for example, an IBM host or AS/400) is brought down and
	back up again, one or more SNA Server Token Ring or Ethernet 802.2 DLC
	connections may stay in a Pending state and fail to automatically recover. If
	the SNA Server 802.2 DLC connection is manually stopped and started, the
	connection goes to an Active state.
	
	This problem may occur when two or more 802.2 connections share the same SNA
	802.2 DLC link service, which is common when using the SNA Server 802.2 DLC
	MultiSap link service included with SNA Server 3.0 Service Pack 2 and later
	versions.
	
	
	CAUSE
	=====
	
	The SNA 802.2 DLC link service (Snadlc.dll) incorrectly cancels a DLC timer
	associated with an outstanding TEST or XID request. The timer is cancelled
	improperly after a Close Link occurs on a different connection.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem you can configure separate 802.2 DLC link services
	for each connection, but this is not recommended.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, and 4.0. This problem was first corrected in SNA Server
	3.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
