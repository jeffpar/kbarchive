---
layout: page
title: "Q98741: EMM386 May Hang System with Certain Network Cards"
permalink: /kb/098/Q98741/
---

## Q98741: EMM386 May Hang System with Certain Network Cards

{% raw %}

	Article: Q98741
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	EMM386.EXE version 4.45, which ships with MS-DOS 6.0, EMM386.EXE version 4.48,
	which ships with MS-DOS 6.2 and 6.21, and EMM386.EXE version 4.49, which ships
	with MS-DOS 6.22 may cause your system to stop responding (hang) with certain
	network cards installed.
	
	CAUSE
	=====
	
	This problem occurs when EMM386.EXE scans the adapter segment and detects a
	token-ring network card.
	
	WORKAROUND
	==========
	
	To correct this problem, add the NOTR parameter to the EMM386.EXE line in your
	CONFIG.SYS file.
	
	
	MORE INFORMATION
	================
	
	This problem is known to occur with the following cards:
	
	  Proteon 1390 Token Ring Card
	  Proteon 1392 Token Ring Card
	
	
	NOTE: The NOTR parameter is not documented in the "Microsoft MS-DOS User's Guide"
	for versions 6.0 and 6.2; however, it does appear in the "MS-DOS 6 Technical
	Reference."
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
