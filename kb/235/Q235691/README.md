---
layout: page
title: "Q235691: FIX: The MSMQ - MQSeries Bridge Will Discard the EPSend Message"
permalink: kb/235/Q235691/
---

## Q235691: FIX: The MSMQ - MQSeries Bridge Will Discard the EPSend Message

	Article: Q235691
	Product(s): Microsoft SNA Server
	Version(s): ; WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbMSMQ100 kbMQSeriesBridge
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the EPSend sample was compiled with the MQSeries 5.0 header file Cmqc.h, its
	messages would be discarded and never reach Microsoft Message Queue Server
	(MSMQ).
	
	CAUSE
	=====
	
	When reading the extension property of a message, the MSMQ - MQSeries Bridge
	used an internal MQSeries 2.0 MQMD structure. Therefore, it would return a
	buffer too small error and the MSMQ - MQSeries Bridge would discard the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. service pack for SNA Server
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was first corrected in SNA Server 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMSMQ100 kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbSNAServSearch kbMSMQSearch kbMSMQ100 kbSNAServ400SP2
	Version           : :; WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
