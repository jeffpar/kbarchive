---
layout: page
title: "Q155722: Wrong Icons Displayed After Upgrade to Windows NT 4.0"
permalink: /kb/155/Q155722/
---

## Q155722: Wrong Icons Displayed After Upgrade to Windows NT 4.0

{% raw %}

	Article: Q155722
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows NT 3.51 to Windows NT 4.0, it is possible that
	some icons in converted program groups will be incorrect.
	
	CAUSE
	=====
	
	Windows NT 4.0 uses the first icon within an executable program by default. If
	the default icon within the executable program is not the first one listed,
	Windows NT 4.0 uses the first icon instead.
	
	MORE INFORMATION
	================
	
	Windows NT 3.51 sorts the icons in an executable file to the same order in which
	they are listed in the .rc file. To improve performance in Windows NT 4.0, the
	icons are extracted as found and sorted by ID (not by the sequence in the .rc
	file). Therefore, if the first icon in the .rc file does not have the lowest ID
	value, there is a difference in the icon displayed in Windows NT 4.0.
	
	Additional query words: prodnt winnt resource
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
