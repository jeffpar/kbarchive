---
layout: page
title: "Q176258: BUG: Refresh Method of Data Control Resets QueryTimeout"
permalink: kb/176/Q176258/
---

## Q176258: BUG: Refresh Method of Data Control Resets QueryTimeout

	Article: Q176258
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The QueryTimeout property of the Database object determines the number of
	seconds to wait before a timeout occurs when a query is executed. If the
	DefaultType property of the Data control is set to dbUseODBC, then the
	QueryTimeout property of the Database object is reset to the default value of 30
	when the Refresh method of the Data control is performed.
	
	RESOLUTION
	==========
	
	There are several ways to work around this problem, two of which are listed
	here:
	
	- Modify the DefaultType property of the Data control to dbUseJet.
	
	- Use the Remote Data Control (MSRDC) rather than the Data control.
	
	However, if it is necessary to use the Data control with an ODBC data source, the
	following workaround can be used:
	
	     Private ws As Workspace
	     Private db As Database
	
	     Private Sub Command1_Click()
	     Dim con As String
	     Dim sql As String
	
	         con = "ODBC;DSN=your_dsn;UID=sa;PWD=;DATABASE=pubs"
	         Set ws = DBEngine.CreateWorkspace("", "", "", dbUseODBC)
	         Set db = ws.OpenDatabase("", Connect:=con)
	
	         db.QueryTimeout = 60
	
	         sql = "SELECT * FROM Authors"
	         Set Data1.Recordset = db.OpenRecordset(sql, dbOpenDynaset)
	
	         MsgBox db.QueryTimeout
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a new Standard EXE. Form1 is created by
	  default.
	
	2. Add a Data control and a CommandButton to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Private Sub Command1_Click()
	
	            Data1.Database.QueryTimeout = 60
	
	            Data1.RecordSource = "SELECT * FROM Authors"
	            Data1.Refresh
	
	            MsgBox Data1.Database.QueryTimeout
	
	        End Sub
	
	        Private Sub Form_Load()
	
	            Data1.DefaultType = dbUseODBC
	            Data1.Connect = "ODBC;DSN=your_dsn;UID=sa;PWD=;DATABASE=pubs"
	            Data1.Refresh
	
	        End Sub
	
	4. Run the project.
	
	5. Click on Command1 and note that the QueryTimeout is the default value of 30,
	  rather than 60 that it was assigned to.
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
