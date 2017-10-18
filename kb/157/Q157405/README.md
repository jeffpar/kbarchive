---
layout: page
title: "Q157405: BUG: Reverting to OLDVAL() Causes Error with Table Buffering"
permalink: kb/157/Q157405/
---

## Q157405: BUG: Reverting to OLDVAL() Causes Error with Table Buffering

	Article: Q157405
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Table Buffering activated, trying to replace the current value with the
	value assigned to the OLDVAL() function causes an error, and the table is not
	updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and Populate a table as follows:
	
	        CREATE TABLE sample ( Field1 C(5) UNIQUE )
	        INSERT INTO sample ( Field1 ) VALUES ( "one  " )
	        INSERT INTO sample ( Field1 ) VALUES ( "two  " )
	        INSERT INTO sample ( Field1 ) VALUES ( "three" )
	
	2. Set optimistic(5) or pessimistic(4) table buffering on the table as follows:
	
	        SET MULTILOCK ON
	        =CURSORSETPROP( "Buffering", 5 )
	
	3. Change Field1 of the first record as follows:
	
	        GO Top
	        REPLACE field1 WITH "four"
	
	4. Now move the record pointer to confirm the change as follows:
	
	        SKIP
	        SKIP -1
	
	5. Insert OLDVAL() into the record's field, which was just changed, and move the
	  record pointer to submit the change as follows:
	
	        REPLACE field1 WITH OLDVAL( "Field1" )
	        SKIP
	
	The "Uniqueness of index FIELD1 is violated" error message appears. You can click
	Cancel or Ignore to close the error message dialog box.
	
	In order to Update the table again or to close it, you have to Revert the table
	(TableRevert(.T.)), which updates the table back to before the updates in steps
	3 through 5 above.
	
	NOTE: This problem does not exist if you are using Record Locking instead of File
	Locking.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
