---
layout: page
title: "Q112218: Scheduled NTBackup Must Be Configured Using System Account"
permalink: /kb/112/Q112218/
---

## Q112218: Scheduled NTBackup Must Be Configured Using System Account

{% raw %}

	Article: Q112218
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If no users are currently logged on to Windows NT, a scheduled NTBACKUP doesn't
	run unless the Scheduler service is configured to "Log On As" the System
	Account. This may be a problem if you plan to implement user-level security on
	directories and files and need to allow access to shares based on a particular
	user account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
