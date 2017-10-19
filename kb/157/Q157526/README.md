---
layout: page
title: "Q157526: PRB: &lt;None&gt; as the Remote View Join Type Causes Error"
permalink: /kb/157/Q157526/
---

## Q157526: PRB: &lt;None&gt; as the Remote View Join Type Causes Error

	Article: Q157526
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Selecting "<None>" as the Join type for a Remote or a Local View produces
	an error message when the view is run.
	
	CAUSE
	=====
	
	The syntax of the SQL query built by the Remote or Local View Designer is not
	correct when the "<None>" Join type is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the 32-Bit ODBC Driver Manager, create a DataSource for a database on a
	  Remote Server like the "pubs" database on Microsoft SQL Server.
	
	2. Open a database and create a remote view using the DataSource specified
	  above.
	
	3. Add a table to the Remote View. For example OrdItems in the Microsoft SQL
	  Server pubs database.
	
	4. Add another related table to the view[ASCII 151]-for example, Sales. When the
	  Join Condition dialog box comes up, click Cancel.
	
	5. Click the Join tab of the Remote View Designer. Click the Type drop- down
	  list box and Select "<None>."
	
	6. Enter the names of the table fields on which the Join should be based. For
	  example, set "Field Name" to "Authors.au_id" and "Value" to
	  "Titleauthor_au_id."
	
	7. Right-click the Remote View Designer and click the "Run Query" option.
	
	8. When the "Without join conditions for each table" dialog box appears, click
	  "Yes."
	
	The following error message appears:
	
	  Connectivity error:.....Incorrect syntax near the keyword 'ON'.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
