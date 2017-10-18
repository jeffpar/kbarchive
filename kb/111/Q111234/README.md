---
layout: page
title: "Q111234: FIX: ISHFT and ISHL Always Assume 4-Byte Integers"
permalink: kb/111/Q111234/
---

## Q111234: FIX: ISHFT and ISHL Always Assume 4-Byte Integers

	Article: Q111234
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ISHL and ISHFT intrinsic functions may return incorrect results when
	shifting INTEGER*1 or INTEGER*2 variables. The incorrect results occur only when
	right-shifting negative values.
	
	CAUSE
	=====
	
	The compiler converts the value to be shifted to a 4-byte value. For 1- and
	2-byte negative integers, the higher order bits are filled with 1s, which can be
	incorrectly shifted into the low order bytes.
	
	RESOLUTION
	==========
	
	Convert the bit pattern of the negative INTEGER*1 or INTEGER*2 value to an
	unsigned INTEGER*4 value. This is done by adding 256 to a negative INTEGER*1
	value or by adding 65536 to a negative INTEGER*2 value. Then shift the resulting
	INTEGER*4 value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT version 1.0 and MS-DOS version 1.0 and 1.0a. This problem was fixed
	in FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample illustrates the problem:
	
	Sample Code #1
	--------------
	
	  c Compile options needed: none
	  c
	        integer*2 i2
	        integer*1 i1
	        i1 = -123
	        i2 = i1
	        write(*,'('' Before shift '',Z2,2x,z4)') i1, i2
	        write(*,'('' After shift  '',Z2,2x,z4)') ishl(i1,-2), ishl(i2,-2)
	        end
	
	Output
	------
	
	  Before shift 85 FF85
	  After shift E1 FFE1
	
	The following code illustrates the article's resolution:
	
	Sample Code #2
	--------------
	
	  c Compile options needed: none
	  c
	        integer*4 j,k
	        integer*2 i2
	        integer*1 i1
	        i1 = -123
	        i2 = i1
	        j = 256 + i1
	        k = 65536 + i2
	        write(*,'('' Before shift '',Z2,2x,z4)') i1, i2
	        write(*,'('' After shift  '',Z2,2x,z4)') ishl(j,-2), ishl(k,-2)
	        end
	
	Output
	------
	
	  Before shift 85 FF85
	  After shift 21 3FE1
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
