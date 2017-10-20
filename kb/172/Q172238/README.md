---
layout: page
title: "Q172238: Snatrace Doesn't Set Global Trace Properties on Remote Computer"
permalink: /kb/172/Q172238/
---

## Q172238: Snatrace Doesn't Set Global Trace Properties on Remote Computer

{% raw %}

	Article: Q172238
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Snatrace.exe allows you to capture traces on remote computers that are running
	SNA Server or SNA Client software. The command is:
	
	  "snatrace.exe \\ <Server Name>" (without the quotation marks)
	
	When you are configuring Snatrace.exe to capture traces on a remote computer, the
	global trace properties on that computer are not affected by changing these
	values at the local computer.
	
	CAUSE
	=====
	
	The global tracing flags are not being properly set in the registry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
