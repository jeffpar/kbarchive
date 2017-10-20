---
layout: page
title: "Q173463: PRB: WillExecute Event Cannot Be Used to Change CursorType"
permalink: /kb/173/Q173463/
---

## Q173463: PRB: WillExecute Event Cannot Be Used to Change CursorType

{% raw %}

	Article: Q173463
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the WillExecute event is used to set the CursorType property, the resultset
	for the cursor may contain nothing if the CursorType has not been set before the
	WillExecute event fires. Setting a Remote Data Control resultset equal to the
	query resultset will cause the error:
	
	  "runtime error" 40516 Invalid Object"
	
	CAUSE
	=====
	
	The CursorType property is set but will only affect subsequent queries. The
	CursorType property is not set for the query that caused the WillExecute event
	to fire.
	
	RESOLUTION
	==========
	
	Set the CursorType and LockType properties before running the query.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The purpose of the WillExecute event is to allow modifications of a query's SQL
	or to allow a query to be cancelled. All query properties can be modified here,
	but changing some properties will not affect the current query that caused the
	event to fire. CursorType and LockType are two properties that cannot be changed
	for the current query. Changing other properties, such as SQL and maxrow, will
	affect the resultset returned by the current query that caused the event to
	fire.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project. Select Microsoft Remote Data Object 2.0 under project
	  references.
	
	2. Under project components, check Microsoft Databound Grid and Microsoft
	  RemoteData Control 2.0.
	
	3. Add a Remote Data Control, a Databound grid and a CommandButton to the form.
	  Set the Datasource property of the grid to MSRDC1.
	
	4. Put the following code in the Declarations section of the form:
	
	  NOTE: Before running the code, change the server in the connect statement to a
	  server near you.
	
	        Option Explicit
	        Dim rs As rdoResultset
	        Dim WithEvents cn As rdoConnection
	        Dim SQL As String
	
	        Private Sub cn_WillExecute(ByVal Query As RDO.rdoQuery, _
	               Cancel As Boolean)
	          MsgBox Query.CursorType
	          Query.CursorType = rdOpenStatic
	          MsgBox Query.CursorType   'the cursortype has been changed
	        End Sub
	
	        Private Sub Form_Load()
	          Set cn = New rdoConnection
	
	          cn.Connect = "ucn.Connect = "uid=sa;pwd=;server=margerys;" _
	          & "driver={SQL & "driver={SQL Server};database=pubs;" _
	          & "DSN='';" & "DSN='';"
	
	          cn.CursorDriver = rdUseOdbc
	          cn.EstablishConnection rdDriverNoPrompt
	          SQL = "Select *  From titles "
	          '
	          ' Openresultset cause the WillExecute event to fire.
	          '
	          Set rs = cn.OpenResultset(SQL)
	          '
	          'The next command will fail because a remote data control
	          '  cannot be assigned to nothing. rs is nothing because
	          '  because the CursorType has not been set for the current query.
	          '
	          'Set rs = cn.OpenResultset(SQL,rdopenforwardonly)
	          '
	          'Uncomment the above line and comment the first 'set rs' and
	          '  the problem will persist because a remote data control cannot
	          '  be assigned to a forwardonly cursor.
	          '
	          Set MSRDC1.Resultset = rs
	        End Sub
	
	        Private Sub quit_Click()
	          rs.Close
	          Set rs = Nothing
	          cn.Close
	          Set cn = Nothing
	          Unload Me
	        End Sub
	
	5. In the code above, if you switch openstatic and openforwardonly, note that
	  the code will run and the grid will be filled. You can also experiment with
	  the LockType property, changing it from rdConcurReadOnly to rdConcurRowVer,
	  and testing to note changes when you can edit the grid.
	
	REFERENCES
	==========
	
	For information on WillExecute, please see the following:
	
	Visual Basic Online Books, and the following article in the Microsoft Knowledge
	Base:
	
	  Q172082 HOWTO: Handle WithEvents/RDO 2.0's in Asynchronous Processing
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Margery
	Simms, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp KBRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
