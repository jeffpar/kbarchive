---
layout: page
title: "Q262295: SMS: CCIM Does Not  Restart Running Smsman on Installed Client"
permalink: /kb/262/Q262295/
---

## Q262295: SMS: CCIM Does Not  Restart Running Smsman on Installed Client

{% raw %}

	Article: Q262295
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client Component Installation Manager (CCIM) shuts down and does not restart
	when you run Smsman.exe on an installed client that is running Microsoft Windows
	NT 4.0 Service Pack 4 (SP4) and Systems Management Server (SMS) 2.0 Service Pack
	1 (SP1).
	
	CAUSE
	=====
	
	CCIM shows a shutdown request. This happens just after you start Smsman.exe. It
	reports that CCIM is successfully registered; CliSvc reports that CCIM is
	already running. The CCIM shutdown prevents the SetEvent or any other CCIM
	requests from being run.
	
	WORKAROUND
	==========
	
	To work around this issue, use the Services tool in Control Panel to stop and
	restart SMS Client Service.
	
	Or, wait for one hour. CCIM wakes up on its own as part of its next polling
	cycle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
