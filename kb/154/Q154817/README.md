---
layout: page
title: "Q154817: PRB: RDC Refresh Method Failure with Bound DBListbox"
permalink: /kb/154/Q154817/
---

## Q154817: PRB: RDC Refresh Method Failure with Bound DBListbox

	Article: Q154817
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kb32bitOnly
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the SQL Property of a Remote Data Control with a bound DBListbox
	at run time, the refresh method doesn't show the changes in the DBListbox as it
	does for other controls. The Refresh method must be called twice.
	
	RESOLUTION
	==========
	
	Refresh the remote data control twice. Replace the Command1_Click in the
	previous sample with the code below:
	
	     Private Sub Command1_Click()
	       ' Restrict the SQL to display only the authors whose last name
	       ' start with an R
	       MSRDC1.SQL = "SELECT * FROM Authors WHERE AU_Lname LIKE'R%'"
	       MSRDC1.Refresh
	       MSRDC1.Refresh
	     End Sub
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new ODBC data source for SQL Server called "RefreshTest" using the
	  "32-bit ODBC" section of the Control Panel. Set the database name to the
	  "Pubs" Database.
	
	2. Start a new Visual Basic Project. Form1 is created by default.
	
	3. Add the following controls to Form1 and give them the properties indicated:
	
	     Default Name             Caption            Name
	     --------------------   -----------------  ----------
	     Remote Data Control      Authors            MSRDC1
	     Command1                 Change SQL         Command1
	     DBList                   Not Applicable     DBList1
	
	4. Set the DBList Control RowSource property to MSRDC1.
	
	5. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Sub Form_Load()
	       MSRDC1.DataSourceName = "RefreshTest"
	       MSRDC1.SQL = "Select * from Authors"
	       MSRDC1.Refresh
	       DBList1.ListField = "Phone"
	     End Sub
	
	     Private Sub Command1_Click()
	       ' Restrict the SQL to display only the authors whose last name
	       ' start with an R
	       MSRDC1.SQL = "SELECT * FROM Authors WHERE AU_Lname LIKE'R%'"
	       MSRDC1.Refresh
	     End Sub
	
	6. Press the F5 key to run the project. The DBListbox will contain many rows of
	  data.
	
	7. Click the Command button "Change SQL," and note that the DBListbox doesn't
	  change to reflect the new SQL.
	
	REFERENCES
	==========
	
	Building Client / Server Applications with Visual Basic Chapter 11.
	
	
	Additional query words: remote data control rdc
	
	======================================================================
	Keywords          : kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
