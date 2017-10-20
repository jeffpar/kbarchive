---
layout: page
title: "Q92484: Memory Overflow Error Message Printing to HP III Compatible"
permalink: /kb/092/Q92484/
---

## Q92484: Memory Overflow Error Message Printing to HP III Compatible

{% raw %}

	Article: Q92484
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a memory overflow error message when you print to a Hewlett-
	Packard (HP) LaserJet III compatible printer. This error occurs when the printer
	has 512 kilobyte (K) memory, and the Windows printer driver attempts to exceed
	the printer's memory.
	
	CAUSE
	=====
	
	Hewlett-Packard LaserJet III printers come with 1 megabyte (MB) RAM standard
	while some clones of this printer come with only 512K. Because the LaserJet III
	printer's minimum memory requirement is 1 MB, the Windows printer driver's
	minimum setting in Control Panel is 1MB.
	
	STATUS
	======
	
	This functionality is by design; Microsoft has no plans to change this in the
	future.
	
	WORKAROUND
	==========
	
	To work around this problem, use the MemReserve= setting in the [modelname,
	port] section of the WIN.INI file. For example:
	
	     [HP LaserJet III,LPT1]
	     MemReserve=512
	
	The PRINTERS.WRI file incorrectly states in the "Configuring Memory on PCL
	Printers" section that you should add the MemReserve= setting to the [drv name,
	port] section of the WIN.INI file.
	
	Additional query words: 3.10 3.11 clone hp lj ljiii docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
