---
layout: page
title: "Q193503: PRB: TABLEUPDATE() Returns .T. When View's SendUpdates is False"
permalink: kb/193/Q193503/
---

## Q193503: PRB: TABLEUPDATE() Returns .T. When View's SendUpdates is False

	Article: Q193503
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing the command TABLEUPDATE(.T.)on a view, with the SendUpdates property
	set to False, returns True (.T.).
	
	CAUSE
	=====
	
	The TableUpdate() command should return False if the update fails. In effect,
	there must be an attempt to update at least one record that fails. When the view
	property SendUpdates is set to False, TableUpdate never tries to update any
	records, hence, the TableUpdate() returns True.
	
	RESOLUTION
	==========
	
	Check the SendUpdates property of the view using the DBGetProp() function, and
	apply the TableUpdate() function only in cases where the SendUpdates property is
	set to True (.T.).
	
	For example:
	
	     MyVar1=DBGETPROP("MyView","View","SendUpdates")
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Place the following code in a program file and run the program in a new
	directory:
	
	     CLOSE DATA ALL
	     CREATE DATA test1
	     CREATE TABLE tbl1 (fld1 c(10),fld2 d)
	     FOR i = 1 TO 4
	        INSERT INTO tbl1 VALUES (STR(i),DATE())
	     ENDFOR
	     CREATE SQL VIEW test2 AS SELECT * FROM tbl1
	     DBSETPROP("test2.fld1","field","KeyField",.t.)
	     DBSETPROP("test2.fld1","field","Updatable",.t.)
	     DBSETPROP("test2","view","SendUpdates",.F.)
	     USE test2
	     UPDATE test2 SET fld1 = 'Testing'
	     ?TABLEUPDATE(.T.)
	     ?DBGETPROP("test2","view","SendUpdates")
	
	Additional query words: kbVFp600 kbDatabase KbDBFDBC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
