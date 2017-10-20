---
layout: page
title: "Q191293: SMS: PCMSVC32 Does Not Recover from a Logon Server Failure"
permalink: /kb/191/Q191293/
---

## Q191293: SMS: PCMSVC32 Does Not Recover from a Logon Server Failure

{% raw %}

	Article: Q191293
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Package Command Manager (PCM) service fails to locate an instruction
	(.ins) file on the current logon server, it does not check other logon servers
	for the .ins file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: smspcm pcmsvc prodsms sp sp4
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
