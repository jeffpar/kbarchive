---
layout: page
title: "Q74997: Pathworks 4.x Does Not Run with Windows 3.0 and MS-DOS"
permalink: /kb/074/Q74997/
---

## Q74997: Pathworks 4.x Does Not Run with Windows 3.0 and MS-DOS

	Article: Q74997
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows version 3.0 under Microsoft MS-DOS version 5.0,
	6.0, or 6.2, with Digital Equipment Corporation (DEC) Pathworks versions 4.x,
	your machine may stop responding (hang) when accessing floppy disks from the
	MS-DOS command prompt.
	
	When you switch to the MS-DOS Prompt from within Windows 3.0, accessing drives A
	and B may cause the machine to hang.
	
	CAUSE
	=====
	
	This problem may occur if EMM386.EXE is loaded.
	
	WORKAROUND
	==========
	
	To see if the problem is related to EMM386.EXE, type "REM" (without the
	quotation marks) in front of the DEVICE=C:\DOS\EMM386.EXE line in your
	CONFIG.SYS file. Restart the machine. If the problem seems to go away, take the
	"REM" out and try the following:
	
	1. Make sure to follow the directions for installing Pathworks with MS-DOS 5.0
	  on page 25 of the version 5.0 "Microsoft MS-DOS Getting Started" manual.
	
	2. Exclude the area A000 - C7FF and specify no expanded memory by adding the
	  following to your CONFIG.SYS file:
	
	  " Device=EMM386.EXE x=A000-C7FF NOEMS " (without the quotation marks)
	
	3. Try excluding the system ROM.
	
	4. In the [386Enh] section of the Windows SYSTEM.INI file, exclude E000 - EFFF
	  from the EMM386 if your EtherNet card is set for this area.
	
	Pathworks is manufactured by Digital Equipment Corporation, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	
	=============================================================================
	
