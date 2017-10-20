---
layout: page
title: "Q82356: SMARTDrive 4.0 May Conflict with Virus Detection Software"
permalink: /kb/082/Q82356/
---

## Q82356: SMARTDrive 4.0 May Conflict with Virus Detection Software

{% raw %}

	Article: Q82356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMARTDrive (SMARTDRV.EXE) version 4.0 might be detected by some virus detectors
	as a virus.
	
	CAUSE
	=====
	
	This is because of the manner in which SMARTDRV.EXE interacts with the operating
	system.
	
	WORKAROUND
	==========
	
	Remove SMARTDRV.EXE before running the virus scanner. In this case, remove
	SMARTDRV.EXE from the AUTOEXEC.BAT file, reboot the computer, and run the virus
	detector. Afterwards, SMARTDRV.EXE can be added back to the AUTOEXEC.BAT file.
	If you are running virus detection from the AUTOEXEC.BAT file, make sure that
	the virus detection software is run before SMARTDRV.EXE is loaded.
	
	MORE INFORMATION
	================
	
	
	KBCategory: kbenv
	KBSubcategory: win31 winmem
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
