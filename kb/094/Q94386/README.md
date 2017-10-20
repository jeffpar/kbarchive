---
layout: page
title: "Q94386: Insufficient Memory Error Message with DBLSPACE /RATIO"
permalink: /kb/094/Q94386/
---

## Q94386: Insufficient Memory Error Message with DBLSPACE /RATIO

{% raw %}

	Article: Q94386
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run DBLSPACE /RATIO before the NET command is used in the AUTOEXEC.BAT
	file, you may receive an insufficient memory error message.
	
	CAUSE
	=====
	
	This problem occurs when the network has not released the memory used during
	loading because network binding has not yet occurred.
	
	RESOLUTION
	==========
	
	It is not necessary to run DBLSPACE /RATIO from the AUTOEXEC.BAT file since
	DoubleSpace reliably reports the amount of free disk space. However, if you want
	to run DBLSPACE /RATIO from the AUTOEXEC.BAT file, place the NET START command
	before the DBLSPACE /RATIO command, as in the following example:
	
	  c:\windows\net start
	  c:\dos\dblspace /ratio
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
