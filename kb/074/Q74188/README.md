---
layout: page
title: "Q74188: Running Paradox 3.5 with EMM386.EXE and MS-DOS 5.0 or later"
permalink: kb/074/Q74188/
---

## Q74188: Running Paradox 3.5 with EMM386.EXE and MS-DOS 5.0 or later

	Article: Q74188
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Borland Paradox version 3.5 does not operate in protected mode when EMM386.EXE
	installed with the NOEMS switch. Paradox 3.5 can operate in protected mode with
	EMM386.EXE installed if the RAM switch is used and at least 384K of expanded
	memory is allocated, as follows:
	
	  device=EMM386.EXE 384 RAM
	
	MORE INFORMATION
	================
	
	Paradox 3.5 by Borland is an MS-DOS application which can operate either in Real
	mode or in Protected mode. When operating in Protected mode, Paradox can use
	Extended memory (using Int15 BIOS calls), or XMS memory (through an XMS memory
	manager such as HIMEM.SYS). In addition, Paradox complies with the Virtual
	Control Program Interface (VCPI), which allows a protected-mode application (a
	VCPI client) to allocate memory being managed by a virtual-86 mode (80386)
	expanded-memory emulator (a VCPI host), such as EMM386.EXE. If EMM386.EXE (or
	any VCPI host) is installed, Paradox does not use Extended or XMS memory
	directly, but instead allocates the memory from the VCPI host (EMM386.EXE). In
	order for EMM386.EXE to provide this memory to Paradox (or any VCPI-compliant
	application), EMM386.EXE must be managing that memory.
	
	Loading EMM386.EXE with the RAM switch specifies a pool of memory that EMM386.EXE
	is to manage, using it to emulate Expanded memory. It is this memory that
	Paradox (the VCPI client) requests from EMM386.EXE (the VCPI host) for its
	protected-mode operations. The size of this memory pool must be at least 384 KB
	for Paradox to operate in protected mode.
	
	NOTE: The README.TXT file from Paradox 3.5 contains the following information on
	using Paradox 3.5 with 386 expanded memory managers (emulators):
	
	  Some EMS emulators can run without allocating an EMS page frame. This lets
	  you use their many extra features, particularly the ability to relocate
	  drivers above 640K, even if you don't want to use EMS. QEMM's FRAME=NONE
	  option has this effect, as does 386Max's NOFRAME option. If you use your EMS
	  emulator this way, you must run Paradox in real mode (this is the mode it
	  will run in by default). Attempting to force Paradox into protected mode in
	  this situation might hang your machine.
	
	The Borland product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.22 3.00 3.50 5.00 3rdparty 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
