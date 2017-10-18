---
layout: page
title: "Q139757: FIX: Upsize Wizard Falsely Creates Timestamp Field on SQL 6.0"
permalink: kb/139/Q139757/
---

## Q139757: FIX: Upsize Wizard Falsely Creates Timestamp Field on SQL 6.0

	Article: Q139757
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fix kbMDAC250kbbuglist kbfixlist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you clear the Add Timestamp check box in step 8 of the Upsizing Wizard, the
	timestamp field may still be created in the upsized table if the upsized table
	contains at least one numeric field.
	
	RESOLUTION
	==========
	
	Save the generated SQL table creation scripts, modify the scripts to remove the
	timestamp column, and use SQL pass-through with the generated scripts to create
	the tables on the server. Afterwards, you can create remote views and append the
	local data to the tables on the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the Tools menu, click Wizard, and then click Upsizing.
	
	2. Select a local database to upsize in Step 1 of the Wizard.
	
	3. Select a previously created Microsoft SQL-Server 6.0 ODBC data source or
	  connection in Step 2 of the Wizard.
	
	4. Select an existing database on the server.
	
	5. Select a table that has at least one numeric field to upsize in Step 6 of the
	  Wizard.
	
	6. In Step 8 of the Wizard, clear the Add timestamp check box, and then click
	  Finish.
	
	7. After the table is created in the database on the server, create a remote
	  view to that table, and notice that the timestamp field was created anyway.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbMDAC250 kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
