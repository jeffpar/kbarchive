---
layout: page
title: "Q235694: FIX: The MSMQ-MQSeries Bridge Overwrites ReplyToQMgr Extension"
permalink: kb/235/Q235694/
---

## Q235694: FIX: The MSMQ-MQSeries Bridge Overwrites ReplyToQMgr Extension

	Article: Q235694
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2; winnt:1.0
	Operating System(s): 
	Keyword(s): kbMSMQ kbMSMQ100 kbMSMQ100fix kbMQSeries _IK kbMQSeriesBridge
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Message Queue Server (MSMQ) version 1.0 
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Microsoft Message Queue (MSMQ) application using the MSMQEP API specifies
	the ReplyToQMgr property and the ReplyToQ property, the MSMQ-MQSeries Bridge
	would overwrite the ReplyToQMgr value with the MSMQ-MQSeries Bridge Computer
	Name, that is, the MSMQ Queue Manager name.
	
	CAUSE
	=====
	
	The MSMQ-MQSeries Bridge was incorrectly overwriting the value for ReplyToQMgr
	when the ReplyToQ was specified. The MSMQ-MQSeries Bridge has been changed to
	only replace the ReplyToQMgr property with MSMQ-MQSeries Bridge Computer Name,
	if it is empty and if the ReplyToQ property is specified.
	
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
	Keywords          : kbMSMQ kbMSMQ100 kbMSMQ100fix kbMQSeries _IK kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbSNAServSearch kbMSMQSearch kbMSMQ100 kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2; winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
