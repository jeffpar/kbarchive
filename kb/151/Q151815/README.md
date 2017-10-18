---
layout: page
title: "Q151815: BUG: RDO Rowcount May Be Wrong When Using rdAsyncEnable Flag"
permalink: kb/151/Q151815/
---

## Q151815: BUG: RDO Rowcount May Be Wrong When Using rdAsyncEnable Flag

	Article: Q151815
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbODBCkbbuglist
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using rdoResultsets, the RowCount property is useful for determining how
	many records have been returned by the query. Depending on the driver and data
	source, the RowCount property returns either -1 to indicate that the number of
	rows is not available, or 0 to indicate that no rows were returned by the
	rdoResultset. If the driver is capable of returning a row count, the RowCount
	property returns the number of rows in the rdoResultset.
	
	When opening an rdoResultset using the rdAsyncEnable flag, the RowCount will
	always return 0. This could lead to the mistaken assumption that the query
	returned no records.
	
	WORKAROUND
	==========
	
	If a Movelast is executed against the rdResultset before the RowCount is
	queried, then the RowCount will be correctly set.
	
	If the rdAsyncEnable flag is not passed to OpenResultset, the problem does not
	occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following Visual Basic code opens a connection to the server and creates an
	asynchronous rdoResultset. This code uses a "DSN-less" ODBC connection so you do
	not need to set up a DSN (Data Source Name) with the ODBC Admin utility.
	
	For more details on doing this DSN-less connection, see the following article in
	the Microsoft Knowledge Base:
	
	  Q147875 : How to Use DSN-Less ODBC Connections with RDO and DAO
	
	In the following code, MyServer is assumed to be a Microsoft SQL Server with the
	default database PUBS installed.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the 32-bit Edition of Visual Basic version 4.0 for Windows. Form1 is
	  created by default.
	
	2. Add a single Command button to the form.
	
	3. Add the following code to the Command1 Click Event:
	
	     Private Sub Command1_Click()
	     Dim rdoConn As rdoConnection
	     Dim rdoRes As rdoResultset
	     Dim tempStr As String
	
	         Set rdoConn = rdoEnvironments(0).OpenConnection("", _
	                                      rdDriverNoPrompt, _
	                                      False, "DRIVER={SQL Server};" & _
	                                      "SERVER=MySQLServer;DATABASE=pubs;" & _
	                                      "UID=sa;PWD=;")
	
	        Set rdoRes = rdoConn.OpenResultset("select * from authors", _
	                                           rdOpenKeyset, rdConcurLock, _
	                                           rdAsyncEnable)
	
	        While rdoRes.StillExecuting
	          DoEvents
	        Wend
	        Debug.Print rdoRes.RowCount
	        rdoRes.Close
	        rdoConn.Close
	
	     End Sub
	
	4. From the File menu, select Save.
	
	5. Press the F5 key, or click Start on the Run menu to run the application.
	  Click on Command1 and note that in the debug window the number 0 appears.
	
	REFERENCES
	==========
	
	Visual Basic Online Help OpenResultset, RowCount
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
