---
layout: page
title: "Q240401: BUG:Repeatedly Opening &amp; Closing Recordset Increase Connections"
permalink: /kb/240/Q240401/
---

## Q240401: BUG:Repeatedly Opening &amp; Closing Recordset Increase Connections

{% raw %}

	Article: Q240401
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQLServ kbGrpDSVBDB kbDSupport kbDAO360bug
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The number of connections opened on SQL Server increases indefinitely if a
	Microsoft Data Access Objects (DAO) recordset is opened and closed repeatedly
	when you use DAO version 3.6. This does not happen if you use DAO version 3.51.
	You may see this behavior if you use sqlpassthrough in which the connection
	string is specified in the OpenDatabase statement.
	
	RESOLUTION
	==========
	
	Use a Querydef to create the connection instead of creating the connection in
	the OpenDatabase statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, choose References and then select Microsoft DAO 3.6
	  Data Objects.
	
	3. Place two command buttons, named Command1 and Command2, on the form, and then
	  paste the following code in form code window:
	
	  Dim db As Database
	  Dim rs As Recordset
	  Dim qd As QueryDef
	
	  Private Sub Command1_Click()
	
	  '-- Insert your own connect string here.
	      Set db = OpenDatabase("", dbDriverNoPrompt, False, _
	            "ODBC;DSN=sql7;UID=sa;PWD=;DATABASE=pubs;")
	      Dim i As integer
	      For i = 1 To 5
	      '  reptq1 exists in the pubs database
	          Set rs = db.OpenRecordset("reptq1", _
	               dbOpenSnapshot, dbSQLPassThrough)
	          rs.Close
	      Next i
	      
	  End Sub
	
	  Private Sub command2_Click()
	
	     'Change the following string to match your path to the .mdb.
	     Set db = OpenDatabase("d:\vbtest\db1.mdb")
	     on error resume next
	     db.QueryDefs.Delete "mysql7"
	     on error goto 0
	     Set qd = db.CreateQueryDef("mysql7")
	     '-- Insert your own connect string below.
	     With qd
	       .Connect = "odbc;database=pubs;uid=sa;pwd=;dsn=sql7"
	       .SQL = "select * from authors"
	       .ReturnsRecords = True
	     End With
	     Dim i As Integer
	     For i = 1 To 20
	       Set rs = qd.OpenRecordset(dbOpenDynaset)
	       rs.Close
	     Next i
	  End Sub
	
	4. Open ISQL/W in SQL Server 6.5 or Query Analyzer in SQL Server 7.0 and run the
	  sp_who stored procedure. Note the number of connections.
	
	5. Run the form created in step 1 and click Command1. Note the number of
	  connections by executing sp_who again. Repeat this process a few times and
	  note that the number of connections continues to increase. If you get a
	  connection failure you have probably reached your connection limit.
	
	6. Next, click Command2 repeatedly and note the number of connections returned
	  by sp_who.
	
	REFERENCES
	==========
	
	For more information on SQLPassThrough Queries, see the following:
	
	Haught, Dan; Jim Ferguson. Microsoft Jet Database Engine Programmer's Guide,
	Microsoft Press, Second Edition, 1997, pages 397-401.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Margery
	Simms, Microsoft Corporation.
	
	
	Additional query words: jet Access 2000
	
	======================================================================
	Keywords          : kbDatabase kbSQLServ kbGrpDSVBDB kbDSupport kbDAO360bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
