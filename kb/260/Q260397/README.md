---
layout: page
title: "Q260397: SMS: Program Does Not Run When System.lkp Is Busy"
permalink: /kb/260/Q260397/
---

## Q260397: SMS: Program Does Not Run When System.lkp Is Busy

{% raw %}

	Article: Q260397
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbAppMan kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user on a client workstation does not see the status of a program when the
	server is busy updating the System.lkp file. The program does not run and no
	status is displayed in Advertisement Program Manager (APM) until the server is
	done updating the System.lkp file.
	
	CAUSE
	=====
	
	If you schedule a program to run immediately by using the APM Wizard and the
	offer file was updated more than 15 minutes ago, the program does not run. Also,
	the client does not log an execution request for that program. The user on the
	client workstation must manually run the package again for a successful
	completion.
	
	If a client is offered a large number of programs, the Offer Data providers can
	take a long time to run. APM does not run an advertisement while the Offer Data
	providers are running. If an administrator constantly adds or updates offers,
	the program may never run, even with a 15-minute interval. The Offer Data
	providers run for 20 to 30 minutes. In this case, the .lkp file is more than 15
	minutes out of date before the program can be rescheduled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbAppMan kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
