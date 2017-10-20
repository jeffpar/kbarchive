---
layout: page
title: "Q96388: Uninstalling MS-DOS on an XtraDrive Compressed Drive"
permalink: /kb/096/Q96388/
---

## Q96388: Uninstalling MS-DOS on an XtraDrive Compressed Drive

{% raw %}

	Article: Q96388
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
	
	If you install MS-DOS Upgrade on a machine that is using XtraDrive data-
	compression software, you cannot uninstall MS-DOS without modifying the
	Uninstall disk.
	
	WORKAROUND
	==========
	
	To successfully uninstall MS-DOS Upgrade:
	
	1. Copy XTRADRV.SYS to the Uninstall disk.
	
	2. Using MS-DOS Editor, create a CONFIG.SYS file on the Uninstall disk with the
	  following line:
	
	     device=a:\xtradrv.sys
	
	3. Restart the computer with the Uninstall disk in drive A. (Press the
	  CTRL+ALT+DEL key combination.)
	
	Additional query words: 6.22 6.00 6.20 xtra extra drive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
