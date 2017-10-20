---
layout: page
title: "Q184997: PRB: Connection Problem with Global Temp Tables and RdoQueries"
permalink: /kb/184/Q184997/
---

## Q184997: PRB: Connection Problem with Global Temp Tables and RdoQueries

{% raw %}

	Article: Q184997
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeatedly opening and dropping SQL Server global temporary tables can cause the
	following error message when using rdoQuery or PreparedStatement:
	
	  Connection Broken
	  Invalid Cursor State
	
	RESOLUTION
	==========
	
	Set the prepared property of rdoQuery or PreparedStatement to false before
	executing the query.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	This problem exists in service pack 2 and service pack 3 releases of Visual
	Basic 5.0; it did not exist in the original version of Visual Basic 5.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project.
	
	2. From the Project menu, click References, and select "Microsoft Remote Data
	  Object 2.0.
	
	3. Place three command buttons on the form.
	
	4. Paste the following code in the code window (NOTE: You need to modify the
	  connection information to connect to your SQL Server):
	
	  Sample Code
	
	        Option Explicit
	          Dim en As rdoEnvironment
	          Dim cn As New rdoConnection
	          Dim temptabl As String
	          Dim ps As rdoPreparedStatement
	          Dim qd As rdoQuery
	          Dim cnstr As String
	
	        Private Sub Command1_Click()
	          Set en = rdoEngine(0)
	          cnstr = "driver={SQL Server};server=YourServerName;" & _
	            "database=pubs;uid=sa;pwd="
	          Set cn = en.OpenConnection(dsname:="", prompt:=rdDriverNoPrompt, _
	            Connect:=cnstr)
	        End Sub
	
	        Private Sub Command2_Click()
	          temptabl = "select au_id into ##temp from authors"
	          Set ps = cn.CreatePreparedStatement("", temptabl)
	         ' ps.Prepared = False
	          ps.Execute
	          ps.Close
	
	         'rdoQuery Code
	         ' set qd = cn.CreateQuery("", temptabl)
	         ' qd.Prepared = False
	         ' qd.Execute
	         ' qd.Close
	        End Sub
	
	        Private Sub Command3_Click()
	          temptabl = "drop table  ##temp"
	          Set ps = cn.CreatePreparedStatement("", temptabl)
	         ' ps.Prepared = False
	          ps.Execute
	          ps.Close
	
	         'RDO Query Code
	         ' set qd = cn.CreateQuery("", temptabl)
	         ' qd.Prepared = False
	         ' qd.Execute
	         ' qd.Close
	        End Sub
	
	5. Run the above code and press all three command buttons, one at a time, in
	  order. Then press the second command button again and the error message
	  appears.
	
	6. Uncomment the ps.Prepared statements in Command_2Click() and
	  Command_3Click(), and the error does not occur.
	
	The rdoQuery code functions the same way and has been included for your
	convenience.
	
	Additional query words: kbVBp500 kbDSupport kbdse
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
