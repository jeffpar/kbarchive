---
layout: page
title: "Q126283: SMS Hierarchy Manager Fails Due to Stack Overflow"
permalink: /kb/126/Q126283/
---

## Q126283: SMS Hierarchy Manager Fails Due to Stack Overflow

{% raw %}

	Article: Q126283
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbHMan smshierman
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SMS Hierarchy Manager process terminates unexpectedly due to a stack
	overflow. If you attempt to manually start the SMS_HIERARCHY_MANAGER service
	from Services in Control Panel, the following error appears:
	
	  Error 1067: The process terminated unexpectedly.
	
	In addition, a Dr. Watson error log is generated which indicates a stack overflow
	occurred in the PREINST.EXE module.
	
	CAUSE
	=====
	
	You may have inadvertently implemented a Systems Management Server version 1.0
	hierarchy which contains a circular path. For example, Site A reports to Site B,
	Site B reports to Site C, and Site C reports to Site A.
	
	
	RESOLUTION
	----------
	
	To correct this problem, use an SQL query of the Sites table to reveal the
	current parent assignments. Correct the tree from the bottom up using the
	PREINST /DELSITE command. You can also correct the tree manually from the Sites
	table. For complex hierarchies, determining the location of the circular
	reference can be difficult.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbHMan smshierman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : :1.0,1.1
	
	=============================================================================
	

{% endraw %}
