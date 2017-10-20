---
layout: page
title: "Q93374: MemMaker Doesn't Find SYSTEM.INI File on Network"
permalink: /kb/093/Q93374/
---

## Q93374: MemMaker Doesn't Find SYSTEM.INI File on Network

{% raw %}

	Article: Q93374
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MemMaker does not find your Windows SYSTEM.INI file if you are running a network
	installation of Windows (installed with SETUP /N) and you don't log onto the
	network from your AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	MemMaker relies on the CONFIG.SYS and AUTOEXEC.BAT files to find the files it
	needs to optimize your system. MemMaker needs to read the SYSTEM.INI file to
	determine how much free upper memory block (UMB) space to set aside for the API
	translation buffers.
	
	For MemMaker to correctly optimize your systems memory, load the network software
	from the AUTOEXEC.BAT file.
	
	Additional query words: 6.22 6.0 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
