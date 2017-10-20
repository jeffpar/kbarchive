---
layout: page
title: "Q105062: MS-DOS Err Msg with DiscTec: Unrecoverable Disk Error"
permalink: /kb/105/Q105062/
---

## Q105062: MS-DOS Err Msg with DiscTec: Unrecoverable Disk Error

{% raw %}

	Article: Q105062
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to install MS-DOS:
	
	  Unrecoverable Disk Error
	  Hard Disk is not readable.
	
	CAUSE
	=====
	
	This problem occurs when the DiskStor DISCTEC.SYS removable device driver is
	loaded in memory.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Edit your CONFIG.SYS file to remark out (REM) the command for DISCTEC.SYS.
	
	2. Restart your computer.
	
	3. Install MS-DOS.
	
	4. Edit your CONFIG.SYS file and add the "DISCTEC.SYS" (without the quotation
	  marks) command.
	
	5. Restart your computer.
	
	Additional query words: 6.22 6.20 stepup Upgrade Step-Up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
