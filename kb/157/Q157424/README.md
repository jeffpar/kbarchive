---
layout: page
title: "Q157424: PRB: Remote View Displays Empty Date Fields with 12/30/1899"
permalink: /kb/157/Q157424/
---

## Q157424: PRB: Remote View Displays Empty Date Fields with 12/30/1899

	Article: Q157424
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Remote view accesses a table with an empty date field, then that field is
	displayed with a value of "12/30/1899."
	
	CAUSE
	=====
	
	The ODBC driver has to return a value since it does not have a concept of
	"empty" data. So, a default constant is a better choice than NULL in this case.
	The date 12/30/1899 is the default value used in OLE and Microsoft Access.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the 32-Bit ODBC Driver Manager create a datasource to access the
	  Labels.dbf table in the Visual FoxPro 3.0, 5.0 or 6.0 directory. You want to
	  use the Visual FoxPro Tables (Microsoft Visual FoxPro Driver) and select the
	  Free Table Directory as the Database Type.
	
	2. Run Visual FoxPro and Browse Labels.dbf using the following:
	
	        SET CENTURY ON
	        USE HOME()+"Labels.dbf"
	        BROWSE
	
	3. Look at the Update field and note that it is empty for all the records in the
	  table. Close the Labels.dbf table.
	
	4. Open a database or create a new one, then create a remote view based on the
	  Labels.dbf table using the datasource created earlier.
	
	5. In the Fields tab, click the "Add All" button to select all fields for
	  output.
	
	6. Browse the view.
	
	Look at the Updated field and notice that all the records contain a value of
	"12/30/1899."
	
	NOTE: This behavior exists with any type of remote datasource that allows the
	date fields to be empty.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
