---
layout: page
title: "Q64526: Amount of Memory Used by MS-DOS"
permalink: /kb/064/Q64526/
---

## Q64526: Amount of Memory Used by MS-DOS

{% raw %}

	Article: Q64526
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 1.x, 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Different versions of MS-DOS and different original equipment manufacturers
	(OEMs) versions of MS-DOS may use slightly different amounts of memory.
	Depending on the number of floppy drives and hard drive partitions a machine
	has, MS-DOS uses different amounts of memory. The following list describes the
	approximate amount of memory used by each MS-DOS version:
	
	                          Available   Memory
	  MS-DOS Version          Memory      Used
	  --------------          ---------   ------
	
	  5.0  with Shell
	       DOS = HIGH         618K        22K
	  5.0  with Shell
	       DOS = LOW          574K        66K
	  5.0  DOS = HIGH         623K        17K
	  5.0  DOS = LOW          579K        61K
	  4.0x with Shell         571K        69K
	  4.0x                    575K        65K
	  3.3a                    586K        54K
	  3.3                     586K        54K
	  3.2                     595K        45K
	  3.1                     602K        38K
	  3.0                     602K        38K
	  2.11                    616K        24K
	  2.1                     616K        24K
	  2.0                     608K        32K
	  1.1                     627K        13K
	
	These values may be slightly different on your machine because the manufacturer
	may have modified MS-DOS to function correctly on your machine. This
	adaptability allows MS-DOS to function identically on many different PCs, giving
	those manufacturers the flexibility to design machines to meet hardware needs
	without sacrificing a significant amount of internal memory for the operating
	system.
	
	MORE INFORMATION
	================
	
	In the list above, each machine was booted with a minimum configuration, no
	AUTOEXEC.BAT or CONFIG.SYS file, and BUFFERS = 8 by default. MS-DOS 4.0 was
	booted from the 5.25-inch Operating System 3 disk.
	
	Additional query words: 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 5.0 5.00 5.0a 5.00a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS1xSearch kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:1.x,2.x,3.x,4.x,5.x
	
	=============================================================================
	

{% endraw %}
