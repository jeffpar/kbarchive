---
layout: page
title: "Q119018: PC DirSync: Zero-Byte ADMIN.NME Halts REBUILD"
permalink: kb/119/Q119018/
---

## Q119018: PC DirSync: Zero-Byte ADMIN.NME Halts REBUILD

	Article: Q119018
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the MS-DOS REBUILD program (REBUILD.EXE) provided with Microsoft
	Mail for PC Networks to build the Global Address List, the REBUILD program may
	terminate and bring you back to the MS-DOS prompt. The Global Address List is
	not rebuilt.
	
	CAUSE
	=====
	
	This problem occurs when the ADMIN.NME file is zero bytes in length.
	
	RESOLUTION
	==========
	
	If ADMINSHD.NME is valid, copy ADMINSHD.NME to ADMIN.NME to correct the problem.
	If ADMIN.NME and ADMINSHD.NME are both corrupt, restore the two files from a
	backup copy. If a backup copy is not available, you can run ACCTONME to build
	the ADMIN.NME file from the information in the ACCESS*.GLB files. There are some
	side effects of running ACCTONME that are listed in the ACCTONME text file
	included with the utility. ACCTONME is provided as part of the Database
	Maintenance Utilities. For more information about the ACCTONME.EXE utility and
	how to obtain it, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	After the ADMIN.NME is restored, the next run of REBUILD will rebuild the Global
	Address list.
	
	MORE INFORMATION
	================
	
	When REBUILD is halted, it may leave some temporary files, such as TMPACC2.NME
	and TMPGRP.NME; however, these files will be cleaned up during the next run of
	REBUILD.
	
	Additional query words: 3.20 3.50 halt hang
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
