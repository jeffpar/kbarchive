---
layout: page
title: "Q130524: BUG: COPY TO ARRAY Behaves Differently from dBASE"
permalink: /kb/130/Q130524/
---

## Q130524: BUG: COPY TO ARRAY Behaves Differently from dBASE

	Article: Q130524
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the command COPY TO ARRAY <array name> FIELDS <field list>
	where one of the fields in the field list is a calculated expression generates
	one of the following errors:
	
	- Not a character expression.
	
	-or-
	
	- Command contains unrecognized phrase/keyword.
	
	CAUSE
	=====
	
	Calculated expressions are not evaluated in the COPY TO ARRAY command.
	
	NOTE: This is a common practice among dBASE programmers and will cause legacy
	code to break.
	
	RESOLUTION
	==========
	
	To resolve this error message do one of the following:
	
	- Modify the structure of the source table to accommodate result data from
	  calculated expressions.
	
	-or-
	
	- Create the array using the SQL syntax. This syntax permits calculated
	  expressions to some degree. For example, if you need a four-element array
	  that contains data from three specific fields in your table in addition to a
	  calculated expression, your code would look like this:
	
	     SELECT product, units, cost, (cost*unit) ;
	        FROM products ;
	        INTO ARRAY aTemp
	
	  Here product, units, and cost are fields from a table called products and
	  (cost*units) is a calculated expression.
	
	-or-
	
	- Create the array with an extra element and STORE the results of the
	  calculation in the corresponding array element by using a FOR loop. For
	  example, if you need a four-element array with 10 rows and the last element
	  in the array should contain the calculated expression, your code would look
	  like this:
	
	     DIMENSION aTemp[5,10]
	     FOR i = 1 TO 10 STEP 1
	        STORE (i + 1) TO aTemp[5,i]
	     ENDFOR
	
	  Here (i + 1) is the calculated expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbvfp600 kbvfp300 kbvfp500
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
