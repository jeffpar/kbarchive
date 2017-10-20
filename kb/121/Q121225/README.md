---
layout: page
title: "Q121225: Different Driver Names Reported with MEM/C and MEM/D"
permalink: /kb/121/Q121225/
---

## Q121225: Different Driver Names Reported with MEM/C and MEM/D

{% raw %}

	Article: Q121225
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the MEM /C and MEM /D commands with MS-DOS 6.22, they report
	different names for the same driver found in memory (DRVSPACE.BIN) even though
	both commands reference DRVSPACE. This can be confusing when you are attempting
	to determine if either DBLSPACE.BIN or DRVSPACE.BIN is being loaded into
	memory.
	
	The following example shows the information reported by MEM /C and MEM /D:
	
	MEM /C
	------
	
	  Modules using memory below 1 MB:
	  Name      Total          =    Conventional   +    Upper Memory
	  HIMEM     1,104   (1K)        1,104   (1K)        0      (0K)
	  EMM386    4,144   (4K)        4,144   (4K)        0      (0K)
	  DRVSPACE  39,680  (39K)       0       (0K)        39,680 (39K)
	
	MEM /D
	------
	
	  Conventional Memory Detail:
	  Segment   Total          Name           Type
	            1,088   (1K)   XMSXXXX0       Installed Device=HIMEM
	            4,128   (4K)   EMMQXXX0       Installed Device=EMM386
	
	  Upper Memory Detail:
	  Segment   Region  Total          Name        Type
	                    39,632  (39K)  DBLSYSH$    Installed Device=DRVSPACE
	                                   or DBLSBIN$
	
	Although the Name reference in the different commands is different, both commands
	reference DRVSPACE. MEM /C references it in the Name field; MEM /D references it
	in the Type field.
	
	MORE INFORMATION
	================
	
	The MEM /C command classifies programs by memory usage, lists the size of
	programs, provides a summary of memory in use, and lists largest memory block
	available.
	
	The MEM/D command displays status of all modules in memory, internal drivers, and
	other information.
	
	
	
	Additional query words: 6.22 memory drivespace doublespace driver
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
