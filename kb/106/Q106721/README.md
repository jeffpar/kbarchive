---
layout: page
title: "Q106721: FIX: Tab Edit Descriptor Can Give Incorrect Results with READ"
permalink: kb/106/Q106721/
---

## Q106721: FIX: Tab Edit Descriptor Can Give Incorrect Results with READ

	Article: Q106721
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
	
	Using the tab edit descriptor (T) in a formatted READ statement can cause data
	to read in incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation version 1.0
	for MS-DOS. This problem has been resolved with FORTRAN PowerStation maintenance
	release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \F32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show version 1.0f for the maintenance
	release version 1.0a.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates this problem. Although the sample uses
	internal files, this error also occurs when reading from disk files and the
	console.
	
	Sample Code
	-----------
	
	  C No compiler options required
	        real w,x,y,z
	        character*255 wb
	  C         12345678901234567890123456789012345678901234567890123456
	        wb=' -6704       21       9.3    -399.7    1712.5      .000'
	        read(wb,'(T16,F10.3,T26,F10.3,T36,F10.3,T46,F10.3)') w,x,y,z
	        print *, w,x,y,z
	        Print *, 'Should be:'
	        print *, 9.3, -399.7, 1712.5, 0.0
	        end
	
	Output:
	
	  9.300000 -399.700000 71712.000000 5.000000
	
	Should be:
	
	  9.300000 -399.700000 1712.500000 0.000000E+00
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
