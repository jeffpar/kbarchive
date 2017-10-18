---
layout: page
title: "Q125389: How to Simulate INT 15 Rather Than Calling EISA BIOS Directly"
permalink: kb/125/Q125389/
---

## Q125389: How to Simulate INT 15 Rather Than Calling EISA BIOS Directly

	Article: Q125389
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	You computer stops responding (hangs) during the boot process.
	
	CAUSE
	=====
	
	Some programs (such as QEMM Stealth and EMM386.EXE with the /HIGHSCAN switch)
	map over part of the BIOS. If RAM has been mapped over the EISA BIOS, your
	computer may hang when Windows calls the BIOS.
	
	Windows 95 calls an EISA BIOS in one of two ways:
	
	- Using INT 15.
	
	- With a direct call to a published entry point.
	
	By default, Windows calls the BIOS directly rather than by using INT 15.
	
	RESOLUTION
	==========
	
	Windows 95 attempts to detect cases of RAM mapping so that it can change the way
	it calls the EISA BIOS. For example, if Windows 95 detects QEMM Stealth it calls
	the BIOS by simulating INT 15. To do this, Windows adds an EISASimulateInt15
	entry to the registry and gives the entry a value of
	
	1. The default value, 00, means that Windows communicates with the EISA
	
	BIOS directly.
	
	If you suspect that your computer is hanging because of the way Windows is
	accessing the BIOS, add EISASimulateInt15 to
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\System
	
	in the registry and give it a value of 00 or 01. A value of 00 causes Windows to
	call the BIOS directly, and a value of 01 causes Windows to simulate INT 15 to
	call the BIOS.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Additional query words: eisa enumerator
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
