---
layout: page
title: "Q155936: PRB: Closing Table Loses Changes with Table Buffering"
permalink: kb/155/Q155936/
---

## Q155936: PRB: Closing Table Loses Changes with Table Buffering

	Article: Q155936
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a CLOSE or USE command to close an open table, and that table uses
	Table Buffering and contains uncommitted changes, Visual FoxPro closes the table
	and does not save the uncommitted changes. Additionally, no error dialog box
	appears when you close the table. This behavior is different from Visual FoxPro
	versions 3.0 and 3.0b, which displays an error dialog box if you attempt to
	close a table with uncommitted changes.
	
	WORKAROUND
	==========
	
	Use the TABLEUPDATE() function to force Visual FoxPro to save the changes before
	closing the table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example uses the Customer table in the Visual FoxPro
	Samples\Data\Testdata database:
	
	1. Run the following code from a program:
	
	     *  Start of code example
	
	     LOCAL nI
	     CLOSE DATABASES ALL
	     FOR nI = 1 TO 5
	        USE HOME() + 'samples\data\customer'
	        =CURSORSETPROP('buffering',nI)
	        REPLACE company WITH ALLTR(company) + ' ' + ALLTRIM(STR(nI))
	        SKIP
	        USE          && Closes table
	        USE HOME() + 'samples\data\customer'
	        BROWSE
	     ENDFOR
	     REPLACE company WITH SUBSTR(company,1,ATC('1',company,1)-1)
	
	     *  End
	
	  Notice the numeral appended after the company name in the first record, and
	  then close the Browse window. Do this for each of the five times the Browse
	  window appears. The numbers 1 through 3 appear, but 4 and 5 do not. Number 1
	  is no buffering, 2 and 3 are Pessimistic and Optimistic Row buffering, and 4
	  and 5 are Pessimistic and Optimistic Table buffering.
	
	2. As a workaround for the above example, modify the above code as follows:
	
	     *  Start of code example
	
	     LOCAL nI
	     CLOSE DATABASES ALL
	     FOR nI = 1 TO 5
	        USE HOME() + 'samples\data\customer'
	        =CURSORSETPROP('buffering',nI)
	        REPLACE company WITH ALLTRIM(company) + ' ' + ALLTRIM(STR(nI))
	        SKIP
	        * The following statement is necessary to prevent errors
	        * with GETNEXTMODIFIED() if table buffering is not used
	        IF CURSORGETPROP('buffering') > 3
	
	          IF GETNEXTMODIFIED(0) > 0    && Checks for any modified records
	
	            =TABLEUPDATE(1)            && Or whatever you want to do
	                                       && before you close the table
	          ENDIF
	        ENDIF
	        USE                            && Closes table
	        USE HOME() + 'samples\data\customer'
	        BROWSE
	     ENDFOR
	     REPLACE company WITH SUBSTR(company,1,ATC('1',company,1)-1)
	
	     *  End
	
	  The changed record is saved, even when table buffering is used.
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help file; search on: "CURSORSETPROP()," "GETNEXTMODIFIED(),"
	and "TABLEUPDATE()"
	
	Visual FoxPro 5.0 Readme.hlp file; search on: "Using Visual FoxPro," then
	"Closing a Cursor with an Uncommitted Record"
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	
	=============================================================================
	
