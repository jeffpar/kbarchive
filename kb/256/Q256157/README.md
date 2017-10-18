---
layout: page
title: "Q256157: PRB: Field Does Not Accept Null Values When Used with a Union"
permalink: kb/256/Q256157/
---

## Q256157: PRB: Field Does Not Accept Null Values When Used with a Union

	Article: Q256157
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSn
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a SELECT statement with a UNION on a table without null values, the
	result set might contain null values. If the first table or cursor used in the
	UNION does not allow null values, you might receive the following error
	message:
	
	  Field "Fieldname" does not accept null values.
	
	CAUSE
	=====
	
	This error occurs if the first table in the SELECT statement does not allow null
	values.
	
	RESOLUTION
	==========
	
	This error can be prevented by creating an empty cursor that allows null values
	and using it first in the UNION.
	
	1. Create a program that contains the following code and run it:
	
	  * Start of Code
	  CREATE CURSOR T_Emps ( ;
	     Emp_ID   I NOT NULL, ;
	     cName    C ( 7)  NOT NULL, ;
	     Mgr_ID   I  NOT NULL)
	
	  * Populate the table with data.  Leave manager ID empty for some records.
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 1, "Anne", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 2, "Bob", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 3, "Chuck", 9)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 4, "Diane", 9)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 5, "Earnest", 9)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 6, "Frank", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 7, "Gillian", 0)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 8, "Harry", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 9, "Ida", 0)
	
	  * Collect the employees who have managers.
	  SELECT T_Emps.Emp_ID, ;
	         T_Emps.cName, ;
	         Mgrs.Emp_ID AS Mgr_ID, ;
	         Mgrs.cName AS MgrName ;
	    FROM T_Emps ;
	         INNER JOIN T_Emps Mgrs ;
	         ON Mgrs.Emp_ID = T_Emps.Mgr_ID ;
	    INTO CURSOR C_Emps
	
	  * Collect all employees, whether they have a manager or not.
	  SELECT T_Emps.Emp_ID, ;
	         T_Emps.cName, ;
	         Mgrs.Emp_ID AS Mgr_ID, ;  && may be NULL
	         NVL( Mgrs.cName, SPACE( 7)) AS MgrName ;
	    FROM T_Emps ;
	         LEFT OUTER JOIN T_Emps Mgrs ;
	         ON Mgrs.Emp_ID = T_Emps.Mgr_ID ;
	    INTO CURSOR C_All
	
	  * Create a cursor to use in the union with nothing in it so it won't affect the results.
	  CREATE CURSOR C_Empty ( ;
	    Emp_ID   I NULL, ;
	     cName    C ( 7) NULL , ;
	     Mgr_ID   I NULL, ;
	     mrgname c(7) NULL)
	
	  * The error does not occur if C_Empty is used first
	  SELECT * ;
	   FROM C_Empty;
	    UNION ALL;
	  SELECT * ;
	    FROM C_Emps ;
	   UNION ALL ;
	  SELECT * ;
	    FROM C_All ;
	    INTO CURSOR C_Final
	  * End of Code
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run it:
	
	  * Start of Code
	  CREATE CURSOR T_Emps ( ;
	     Emp_ID   I NOT NULL, ;
	     cName    C ( 7)  NOT NULL, ;
	     Mgr_ID   I  NOT NULL)
	
	  * Populate the table with data.  Leave manager ID empty for some records.
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 1, "Anne", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 2, "Bob", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 3, "Chuck", 9)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 4, "Diane", 9)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 5, "Earnest", 9)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 6, "Frank", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 7, "Gillian", 0)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 8, "Harry", 3)
	  INSERT INTO T_Emps ( Emp_ID, cName, Mgr_ID) VALUES ( 9, "Ida", 0)
	
	  * Collect the employees who have managers.
	  SELECT T_Emps.Emp_ID, ;
	         T_Emps.cName, ;
	         Mgrs.Emp_ID AS Mgr_ID, ;
	         Mgrs.cName AS MgrName ;
	    FROM T_Emps ;
	         INNER JOIN T_Emps Mgrs ;
	         ON Mgrs.Emp_ID = T_Emps.Mgr_ID ;
	    INTO CURSOR C_Emps
	
	  * Collect all employees, whether they have a manager or not.
	  SELECT T_Emps.Emp_ID, ;
	         T_Emps.cName, ;
	         Mgrs.Emp_ID AS Mgr_ID, ;  && may be NULL
	         NVL( Mgrs.cName, SPACE( 7)) AS MgrName ;
	    FROM T_Emps ;
	         LEFT OUTER JOIN T_Emps Mgrs ;
	         ON Mgrs.Emp_ID = T_Emps.Mgr_ID ;
	    INTO CURSOR C_All
	
	  * UNION the two cursors together. Use cursor without any nulls first.
	  * This will generate the 1581 error, "Field MGR_ID does not accept null values."
	  SELECT * ;
	    FROM C_Emps ;
	   UNION ALL ;
	  SELECT * ;
	    FROM C_All ;
	    INTO CURSOR C_Final
	  * End of Code
	
	2. Note that you receive the error shown in the "Symptoms" section above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClient kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
