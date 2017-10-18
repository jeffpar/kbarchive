---
layout: page
title: "Q256207: SMS: Clients Do Not Get Advertisements with SQL Account Problems"
permalink: kb/256/Q256207/
---

## Q256207: SMS: Clients Do Not Get Advertisements with SQL Account Problems

	Article: Q256207
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create advertisements, the advertisements may never reach the client
	computers. When this problem occurs, the following lines are displayed in the
	Smsdbmon.log file:
	
	  Starting Manage Trigger thread...
	  CTriggerManager::RouteFiles - waiting on named pipe...
	
	CAUSE
	=====
	
	The SQL account used by the SMS_SQL_Monitor service is either corrupted or does
	not have the administrative permissions necessary to create triggers. Without
	the ability to create triggers, the process to send out Systems Management
	Server (SMS) advertisements does not start.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	A normal log file looks like the following example:
	
	  Starting Manage Trigger thread...
	  CTriggerManager::RouteFiles - waiting on named pipe...
	  Starting thread to monitor tracing...
	  CTriggerManager::RouteFiles - New connection made. Refreshing Registry values.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
