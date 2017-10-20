---
layout: page
title: "Q159092: Mouse Buttons Not Swapped on German Windows NT 4.0"
permalink: /kb/159/Q159092/
---

## Q159092: Mouse Buttons Not Swapped on German Windows NT 4.0

{% raw %}

	Article: Q159092
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the German version of Windows NT 4.0, the parameter for SwapMouseButtons
	is not recognized and, therefore, must be reset each time the user logs on.
	
	CAUSE
	=====
	
	The USER API was set to recognize "yes" and, therefore, does not recognize
	localized strings.
	
	WORKAROUND
	==========
	
	The fix for the swap mouse buttons function is in Windows NT 4.0 Service Pack 2
	and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: PS/2 applet prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
