---
layout: page
title: "Q89839: WFWG Err Msg: Memory Is Insufficient to Run KRNL386.EXE"
permalink: kb/089/Q89839/
---

## Q89839: WFWG Err Msg: Memory Is Insufficient to Run KRNL386.EXE

	Article: Q89839
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Novell NetWare connectivity under Windows for Workgroups,
	you may receive one of the following error messages:
	
	  Memory is insufficient to run KRNL386.EXE
	
	  -or-
	
	  WINDOWMEMSIZE is too large in SYSTEM.INI
	
	CAUSE
	=====
	
	These error messages occur in the following situations:
	
	- After you manually remove the Novell NetWare drivers from your CONFIG.SYS and
	  AUTOEXEC.BAT files instead of removing them using Control Panel
	
	  -or-
	
	- When you load PC Tools or PC-DOS RAMBoost from your AUTOEXEC.BAT file
	
	If you remove the Novell NetWare drivers from the CONFIG.SYS and AUTOEXEC.BAT
	files, the network card fails to bind because the PROTOCOL.INI file is still set
	up for Novell connectivity.
	
	NOTE: This problem may also occur if you run QEMM and load high. his may also
	occur if HP Explorer is loading high.
	
	WORKAROUND
	==========
	
	If you are running QEMM and programs in the high memory area (HMA), try loading
	the programs in low memory. If the symptoms persist, try using HIMEM.SYS.
	
	If you are running RAMBoost, remove the command from your AUTOEXEC.BAT file and
	restart your computer.
	
	To correctly remove Novell NetWare connectivity under Windows for Workgroups
	version 3.1, do the following:
	
	1. Start Windows for Workgroups in standard mode. To do this, type "win /s"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	2. Run Control Panel.
	
	3. Choose the Network icon.
	
	4. Choose the Networks button.
	
	5. Select Novell NetWare from the Other Networks In Use box.
	
	6. Choose the Remove button.
	
	7. Choose OK to save your changes.
	
	To correctly remove Novell NetWare connectivity under Windows for Workgroups
	version 3.11:
	
	1. Start Windows for Workgroups by using the WIN /N or WIN /D:T parameters.
	
	2. Run Network Setup from the Program Manager Network group.
	
	3. Choose the Networks button.
	
	4. Choose No Additional Network.
	
	5. Choose OK.
	
	
	Additional query words: 3rdparty err msg 3.10 3.11 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
