---
layout: page
title: "Q72540: Calculator Does Not Reliably Subtract Two Numbers in Windows"
permalink: /kb/072/Q72540/
---

## Q72540: Calculator Does Not Reliably Subtract Two Numbers in Windows

{% raw %}

	Article: Q72540
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows Calculator (CALC.EXE) does not reliably subtract two numbers
	with decimal values. This problem occurs in both modes (standard and scientific)
	of Calculator.
	
	CAUSE
	=====
	
	Calculator does not round the decimal values properly. While Calculator is
	determining how to display the solution, it encounters a loss of precision and
	shows an incorrect answer.
	
	RESOLUTION
	==========
	
	Windows 3.0
	-----------
	
	Microsoft has confirmed this to be a problem in Windows 3.0.
	
	Windows 3.1x, Windows for Workgroups 3.1x
	-----------------------------------------
	
	To correct this problem in Windows 3.1x and Windows for Workgroups 3.1x, obtain
	the updated CALC.EXE file from the Microsoft Web site.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Calculator.
	
	2. Input the largest number to subtract first (for example, 12.52).
	
	3. Press the MINUS SIGN (-) key on the numeric keypad.
	
	4. Input the smaller number that is one unit lower in the decimal portion (for
	  example, 12.51).
	
	5. Press the EQUAL SIGN (=) key on the numeric keypad.
	
	Subtracting 12.51 from 12.52 results in one of the following incorrect numbers:
	
	  0.00
	  0.0099999999
	  0.010000001
	
	Additional query words: 3.0 3.00 3.1 3.10 subtraction 3.11 appnote
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
