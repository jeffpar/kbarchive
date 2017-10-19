---
layout: page
title: "Q93602: How to Disable F5 and F8 During Startup in MS-DOS"
permalink: /kb/093/Q93602/
---

## Q93602: How to Disable F5 and F8 During Startup in MS-DOS

	Article: Q93602
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	MS-DOS 6.0 and later allow you to bypass both AUTOEXEC.BAT and CONFIG.SYS
	by pressing the F5 key as you are starting your computer. This can disable
	the effectiveness of some password-protection schemes. In order to disable
	this feature, add the following line to CONFIG.SYS:
	
	  " SWITCHES=/N " (without the quotation marks)
	
	This line disables both the F5 and F8 keys, which allow you to modify your
	startup configuration during the boot process. Note: This line can be put
	anywhere in CONFIG.SYS.
	
	Additional query words: 6.22 6.00 startup start up 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
