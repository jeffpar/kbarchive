---
layout: page
title: "Q79959: Standard Mode with Windows on a Unisys (Sperry) Micro IT"
permalink: /kb/079/Q79959/
---

## Q79959: Standard Mode with Windows on a Unisys (Sperry) Micro IT

	Article: Q79959
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are unable to run Microsoft Windows in standard mode on a Unisys (Sperry)
	Micro IT personal computer, a few hardware components should be checked.
	
	According to Unisys technical support, a ROM BIOS version 1.58 and a 101-key
	keyboard must be used to run Windows in standard mode.
	
	MORE INFORMATION
	================
	
	The Unisys (Sperry) Micro IT, Model #T3137, is an 80286 personal computer
	packaged with ROM BIOS version 1.52z and a Sperry Professional 88-key keyboard.
	Windows 3.0 real mode works properly on this system; however, standard mode
	causes the system to stop responding (hang) or return to an MS-DOS command line
	after the initial Microsoft Windows 3.0 logo screen appears.
	
	There appears to be a conflict between the internal functionality of the 88-key
	keyboard and any version of HIMEM.SYS. This can be resolved by obtaining a
	101-key keyboard from Unisys. The "feature number" for this product is:
	F5177-00.
	
	
	ROM BIOS version 1.58 can be obtained from Unisys. The "feature number" for this
	part is F496402.
	
	The Unisys products included here are manufactured by Unisys, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.0a 3.0 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
