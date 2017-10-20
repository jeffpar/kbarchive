---
layout: page
title: "Q191348: SMS: WinNT 3.51 SP5 Upgrade Pkg Not Moving to Executed Commands"
permalink: /kb/191/Q191348/
---

## Q191348: SMS: WinNT 3.51 SP5 Upgrade Pkg Not Moving to Executed Commands

{% raw %}

	Article: Q191348
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
	
	All packages that have been installed using Systems Management Server Package
	Command Manager (PCM) should be moved to the Executed Commands folder. The
	installed packages are removed from the Package Command Manager window when the
	client's system time exceeds the package's expiration dates.
	
	PCM fails to move Windows NT 3.51 Service Pack 5 packages to the Executed
	Commands folder. The upgrade process completes successfully on the client, but
	the package remains under Pending Commands.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
