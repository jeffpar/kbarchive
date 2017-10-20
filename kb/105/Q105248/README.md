---
layout: page
title: "Q105248: Swap File Error When Installing Lotus Improv 2.0"
permalink: /kb/105/Q105248/
---

## Q105248: Swap File Error When Installing Lotus Improv 2.0

{% raw %}

	Article: Q105248
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Lotus Improv version 2.0 in Windows NT, you may receive an
	error message indicating that the permanent swap file was not found or is not
	large enough. You may receive this error message even if you have a sufficient
	paging file (PAGEFILE.SYS) in Windows NT.
	
	CAUSE
	=====
	
	This error message may be caused by Improv not recognizing PAGEFILE.SYS in
	Windows NT. It can also be caused by not having a swap file at least twice the
	size of physical RAM in the computer.
	
	RESOLUTION
	==========
	
	If you ignore the error message and continue with the installation, Lotus Improv
	should install correctly.
	
	MORE INFORMATION
	================
	
	When you install Lotus Improv version 2.0, its Setup program checks for a
	Windows 3.x permanent swap file. If it does not find a swap file, or if it finds
	one that is less than twice the size of the amount of physical RAM on the
	computer, you will receive a swap file error message.
	
	According to Lotus technical support, if you have 32 megabytes (MB) of RAM, for
	example, the swap file would need to be 64 MB in order to avoid this warning.
	However, a swap file (or paging file) of that size is not necessary when running
	Lotus Improv. (According to Lotus, this message is provided for users who run
	Improv on computers with less RAM, such as 4 MB, 8 MB, and so on). In Windows
	NT, the paging file is usually set to 12 MB plus the amount of physical RAM.
	Therefore, on a 32 MB computer, the paging file would be set up to be about 44
	MB. This of course, is not twice the amount of physical RAM, so Lotus Improv's
	installation may generate the error message.
	
	For additional information, call Lotus technical support at (800) 386-8600.
	
	
	Improv is manufactured by Lotus Development Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	Additional query words: prodnt swapfile
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
