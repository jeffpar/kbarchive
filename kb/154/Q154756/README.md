---
layout: page
title: "Q154756: HOWTO: List Stored Procedures in a SQL Server Database"
permalink: /kb/154/Q154756/
---

## Q154756: HOWTO: List Stored Procedures in a SQL Server Database

{% raw %}

	Article: Q154756
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some programmers require the ability to list all of the stored procedures from a
	SQL Server database. The following example demonstrates how to use SQL syntax to
	instruct SQL Server to return information regarding the stored procedures and
	their parameters.
	
	MORE INFORMATION
	================
	
	The following example uses RDO to create a list of the stored procedures held in
	the SQL Server pubs database:
	
	1. Start a new Project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button (Command1) and a List Box (List1) to Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          Dim cn As rdoConnection
	          Dim ps As rdoPreparedStatement
	          Dim rs As rdoResultset
	          Dim strConnect As String
	          Dim strSQL As String
	          'open a connection to the pubs database using DSNless connections
	          'change the Server argument to match your SQL Server
	          strConnect = "Driver={SQL Server}; Server=myserver; " & _
	                       "Database=pubs; Uid=sa; Pwd="
	          Set cn = rdoEnvironments(0).OpenConnection(dsName:="", _
	                   Prompt:=rdDriverNoPrompt, _
	                   ReadOnly:=False, _
	                   Connect:=strConnect)
	
	          strSQL = "Select so.name,sc.name,st.name,sc.length " & _
	             "FROM syscolumns sc,master..systypes st,sysobjects so " & _
	             "WHERE sc.id in (select id from sysobjects where type ='P')" & _
	             " AND so.type ='P' " & _
	             "AND sc.id = so.id " & _
	             "AND sc.type = st.type " & _
	             "AND sc.type <> 39"
	          'create a prep stmt for the stored proc call
	          Set ps = cn.CreatePreparedStatement("MyPs", strSQL)
	
	          Set rs = ps.OpenResultset(rdOpenStatic)
	
	          'add the first resultset to a list box
	          list1.AddItem "SP Name,Param Name,Data Type,Length"
	          While Not rs.EOF
	             list1.AddItem rs(0) & " , " & rs(1) & " , " & rs(2) & " , " & _
	                           rs(3)
	             rs.MoveNext
	          Wend
	          'Close the resultset and the connection and set both to nothing
	          rs.Close
	          Set rs = Nothing
	          cn.Close
	          Set cn = Nothing
	        End Sub
	
	        Private Sub Form_Load()
	          Command1.Caption = "List all Stored Procedures"
	        End Sub
	
	4. Press the F5 key to run the program. Click the button labeled "List all
	  Stored Procedures." A List of all stored procedures and their parameters
	  should now appear.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q153234 : How To Call System-Stored Procedures on SQL Server from RDO
	
	  Q147875 : How to Use "DS-Less" ODBC Connections with RDO and DAO
	
	Additional query words: kbVBp400 kbRDO kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
