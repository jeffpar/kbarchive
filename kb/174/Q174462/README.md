---
layout: page
title: "Q174462: SMS: Run Command On Workstation Job May Not Go Active"
permalink: /kb/174/Q174462/
---

## Q174462: SMS: Run Command On Workstation Job May Not Go Active

{% raw %}

	Article: Q174462
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending a Run Command On Workstation job to from a parent site to its child
	sites, the job may not become active if the Run Command On Workstation check box
	in the Run Phase section of the Job Details window is not checked.
	
	WORKAROUND
	==========
	
	To work around this problem, click to check the Run Command On Workstation check
	box in the Run Phase section of the Job Details window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms smsinv
	
	======================================================================
	Keywords          : kbusage kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
