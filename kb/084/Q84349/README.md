---
layout: page
title: "Q84349: Windows 3.1 Does Not Install MS-DOS Mouse Driver"
permalink: /kb/084/Q84349/
---

## Q84349: Windows 3.1 Does Not Install MS-DOS Mouse Driver

	Article: Q84349
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 Setup does not expand MOUSE.COM or MOUSE.SYS into
	the Windows directory unless MOUSE.SYS is loaded from the CONFIG.SYS file or
	MOUSE.COM is loaded from the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	To expand these files into the Windows directory, use one of the following
	commands at the command prompt
	
	  expand a:\mouse.co_ c:\windows\mouse.com
	
	-or-
	
	  expand a:\mouse.sy_ c:\windows\mouse.sys
	
	where the files are located on the following disks:
	
	  Filename     Filename           Disk Number          File Size
	  (Expanded)   (Compressed)  1.44MB  1.2MB   720K   (Compd)  (Expnd)
	  ----------   ------------  ------  -----   ----   -------  -------
	
	  MOUSE.COM    MOUSE.CO_       4       4       A    31,328   56,408
	  MOUSE.SYS    MOUSE.SY_       4       5       A    30,733   55,160
	
	When installing the Microsoft Windows operating system version 3.1, if the
	Microsoft Mouse driver is loaded in the CONFIG.SYS file (as in the example
	below), it is possible that Setup will not detect the MS-DOS- level Microsoft
	Mouse driver:
	
	  install=mouse.com
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
