---
layout: page
title: "Q152750: LPRHELP Does not Pass &quot;L&quot; Command When Banners Are Off"
permalink: /kb/152/Q152750/
---

## Q152750: LPRHELP Does not Pass &quot;L&quot; Command When Banners Are Off

{% raw %}

	Article: Q152750
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After the hotfix for bug 30049 is applied, and a Windows NT print server is used
	to pass print jobs through to another LPDSVC, the "L" command is not passed.
	This means that the name of the user who printed the job is not passed to the
	final printer. This problem only occurs when banners are disabled on the Windows
	NT print server.
	
	CAUSE
	=====
	
	The "L" option (username) is not normally required when banners are disabled.
	However, it may be used by some custom line printer daemon (LPD) services.
	LPRHELP has been modified to pass this option even when banners are disabled.
	
	This problem will only occur if you applied the hotfix mentioned above. If you
	applied Windows NT Service Pack 5 (SP5), this problem will not occur.
	
	For more information about SP5 changes to the Windows NT LPD service, please see
	the following article in the Microsoft Knowledge Base:
	
	Q153666Updated TCP/IP Printing Components for Windows NT 3.51
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT version 3.51
	hotfix mentioned above. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT version 3.51. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The hotfix for bug 30049 is essentially a rewrite of LPD and line printer remote
	(LPR) services.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
