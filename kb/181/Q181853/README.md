---
layout: page
title: "Q181853: HOWTO: Access and Retrieve the SQL QueryPlan from RDO"
permalink: /kb/181/Q181853/
---

## Q181853: HOWTO: Access and Retrieve the SQL QueryPlan from RDO

	Article: Q181853
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many relational database management systems (RDBMS) use the query plan to
	optimize the path a query takes to achieve the best performance. This article
	demonstrates how to retrieve the query plan from SQL Server using Remote Data
	Object (RDO) through Visual Basic.
	
	MORE INFORMATION
	================
	
	Showplan results are returned as individual low severity errors. In order to
	access these it is necessary to loop through the Errors collection and print out
	the information.
	
	NOTE: By default, the query plan is returned in reverse order as generated. The
	code below illustrates how to turn on and view the query plan from Visual
	Basic.
	
	HOW TO RETRIEVE THE QUERY PLAN
	------------------------------
	
	1. Start a new Visual Basic Standard .exe project.
	
	2. Add a reference to Microsoft Remote Data Object 2.0.
	
	3. Add the following code to the default form and run the project. You will see
	  the query plan information printed on the form. Here is the code:
	
	        Private Sub Form_load()
	        Dim en As rdoEnvironment
	        Dim cn As rdoConnection
	        Dim rs As rdoResultset
	        Dim strConnect As String
	        Dim strSQL As String
	        Set en = rdoEngine.rdoEnvironments(0)
	        en.CursorDriver = rdUseNone
	        strConnect = "Driver={SQL Server};Server=YourServerName;Uid=sa;Pwd="
	        Set cn = en.OpenConnection(dsName:="", _
	        Prompt:=rdDriverNoPrompt, ReadOnly:=False, Connect:=strConnect)
	        cn.Execute "Set ShowPlan On", rdExecDirect
	        strSQL = "select * from sysobjects"
	        Set rs = cn.OpenResultset(strSQL)
	        Me.Show
	        For i = 0 To rdoErrors.Count - 1
	          Me.Print rdoErrors.Item(i).Description
	        Next
	        End Sub
	
	REFERENCES
	==========
	
	For information on interpreting the output, please refer to the SQL
	documentation.
	
	Additional query words: queryplan show plan kbRDO kbVBp500 kbVBp600 kbdss kbDSupport 
	kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
