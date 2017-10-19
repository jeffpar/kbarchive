---
layout: page
title: "Q150284: File HAL486C.DLL Could Not Be Loaded"
permalink: /kb/150/Q150284/
---

## Q150284: File HAL486C.DLL Could Not Be Loaded

	Article: Q150284
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Windows NT 3.51 Setup on a multi-processor computer, if you press F5
	during the portion of Setup that displays the following text:
	
	  Setup is inspecting your computer hardware
	
	then this is the list of computer models that appears:
	
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
	
	This allows you to select the correct hardware application layer (HAL) for your
	computer. If you select the incorrect option, you may get the following
	message:
	
	  The file HAL486C.DLL could not be loaded, Error code=4097
	
	
	WORKAROUND
	==========
	
	To work around this problem, either:
	
	- Install Windows NT using Custom Setup and verify that the computer type is
	  identified as an MPS(Multimedia Presentation System) multi-processor personal
	  computer.
	
	  - OR -
	
	- Run WINNT /OX to create a new set of floppy disks and rerun setup for
	  automatic hardware detection.
	
	
	For aditional information, please see the following articles in the Microsoft
	Knowldge Base:
	
	Q103933 Windows NT May Use a Different HAL Version for Some 486 CPUs
	
	Q136781 STOP 0x0000005c on Multi-Processor Computer During Setup
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
