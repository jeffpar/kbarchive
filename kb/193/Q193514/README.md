---
layout: page
title: "Q193514: BUG: Data Form Wizard Mishandles '-' in Table or Field Names"
permalink: /kb/193/Q193514/
---

## Q193514: BUG: Data Form Wizard Mishandles '-' in Table or Field Names

{% raw %}

	Article: Q193514
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAddin kbwizard kbVBp kbVBp600bug kbGrpDSVBDB kbDSupport
	Last Modified: 18-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When loading a form created by the Data Form Wizard, you may receive one of the
	following error messages:
	
	  Run-time error '-214217900 (80040e14)', "Syntax error in FROM clause"
	
	  -or-
	
	  Run-time error '-214217904 (80040e10)', "No value given for one or more
	  required parameters"
	
	CAUSE
	=====
	
	If the data source for a form created by the Data Form Wizard contains a dash
	'-' in its name or in the name of a field, it is required that the data source
	name or field name be delimited by brackets in a SQL statement. The Data Form
	Wizard does not include brackets around these names.
	
	RESOLUTION
	==========
	
	To work around this problem, modify the code created by the Data Form Wizard by
	placing brackets around references to any data sources or field names that
	contain the '-' character.
	
	Alternatively, data sources and their fields could be renamed to eliminate '-'
	characters. This solution could involve more work in general, but may be
	acceptable at the beginning stages of application development.
	
	NOTE: You should follow standard Windows naming conventions and not include the
	following characters in your database names:
	
	  \ / : * ? < > |
	
	Although some databases such as Access allow forward slashes ("\"), you receive
	the above-mentioned error when you use this database through Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database containing a table so that either the table name includes a
	  '-' character or the name of a field in that table contains a '-' character
	  (or both).
	
	2. Create a Standard EXE project in Visual Basic. Form1 is created default.
	
	3. From the Add-Ins menu, select the Data Form Wizard command. If this command
	  does not appear, load the Data Form Wizard using the Add-In Manager, which
	  can be invoked by a corresponding command on the Add-Ins menu. The Data Form
	  Wizard command will be added to that menu.
	
	The following instructions refer to the Data Form Wizard:
	
	1. Click the Next button on the first page of the wizard.
	
	2. Select the type of database created in step 1, and click Next.
	
	3. Enter the connection information for the database selected at step 5, and
	  click Next.
	
	4. Select ADO Code as the data binding method, and click Next.
	
	5. For the data source, select the table created in step 1, and select all
	  fields from the Available Fields list into the Selected Fields list. Click
	  Next.
	
	6. Click Finish.
	
	7. Select Project Properties from the Project menu, and then set the Startup
	  Object property to refer to the form just created.
	
	8. Run the project. Note that one of the two errors indicated above.
	
	  The workaround is as described above.
	
	Additional query words: -214217900 (80040e14) -214217904 (80040e10)
	
	======================================================================
	Keywords          : kbAddin kbwizard kbVBp kbVBp600bug kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
