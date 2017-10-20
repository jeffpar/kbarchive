---
layout: page
title: "Q98508: EMM386.EXE B=&lt;address&gt; Explained"
permalink: /kb/098/Q98508/
---

## Q98508: EMM386.EXE B=&lt;address&gt; Explained

{% raw %}

	Article: Q98508
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the following EMM386.EXE switches in greater detail than
	MS-DOS 6 Help does:
	
	- B=<address>
	
	- ROM=<address>
	
	MORE INFORMATION
	================
	
	EMM386.EXE B= Switch
	--------------------
	
	This switch deals with expanded memory services (EMS) 4.0 "banking." The
	B=<address> parameter specifies the starting low-memory address where EMS
	banking can occur. All memory below this address is global. All memory above
	this address can be remapped with EMS 4.0 calls.
	
	There are very few software programs that take advantage of EMS banking. This
	feature could be useful for control programs (such as Windows 286 or real mode
	Windows 3.0) that run multitasking applications. These multitasking applications
	could load a different application into each bank and change the active bank
	when switching applications.
	
	EMM386.EXE ROM= Switch
	----------------------
	
	This switch instructs EMM386.EXE to shadow (in RAM) the ROM addresses you
	specify. This switch does not work on some Zenith BIOS chip sets.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
