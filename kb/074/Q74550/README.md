---
layout: page
title: "Q74550: NET&#36;OS.EXE File from Novell Network Needs HIMEM /int15 Switch"
permalink: /kb/074/Q74550/
---

## Q74550: NET&#36;OS.EXE File from Novell Network Needs HIMEM /int15 Switch

{% raw %}

	Article: Q74550
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you load NET$OS.EXE you may receive the following error message:
	
	  Insufficient memory
	
	NOTE: The NET$OS.EXE file is an alternative to IPX.COM.
	
	CAUSE
	=====
	
	The NET$OS.EXE file provides its own memory manager. When HIMEM.SYS is loaded
	with no switches, the above error message is returned.
	
	WORKAROUND
	==========
	
	There are two solutions:
	
	- Use the INT15 switch on HIMEM.SYS (Located in the CONFIG.SYS file) to allow
	  NET$OS.EXE to access the memory on its own. Use at least 1088 on the INT15
	  switch. For example:
	
	     DEVICE=C:\DOS\HIMEM.SYS /INT15=1088
	
	- Take the HIMEM.SYS driver out of the CONFIG.SYS file.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
