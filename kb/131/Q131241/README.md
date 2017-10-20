---
layout: page
title: "Q131241: FTPSVC Orphans Connections, Uses Up Virtual Memory"
permalink: /kb/131/Q131241/
---

## Q131241: FTPSVC Orphans Connections, Uses Up Virtual Memory

{% raw %}

	Article: Q131241
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Symptoms may include dropping ftp users, "Not enough storage to process this
	command" error message, growing page file, and other signs of virtual memory
	exhaustion.
	
	CAUSE
	=====
	
	FTPSVC may experience internal difficulties and start "orphaning" ftp users. As
	the list of open resources expands, virtual memory is exhausted.
	
	
	RESOLUTION
	----------
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	Microsoft corrected this problem with the modified file, FTPSVC.DLL. This fix was
	tested on ftp.microsoft.com, which performs over 50,000 anonymous ftp logons per
	day.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
