---
layout: page
title: "Q128935: LPQ Running Recursively May Hang Windows NT LPD Server"
permalink: /kb/128/Q128935/
---

## Q128935: LPQ Running Recursively May Hang Windows NT LPD Server

{% raw %}

	Article: Q128935
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If two LPR clients simultaneously run LPQ commands recursively to a Windows NT
	LPD server, within approximately 30 to 40 seconds, the LPD service on the
	Windows NT computer stops responding (hangs). If one LPR client runs LPQ
	commands recursively, the Windows NT LPD server may hang several hours later.
	
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.51.
	
	To work around this problem, restore the LPD service, after it hangs, by
	rebooting the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 3.51.
	
	Additional query words: prodnt line printer daemon remote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
