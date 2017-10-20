---
layout: page
title: "Q285345: PRB: Error with DSN-Less Connection to FoxPro Table Through DAO"
permalink: /kb/285/Q285345/
---

## Q285345: PRB: Error with DSN-Less Connection to FoxPro Table Through DAO

{% raw %}

	Article: Q285345
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbJET kbGrpDSVBDB kbDSupport
	Last Modified: 30-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a DSN-less connection to connect to a Visual FoxPro free table
	through Data Access Objects (DAO), you may receive the following error message:
	
	  Run-time error '3000':
	  Reserved error (-7778); there is no message for this error.
	
	RESOLUTION
	==========
	
	To use a DSN-less connection with a Visual FoxPro free table, you must create an
	Open Database Connectivity (ODBC) workspace. For sample code, refer to the "More
	Information" section.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic.
	
	2. Place a CommandButton control on the form.
	
	3. Add the following code to the Command1_Click event:
	
	  Dim dbCurrentDB As DAO.Database
	  Dim rsTmp As Recordset
	  Dim sConnect$, sDatabaseName$, sTable$, i%
	  Dim wk As Workspace
	          
	  sTable = "select * from employees"   ' Modify select to use your Visual FoxPro table.
	  ' Modify SourceDB to correctly reflect the path (and path only) of your 
	  ' Visual FoxPro .dbf file. Do not include the file name.
	  sConnect = "ODBC;SourceType=DBF;" _
	  & "SourceDB=c:\TestDir\dataDir\;" _
	  & "Driver={Microsoft Visual FoxPro Driver}"
	      
	  ' Uncomment the following two lines of code to resolve this error.
	  ' Set wk = DBEngine.CreateWorkspace("", "admin", "", dbUseODBC)
	  ' Set dbCurrentDB = wk.OpenDatabase("", False, False, sConnect)
	       
	  ' Comment the following line to resolve this error.
	  Set dbCurrentDB = DBEngine.OpenDatabase("", False, False, sConnect) ' Fails here.
	
	  Set rsTmp = dbCurrentDB.OpenRecordset(sTable, dbOpenSnapshot)
	  For i = 0 To rsTmp.Fields.Count - 1
	      Debug.Print rsTmp.Fields(i).Name & " | ";
	  Next
	  Debug.Print ""
	  rsTmp.Close
	  dbCurrentDB.Close
	  Set rsTmp = Nothing
	  Set dbCurrentDB = Nothing
	
	4. Modify SourceDB to correctly reflect the path of your Visual FoxPro .dbf
	  file. The comments indicate where you must make the changes.
	
	  NOTE: Only type the path to the .dbf file; do not type the file name.
	
	5. Click the command button to run the code. Notice that you receive the
	  above-mentioned error message.
	
	RESOLUTION:
	
	6. To resolve this problem, create a workspace and successfully open a
	  connection to the database. To do this, uncomment the following two lines
	
	  ' Uncomment the following two lines of code to resolve this error.
	  ' Set wk = DBEngine.CreateWorkspace("", "admin", "", dbUseODBC)
	  ' Set dbCurrentDB = wk.OpenDatabase("", False, False, sConnect)
	
	  and comment the following line:
	
	  ' Comment the following line to resolve this error.
	  Set dbCurrentDB = DBEngine.OpenDatabase("", False, False, sConnect) ' Fails here.
	
	7. Click the command button to run the code. Notice that the Immediate window
	  displays the data, and you do not receive the error message.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q212886 ACC2000: Using File DSN to Import or Link a FoxPro ODBC Data Source
	  Causes Reserved Error -7778
	
	  Q190663 PRB: Opening an ODBC Database Inside a Jet Workspace Hangs VB
	
	  Q209953 ACC2000: How to Use the OpenDatabase Method to Open
	  Password-Protected Databases
	
	Additional query words: Run-time error 3000 reserved -7778
	
	======================================================================
	Keywords          : kbJET kbGrpDSVBDB kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
