---
layout: page
title: "Q132512: Selecting a Computer Type Before Windows NT Setup Begins"
permalink: kb/132/Q132512/
---

## Q132512: Selecting a Computer Type Before Windows NT Setup Begins

	Article: Q132512
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5x, 4.0 
	- Microsoft Windows NT Server versions 3.5x, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you boot from the Setup disks, Windows NT Setup loads a reduced version of
	the operating system, including a symmetric multiprocessing (SMP) kernel and the
	generic multiprocessor version of the hardware abstraction layer (HAL). This
	articles explains how to select a different kernel and HAL.
	
	MORE INFORMATION
	================
	
	To force setup to load a specific HAL and kernel, follow one of these two
	procedures:
	
	- Floppy Disk Setup Procedure
	
	  -or-
	
	- WINNT32 /B or WINNT /B Setup Procedure
	
	Floppy Disk Setup Procedure
	---------------------------
	
	1. Boot Windows NT Setup from the Setup floppy disks and wait for the Computer's
	  BIOS information to appear.
	
	2. Press the F5 key when you are at the black screen that states:
	
	  Setup is inspecting your computers hardware configuration
	
	3. Wait for Setup to display a blue screen with text at the top and the bottom
	  that states:
	
	  Windows NT Setup
	  ================
	
	  Setup is loading files (Windows NT Executive)
	
	4. Wait for Setup to display a dialog box with a list of computer models.
	
	  This is the list of computer models that appears:
	
	  AST Manhatten SMP
	  Compaq SystemPro MultiProcesor or 100% compatible
	  Corollary C-bus Architecture
	  IBM PS/2 or other Microchannel-based PC
	  MPS Uniprocessor PC
	  MPS Multiprocessor PC
	  NCR System3000 model 3360/3450/3550
	  Olivetti LSX5030/40
	  Standard PC
	  Standard PC With c-step i486
	  Wyse series 7000i model 740mp/760mp
	  Other
	
	5. Select your computer from the list, including Standard PC or, if your
	  computer is not listed, select the option called Other, which prompts you to
	  insert a disk with a HAL provided by your computer manufacturer.
	
	WINNT32 /B or WINNT /B Setup Procedure
	--------------------------------------
	
	1. Start Setup with the command WINNT32 /B or WINNT /B, whichever applies, and
	  wait for the OSLOADER screen to appear.
	
	2. Press the F5 key when you are at the black screen that states:
	
	  Setup is inspecting your computers hardware configuration
	
	3. Wait for Setup to display a blue screen with text at the top and the bottom
	  that states:
	
	  Windows NT Setup
	  ================
	
	  Setup is loading files (Windows NT Executive)
	
	4. Wait for Setup to display a dialog box with a list of computer models.
	
	  This is the list of computer models that appears:
	
	  AST Manhatten SMP
	  Compaq SystemPro MultiProcesor or 100% compatible
	  Corollary C-bus Architecture
	  IBM PS/2 or other Microchannel-based PC
	  MPS Uniprocessor PC
	  MPS Multiprocessor PC
	  NCR System3000 model 3360/3450/3550
	  Olivetti LSX5030/40
	  Standard PC
	  Standard PC With c-step i486
	  Wyse series 7000i model 740mp/760mp
	  Other
	
	5. Select your computer from the list, including Standard PC or, if your
	  computer is not listed, select the option called Other, which prompts you to
	  insert a disk with a HAL provided by your computer manufacturer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
