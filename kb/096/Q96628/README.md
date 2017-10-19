---
layout: page
title: "Q96628: Screen Does Not Pause With MEM /C /P OR DIR /P"
permalink: /kb/096/Q96628/
---

## Q96628: Screen Does Not Pause With MEM /C /P OR DIR /P

	Article: Q96628
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some older CGA display adapters don't properly handle the scrolling of text. If
	you are using on of these cards, the DIR and MEM command /P parameter may not
	function correctly.
	
	WORKAROUND
	==========
	
	To work around this problem, add a device statement for ANSI.SYS with the /S
	parameter to the CONFIG.SYS file as in the following example:
	
	  device=c:\dos\ansi.sys /s
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
