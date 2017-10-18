---
layout: page
title: "Q94356: CMOS Access Causes Some Machines to Hang with EMM386.EXE"
permalink: kb/094/Q94356/
---

## Q94356: CMOS Access Causes Some Machines to Hang with EMM386.EXE

	Article: Q94356
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the EMM386.EXE HIGHSCAN switch, your machine may stop responding
	(hang) or reboot when you attempt to access the CMOS.
	
	The following machines may stop responding (hang):
	
	- Dell 486D/50 (accessed by CTRL+ALT+ENTER)
	
	- DTK Keen 2000 (accessed by CTRL+ALT+ESC)
	
	- Micronics VLB MB (accessed by CTRL+ALT+ESC)
	
	- Leading Technology QE486/33
	
	The following machines may reboot:
	
	- Some Gateway 2000 computers that use Phoenix BIOS
	
	
	CAUSE
	=====
	
	The HIGHSCAN switch causes EMM386.EXE to scan the F000-F7FF upper memory range.
	On some machines, EMM386.EXE detects that this range is available.
	
	You should not have problems using this range on the Dell 486D/50 except when you
	attempt to access the CMOS.
	
	This problem is more apparent in MS-DOS 6.2 and later because EMM386.EXE version
	4.48 zeros available upper memory blocks (UMBs). However, it can also happen in
	MS-DOS 6.0 if you use HIGHSCAN and subsequently load enough device drivers or
	terminate-and-stay-resident (TSR) programs into UMBs to fill enough of the
	F000-F7FF region.
	
	EMM386.EXE version 4.48 no longer tries to claim the HIGHSCAN area (F000h-F7FFh)
	on older DELL systems that do not support the XBIOS function (used to return the
	available ROM space).
	
	WORKAROUND
	==========
	
	To access your CMOS settings, restart (reboot) the computer and press the F5 key
	or press and hold down the SHIFT key to bypass all commands in your CONFIG.SYS
	and AUTOEXEC.BAT files. You can then access your CMOS settings by pressing the
	appropriate key combination.
	
	Additional query words: 6.22 6 6.00 6.20 DX2 processor freeze lock up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
