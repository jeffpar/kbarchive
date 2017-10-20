---
layout: page
title: "Q191923: PRB: COPY TO ARRAY Causes Insufficient Memory Error"
permalink: /kb/191/Q191923/
---

## Q191923: PRB: COPY TO ARRAY Causes Insufficient Memory Error

{% raw %}

	Article: Q191923
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the COPY TO ARRAY command to copy fields to an array can cause an
	insufficient memory error in Visual FoxPro 5.x and 6.0. If the number of fields
	copied to the array multiplied by the number of records in the database is
	greater than 65000, then an insufficient memory error occurs if the array is not
	previously defined.
	
	CAUSE
	=====
	
	The array was not dimensioned prior to use.
	
	RESOLUTION
	==========
	
	Here are three workarounds for this problem:
	
	- Instead of using the COPY TO ARRAY command, use a SELECT statement. For
	  example:
	
	        SELECT * FROM mytest where name2 = "WY" INTO ARRAY myarray
	
	- Dimension the array, prior to use, so that it is large enough to contain the
	  data. For example:
	
	        DIMENSION myarray(30,10)
	
	  If the array is already defined, an error will not occur. If the dimensions of
	  the array do not match the data, the array will not be re-dimensioned to
	  match the data by the copy command and data can be lost.
	
	- Use an ON ERROR handle to check for Error 43 and ignore the error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you ignore the insufficient memory error message, the array is created
	anyway.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program (.prg) file.
	
	2. Place the following code in the .prg file:
	
	        CREATE TABLE mytest (name1 c(10), name2 c(2), name3 c(5),;
	                          name4 c(5), name5 c(5))
	
	        FOR i = 1 to 40
	           INSERT INTO mytest (name1, name2, name3, name4, name5);
	           VALUES (SYS(2015), "WA", "WORLD", "HELLO", "TEST" )
	        ENDFOR
	
	        FOR i = 1 to 20
	           INSERT INTO mytest (name1, name2, name3, name4, name5);
	           VALUES (SYS(2015), "WY", "WORLD", "SMITH", "TEST1")
	        ENDFOR
	
	        FOR i = 1 to 15000
	           INSERT INTO mytest (name1, name2, name3, name4, name5);
	           VALUES (SYS(2015), "MA", "WORLD", "SMITH", "TEST1")
	        ENDFOR
	
	        INDEX ON name2 TAG name2
	        SET ORDER TO name2
	        SEEK "WY"
	        IF FOUND()
	           WAIT WINDOW "RECORD FOUND" NOWAIT
	           COPY TO ARRAY myarray WHILE name2='WY'
	        ELSE
	           RETURN
	        ENDIF
	
	3. Save and run the program.
	
	NOTE: When the Wait window appears, a Program Error dialog displays with the
	following error:
	
	  There is not enough memory to complete this operation.
	
	REFERENCES
	==========
	
	Microsoft FoxPro Help, serach on: "COPY TO ARRAY" Microsoft FoxPro Help, search
	on: "DIMENSION"
	
	Additional query words: kbXBase kbVFp600 kbVFp500a kbVFp500
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
