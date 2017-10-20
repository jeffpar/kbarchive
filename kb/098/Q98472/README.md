---
layout: page
title: "Q98472: Unusual Symptoms Indicate Hardware Conflicts or Problems"
permalink: /kb/098/Q98472/
---

## Q98472: Unusual Symptoms Indicate Hardware Conflicts or Problems

{% raw %}

	Article: Q98472
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Symptoms of some problems may have hardware origins even though they do not
	indicate them: for instance, you cannot get NET LOGON or NET VIEW to function,
	but can do NET USES and directed NET VIEWS to a server. This article may help
	you locate the source of these types of problems.
	
	MORE INFORMATION
	================
	
	The easiest way to eliminate hardware as the source of a NET LOGON problem is to
	run the loop back driver (available only in OS/2). If NET LOGON functions
	correctly after you load this driver, then you have a hardware problem. If NET
	LOGON continues to fail, you have a configuration problem.
	
	If after re-establishing the old protocols you are able to run a directed NET
	VIEW command (for example, NET VIEW \\server\share) but not a general broadcast
	based NET VIEW of all the available servers in your domain, then the problem is
	caused by one of the following:
	
	- You have an interrupt conflict.
	
	  Occasionally an interrupt conflict can cause a problem that affects broadcasts
	  (NET LOGON or NET VIEWS) but not session based functions (NET USES).
	
	- You have a cabling problem.
	
	  Somewhat less often, the issues can be traced to faulty cabling either between
	  the given workstation and the port (in the case of twisted pair and type 1
	  token ring) or at the next T connection (with coaxial cable).
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
