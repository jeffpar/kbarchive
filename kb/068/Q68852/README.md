---
layout: page
title: "Q68852: Installing Windows 3.0 on NEC ProSpeed with Docking Station"
permalink: /kb/068/Q68852/
---

## Q68852: Installing Windows 3.0 on NEC ProSpeed with Docking Station

	Article: Q68852
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The NEC ProSpeed 386 uses AUTOEXEC.DS and CONFIG.DS as system files
	when attached to the NEC Docking Station. The AUTOEXEC.BAT and
	CONFIG.SYS files are ignored. AUTOEXEC.BAT and CONFIG.SYS are used
	when the computer is not attached to the docking station.
	
	The NEC ProSpeed 386 requires one of the HIMEM.SYS switches, /M:7 or
	/M:Toshiba, with the HIMEM.SYS statement in the CONFIG.SYS file.
	
	Example:
	
	  DEVICE=C:\HIMEM.SYS /M:7
	
	Additional query words: 3.00 win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
