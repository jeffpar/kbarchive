---
layout: page
title: "Q164823: AFD Executive Worker Thread Causes Excessive Nonpaged Pool Use"
permalink: /kb/164/Q164823/
---

## Q164823: AFD Executive Worker Thread Causes Excessive Nonpaged Pool Use

{% raw %}

	Article: Q164823
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server may stop responding or report virtual
	memory errors under high stress situations. Excessive nonpaged usage can be
	viewed in Performance Monitor.
	
	If pool tagging is enabled, the TCPt and Afde pooltags allocated bytes will rise,
	exhausting non paged usage.
	
	
	CAUSE
	=====
	
	In cases like these, processes fail to free memory pages once they are done with
	them. Over time, this leads to a highly stressful situation for a system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	This problem has been corrected in the latest U.S. service pack for Windows NT
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: hang hung
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
