---
layout: page
title: "Q150337: Simultaneous Dr. Watsons Stop Windows NT"
permalink: /kb/150/Q150337/
---

## Q150337: Simultaneous Dr. Watsons Stop Windows NT

{% raw %}

	Article: Q150337
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When several user-mode processes stop simultaneously and Dr. Watson is invoked
	for each process, the following stop error message appears:
	
	  STOP 0x0000001E: KMODE_EXCEPTION_NOT_HANDLED (C0000005, 8017bb55,
	  00000001,7ffdf002).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	version 3.51 and Microsoft Windows NT Server version 3.51. This problem was
	corrected in the latest Windows NT 3.51 U.S. Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt DrWatson
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
