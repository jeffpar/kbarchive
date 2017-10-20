---
layout: page
title: "Q93377: Changes Made to SYSTEM.INI by MS-DOS MemMaker"
permalink: /kb/093/Q93377/
---

## Q93377: Changes Made to SYSTEM.INI by MS-DOS MemMaker

{% raw %}

	Article: Q93377
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run MemMaker, the final screen displays the following message:
	
	  If MemMaker changed your Windows SYSTEM.INI file, the original file was saved
	  as SYSTEM.UMB.
	
	The Windows SYSTEM.INI file is changed only if you are running Windows 3.0.
	
	MORE INFORMATION
	================
	
	MemMaker changes the SYSTEM.INI file only when certain options are selected
	prior to memory optimization. The following lists all possible changes to the
	Windows 3.0 SYSTEM.INI file:
	
	  SYSTEMROMBREAKPOINT=FALSE
	  EMMEXCLUDE=A000-FFFF
	  EMMINCLUDE=<any w= regions>
	  DUALDISPLAY=TRUE                   if b000-b7ff is included
	  NOEMMDRIVER=TRUE                   if NOEMS is specified
	
	Additional query words: 6.22 6.0 win30 6.20 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
