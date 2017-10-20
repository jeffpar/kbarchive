---
layout: page
title: "Q160154: Change Code Page for Scheduler Service"
permalink: /kb/160/Q160154/
---

## Q160154: Change Code Page for Scheduler Service

{% raw %}

	Article: Q160154
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AT command to execute a batch job, Windows NT prompts you to
	change the code page to 437.
	
	CAUSE
	=====
	
	Code page 437 is English. One (or more) of the commands in the batch file
	request the English code page, that is why Windows NT prompts users to change
	it.
	
	RESOLUTION
	==========
	
	You do not want to make a global change, because that will affect all
	applications. The workaround is TO add chcp 437 at the beginning of the batch
	file. This change only affects this Windows NT job. When the job ends, the
	change terminates as well.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
