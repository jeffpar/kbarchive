---
layout: page
title: "Q98700: Bit Manipulation in FoxPro for Data Encryption"
permalink: /kb/098/Q98700/
---

## Q98700: Bit Manipulation in FoxPro for Data Encryption

	Article: Q98700
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because FoxPro uses characters that have values between 0 and 255 (1 byte),
	these character values and thus the bit pattern can be manipulated once the
	characters are converted to numeric values using the ASC() command. This sort of
	operation could be used for data encryption.
	
	The program below illustrates how the bit pattern of an entire string can be
	swapped by rotating the bit patterns of each character one at a time and placing
	the resulting characters in reverse order in the output string.
	
	MORE INFORMATION
	================
	
	     *PROGRAM SHIFTSTR.PRG
	     * (RUN BY TYPING 'DO SHIFTSTR.PRG WITH <STRING>')
	     PARAMETERS A
	     ?A
	     A=shift(A)
	     ?A
	
	     PROCEDURE shift
	     PARAMETERS in_str
	     result=[]
	     SET DECIMAL TO 0
	     lngth=LEN(in_str)
	     DIMENSION out_array(lngth)
	     FOR char_num=1 TO lngth
	        x=ASC(SUBSTR(in_str,char_num,1))
	        y=0
	        FOR bit=7 TO 0 STEP -1
	           IF x>((2^bit)-1)
	              x=x-(2^bit)
	              y=y+(2^(7-bit))
	           ENDIF
	        ENDFOR
	        out_array(lngth-char_num+1)=CHR(y)
	     ENDFOR
	     FOR char_num=1 TO lngth
	        result=result+out_array(char_num)
	     ENDFOR
	     RETURN result
	
	Additional query words: VFoxWin FoxDos FoxWin encrypt password
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	
