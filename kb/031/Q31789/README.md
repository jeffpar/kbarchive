---
layout: page
title: "Q31789: Converting Between Decimal, Octal, and Binary Numbers"
permalink: /kb/031/Q31789/
---

## Q31789: Converting Between Decimal, Octal, and Binary Numbers

{% raw %}

	Article: Q31789
	Product(s): Microsoft Visual Basic for Windows
	Version(s): MS-DOS:1.0; :1.0,1.01,1.02,2.0,2.01,2.1,3.0,3.20,4.0,4.0b,4.5,5.35,5.36,6.0,7.0,7.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 1.0, 2.0, 3.0 
	- Microsoft BASIC Compiler, version 1.0, on platform(s):
	   - the operating system: Mac OS (ALL) 
	- Microsoft BASIC Interpreter for Apple Macintosh, versions 1.0, 1.01, 2.0, 2.1, 3.0 
	- Microsoft QuickBasic Compiler for the IBM PC, versions 1.0, 1.01, 1.02, 2.0, 2.01, 3.0, 4.0, 4.0b, 4.5 
	- Microsoft BASIC Compiler for MS-DOS and MS OS/2, version 6.0 
	- Microsoft BASIC Compiler for MS-DOS, versions 5.35, 5.36 
	- Microsoft Basic Professional Development System (PDS) for MS-DOS and MS OS/2, versions 7.0, 7.1 
	- Microsoft GW-Basic Interpreter, version 3.20 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Basic code below demonstrates how to perform the following
	conversions between decimal, octal, and binary numbers:
	
	- Convert an octal number to a decimal (base 10) number
	
	- Convert a decimal number to an octal (base 8) number
	
	- Convert a decimal number to a binary (base 2) number
	
	MORE INFORMATION
	================
	
	The following code example will perform the conversions:
	
	  ' 1. Octal string to decimal Number:
	  INPUT "INPUT Octal number:"; octal$
	  PRINT VAL("&O" + octal$)
	
	  ' 2. Decimal Number to octal string:
	  INPUT "INPUT Decimal number:"; Decimal
	  PRINT OCT$(Decimal)
	
	  ' 3. Decimal Number to Binary string:
	  Bin$ = ""
	  INPUT "INPUT Decimal number:"; Decimal
	  FOR i = 14 TO 0 STEP -1           ' Positive numbers only
	    pow2 = 2 ^ i
	    IF Decimal >= pow2 THEN
	       Decimal = Decimal - pow2: Bin$ = Bin$ + "1"
	    ELSE Bin$ = Bin$ + "0"
	    END IF
	  NEXT i
	  PRINT Bin$
	
	The above information applies to most Microsoft Basic products, including the
	following Basics:
	
	- Microsoft Visual Basic version 1.0 for MS-DOS
	
	- Microsoft Visual Basic versions 1.0, 2.0, 3.0 for Microsoft Windows. NOTE:
	  You will need to replace the INPUT statement in the above code with a feature
	  that is supported in this product, such as a text box used with a Click event
	  procedure.
	
	- Microsoft Basic Compiler version 1.0 for the Apple Macintosh
	
	- Microsoft Basic Interpreter versions 1.0, 1.01, 2.0, 2.1, and 3.0 for the
	  Apple Macintosh
	
	- Microsoft QuickBasic Compiler versions 1.0, 1.01, 1.02, 2.0, 2.01, 3.0, 4.0,
	  4.0b, and 4.5 for the IBM PC
	
	- Microsoft Basic Compiler versions 5.35 and 5.36 for MS-DOS
	
	- Microsoft Basic Compiler version 6.0 for MS-DOS and MS OS/2
	
	- Microsoft Basic PDS versions 7.0 and 7.1 for MS-DOS and MS OS/2
	
	- Microsoft GW-Basic Interpreter version 3.2
	
	Additional query words: VBmsdos QuickBas BasicCom 1.00 2.10 3.00 3.20 4.00 4.00b 4.50 6.00 6.00b 7.00 7.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2 kbBASICSearch kbZNotKeyword3
	Version           : MS-DOS:1.0; :1.0,1.01,1.02,2.0,2.01,2.1,3.0,3.20,4.0,4.0b,4.5,5.35,5.36,6.0,7.0,7.1
	
	=============================================================================
	

{% endraw %}
