---
layout: page
title: "Q100940: 4DOS Causes &quot;Write Protected&quot; Error When Disk Is Full"
permalink: /kb/100/Q100940/
---

## Q100940: 4DOS Causes &quot;Write Protected&quot; Error When Disk Is Full

{% raw %}

	Article: Q100940
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you are using 4DOS for your command interpreter, you may receive the "Write
	Protected" error message if your disk is full.
	
	You may receive the "Write Protected" error when you use COPY, XCOPY, Microsoft
	Backup, Microsoft Backup for Windows, and so forth.
	
	CAUSE
	=====
	
	This situation occurs because 4DOS incorrectly reports critical error 27h (Disk
	Full) as a write-protect error.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain an updated version of 4DOS from JP Software.
	
	4DOS is manufactured by JP Software, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: MWBackup 6 6.00 disk_full critical error handler not ready accessing drive your may be write protected 3rdparty doublespace dblspace double space 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
