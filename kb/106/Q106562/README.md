---
layout: page
title: "Q106562: FIX: CTRL+C Is Not Trapped in GetCharQQ"
permalink: /kb/106/Q106562/
---

## Q106562: FIX: CTRL+C Is Not Trapped in GetCharQQ

{% raw %}

	Article: Q106562
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetCharQQ function does not terminate the program when a CTRL+C or
	CTRL+BREAK is entered at the keyboard. Instead, the ASCII value for that key
	sequence is returned (ASCII 03).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been corrected in FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior:
	
	1. Build the TKEYS.FOR sample program with FORTRAN PowerStation. This file is in
	  F32\SAMPLES\RUNTIME. No compile options are required.
	
	2. Run TKEYS at the MS-DOS prompt.
	
	3. Press CTRL+C. The following will be displayed:
	
	  ASCII: yes Char: Decimal: 3 Hex: 0003
	
	4. Press CTRL+BREAK. The same values will be displayed.
	
	5. To exit, press:
	
	  q y <space> <space>
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	Additional query words: 1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
