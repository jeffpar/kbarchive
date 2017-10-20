---
layout: page
title: "Q103557: HIMEM.SYS Fails to See More than 64 MB on EISA Machine"
permalink: /kb/103/Q103557/
---

## Q103557: HIMEM.SYS Fails to See More than 64 MB on EISA Machine

{% raw %}

	Article: Q103557
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.01,5.x,6.0,6.2,6.21; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions of HIMEM.SYS earlier than 3.10 may not recognize more than 64 megabytes
	(MB) of memory on EISA bus computers.
	
	CAUSE
	=====
	
	This is because HIMEM.SYS does not recognize EISA memory blocks that start
	between 64 MB and 65 MB. On these machines, HIMEM.SYS only sees 64 MB of
	memory.
	
	NOTE: MS-DOS 6.2 and Windows for Workgroups version 3.11 provide HIMEM.SYS
	version 3.10.
	
	Additional query words: 6.0 5.0 5.00 5.00a 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.01,5.x,6.0,6.2,6.21; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
