---
layout: page
title: "Q192646: PRB: Move 0 Does Not Refresh TimeStamp and Identity Fields"
permalink: /kb/192/Q192646/
---

## Q192646: PRB: Move 0 Does Not Refresh TimeStamp and Identity Fields

{% raw %}

	Article: Q192646
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Visual Basic and SQL Server 6.5, Move 0 does not refresh the Timestamp and
	Identity fields after Update/Addnew, when using the ClientBatch cursor driver.
	
	CAUSE
	=====
	
	A client-side cursor is being used.
	
	RESOLUTION
	==========
	
	Set cursordriver property to rdUseServer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a test table with Timestamp field in SQL Server Pubs database. Run the
	  following code in ISQL/W:
	
	        CREATE TABLE BankTbl
	               (Account int identity, Balance money, Stamp TimeStamp)
	        INSERT INTO BankTbl (Balance) Values(1000)
	        INSERT INTO BankTbl (Balance) Values(400)
	        INSERT INTO BankTbl (Balance) Values(250)
	        CREATE UNIQUE INDEX AcctIndex ON BankTbl(Account)
	
	2. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	3. Add a Reference to Microsoft Remote Data Object 2.0.
	
	4. Place a CommandButton on the form.
	
	5. Add the following code to the General Declarations of the form:
	
	        Function TSToHex(sBinRep As rdoColumn) As String
	           Dim sBuffer As String
	           Dim b As Integer
	
	           sBuffer = "0x"
	           For b = 1 To 8        'Break up the binary
	           sBuffer = sBuffer + Right$("00" & _
	                     Hex(AscB(MidB(sBinRep, b, 1))), 2)
	           Next b
	           TSToHex = sBuffer     'Return the string
	        End Function
	
	        Private Sub Command1_Click()
	           Dim cn As New rdoConnection
	           Dim rs As rdoResultset
	           Dim Timestamp As Variant
	           Dim strConnect As String
	           Dim strSQL As String
	           strConnect = "Driver={SQL Server};Server=servername;Database= _
	           pubs;Uid=sa;Pwd="
	
	           With cn
	              .CursorDriver = rdUseClientBatch
	              .Connect = strConnect
	              .EstablishConnection
	           End With
	
	           strSQL = "Select Account, Balance, Stamp from BankTbl"
	           Set rs = cn.OpenResultset(strSQL, rdOpenstatic, rdConcurBatch)
	
	           Debug.Print TSToHex(rs("Stamp"))
	           rs.Edit
	           rs!Balance = 99
	           rs.BatchUpdate
	           rs.Move 0
	           Debug.Print TSToHex(rs("Stamp"))
	        End Sub
	
	6. Press the F5 key to execute code and note the same value appears twice in the
	  Immediate Window.
	
	Additional query words: zero kbDSupport kbVBp500 kbVBp600 kbRDO200 kbdse
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
