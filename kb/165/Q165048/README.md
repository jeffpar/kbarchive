---
layout: page
title: "Q165048: TN3270 Service Appears Inactive if Started from Command Prompt"
permalink: /kb/165/Q165048/
---

## Q165048: TN3270 Service Appears Inactive if Started from Command Prompt

{% raw %}

	Article: Q165048
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN3270 service does not appear active in SNA Manager version 3.0 if it is
	started from a command prompt.
	
	CAUSE
	=====
	
	When the TN3270 Service is run as a normal process rather than a Windows NT
	service, the manage status is not properly updated.
	
	RESOLUTION
	==========
	
	The manage status is now properly updated for the TN3270 Service when it is run
	as a process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snamanager
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
