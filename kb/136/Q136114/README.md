---
layout: page
title: "Q136114: Objects in ROT Not Released When Process Terminates Abnormally"
permalink: /kb/136/Q136114/
---

## Q136114: Objects in ROT Not Released When Process Terminates Abnormally

{% raw %}

	Article: Q136114
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a process that has an object entry in the Running Object Table (ROT)
	terminates abnormally, the entry is not removed. This can be a problem if the
	object is a file.
	
	
	CAUSE
	=====
	
	Currently there is no good way to clean up the ROT entries when a process
	terminates. The ROT is kept in a separate process and does not have a good way
	of determining when a process goes away. If an attempt is made to connect to
	these entries, Windows NT detects that the process is no longer listening, and
	cleans them up. This behavior is by design.
	
	
	WORKAROUND
	==========
	
	To work around this problem, restart Windows NT 3.51.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
