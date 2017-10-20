---
layout: page
title: "Q96695: Install Programs May Not Update Drivers with Multi-Config"
permalink: /kb/096/Q96695/
---

## Q96695: Install Programs May Not Update Drivers with Multi-Config

{% raw %}

	Article: Q96695
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many software installation programs modify the CONFIG.SYS and AUTOEXEC.BAT
	files. Most installation programs that modify the CONFIG.SYS file add lines to
	either the top or the bottom of this file. If you are using multiple
	configurations, these modifications may cause problems.
	
	MORE INFORMATION
	================
	
	The most common problem occurs when an installation program updates a specific
	driver in the CONFIG.SYS file when multiple instances of that driver exist. Many
	installation programs update only the first or last occurrence of a driver. You
	can avoid multiple occurrences of device drivers in the CONFIG.SYS file by using
	a [COMMON] section.
	
	If you include a [COMMON] block at the end of your CONFIG.SYS file, you can
	usually avoid problems with installation programs that add lines to the bottom
	of the CONFIG.SYS file.
	
	Additional query words: 6.22 6.00 application setup multi-config multi config 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
