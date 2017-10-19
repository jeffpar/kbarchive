---
layout: page
title: "Q82575: Windows Programs Rely on BIOS to Detect Coprocessor"
permalink: /kb/082/Q82575/
---

## Q82575: Windows Programs Rely on BIOS to Detect Coprocessor

	Article: Q82575
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Strange behavior with applications that use math coprocessors (Microsoft Excel,
	for instance) can be due to the BIOS reporting the presence of a math
	coprocessor when one does not exist. For example, if you have a 486SX machine
	with a BIOS designed for a 486DX and you type a number in Microsoft Excel, an
	incorrect floating-point number is displayed.
	
	MORE INFORMATION
	================
	
	Windows issues an INT 11h (equipment check) function call to determine whether a
	math coprocessor is present.
	
	Do the following to determine test whether there is a coprocessor detection
	problem on a computer:
	
	1. Run Microsoft Diagnostics (MSD).
	
	2. Choose the Computer option.
	
	3. If a coprocessor is detected, and the machine does not have one, the BIOS
	  will need to be replaced with a BIOS that does not incorrectly report a
	  non-existent coprocessor.
	
	
	Additional query words: 3.10 3.11 3.00 3.00a excel
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
