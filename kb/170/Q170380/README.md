---
layout: page
title: "Q170380: HOWTO: Display/Pass TimeStamp Value from/to SQL Server"
permalink: /kb/170/Q170380/
---

## Q170380: HOWTO: Display/Pass TimeStamp Value from/to SQL Server

{% raw %}

	Article: Q170380
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TimeStamp is a SQL Server data type that is automatically updated every time a
	row is inserted or updated. Values in TimeStamp columns are not datetime data;
	they are, by default, defined as binary(8) varbinary(8), indicating the sequence
	of Microsoft SQL Server activity on the row. A table can have only one TimeStamp
	column. The TimeStamp data type is simply a monotonically-increasing counter
	whose values will always be unique within a database.
	
	In Visual Basic, by opening an RDO cursor and setting the concurrency control
	options as the Locktype argument of the OpenResultset method, RDO will handle
	the locking automatically. However, there are situations in which you might
	prefer to perform all operations against the database with stored procedures at
	the server side. If this is the case, a TimeStamp value could be used to check
	if the row has been modified in between the time that it was first selected and
	the time that the update is posted.
	
	This article provides the Visual Basic code that converts and displays the value
	in a string-type format to retrieve a TimeStamp column from a SQL Server table.
	Additionally, for comparison, the value is passed back to a stored procedure,
	which does the update based on the a WHERE clause evaluation of true. An error
	is raised if the concurrency check fails.
	
	Keep in mind that TimeStamps were intended for use by SQL Server internally and,
	as such, the format is subject to change without notice.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how the value of a TimeStamp column is
	converted and displayed using a Visual Basic ListBox control. Additionally, it
	is then passed back to a stored procedure for concurrency control. The stored
	procedure, UpdateBalance, updates the table with new balance if the TimeStamp
	comparison is true; if the concurrency check fails, it raises an error and
	returns the error message back to Visual Basic. Function TSToHex() converts the
	TimeStamp column from data type binary to string.
	
	Note that TimeStamps are opaque values that do not mean anything in and of
	themselves (like bookmarks). Using function TSToHex() and displaying the
	TimeStamp values on a list in this example is only for demonstration purposes.
	In real-world scenarios, the user never really needs to see or know about it.
	
	Task One: Create Test Table and Stored Procedure
	------------------------------------------------
	
	1. For testing purpose, table BankTbl is created in Pubs database with three
	  rows. To create a table and add new rows in SQL Server, select the Pubs
	  database, place the following Create Table T-SQL in the SQL window of ISQL/W
	  and execute it:
	
	        CREATE TABLE BankTbl
	               (Account int identity, Balance money, Stamp TimeStamp)
	        INSERT INTO BankTbl (Balance) Values(1000)
	        INSERT INTO BankTbl (Balance) Values(400)
	        INSERT INTO BankTbl (Balance) Values(250)
	        CREATE UNIQUE INDEX AcctIndex ON BankTbl(Account)
	
	2. To create the stored procedure updateBalance, place the following code in
	  T-SQL in the SQL window of ISQL/W and execute it:
	
	        CREATE PROCEDURE UpdateBalance
	               @Sys_Ts TimeStamp, @newBalance Money AS
	               UPDATE Pubs..BankTbl
	               SET BankTbl.Balance = @newBalance
	               WHERE BankTbl.Stamp=@Sys_Ts
	               IF @@ROWCOUNT=0
	                  RAISERROR ("Optimistic concurrency check failed!", 11, -1)
	
	Task Two: Build the Visual Basic Code
	-------------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select References, and then place a check next to
	  Microsoft Remote Data Object 2.0.
	
	3. Add a ListBox, a TextBox and a CommandButton to Form1.
	
	4. Paste the following code in the General Declaration section of Form1:
	
	        Option Explicit
	        Dim cn As New rdoConnection
	        Dim rsList As rdoResultset
	
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
	           Dim strTS As String
	           Dim theBalance As Single
	           Dim strTemp As String
	           Dim oldPos As Integer
	
	           On Error GoTo Err_Update
	           If List1.ListIndex = -1 Then
	              MsgBox "No item is selected"
	              Exit Sub
	           End If
	
	           strTemp = Mid(List1.Text, InStr(List1.Text, Chr(9)) + 1)
	           theBalance = Val(Mid(strTemp, 1, InStr(strTemp, Chr(9)) - 1)) _
	                        - Val(Text1.Text)
	           strTS = Mid(strTemp, InStr(1, strTemp, Chr(9)) + 1)
	
	           'if the concurrency check fails, a runtime error will occur
	           cn.Execute "{CALL UpdateBalance(" _
	                     & strTS & ", " & theBalance & ")}"
	
	           rsList.Requery
	           oldPos = List1.ListIndex
	           List1.Clear
	           Do While Not rsList.EOF
	              List1.AddItem rsList(0) & Chr(9) & rsList(1) & Chr(9) _
	                                      & TSToHex(rsList(2))
	              rsList.MoveNext
	           Loop
	           List1.ListIndex = oldPos
	           MsgBox "Update Succeeded", vbOKOnly
	           Exit Sub
	        Err_Update:
	           MsgBox Err.Description, vbCritical
	        End Sub
	
	        Private Sub Form_Load()
	           Dim strSQL As String
	           Dim strConnect As String
	
	           strConnect = "Driver={SQL Server};Server=MyServer; _
	                         Database=pubs;Uid=sa;Pwd="
	           With cn
	              .Connect = strConnect
	              .EstablishConnection
	           End With
	           strSQL = "Select Account, Balance, Stamp from BankTbl _
	                     Order by Account"
	           Set rsList = cn.OpenResultset(strSQL)
	           Do While Not rsList.EOF
	              List1.AddItem rsList(0) & Chr(9) & rsList(1) & Chr(9) _
	                                      & TSToHex(rsList(2))
	              rsList.MoveNext
	           Loop
	           List1.ListIndex = 0
	           Text1.Text = "0"
	           Text1.TabIndex = 0
	           Command1.Default = True
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           cn.Close
	        End Sub
	
	5. Note that you should change your SERVER, UID, and PWD parameters in the RDO
	  connection string.
	
	6. Start the program or press the F5 key.
	
	7. Withdraw $50 dollars from account number 2 by selecting the second item in
	  the ListBox, entering 50 into the TextBox, and then clicking Command1 to make
	  the transaction.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Adrian Chiang, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
