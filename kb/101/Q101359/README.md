---
layout: page
title: "Q101359: Disk Format Fails in Enhanced Mode with GSI Drive Controller"
permalink: /kb/101/Q101359/
---

## Q101359: Disk Format Fails in Enhanced Mode with GSI Drive Controller

{% raw %}

	Article: Q101359
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to format a disk either from a virtual machine in 386 enhanced mode
	or by using File Manager, Microsoft Windows may stop responding (hang) with some
	drive controllers manufactured by Great Software Ideas (GSI).
	
	In 386 enhanced mode, the File Manager or MS-DOS FORMAT process appears to begin
	normally, but then the computer hangs and requires a warm boot. The same process
	works correctly in standard mode.
	
	CAUSE
	=====
	
	This problem occurs on the GSI Drive Controller Model 11 with BIOS versions 1.14
	and earlier and on the Model 21 with BIOS versions 2.0 and earlier. GSI has
	confirmed the incompatibility of these BIOS versions with Windows 3.0 and 3.1 in
	386 enhanced mode and has BIOS upgrades available.
	
	RESOLUTION
	==========
	
	To correct this problem, order the appropriate update version for the GSI Flash
	BIOS.
	
	  Model  BIOS version
	  -------------------
	
	  11     1.15 or later
	  21     2.01 or later
	
	You can work around this problem by doing either of the following:
	
	- Format the disk using File Manager or MS-DOS in standard mode.
	
	  -or-
	
	- Quit Windows and format the disk using MS-DOS.
	
	The products included here are manufactured by Great Software Ideas, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.1 3.11 hung freeze frozen locked up DOS Box vm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
