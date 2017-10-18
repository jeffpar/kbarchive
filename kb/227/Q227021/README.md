---
layout: page
title: "Q227021: SMS:Scheduler Creates Zero Byte Instruction Files for Minijobs"
permalink: kb/227/Q227021/
---

## Q227021: SMS:Scheduler Creates Zero Byte Instruction Files for Minijobs

	Article: Q227021
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Scheduler service hangs after generating zero byte
	instruction files in the \Schedule.box\Tosend directory. At this point, all
	outbound site to site communication stops. No status messages occur unless a
	site reset is performed. When a site reset is performed, the Site Component
	Manager will report problems trying to stop the Scheduler service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms scheduler hang zero instruction INS
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
