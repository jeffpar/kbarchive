---
layout: page
title: "Q247917: Hewlett-Packard JetDirect Ports Missing on Windows NT 4.0"
permalink: /kb/247/Q247917/
---

## Q247917: Hewlett-Packard JetDirect Ports Missing on Windows NT 4.0

{% raw %}

	Article: Q247917
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
	
	On a computer running Microsoft Windows NT Server 4.0 or Microsoft Windows NT
	Workstation 4.0, you may notice that the Hewlett-Packard (HP) JetDirect ports
	are missing without your having deleted any ports.
	
	CAUSE
	=====
	
	This issue can occur because HP JetDirect ports in HP JetAdmin version 3.3 can
	cause corruption in certain Windows NT registry entries. The resulting loss of
	Internet Protocol (IP) address information and local area network (LAN) hardware
	information causes the ports to disappear.
	
	RESOLUTION
	==========
	
	To resolve this issue (if your copy of the HP JetAdmin program is earlier than
	version 3.4), remove HP JetAdmin and all the existing HP JetDirect ports.
	Install HP JetAdmin version 3.4 or later, and then recreate the HP JetDirect
	ports.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
