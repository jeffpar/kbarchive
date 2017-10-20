---
layout: page
title: "Q191515: BUG: AbsolutePosition Property Returns Different Results"
permalink: /kb/191/Q191515/
---

## Q191515: BUG: AbsolutePosition Property Returns Different Results

{% raw %}

	Article: Q191515
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,5.0,6.0,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle _IK12473 kbMDAC250bugkbbuglist
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Remote Data Objects (RDO) version 2.0 in either Visual Basic
	5.0 or Visual Basic 6.0, with an Oracle 7.x or 8.x database, using the Microsoft
	ODBC for Oracle driver, the AbsolutePosition property of the rdoResultset object
	produces different results depending on the Cursor location as set by the
	CursorDriver property of the rdoConnection or rdoEnvironment object.
	
	Using the rdUseServer cursor library, the AbsolutePosition property reports the
	last row in the Resultset. When tested a second time it returns the correct
	results based on its setting.
	
	If you use either the rdUseODBC or rdUseClientBatch cursor libraries, the results
	returned will always be correct.
	
	NOTE: This code has also been tested against Microsoft SQL Server without error.
	
	RESOLUTION
	==========
	
	The workaround is to use a MoveLast on the Recordset or not to use the
	CursorDriver properties of rdUseServer or rdUseIfNeeded when the results of the
	AbsolutePosition property must be accurate. The CursorDriver properties of
	rdUseOdbc and rdUseClientBatch produce accurate AbsolutePosition property
	results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project.
	
	2. From the Project menu, choose References and select "Microsoft Remote Data
	  Objects 2.0".
	
	3. Add a Command button to the new form.
	
	4. Paste the following code into the General Declaration section of the form:
	
	NOTE: You must modify the connection settings to match your configuration and
	choose a table for the rdoResultset that returns rows. This code uses the sample
	Customer table.
	
	        Dim rdEnv As rdoEnvironment
	        Dim Cn As New rdoConnection
	        Dim Rs As rdoResultset
	
	        Private Sub Command1_Click()
	          Rs.AbsolutePosition = 5                   'Or whatever.
	          MsgBox Rs.rdoColumns("custid")
	        End Sub
	
	        Private Sub Form_Load()
	
	          rdoErrors.Clear
	          Set rdEnv = rdoEnvironments(0)
	
	          With Cn
	             .CursorDriver = rdUseServer      'The problem cursor.
	             '.CursorDriver = rdUseOdbc      'This works OK.
	             .Connect = "uid=<MyUID>;pwd=<MyPassword>;dsn=<MyServer>"
	             .EstablishConnection rdDriverNoPrompt, False
	              rdEnv.rdoConnections.Add Cn
	          End With
	
	         Set Rs = Cn.OpenResultset("select custid from customer", _
	             rdOpenStatic)
	
	        End Sub
	
	5. Run the project by pressing the F5 key. Click the Command1 button and note
	  that the message box returns the value for the last row in the Resultset.
	  Click it a second time and notice that the value in the Message box is
	  correct for the row referred to by the AbsolutePosition property.
	
	6. Stop the project and uncomment the ".CursorDriver = rdUseOdbc" line and
	  comment the ".CursorDriver = rdUseServer" line. Run the project again and
	  notice that the message box has the correct values every time you click the
	  Command button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle _IK12473 kbMDAC250bug kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbODBCSearch kbVB500 kbVB600 kbMDACSearch kbMDAC250 kbODBCOracle25732927 kbODBCOracle250Search
	Version           : :2.5,5.0,6.0,Build 2.573.2927
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
