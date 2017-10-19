---
layout: page
title: "Q123732: Setup Err Msg: This HAL.DLL Requires an MPS Version 1.1"
permalink: /kb/123/Q123732/
---

## Q123732: Setup Err Msg: This HAL.DLL Requires an MPS Version 1.1

	Article: Q123732
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a multiprocessor computer, the following error
	message appears when the computer reboots after the character-based portion of
	Setup:
	
	  HAL: Bad APIC version. HAL: This HAL.DLL requires an MPS version 1.1 system.
	  Replace HAL.DLL which the correct HAL for this system. The system is halting.
	
	
	CAUSE
	=====
	
	This error message occurs when:
	
	- A computer attempts to boot with a symmetric multi-processing (SMP) hardware
	  abstraction layer (HAL) on a computer with Multi-Processor Specification
	  (MPS) architecture that currently has a single processor.
	
	- A computer that is not listed on the Windows NT Hardware Compatibility List
	  (HCL) is using an ASUS dual-processor motherboard with only one processor
	  present. The Microsoft Windows NT Hardware Compatibility Group certifies
	  complete systems, not individual motherboards.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Install Windows NT using Custom Setup and verify that the computer type is
	  not identified as an MPS machine. If setup detects the system as an MPS
	  machine, change the machine type to AT Compatible.
	
	  -or-
	
	- Edit the TXTSETUP.SIF file on the setup boot disk. In the [HAL] section
	  change:
	
	  mps11_mp = halmps.dll ,2,hal.dll
	
	  to read:
	
	  mps11_mp = hal.dll ,2,hal.dll
	
	  This forces the standard ISA/EISA HAL to be loaded.
	
	  -or-
	
	- If you are running Windows NT 3.51 or 4.0, select a different kernel and HAL
	  when you boot Windows NT. For additional information, see the following
	  article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q132512
	  TITLE : Selecting a Computer Type Before Windows NT Setup Begins
	
	If a second processor is added later, you may need to manually copy and rename
	the correct HAL file.
	
	If you are using a computer (not listed on the Windows NT HCL) that has an ASUS
	dual-processor motherboard with only one processor present, you can work around
	this problem by setting the J14 jumper (on the motherboard) for a dual-processor
	computer, even though the computer has only one processor.
	
	Windows NT 3.51 includes a function key sequence that allows you to select a
	specific HAL and kernel to load. This option is not currently documented.
	
	To do this, press the F5 key when at the black screen that reads:
	
	Setup is inspecting your computers hardware configuration
	
	This is the first screen you see after the BIOS when booting from setup floppies,
	and occurs right after the OSLOADER screen when doing a WINNT32 /B or a WINNT /B
	setup.
	
	If you press F5 when you receive this message, setup will put up a blue screen
	that reads
	
	  Windows NT Setup
	
	and displays the message "Setup is loading files (Windows NT Executive)" at the
	bottom of the screen. After this message it will display a dialog box with a
	list of machine selections. You can now select any of the supported machine
	types, including Standard PC or Other, which will allow you to supply a third
	party HAL.
	
	Additional query words: text prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
