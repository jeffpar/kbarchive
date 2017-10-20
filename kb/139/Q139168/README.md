---
layout: page
title: "Q139168: FoxPro Hangs Accessing Database on Macintosh Volume"
permalink: /kb/139/Q139168/
---

## Q139168: FoxPro Hangs Accessing Database on Macintosh Volume

{% raw %}

	Article: Q139168
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to write large amount of information to a FoxPro database stored
	on a Macintosh volume in Windows NT Server, the following occurs on the client
	computer:
	
	- FoxPro application stops responding (hangs).
	
	- Access to the FoxPro database is not available.
	
	CAUSE
	=====
	
	Resource forks are generated as data is written to the FoxPro database on the
	Macintosh volume. Each time data is written to the database, Windows NT blocks
	access to the Macintosh volume in order to enumerate the changes for Macintosh
	users. If many workstations attempt to write to the database at the same time,
	FoxPro times out internally. Network Keepalive traffic is generated and the
	workstations stay connected to the server. However, access to the database is
	interrupted for a significant period of time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt sp2 FOX sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
