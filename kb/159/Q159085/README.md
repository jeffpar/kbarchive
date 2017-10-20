---
layout: page
title: "Q159085: Windows NT Kernel Crashes While Processing WM_NCCREATE"
permalink: /kb/159/Q159085/
---

## Q159085: Windows NT Kernel Crashes While Processing WM_NCCREATE

{% raw %}

	Article: Q159085
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 crashes with an access violation while processing a WM_NCCREATE
	message.
	
	CAUSE
	=====
	
	In the case of WM_NCCREATE, DefWindowProc does not check for a null value in
	lParam. Ultimately this may cause an access violation in the Kernel.
	
	RESOLUTION
	==========
	
	DefWindowProc has been changed to check for a non-null lParam in the WM_NCCREATE
	case. If it is null, then a RIPERR0 is issued setting the last error to
	ERROR_INVALID_PARAMETER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
