---
layout: page
title: "Q197447: %Username% Resolved in GUI but Not at Command Line"
permalink: /kb/197/Q197447/
---

## Q197447: %Username% Resolved in GUI but Not at Command Line

{% raw %}

	Article: Q197447
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a system environment variable using the System tool in Control
	Panel, the %Username% will translate in the GUI of the tool to the user who is
	currently logged on, but will not in a command prompt.
	
	
	RESOLUTION
	==========
	
	To work around this problem, you can use the SETX command in a logon script to
	add the environment variable each time a user logs on. The SETX command can be
	found in the Windows NT 4.0 Resource Kit.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
