---
layout: page
title: "Q95956: MSCDEX Doesn't Load with Trantor CD-ROM Driver"
permalink: /kb/095/Q95956/
---

## Q95956: MSCDEX Doesn't Load with Trantor CD-ROM Driver

{% raw %}

	Article: Q95956
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MSCDEX won't load with a Trantor CD-ROM driver.
	
	CAUSE
	=====
	
	MSCDEX can't find the Trantor CD-ROM driver TSLCDR.SYS (commonly used with
	Adaptec 1542b SCSI cards) when you have a very large CONFIG.SYS file (for
	example, greater than 100 lines) and you use a MS-DOS 6.0 multiple configuration
	menu.
	
	As a result, MSCDEX won't load for this device driver.
	
	WORKAROUND
	==========
	
	To work around this problem, decrease the size of the CONFIG.SYS file or don't
	use a multiple configuration menu.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.0 dblspace multi-config 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
