---
layout: page
title: "Q110002: FIX: Combining -4Yb with -Ox May Cause Invalid Run-Time Errors"
permalink: /kb/110/Q110002/
---

## Q110002: FIX: Combining -4Yb with -Ox May Cause Invalid Run-Time Errors

	Article: Q110002
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some rare boundary cases, using optimizations (-Ox) with extended error
	handling ($DEBUG or -4Yb) can cause invalid run-time errors to be output, such
	as:
	
	  run-time error F6096: $DEBUG
	  - array subscript expression out of range
	
	RESOLUTION
	==========
	
	If you have determined that a run-time error such as the above is not correct
	for the code indicated, you can prevent your program from terminating with the
	error. To do this, place a $NODEBUG metacommand before the line of code that is
	being flagged, and place a $DEBUG metacommand after it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT and MS-DOS, version 1.0 and 1.0A. This problem was corrected in
	FORTRAN PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The sample below illustrates the problem:
	
	Sample Code
	-----------
	
	  c Compile options required: -Ox -4Yb
	  c
	        CHARACTER CA(512),CB(512),CC(512)
	        OPEN(7,FILE='N117.TMP',FORM='UNFORMATTED',RECL=128,
	       +     ACCESS='DIRECT')
	        DO 10 I=1,512
	          CA(I)=CHAR(48)
	  10    CONTINUE
	        DO 20 I=1,16
	          WRITE(7,REC=I) (CA(J),J=(I-1)*32+1,(I-1)*32+32)
	  c The F6096 error incorrectly occurs on the following line.
	          WRITE(7,REC=16+I) (CA(J),J=(16-I)*32+32,(16-I)*32+1,-1)
	  20    CONTINUE
	        DO 30 I=1,16
	          IE1=(16-I)*32+32
	          IE2=(16-I)*32+1
	          READ(7,REC=I+16) (CC(J),J=IE1,IE2,-1)
	  30    CONTINUE
	        IE=1
	        DO 40 I=1,512
	          IF(CA(I).NE.CB(I).OR.CA(I).NE.CC(I)) IE=0
	  40    CONTINUE
	        END
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
