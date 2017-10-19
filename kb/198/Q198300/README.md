---
layout: page
title: "Q198300: PRB: Invalid Use of NULL Assigning Text Fields Value"
permalink: /kb/198/Q198300/
---

## Q198300: PRB: Invalid Use of NULL Assigning Text Fields Value

	Article: Q198300
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbRDO kbSQLServ kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to assign the value of a SQL Server text field to a text box
	control the following error may occur:
	
	  Invalid Use of Null.
	
	The SQL Server text field may actually contain data in it, but even checking the
	value while in Debug mode can cause the fields contents to change to NULL.
	
	CAUSE
	=====
	
	Neither Remote Data Objects (RDO) or ActiveX Data Objects (ADO) are caching the
	text field value so the requests are sent back to the dataprovider. The cursor
	engine may not have enough information to request that field value again from
	the server.
	
	RESOLUTION
	==========
	
	There are several workarounds for this behavior:
	
	- Set the Cursorlocation to Rduseclient (RDO) or aduseclient (ADO).
	
	- Store the value of the fields contents to a variable BEFORE checking it or
	  assigning to a text box control.
	
	- Instead of checking for nulls, use the following code to fill the text box:
	
	  Text1.Text = recordset!field_name & ""
	
	- Use the Getchunk method to retrieve the contents of the text field. See
	  article references below.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic.
	
	2. Add a Reference to Microsoft Remote Data Object 2.0.
	
	3. Add a multiline text box and a command button to the form.
	
	4. Place the following code in the command button Click event:
	
	        Dim en As rdoEnvironment
	        Dim cn As rdoConnection
	        Dim rs As rdoResultset
	
	        Dim sql As String
	
	        sql = "Select * from pub_info"
	
	        Set en = rdoEngine.rdoEnvironments(0)
	
	        With en
	
	           .CursorDriver = rdUseOdbc
	           ' uncomment the following line for first workaround
	           '.CursorDriver = rdUseClientBatch
	
	        End With
	
	        Dim cnStr As String
	
	        cnStr = "driver={SQL Server};server=myserver;" & _
	                "database=pubs;uid=sa;pwd="
	
	        Set cn = en.OpenConnection(DSName:="", Prompt:=rdDriverNoPrompt, _
	               Connect:=cnStr)
	
	        Set rs = cn.OpenResultset(sql, rdOpenDynamic, rdConcurValues, _
	               rdAsyncEnable)
	
	        While rs.StillExecuting
	            DoEvents
	        Wend
	
	        rs.MoveLast
	        MsgBox "RDO: " & Str(rs.RowCount) & " rows returned."
	
	        ' Move back to first record.
	          rs.MoveFirst
	
	        ' Uncomment the following two lines for the second workaround:
	        'Dim test As Variant
	        'test = rs!pr_info
	
	        ' Check for null value before assigning.
	        If IsNull(rs!pr_info) Then
	       ' Comment preceding line and uncomment following line for second
	       ' workaround:
	       'If IsNull(test) Then
	           Text1.Text = ""
	            Else
	          ' Assign value to text field if not NULL.
	          Text1.Text = rs!pr_info
	          ' Comment preceding line and uncomment following line for second
	          ' workaround:
	          'Text1.Text = test
	        End If
	
	        Do While Not rs.EOF
	          Debug.Print rs!pr_info
	          rs.MoveNext
	        Loop
	
	        rs.Close
	        cn.Close
	        en.Close
	
	NOTE: Be sure to put your SQL Server name in the Connection string.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q194975 HOWTO: Sample Functions Demonstrating GetChunk and AppendChunk
	
	Q153238 HOWTO: Use GetChunk and AppendChunk Methods of RDO Object
	
	Additional query words:
	
	======================================================================
	Keywords          : kbRDO kbSQLServ kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
