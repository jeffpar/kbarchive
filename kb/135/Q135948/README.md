---
layout: page
title: "Q135948: System Agent Reports Error After Running ScanDisk"
permalink: /kb/135/Q135948/
---

## Q135948: System Agent Reports Error After Running ScanDisk

{% raw %}

	Article: Q135948
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): scandisk win95 kbScanDisk
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following message after System Agent runs ScanDisk:
	
	  Result: One or more drives could not be checked (249)
	
	CAUSE
	=====
	
	This message indicates that a drive could not be checked by ScanDisk because it
	was locked by another program, or because it was created using the SUBST
	command.
	
	RESOLUTION
	==========
	
	Make sure that no drive is locked by another program, and then run ScanDisk
	again.
	
	Note that ScanDisk cannot check drives created using the SUBST command.
	
	MORE INFORMATION
	================
	
	The behavior described in this article can also occur if you have scheduled both
	ScanDisk and Disk Defragmenter to start when you start Windows 95. Both programs
	try to lock the drive at the same time instead of one program running after
	another. Schedule ScanDisk and Disk Defragmenter to run at different times.
	
	Additional query words: scandskw SAGE
	
	======================================================================
	Keywords          : scandisk win95 kbScanDisk 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
