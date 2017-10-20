---
layout: page
title: "Q192142: PRB: Update After AddNew Using Oracle Driver Generates an Error"
permalink: /kb/192/Q192142/
---

## Q192142: PRB: Update After AddNew Using Oracle Driver Generates an Error

{% raw %}

	Article: Q192142
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Remote Data Objects (RDO) ADDNEW and UPDATE method to create and commit
	new records with the Microsoft Oracle ODBC driver may result in the following
	error:
	
	  Run-time error '40002':
	  S1C00: [Microsoft][ODBC driver for Oracle]Driver not capable.
	
	CAUSE
	=====
	
	Microsoft Oracle ODBC Driver version 2.00.06325 does not support this
	functionality in conjunction with certain CursorDrivers.
	
	RESOLUTION
	==========
	
	Choose a CURSORDRIVER of either rdUseClientBatch or rdUseODBC if Microsoft
	Oracle ODBC Driver version 2.00.06325 is used.
	
	Otherwise, obtain the latest version of Microsoft ODBC driver for Oracle that is
	shipped with Microsoft Data Access Components (MDAC) 1.5c or MDAC 2.0. The
	current version of the Oracle ODBC driver is 2.573.2927 and it supports this
	functionality.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 5.0 Enterprise Edition.
	
	2. Create a new Standard EXE. Form1 is created by default.
	
	3. Add "Microsoft Remote Data Objects 2.0" to the Project References.
	
	4. Add the following code to the new form's Load method:
	
	        Dim rs As rdoResultset
	        Dim cn As New rdoConnection
	        cn.CursorDriver = rdUseClientBatch
	        cn.Connect = "dsn=<dsn>;uid=<uid>;pwd=<pwd>"
	        cn.EstablishConnection
	        cn.Execute "CREATE TABLE temp1 (id int, name char(20))"
	        cn.Execute "CREATE UNIQUE INDEX temp1_id on temp1 (id)"
	        cn.Execute "GRANT ALL ON temp1 TO PUBLIC"
	        cn.Close
	
	        On Error GoTo Erh
	
	        For i = rdUseIfNeeded To rdUseClientBatch
	           cn.CursorDriver = i
	           cn.EstablishConnection
	           Set rs = cn.OpenResultset("select * from temp1", rdOpenKeyset, _
	           rdConcurRowVer)
	           rs.AddNew
	           rs(0) = i
	           rs(1) = "Also works fine"
	           rs.Update   '<-- Errors occur here
	           cn.Close
	        Next
	           cn.EstablishConnection
	           cn.Execute "DROP TABLE temp1"
	        End
	
	        Erh:
	           sterr = Error & Chr(13) & "With CursorDriver "
	           Select Case cn.CursorDriver
	              Case rdUseServer
	                 sterr = sterr & "rdUseServer"
	              Case rdUseOdbc
	                 sterr = sterr & "rdUseOdbc"
	              Case rdUseNone
	                 sterr = sterr & "rdUseNone"
	              Case rdUseIfNeeded
	                 sterr = sterr & "rdUseIfNeeded"
	              Case rdUseClientBatch
	                 sterr = sterr & "rdUseClientBatch"
	              Case Else
	           End Select
	           MsgBox sterr
	           Resume Next
	        End Sub
	
	5. Run the Project and note that the Update fails with the error mentioned
	  earlier.
	
	Additional query words: kbVBp500 kbOracle kbODBC kbRDO kbdse kbDSupport KbVBp kbDatabase kbDriver
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword kbZNotKeyword2 kbVB500Search kbODBCSearch kbVB500 kbODBCOracle206325 kbODBCOracle100Search
	Version           : :1.0,5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
