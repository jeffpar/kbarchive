---
layout: page
title: "Q135040: FIX: Pack Closes Index File But Does Not Update It"
permalink: /kb/135/Q135040/
---

## Q135040: FIX: Pack Closes Index File But Does Not Update It

	Article: Q135040
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Visual FoxPro packs a table to remove deleted records, any non-structural
	index open at the time is closed. However, when a program subsequently uses the
	table that depends on its indexed order, the program will not perform as
	expected and may give unexpected error messages.
	
	When Visual FoxPro packs a table to remove deleted records, any regular
	structural compound index (one with the same name as the table and with a .cdx
	extension) open at the time is not closed.
	
	This is different from the behavior of previous versions of FoxPro.
	
	WORKAROUND
	==========
	
	Explicitly re-open the index file and use the REINDEX command before proceeding
	with the program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. The problem has been fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Type the following commands into a Visual FoxPro program, and then run it.
	
	     ***  Program to demonstrate the effect of PACK
	     ***  on open index files in Visual FoxPro
	     ***  Test program named Testpack.prg
	
	     CLEAR
	     SET SAFETY OFF
	     CLEAR ALL
	     CLOSE ALL
	
	     ********Creation of testfile
	     DECLARE new_dbf[1,4]
	     new_dbf[1,1] = "Pagenum"
	     new_dbf[1,2] = "N"
	     new_dbf[1,3] = 4
	     new_dbf[1,4] = 0
	
	     SELECT 0
	     CREATE TABLE temptabl FROM ARRAY new_dbf   && It's in USE
	     INDEX ON Deleted() TAG Deleted             && .CDX is also in USE
	     INDEX ON Pagenum TAG Pagenum
	     SET ORDER TO
	     COPY TO Temptbl2 WITH PRODUCTION           && On the disk so
	     RENAME Temptbl2.dbf TO testfile.dbf        && Can rename.
	     RENAME Temptbl2.cdx TO testfile.pax        && Now not structural.
	     *  Index file has multiple tags. It is a non-structural compound
	     *  index file. A single index file with the extension of .idx
	     *  will also demonstrate the issue.
	
	     USE testfile INDEX testfile.pax ALIAS testfile EXCLUSIVE
	     SET ORDER TO
	
	     **** Add some records then delete some
	     SELECT testfile
	     FOR q = -10 to 50                          && 60 records
	       APPEND BLANK
	       REPLACE Pagenum WITH q
	       IF q/3 == INT(q/3)                       && Every third record
	         DELETE
	       ENDIF
	     ENDFOR
	
	     CLEAR
	     WAIT WINDOW "About to display status." ;
	       + chr(13) + ;
	       "Please notice that the table has its index file open."
	
	     DISPLAY STATUS
	     WAIT
	
	     CLEAR
	     WAIT WINDOW "About to pack."
	     PACK
	
	     WAIT WINDOW "About to display status again." ;
	       + chr(13) + ;
	       "Please notice that the index file has been closed."
	     DISPLAY STATUS
	     WAIT
	
	     WAIT WINDOW "Use Alt+I to bypass the next message, but" ;
	       + chr(13) + ;
	       "read it first - you're trying to use a closed index."
	     SET ORDER TO 1
	     BROWSE NOWAIT
	
	     WAIT WINDOW "Every 3rd record was deleted. Packing removed them." ;
	      + chr(13) + ;
	      "But, as you have seen, the index file was closed." ;
	      + chr(13) + ;
	      "See if the index still exists. Watch the status bar."
	     ERASE testfile.pax
	     WAIT WINDOW "The message - File has been deleted - says" ;
	       + chr(13) + ;
	       "The index file was closed and could be deleted."
	     CLOSE ALL
	
	     ERASE temptabl.dbf  && Clean up afterwards.
	     ERASE temptabl.cdx
	     ERASE temptbl2.dbf
	     ERASE temptbl2.cdx
	     ERASE testfile.dbf
	     ERASE testfile.pax
	
	     CLEAR
	     RETURN
	     ***** End of test program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
