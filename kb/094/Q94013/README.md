---
layout: page
title: "Q94013: MS-DOS: MEM Doesn't Display &quot;Bytes Available XMS Memory&quot;"
permalink: /kb/094/Q94013/
---

## Q94013: MS-DOS: MEM Doesn't Display &quot;Bytes Available XMS Memory&quot;

{% raw %}

	Article: Q94013
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MEM command does not display the following line if the Extended Memory
	Specification (XMS) driver is not loaded, or if the driver is loaded but not
	initialized:
	
	  Bytes available XMS memory
	
	MORE INFORMATION
	================
	
	The amount of available extended memory is not displayed until the XMS driver
	(usually HIMEM.SYS) is loaded AND a device driver that uses extended memory has
	also loaded. The following MS-DOS commands or device drivers use extended
	memory:
	
	     dos=high
	     device=c:\dos\emm386.exe
	     device=c:\dos\smartdrv.sys
	     device=c:\dos\ramdrive.sys /e
	
	Additional query words: 5.00 5.00a
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	

{% endraw %}
