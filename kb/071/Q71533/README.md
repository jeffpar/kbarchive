---
layout: page
title: "Q71533: PC Tools 6.0 REBUILD.COM Incompatible with MS-DOS 5.0 and Later"
permalink: /kb/071/Q71533/
---

## Q71533: PC Tools 6.0 REBUILD.COM Incompatible with MS-DOS 5.0 and Later

{% raw %}

	Article: Q71533
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PC Tools version 6.0 REBUILD.COM command checks the current DOS version
	before it continues, and returns the following error message:
	
	  Wrong DOS
	
	CAUSE
	=====
	
	This is problem occurs because MS-DOS version 5.0 and later are unknown version
	numbers to PC TOOLS version 6.0; when it attempts to confirm the DOS version,
	REBUILD.COM is unable to continue.
	
	WORKAROUND
	==========
	
	This error message is embedded in REBUILD.COM. The only workaround for this
	problem is to use the MS-DOS 5.0 or later UNFORMAT command. UNFORMAT performs
	the same function as REBUILD.
	
	NOTE: Using the MS-DOS 5.0 or later SETVER command does not correct this problem.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
