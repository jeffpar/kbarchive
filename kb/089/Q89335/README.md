---
layout: page
title: "Q89335: Using Compaq EXMEM.EXE with Windows, WFWG, and MS-DOS"
permalink: kb/089/Q89335/
---

## Q89335: Using Compaq EXMEM.EXE with Windows, WFWG, and MS-DOS

	Article: Q89335
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	3.10 3.11 | 6.00 6.20 6.21 6.22
	WINDOWS   | MS-DOS
	kbsetup kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compaq Corporation is now including the EXMEM.EXE memory manager with its COMPAQ
	desktop computers. According to Compaq, this memory manager should be removed
	prior to the installation of Windows, Windows for Workgroups, or MS-DOS
	Upgrade.
	
	During installation of Windows or MS-DOS, EXMEM.EXE may be detected as an
	incompatible terminate-and-stay-resident (TSR) program, and other problems may
	cause Setup to fail.
	
	MORE INFORMATION
	================
	
	EXMEM.EXE with Windows 3.1 and 3.11
	-----------------------------------
	
	The EXMEM.EXE memory manager is a combined extended and expanded memory manager
	for COMPAQ desktop computers. According to Compaq Technical Support, EXMEM.EXE
	was designed to eliminate the need for two memory managers in the CONFIG.SYS
	file (HIMEM.SYS and EMM386.EXE).
	
	Windows 3.1 does not recognize EXMEM.EXE as an expanded memory provider. If you
	need expanded memory support, use EMM386.EXE and HIMEM.SYS, which are provided
	on the Windows disks, instead of EXMEM.EXE.
	
	To use EXMEM.EXE with Windows 3.1 in 386 enhanced mode, your CONFIG.SYS file
	should include the following line:
	
	       Device=C:\DOS\EXMEM.EXE NoEMS
	
	If you plan to use EXMEM.EXE after you install Windows or Windows for Workgroups,
	you must obtain an updated driver called CPQVDD.386. This driver is available as
	either as SP0298.EXE or SP0298.ZIP from the Compaq bulletin board service
	(BBS).
	
	EXMEM.EXE with MS-DOS 6.x
	-------------------------
	
	EMM386.EXE is included with MS-DOS 6.x as well. The MS-DOS 6.x MemMaker utility
	does not recognize EXMEM.EXE and its loadhigh component, RUNHI.EXE.
	
	Compaq includes the RUNHI command with its version of MS-DOS 5.0. This command
	replaces both DEVICEHIGH and LOADHIGH, and provides more control over where
	programs are loaded. RUNHI is compatible with MS-DOS 6.x, but the following
	problems can occur:
	
	- DoubleSpace cannot be loaded high with RUNHI.
	
	- Setup does not parse lines in CONFIG.SYS or AUTOEXEC.BAT that start with
	  RUNHI, so you may end up with duplicate driver invocations.
	
	  For example, if you have RUNHI MOUSE.COM in AUTOEXEC.BAT, Setup finds that you
	  have a mouse driver loaded and tries to update it, but it cannot find the
	  line in AUTOEXEC.BAT where the driver is loaded, and adds C:\DOS\MOUSE at the
	  end of AUTOEXEC.BAT. The original line is undisturbed.
	
	Additional query words: dblspace 3.10 3.11 compac runhigh cemm 6.00 6.20 6.21 6.22 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
