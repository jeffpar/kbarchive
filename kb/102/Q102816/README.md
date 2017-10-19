---
layout: page
title: "Q102816: Running MemMaker on IBM PS/1 Machines"
permalink: /kb/102/Q102816/
---

## Q102816: Running MemMaker on IBM PS/1 Machines

	Article: Q102816
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You may have difficulty running MemMaker on an IBM PS/1 machine.
	
	CAUSE
	=====
	
	This difficulty may be caused by the PS/1 System menu, which is preinstalled by
	IBM.
	
	During the execution of MemMaker, the following lines appear at the end of the
	AUTOEXEC.BAT file:
	
	  C:\DOS\SIZER.EXE /M
	  C:\DOS\MEMMAKER.EXE /SESSION:xxxxx
	
	However, these lines are never reached due to the execution of START.BAT or the
	PS/1 shell program (SHELLSTB.COM or RSSTUB.COM); therefore, MemMaker never
	finishes examining the system.
	
	RESOLUTION
	==========
	
	To correctly examine the system with MemMaker, the files C:\PSTOOLS\START.BAT
	and SHELLSTB.COM (or RSSTUB.COM) must be remarked out or removed from the
	AUTOEXEC.BAT file. After you run MemMaker, these menu programs can be replaced.
	
	MORE INFORMATION
	================
	
	IBM PS/1 machines include the following terminate-and-stay-resident (TSR)
	programs and other programs in the AUTOEXEC.BAT file:
	
	  C:\PS1TOOLS\VSTOP.COM
	  C:\PS1TOOLS\HWCHECK.EXE
	  C:\PS1TOOLS\START.BAT
	
	The TSR VSTOP.COM is a virus-protection utility. HWCHECK.EXE is a
	hardware-checking program. START.BAT launches Microsoft Windows and brings back
	the four-quadrant screen (System menu) when you quit Windows. Choices available
	on the System menu may include IBM-DOS, Information, Your Software, Prodigy,
	Promenade, and/or Microsoft Works. There are over 70 varieties of the PS/1,
	which accounts for the variety of choices on System menus.
	
	In addition to the files mentioned above, either SHELLSTB.COM or RSSTUB.COM
	launches the System menu. This should be remarked out as well for the proper
	running of MemMaker.
	
	The PS/1 is manufactured by IBM, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For more information, call the IBM Support Center or IBM PS/1 Support.
	
	Additional query words: 6.22 6.00 ps1 quad screen 4-quad 4quad four 6.20 quadrant four-quadrant
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
