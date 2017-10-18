---
layout: page
title: "Q235938: FIX: MSMQ-MQSeries Bridge Limited to10 Queue Manager Connections"
permalink: kb/235/Q235938/
---

## Q235938: FIX: MSMQ-MQSeries Bridge Limited to10 Queue Manager Connections

	Article: Q235938
	Product(s): Microsoft SNA Server
	Version(s): ; WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbMSMQ kbMSMQ100 kbMSMQ100bug kbMSMQ100fix _IK kbMQSeriesBridge
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MSMQ-MQSeries Bridge is configured for more than 10 connections to MQSeries
	queue managers, but only ten queue managers can be active at any one time.
	
	CAUSE
	=====
	
	There was a hard coded limit of 10 queue manager connections.
	
	RESOLUTION
	==========
	
	The number of queue manager connections was increased to 256.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. service pack for SNA Server
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Fixed in SNA Server V4.0 SP3
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMSMQ kbMSMQ100 kbMSMQ100bug kbMSMQ100fix _IK kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbSNAServSearch kbMSMQSearch kbMSMQ100 kbSNAServ400
	Version           : :; WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
