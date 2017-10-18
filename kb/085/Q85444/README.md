---
layout: page
title: "Q85444: Windows and the Intel Inboard 386/AT"
permalink: kb/085/Q85444/
---

## Q85444: Windows and the Intel Inboard 386/AT

	Article: Q85444
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Intel InBoard 386/AT is compatible with Microsoft Windows operating system
	versions 3.0 and 3.1. The InBoard 386/AT is designed to replace a computer's
	80286 processor.
	
	MORE INFORMATION
	================
	
	The following are common problems encountered when running Microsoft Windows
	versions 3.0 and 3.1 on a system equipped with an Intel InBoard 386/AT:
	
	- The ILIM386.SYS expanded-memory emulator, provided with the Intel InBoard 386
	  AT product, is incompatible with Windows 3.1. You should remove all
	  references to this emulator from your CONFIG.SYS and AUTOEXEC.BAT files
	  before installing Windows 3.1.
	
	- The Intel InBoard 386/AT, placed in an IBM PC/AT is on the Windows 3.1
	  Compatibility List as the following entry:
	
	  IBM PC/AT/Inboard 386 AT
	
	The IBM PC/AT is based on the 80286 processor.
	
	Restarting your System
	----------------------
	
	The Intel Inboard 386 is designed to be used in AT-type machines instead of the
	native 286 chip. Intel supplies a program, SPEED.SYS, which should allow you to
	restart your system by pressing CTRL+ALT+DEL when the Inboard 386/AT is
	installed.
	
	This program will not work with programs such as Windows, which hook the keyboard
	interrupt, trapping some key sequences, but letting others pass through.
	
	Expanded Memory
	---------------
	
	Intel's ICACHE.SYS and ILIM386.SYS files can cause problems with Windows. Use
	SMARTDrive as a disk cache with Windows (instead of ICACHE.SYS). Use EMM386.EXE
	to provide expanded memory for applications running in real mode of Windows 3.0
	(instead of ILIM386.SYS).
	
	If you us the AST EEMS Memory Board on your computer with the Intel InBoard
	386/AT, you may have problems using expanded memory. The AST EEMS boards cannot
	be used to backfill memory down to 256K bytes with the InBoard 386/AT. If you
	try to backfill, the Inboard 386's cache will cache the EEMS paged memory, and
	problems will occur. Instead, set the AST board for extended memory.
	
	Speed-Change Keys
	-----------------
	
	The InBoard 386/AT central processing unit (CPU) speed-change keys will not work
	while you are running Windows. This is because Windows traps all commands from
	the keyboard. The easiest way to change CPU speeds is to create a PIF file and
	run the ISPEEDAT.COM file from the PIF.
	
	Tecmar AT150E Tape Backup
	-------------------------
	
	You cannot use the Tecmar AT150E tape backup with Windows on a system using an
	Intel InBoard 386/AT. The Tecmar QT150E is incompatible with the InBoard 386.
	
	EGA Video Display
	-----------------
	
	Using Windows with Intel's INBOARD 386 and an EGA video card and monitor can
	corrupt part of the screen display (usually the lower half). If this happens,
	add the EGASIZE=256 command to the INBRDAT.SYS line in the CONFIG.SYS file.
	
	General Information
	-------------------
	
	The Intel InBoard 386/AT will provide up to three times faster performance than
	the 80286. It is compatible with the IBM PC/AT, IBM 3270 AT, COMPAQ DESKPRO
	286(8MHz), COMPAQ PORTABLE 286, COMPAQ PORTABLE II, Tandy 3000HL, and Tandy
	3000HD. It is expandable to 1 MB or RAM with 256K chips and up to 3MB with
	piggyback options. It supports the optional Intel 387 DX-16 math coprocessor.
	
	The Intel InBoard 386 PC/XT is NOT the same as the 386/AT chip. It is designed
	for computers with an 8088 processor. You can only reliably run Microsoft
	Windows operating system version 3.0 in real mode on a system with an Intel
	InBoard 386 PC/XT.
	
	The Intel InBoard 386 is manufactured by Intel. We make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	REFERENCES
	==========
	
	Intel, Intel Faxbacks #2052 and #2254, (800) 525-3019
	Intel, U.S. and Canada, product information, (800) 538-3373
	Intel, International, product information, (503) 629-7354
	Intel, Bulletin Board Service (BBS), (503) 645-6275
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
