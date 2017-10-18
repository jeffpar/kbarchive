---
layout: page
title: "Q283845: PRB: RDO Rowcount Returns Zero For Large SQL Server Recordsets"
permalink: kb/283/Q283845/
---

## Q283845: PRB: RDO Rowcount Returns Zero For Large SQL Server Recordsets

	Article: Q283845
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0,6.0 SP3,6.0 SP4,7.0,7.0 Service Pack 1,7.0 Service Pack 2
	Operating System(s): 
	Keyword(s): kbRDO kbGrpDSVBDB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, 6.0 SP3, 6.0 SP4, used with:
	   - Microsoft SQL Server versions 7.0, 7.0 Service Pack 1, 7.0 Service Pack 2 
	   - Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When returning large rowsets through Remote Data Objects (RDO) from Microsoft
	SQL Server, rowsets that contain a large number of records may return a rowcount
	of 0.
	
	CAUSE
	=====
	
	This occurs if the cursor threshold configuration setting for the SQL Server
	server has been changed from the default value of -1 to 0 or some other positive
	value.
	
	Setting the cursor threshold value to 0 forces SQL Server to execute all queries
	asynchronously. Setting the cursor threshold value to a positive number causes
	SQL Server to execute asynchronously all queries that return a larger number of
	rows than the chosen setting. In either case, it is impossible for RDO to
	determine an accurate rowcount from asynchronous queries.
	
	RESOLUTION
	==========
	
	Change the cursor threshold configuration setting to a lower value, or to -1.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic.
	
	2. On the Project menu, click References, and then select the Microsoft Remote
	  Data Object 2.0 checkbox.
	
	3. Add a command button to the default form, Form1.
	
	4. Copy and paste the following code into the command button's Click event
	  handler:
	
	    Dim cn As rdoConnection
	    Dim rs As rdoResultset
	    
	    Set cn = New rdoConnection
	    
	    With cn
	      .CursorDriver = rdUseServer
	      .Connect = "SERVER=myserver;UID=userid;PWD=password;" & _
	                 "DRIVER={SQL Server};DATABASE=Northwind;"
	      .EstablishConnection
	    End With
	    
	    SQL = "SELECT * FROM ORDERS"
	    
	    Set rs = cn.OpenResultset(SQL, rdOpenKeyset, rdConcurReadOnly, rdExecDirect)
	
	    MsgBox rs.RowCount
	
	    rs.Close
	
	    cn.Close
	    
	    Set rs = Nothing
	    Set cn = Nothing
	
	5. Modify the SERVER, UID, and PWD parameters in the Connect method call as
	  appropriate to connect to your SQL Server server.
	
	6. Run the project, and then click the command button. You should see a message
	  box display that contains the accurate rowcount for the Orders table (over
	  800 rows on SQL Server 7.0).
	
	7. On the SQL Server server, modify the cursor threshold configuration setting
	  by executing the following statement in the SQL Server Query Analyzer:
	
	  sp_configure 'cursor threshold', 0
	
	  Next, execute the following statement to reconfigure the server:
	
	  Reconfigure
	
	  NOTE: The cursor threshold option is an advanced option. If you are using the
	  sp_configure system stored procedure to change the setting, you can change
	  the cursor threshold option only when Show Advanced Options is set to 1.
	
	8. Rerun the project, and then click the command button again. This time, the
	  rowcount returned in the message box should be "0".
	
	REFERENCES
	==========
	
	SQL Server Books Online, topic: "Cursor Threshold"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbRDO kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : :5.0,6.0,6.0 SP3,6.0 SP4,7.0,7.0 Service Pack 1,7.0 Service Pack 2
	Issue type        : kbprb
	
	=============================================================================
	
