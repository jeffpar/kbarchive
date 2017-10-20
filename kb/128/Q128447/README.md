---
layout: page
title: "Q128447: Enumeration of Large NTFS Directory Takes a Long Time"
permalink: /kb/128/Q128447/
---

## Q128447: Enumeration of Large NTFS Directory Takes a Long Time

{% raw %}

	Article: Q128447
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If several thousand files with long filenames exist in a shared directory on an
	Windows NT file system (NTFS) partition, enumeration of the directory takes a
	long time. If a network client performs the same task at the same time, it may
	lose it's network connection to the shared directory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 8.3 lan wfw wfwg file name names
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
