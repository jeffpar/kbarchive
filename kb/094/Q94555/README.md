---
layout: page
title: "Q94555: MemMaker: Order of Entries in the CONFIG.SYS File"
permalink: /kb/094/Q94555/
---

## Q94555: MemMaker: Order of Entries in the CONFIG.SYS File

{% raw %}

	Article: Q94555
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	MemMaker always modifies the CONFIG.SYS file so that the entries are in the
	following order:
	
	  DEVICE=C:\DOS\HIMEM.SYS
	  DEVICE=C:\DOS\EMM386.EXE <settings>
	  buffers=<setting>
	  files=<setting>
	  dos=umb
	  lastdrive=<setting>
	  FCBS=<setting>
	  [Everything else in the same order it was already in]
	
	The <setting> and <settings> are determined by MemMaker for each you
	specific installation and configuration.
	
	MORE INFORMATION
	================
	
	MemMaker does not have a feature that allows drivers load before any of those
	listed above. If there is a problem with a specific driver that needs to be
	loaded before the above lines, that driver may not function until you manually
	edit the CONFIG.SYS file and move the driver to where it belongs.
	
	To work around this problem:
	
	1. Edit the CONFIG.SYS file and comment out (REM) the device driver you are
	  having problems with.
	
	2. Run MemMaker.
	
	3. Edit the CONFIG.SYS file and remove "REM" from the device driver.
	
	4. Return the device driver to its previous location.
	
	NOTE: If the memory configuration that MemMaker created changes when you follow
	this procedure, you must manually optimize your configuration.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
