---
layout: page
title: "Q141237: Site Configuration Manager Does Not Start After System Reboot"
permalink: /kb/141/Q141237/
---

## Q141237: Site Configuration Manager Does Not Start After System Reboot

{% raw %}

	Article: Q141237
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you shutdown and restart Systems Management Server, Site Configuration
	Manager service does not start.
	
	CAUSE
	=====
	
	This problem occurs if your computer does the following:
	
	- Slow disk and memory throughout
	
	- Constant paging to disk as Windows NT and Systems Management Server services
	  are loading
	
	- Many applications are starting during startup
	
	Site Configuration Manager may time out due to the above configuration.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Start applications manually. Do not start applications during Windows NT
	  startup.
	
	2. Reduce the number of Windows NT Server services to start automatically. You
	  may start the default Windows NT Server services automatically.
	
	3. Increase disk and memory throughput. This may require hardware upgrades such
	  as hard disk and controller with faster data transfer rate, and additional
	  memory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
