---
layout: page
title: "Q130083: PRB: Record Pointer Moves to EOF After INSERT - SQL Fails"
permalink: kb/130/Q130083/
---

## Q130083: PRB: Record Pointer Moves to EOF After INSERT - SQL Fails

	Article: Q130083
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The record pointer moves to the End of File marker (EOF) instead of remaining on
	the current record after an INSERT - SQL command fails.
	
	CAUSE
	=====
	
	The INSERT - SQL command failed because a field or row level validation rule was
	violated.
	
	WORKAROUND
	==========
	
	To work around this behavior, run the following code to initialize a variable to
	store the record pointer position before the INSERT. If the INSERT fails, the
	variable can be used to restore the record pointer to its previous position
	using the ON ERROR routine.
	
	Create a new program named Ins_Trap:
	
	  ***Begin Program Ins_Trap***
	  ON ERROR DO error_hand WITH ERROR() && When an error occurs the error_hand
	                                      && procedure is called and passed
	                                      && the error number using the ERROR()
	                                      && function.
	  CLOSE ALL
	  CREATE DATABASE ins_dbc             && Creates a new database.
	  *
	  * The following command adds a table with a row level rule:
	  *
	  CREATE TABLE ins_tbl (cfname C(20), clname C(20), CHECK cfname <> clname)
	  *
	  * The following two lines of code populate the empty table.
	  *
	  DO Insert_Proc WITH "FirstName","LastName"
	  DO Insert_Proc WITH "Another", "Name"
	  *
	  * The next line causes the validation rule to fail:
	  *
	  DO Insert_Proc WITH "Name", "Name"
	  ON ERROR
	  WAIT WINDOW 'Done'
	
	  PROCEDURE Insert_Proc
	    PARAMETERS cFirst_Name, cLast_Name
	    get_recno = RECNO()
	    INSERT INTO ins_tbl VALUES (cFirst_Name,cLast_Name)
	  ENDPROC
	
	  PROCEDURE error_hand
	    PARAMETERS error_num
	    *
	    * If a row or field level rule has been violated an error 1581, 1582 or
	    * 1583 is returned. If this rule is violated, the record pointer is
	    * moved to its previous position based on the value stored in the
	    * variable get_recno.
	    *
	    IF error_num = 1581 OR error_num = 1582 OR error_num = 1583
	       GO get_recno
	    ENDIF
	  ENDPROC
	  *** End Program Ins_Trap ***
	
	Save and execute the INS_TRAP.PRG program.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the following commands:
	
	  CREATE DATABASE ins_dbc              &&Creates a new database
	  CREATE TABLE ins_tbl (cfname C(20), clname C(20), CHECK cfname <> clname)
	   
	  INSERT INTO ins_tbl VALUES("John", "Doe")
	  INSERT INTO ins_tbl VALUES("Doe", "Doe")
	   
	  When the last INSERT INTO command fails, the record pointer is positioned
	  at EOF (End of File).
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
