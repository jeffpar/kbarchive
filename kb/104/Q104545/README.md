---
layout: page
title: "Q104545: MemMaker Does Not Recognize All Netroom Drivers"
permalink: /kb/104/Q104545/
---

## Q104545: MemMaker Does Not Recognize All Netroom Drivers

{% raw %}

	Article: Q104545
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft MS-DOS MemMaker does not correctly remove all Netroom drivers when it
	optimizes your CONFIG.SYS and AUTOEXEC.BAT files. As a result, your system may
	not function correctly.
	
	CAUSE
	=====
	
	At this time, MemMaker doesn't recognize all the Netroom drivers. It does
	recognize (and remove) RM386, DOSUMB, and devices loaded with XLOAD. However, it
	doesn't recognize the cloaking drivers and the stacks program (SYSCLOAK.EXE,
	VIDCLOAK.EXE, DOBIOS.COM, and DOSUMB.COM).
	
	RESOLUTION
	==========
	
	To work around this problem, remove the Netroom drivers from your CONFIG.SYS and
	AUTOEXEC.BAT files before you run MemMaker.
	
	Additional query words: 6.22 6.20 dosbio.com dosumb.com doumb.com
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
