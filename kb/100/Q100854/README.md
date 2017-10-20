---
layout: page
title: "Q100854: MS-DOS Upgrade Setup Adds C:&#92;DOS to Each PATH Statement"
permalink: /kb/100/Q100854/
---

## Q100854: MS-DOS Upgrade Setup Adds C:&#92;DOS to Each PATH Statement

{% raw %}

	Article: Q100854
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Upgrade Setup adds your MS-DOS directory (typically C:\DOS) to each PATH
	statement in your AUTOEXEC.BAT file. For example, if your MS-DOS directory is
	C:\DOS and you have the following two path statements
	
	  PATH=C:\WINDOWS;C:\BATCH
	  PATH=%PATH%;C:\BIN
	
	Setup adds C:\DOS; to both of them, resulting in the following:
	
	  PATH=C:\DOS;C:\WINDOWS;C:\BATCH
	  PATH=C:\DOS;%PATH%;C:\BIN
	
	If your MS-DOS directory is in the PATH twice, some applications may not behave
	as expected. For example, Windows Setup finds MS-DOS-based applications twice
	when it searches your hard disk based on the PATH.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
