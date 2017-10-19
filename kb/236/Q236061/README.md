---
layout: page
title: "Q236061: SMS: Zero Byte DDR Causes High CPU Usage by Discovery Data Mgr"
permalink: /kb/236/Q236061/
---

## Q236061: SMS: Zero Byte DDR Causes High CPU Usage by Discovery Data Mgr

	Article: Q236061
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Discovery Data Manager (DDM) attempts to process a Data Discovery Record
	(DDR) that is zero bytes in size, the CPU usage by the Systems Management Server
	Executive may increase significantly and never decrease. Further review
	indicates that DDM is the cause for the increase. No new Drs will be processed.
	To work around this problem, stop the Systems Management Server Executive
	service, manually remove any zero byte DDRs and then restart the service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	
	Additional query words: prodsms DDM DDR ZERO BYTE SMS20SP1FIX
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
