---
layout: page
title: "Q235934: FIX: Explorer Shows Level8 FalconMQ Server as Another Bridge"
permalink: kb/235/Q235934/
---

## Q235934: FIX: Explorer Shows Level8 FalconMQ Server as Another Bridge

	Article: Q235934
	Product(s): Microsoft SNA Server
	Version(s): ; winnt:1.0
	Operating System(s): 
	Keyword(s): kbMQExplorer kbMSMQ kbMSMQ100 kbMSMQ100bug kbMSMQ100fix kbGrpDSPlatform _IK kbMQSeriesB
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSMQ - MQSeries Bridge 
	- Microsoft Message Queue Server (MSMQ) version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MSMQ-MQSeries Bridge Explorer shows the Level8 FalconMQ Server product as if
	it were another MSMQ-MQSeries Bridge in the Microsoft Message Queue (MSMQ)
	Enterprise.
	
	CAUSE
	=====
	
	Because the bridge and FalconMQ Server were originally written by Level8, the
	Explorer interface was designed to manage both products.
	
	RESOLUTION
	==========
	
	The MSMQ-MQSeries Bridge Explorer was updated to differentiate between bridges
	and the Level8 FalconMQ Server. The FalconMQ Explorer should be used to
	administer the the FalconMQ product.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. service pack for SNA Server
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMQExplorer kbMSMQ kbMSMQ100 kbMSMQ100bug kbMSMQ100fix kbGrpDSPlatform _IK kbMQSeriesBridge 
	Technology        : kbAudDeveloper kbMSMQSearch kbMSMQ100
	Version           : :; winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
