---
layout: page
title: "Q183840: Stop 0xC000021A When Starting Task Manager with CTRL+ALT+DEL"
permalink: /kb/183/Q183840/
---

## Q183840: Stop 0xC000021A When Starting Task Manager with CTRL+ALT+DEL

{% raw %}

	Article: Q183840
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Task Manager can be started by pressing CTRL+ALT+DEL and then clicking Task
	Manager on the Security dialog box. However, if there are many user environment
	variables defined, running Task Manager from the Security dialog box may cause a
	STOP C000021A exception error message.
	
	
	CAUSE
	=====
	
	The System Environment Block becomes corrupted by the Winlogon service if the
	size of the User Environment is significantly large. This can also be caused by
	the installation of many applications on a system.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: environment winlogon crash hang
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
