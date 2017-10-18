---
layout: page
title: "Q83963: Windows 3.1: Insufficient Memory Error on a 2-MB Machine"
permalink: kb/083/Q83963/
---

## Q83963: Windows 3.1: Insufficient Memory Error on a 2-MB Machine

	Article: Q83963
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run the Microsoft Windows operating system version 3.1 in 386 enhanced
	mode, Windows cannot run a 640K MS-DOS prompt on a machine with only 2 MB of
	memory. If you attempt to do this, Windows generates the following error
	message:
	
	  Insufficient memory for application requested space, decrease PIF KB required
	  and try again.
	
	You can either reduce the memory requirements in the program information file
	(DOSPRMPT.PIF), add more memory, or create a permanent swap file that is at
	least 1 MB in size and enable 32-bit disk access.
	
	Note: Some machines cannot create permanent swap files and enable 32-bit disk
	access because of hardware limitations. On machines with these limitations, you
	must add more memory or reduce the memory requirements for the virtual machines
	(VMs).
	
	MORE INFORMATION
	================
	
	Reducing the Memory Requirements in DOSPRMPT.PIF
	------------------------------------------------
	
	DOSPRMPT.PIF has the KB Required and the KB Desired values set to -1 by default.
	This tells Windows the VM must be as large as possible. If there is insufficient
	memory available to create a 640K VM, Windows returns the aforementioned error
	message.
	
	In Windows 3.0, the equivalent program information file (PIF) has settings of 384
	for KB Required and 640 for KB Desired. These settings allow a VM with less than
	640K of conventional memory.
	
	If you choose to reduce the memory settings for the MS-DOS prompt in Windows 3.1,
	change the value for KB Required to 128 and the value for KB Desired to 640
	using the PIF Editor.
	
	Reducing Memory Requirements for All MS-DOS Applications
	--------------------------------------------------------
	
	You can reduce the memory requirements for all MS-DOS applications that you run
	in Windows 3.1 with the use of the WindowsKBRequired and WindowMemSize settings
	in the [386 Enh] section of the SYSTEM.INI file. Use equal settings for these
	two settings to ensure that Windows accepts the values as valid. Settings of 400
	should allow a VM to be run in Windows 3.1 on a 2-MB machine, even if a PIF has
	a -1 setting for KB Desired and KB Required. The following section is taken from
	the Windows Resource Kit (WRK) SYSINI.WRI file:
	
	  ============================================================
	  WindowKBRequired=<kilobytes>
	  Default:  256
	  Purpose:  Specifies how much conventional memory (in
	            kilobytes) must be free in order to start Windows.
	  To change:  Use Notepad to edit the SYSTEM.INI file.
	  ============================================================
	  WindowMemSize=<number-or-kilobytes>
	  Default:  -1
	  Purpose:  Limits the amount of conventional memory Windows
	            can use for itself. The default value (-1)
	            indicates that Windows can use as much
	            conventional memory as it needs. If there is not
	            enough memory to run Windows in 386 enhanced mode,
	            try entering a positive value less than 640.
	  To change:  Use Notepad to edit the SYSTEM.INI file.
	  ============================================================
	
	KBCategory: kbhw kberrmsg kbtool
	KBSubcategory: winmem win31
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
