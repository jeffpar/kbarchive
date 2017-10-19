---
layout: page
title: "Q112342: FIX: Format Editor Problems with Repeatable A Edit Descriptor"
permalink: /kb/112/Q112342/
---

## Q112342: FIX: Format Editor Problems with Repeatable A Edit Descriptor

	Article: Q112342
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Workbench Format Editor at first correctly displays formats with
	repeatable A edit descriptors. However, when clicking the resulting character
	string, the A edit descriptor in the FORMAT statement drops the repeat value. If
	the FORMAT statement is then clicked, the format displays as if there is no
	repeat value on the A edit descriptor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for Windows
	NT, version 1.0. This problem was corrected in Microsoft FORTRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	To reproduce the problem mentioned above, follow these steps:
	
	1. Enter the sample program below in the Visual Workbench and save the file to
	  disk.
	
	2. Click the FORMAT statement.
	
	3. From the Tools menu, choose Format Editor.
	
	4. In the Format Editor window, click the text box (above the ruler). Enter the
	  format changes.
	
	5. Click the FORMAT statement; the text box will be smaller.
	
	Sample Code
	-----------
	
	  c Compile options needed: none
	  c
	        character*10 str(3)
	        write (*,10) str
	  10    format(3a10)
	        end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
