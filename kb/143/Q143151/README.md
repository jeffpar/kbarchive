---
layout: page
title: "Q143151: Registry Corruption Detected During Restart of Windows NT"
permalink: /kb/143/Q143151/
---

## Q143151: Registry Corruption Detected During Restart of Windows NT

{% raw %}

	Article: Q143151
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
	
	If an application deletes volatile registry keys, a section of the registry is
	written noting the change. When you reboot your computer, Windows NT reads the
	section of the registry and does not start.
	
	
	RESOLUTION
	==========
	
	To work around this problem, repair the registry by starting Windows NT Setup
	using the original Setup floppy disk or compact disc. Select 'r' at the first
	screen to start repair.
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
