---
layout: page
title: "Q235687: FIX:Error 0xC00E0022 Receiving a Mess per MSMQ-MQSeries Bridge"
permalink: /kb/235/Q235687/
---

## Q235687: FIX:Error 0xC00E0022 Receiving a Mess per MSMQ-MQSeries Bridge

	Article: Q235687
	Product(s): Microsoft SNA Server
	Version(s): ; WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbMSMQ100 kbGrpDSPlatform _IK kbMQSeriesBridge
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Message Queue Server ActiveX control returns the following error
	message:
	
	  MQ_ERROR_SENDERID_BUFFER_TOO_SMALL ( 0xC00E0022 )
	
	when receiving a message that was sent from MQSeries over the MSMQ-MQSeries
	Bridge.
	
	CAUSE
	=====
	
	The MSMQ ActiveX Control incorrectly uses an assumed value of 32 bytes for the
	Security Identifier (SID) buffer length.
	
	
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
	
	Additional query words: MSMQ MQSeries Bridge
	
	======================================================================
	Keywords          : kbMSMQ100 kbGrpDSPlatform _IK kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbSNAServSearch kbMSMQSearch kbMSMQ100 kbSNAServ400SP2
	Version           : :; WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
