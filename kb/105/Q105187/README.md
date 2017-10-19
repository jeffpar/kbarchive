---
layout: page
title: "Q105187: MS-DOS Editor Hangs If MS-DOS Environment Is Too Small"
permalink: /kb/105/Q105187/
---

## Q105187: MS-DOS Editor Hangs If MS-DOS Environment Is Too Small

	Article: Q105187
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
	
	MS-DOS Editor may stop responding (hang) if the MS-DOS environment is too small.
	
	RESOLUTION
	==========
	
	To correct this problem, edit your CONFIG.SYS file (using a text editor other
	than MS-DOS Editor) to increase the value specified by the /E parameter on your
	SHELL command. For example:
	
	     SHELL=C:\DOS\COMMAND.COM C:\DOS\ /E:4096 /P
	
	This sets the size of your MS-DOS environment to 4096 bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0, 5.0a, 6.0,
	6.2, 6.21. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
