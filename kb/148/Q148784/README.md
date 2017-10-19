---
layout: page
title: "Q148784: How to Use UDF() to Modify Default Scientific Notation Format"
permalink: /kb/148/Q148784/
---

## Q148784: How to Use UDF() to Modify Default Scientific Notation Format

	Article: Q148784
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The default formatting that Visual FoxPro applies to numbers requiring
	scientific notation does not conform to a standard that many customers expect.
	You can use the user-defined function (UDF) in this article to address this
	issue.
	
	MORE INFORMATION
	================
	
	The following program is a UDF() that can process a numeric value into the
	standard format expected by many customers who have expressed a need for an
	alternative format for scientific notation:
	
	  PARAMETERS   nPassedVal
	
	  * Program:   Num2sci.prg
	  *
	  * Purpose:   Convert FoxPro formatted numeric values requiring scientific
	  *            notation to the frequently requested n.nnnE+n format.
	  * Syntax:    NUM2SCI(nExpression)
	  * Arguments: nExpression is the numeric value to convert to the alternative
	  *            format.
	  * Returns:   Character
	
	  * Important notes about minimum and maximum ranges FoxPro will address:
	  * -------------------------------------------------------------------------
	  * SET DECIMALS makes no difference to any of this functionality.
	  * FoxPro will round values beginning at the fifteenth decimal place.
	  * Margin of error at 15 decimals or more is 3.410910030699E-15.
	  * The maximums for the STR() function are: STR(n,25,18).
	  *
	  * Any value of n.nE+19 or greater will resolve to scientific notation.
	  *
	  *   Ex: ALLTRIM(STR(1.234567890e+18,25,18))
	  *       Resolves to: "1234567890000000000.00000"
	  *   Ex: ALLTRIM(STR(1.234567890e+19,25,18))
	  *       Resolves to: ".1234567890000004000E+20"
	  *
	  * Any value passed with n.nE-16 or lower will resolve to equal zero.
	  *
	  *   Ex: ALLTRIM(STR(1.234567890e-15,25,18))
	  *       Resolves to: "0.000000000000001000"
	  *   Ex: ALLTRIM(STR(1.234567890e-16,25,18))
	  *       Resolves to: "0.000000000000000000"
	  *
	  * These are limitations in FoxPro that cannot be changed. This procedure,
	  * and therefore any data it processes, is limited to working within these
	  * constraints.
	  *
	  * -------------------------------------------------------------------------
	
	  * Stage 1: Convert to character
	  cConvStage1 = UPPER(ALLTRIM(STR(nPassedVal,25,18)))
	  * Find initial location of decimal point
	  nDecimalLoc = ATC(".", cConvStage1)
	  * Find 'E' beginning notation
	  nExpLoc     = RAT("E", cConvStage1)
	
	  IF nExpLoc = 0                           && No notation in resolved value.
	    * Remove trailing zeros from character value
	    DO WHILE SUBSTR(cConvStage1,LEN(cConvStage1),1) = '0'
	      cConvStage1 = SUBSTR(cConvStage1,1,LEN(cConvStage1)-1)
	    ENDDO
	    cRetVal = SUBSTR(cConvStage1,1)    && Return entire number included.
	  decimals
	  ELSE
	  * Stage 2: Value deconstruction and element reformatting
	  * Swap positions of first two characters
	    cConvStage2a = SUBSTR(cConvStage1,2,1)+"."
	    * Portion between the decimal and the 'E'
	    cConvStage2b = SUBSTR(cConvStage1,3,nExpLoc-3)
	    * Decrement notation by 1
	    cConvStage2c = "E+"+ALLTRIM(STR(VAL(SUBSTR(cConvStage1,nExpLoc+2))-1))
	
	    * process portion between decimal and the 'E' to remove trailing Zeros
	    DO WHILE SUBSTR(cConvStage2b,LEN(cConvStage2b),1) = '0'
	      cConvStage2b = SUBSTR(cConvStage2b,1,LEN(cConvStage2b)-1)
	    ENDDO
	
	    * Stage 3: Value reconstruction
	    cRetVal = cConvStage2a+cConvStage2b+cConvStage2c
	  ENDIF
	  RETURN cRetVal
	
	To convert the value back to numeric, use the VAL() function against the
	character data NUM2SCI() returned.
	
	Additional query words: FoxWin FoxMac FoxUnix FoxDos VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b
	
	=============================================================================
	
