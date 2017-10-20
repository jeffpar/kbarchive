---
layout: page
title: "Q104893: FIX: Using /4Yb and /Ox Together Is Not Recommended"
permalink: /kb/104/Q104893/
---

## Q104893: FIX: Using /4Yb and /Ox Together Is Not Recommended

{% raw %}

	Article: Q104893
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
	
	Running a program compiled with both full optimization (/Ox) and extended error
	handling ($DEBUG or /4Yb) may cause several problems including: incorrect
	results, incorrect range errors, or hanging.
	
	RESOLUTION
	==========
	
	To avoid these problems, remove either the full optimization compiler switch
	(/Ox) or the extended run-time debugging option (/4Yb or $DEBUG).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0. This problem has been resolved with FORTRAN Powerstation
	maintenance release version 1.0a for MS-DOS.
	
	FORTRAN PowerStation version 1.0 can be differentiated from the maintenance
	release version 1.0a by invoking the linker. Typing "link32 | more" (without the
	quotation marks) from \f32\BIN directory will show version 2.8 for FORTRAN
	PowerStation version 1.0, and it will show 1.0f for the maintenance release
	version 1.0a.
	
	MORE INFORMATION
	================
	
	The following code generates an incorrect range error if compiled with both /Ox
	and /4Yb, but runs correctly if either /Ox or /4Yb is not used:
	
	  1
	  test.for(6) : run-time error F6096: $DEBUG
	  - array subscript expression out of range
	  Execution traceback:
	  from main program in test.for(6)
	
	This is not a problem in Microsoft FORTRAN 5.1 or earlier.
	
	Sample Code
	-----------
	
	  C Compiler options required: /Ox and /4Yb
	          INTEGER IA(4)
	          data IA / 1, 2, 3, 4 / 
	          DO 20 I=1,2
	            write(*,*) i
	            WRITE(*,*) (IA(J),J=(I-1)*2+1,4)
	  20      CONTINUE
	          end
	
	Additional query words: 1.00 buglist1.00 fixlist1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
