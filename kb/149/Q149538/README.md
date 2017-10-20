---
layout: page
title: "Q149538: System Restarts Every 5 Hours if Workstation to Server Upgrade"
permalink: /kb/149/Q149538/
---

## Q149538: System Restarts Every 5 Hours if Workstation to Server Upgrade

{% raw %}

	Article: Q149538
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetupkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Server version 4.0 may perform a hardware reset every five hours for
	no apparent reason. No errors are recorded in the system log.
	
	CAUSE
	=====
	
	In rare cases, when you upgrade from Windows NT Workstation version 4.0 with
	Service Pack 1 to Windows NT Server version 4.0, a registry key may become
	corrupted. This does not occur if Windows NT Server version 4.0 with the
	slipstreamed version of Service Pack 1 was used to perform the upgrade.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
