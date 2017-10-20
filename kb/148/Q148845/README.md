---
layout: page
title: "Q148845: Access Violation in RASMAN.EXE Under Windows NT 3.51"
permalink: /kb/148/Q148845/
---

## Q148845: Access Violation in RASMAN.EXE Under Windows NT 3.51

{% raw %}

	Article: Q148845
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Remote Access Service (RAS) server in Windows NT 3.51, a
	RASMAN.EXE Access Violation error message appears. It is preceded or followed by
	access violation error messages from other RAS components and services.
	
	CAUSE
	=====
	
	This problem occurs when RASGTWY.DLL attempts to post a NetBIOS Listen for the
	RAS client.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
