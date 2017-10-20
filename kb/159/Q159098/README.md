---
layout: page
title: "Q159098: WinNT 4.0 Resource Kit Utility &quot;Remote Console&quot; Client Fails"
permalink: /kb/159/Q159098/
---

## Q159098: WinNT 4.0 Resource Kit Utility &quot;Remote Console&quot; Client Fails

{% raw %}

	Article: Q159098
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote Control utility in the Windows NT 4.0 Resource Kit allows a user to
	take control remotely of a CMD console session. The remote control client fails
	when a console program that changes the active screen buffer is launched.
	
	CAUSE
	=====
	
	Among the processes running in the console, only the process that had opened
	handles to the screen buffer have access to it.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
