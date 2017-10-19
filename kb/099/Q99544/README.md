---
layout: page
title: "Q99544: PROPER() (Capitalization) Function for FoxBASE+/Mac"
permalink: /kb/099/Q99544/
---

## Q99544: PROPER() (Capitalization) Function for FoxBASE+/Mac

	Article: Q99544
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxBASE+/Mac currently does not have a PROPER() function to capitalize the first
	letter of each word in a string. However, the code below was written to allow
	the use of a user-defined function (UDF) for a PROPER() function.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	expressed or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	To use the program below, follow these steps:
	
	1. Type the code below ("Contents of PROPER.PRG") into a program file called
	  PROPER.PRG.
	
	2. In the Command window or in your program, type the following:
	
	  " set procedure to proper.prg " (without the quotation marks)
	
	3. Use PROPER() like any other function.
	
	Syntax of Proper()
	------------------
	
	     PROPER(<expC>)
	
	Example (Typed in the Command Window)
	-------------------------------------
	
	     REPLACE ALL Roster->Last WITH PROPER(Roster->Last)
	
	Contents of PROPER.PRG
	----------------------
	
	  * Beginning of PROPER.PRG
	
	     PARAMETERS STRING
	
	     IF TYPE('STRING') <> "C"
	       WAIT "Invalid Parameter Passed To PROPER()"
	       RETURN " "
	     ENDIF
	
	     IF LEN(RTRIM(STRING)) = 0
	       RETURN ""
	     ENDIF
	
	     STORE 1 TO DD
	     STORE LEN(STRING) TO STRLEN
	
	     * Lower all characters
	     STRING = LOWER(RTRIM(STRING))
	
	     * Check first character in string
	     IF SUBSTR(STRING, 1, 1) <> " "
	       STRING = UPPER(SUBSTR(STRING, 1, 1))+SUBSTR(STRING, 2)
	     ENDIF
	
	     DO WHILE .T.
	         IF SUBSTR(STRING, DD, 1) = " "
	            STRING = SUBSTR(STRING, 1, DD) ;
	            +UPPER(SUBSTR(STRING, DD+1, 1))+SUBSTR(STRING, DD+2)
	         ENDIF
	         DD = DD + 1
	         IF DD > LEN(STRING) - 2
	           EXIT
	         ENDIF
	     ENDDO
	
	     IF LEN(STRING) < STRLEN
	        STRING = STRING + SPACE(STRLEN-LEN(STRING))
	     ENDIF
	
	     RETURN STRING
	  * End of Program
	
	Additional query words: uppercase lowercase initial capital letters caps upper case lower
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
