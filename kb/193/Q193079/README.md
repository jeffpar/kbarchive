---
layout: page
title: "Q193079: FIX: &quot;Syntax Error&quot; with EVAL of ALL or LTRIM in SELECT-SQL"
permalink: kb/193/Q193079/
---

## Q193079: FIX: &quot;Syntax Error&quot; with EVAL of ALL or LTRIM in SELECT-SQL

	Article: Q193079
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you issue a SELECT SQL statement that contains a WHERE clause comparing a
	field value to an expression, which involves an ALLTRIM() or LTRIM() function
	that is passed to the EVALUATE() function, if the trim function trims a leading
	space or spaces the following error occurs when the SELECT statement is
	processed:
	
	  Syntax error.
	
	RESOLUTION
	==========
	
	As a workaround, trim the leading space or spaces by using STRTRAN() rather than
	ALLTRIM() or LTRIM().
	
	The following example demonstrates the workaround:
	
	     SELECT *, .t. FROM temp_table ;
	        WHERE temp_table.cUsageTL = EVALUATE(STRTRAN("lcService" ;
	        + (" 91")," ","")) ;
	        INTO CURSOR Temp4
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	        CLOSE DATABASES ALL
	        SET SAFETY OFF
	
	        * Create table and index.
	        CREATE table temp_table (cBTN c(2), cUsageTl c(10))
	        INDEX on cUsageTl tag cUsageTl
	
	        SET SAFETY ON
	
	        * Insert some records.
	        FOR lnj = 1 to 10
	           INSERT into temp_table (cBTN, cUsageTl) values ("91", "Sp800/W")
	           INSERT into temp_table (cBTN, cUsageTl) values ("91", "Sp800/X")
	           INSERT into temp_table (cBTN, cUsageTl) values ("91", "Sp800/Y")
	        ENDFOR
	
	        * Initialize variables to Evaluate.
	        lcService91="Sp800/W"
	        lcService92="Sp800/X"
	        lcService93="Sp800/Y"
	
	        * Issue SELECT with trailing, no and leading space.
	        SELECT *, .t. FROM temp_table WHERE temp_table.cUsageTl = ;
	           EVALUATE("lcService"+ALLTRIM("91 ")) ;
	           INTO CURSOR Temp2
	
	        SELECT *, .t. FROM temp_table WHERE temp_table.cUsageTl = ;
	           EVALUATE("lcService"+ALLTRIM("92")) ;
	           INTO CURSOR Temp3
	
	        * It fails with the leading space.
	        SELECT *, .t. FROM temp_table WHERE temp_table.cUsageTl = ;
	           EVALUATE("lcService"+ALLTRIM(" 93")) ;
	           INTO CURSOR Temp4
	
	In Visual FoxPro 5.0, the third select fails with a "Syntax error". This works
	without error in Visual FoxPro 6.0.
	
	Demonstration of Workaround
	---------------------------
	
	Replace the third select statement in the preceding program example with the
	following code:
	
	     SELECT *, .t. FROM temp_table ;
	        WHERE temp_table.cUsageTL = EVALUATE(STRTRAN("lcService" ;
	        + (" 91")," ","")) ;
	        INTO CURSOR Temp4
	
	RESULTS: After running the program, no error occurs, and the STRTRAN() function
	trims the leading space.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbVFp600fix kbSQL
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
