---
layout: page
title: "Q176210: Incorrect Time Is Displayed When You Run the Net Time Command"
permalink: /kb/176/Q176210/
---

## Q176210: Incorrect Time Is Displayed When You Run the Net Time Command

{% raw %}

	Article: Q176210
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET TIME command to display the time on a specific remote
	computer, the time displayed may be incorrect.
	
	CAUSE
	=====
	
	This behavior can occur because when you use the NET TIME \\<servername>
	command to display the time on a remote computer, the result displayed is
	obtained by applying local time settings to the Greenwich Mean Time (GMT) on the
	remote computer. This behavior can occur if, for example, the time zone and
	daylight savings time settings on the remote and local computers are different.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 and 4.0.
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
