---
layout: page
title: "Q170371: HOWTO: Implement Optional Parameter with UserConnection Designer"
permalink: kb/170/Q170371/
---

## Q170371: HOWTO: Implement Optional Parameter with UserConnection Designer

	Article: Q170371
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
	
	Due to a limitation of ODBC, the UserConnection Designer cannot directly
	implement a query based on stored procedures with optional parameters. This
	article discusses two alternatives to work around this limitation.
	
	The first alternative is to create two (or more) query objects based on
	user-defined SQL. Both query objects use ODBC call syntax to invoke the same
	stored procedure; one using a parameter, the other without. Depending on the
	situation, the client code can decide which query to use.
	
	The second option is to add a public method to the UserConnection object. This
	method will decide the ODBC call syntax dynamically, with or without parameters,
	and return the correct results.
	
	MORE INFORMATION
	================
	
	The following sample uses SQL Server and the Pubs sample database. This sample
	uses a ListBox and two CommandButtons to demonstrate the two approaches
	described above. The ListBox is loaded with values from the au_id column of the
	authors table. When an item from the list is selected, it is then passed to the
	stored procedure and the record count reflecting the single record is returned.
	If no list item is selected, no parameter is passed to the stored procedure and
	the total record count is again returned.
	
	Task One: Create the Example Stored Procedure
	---------------------------------------------
	
	1. This SQL Server stored procedure accepts an optional input parameter as au_id
	  and returns a resultset of the count of total selected records.
	
	2. To create this stored procedure, place the following CREATE PROCEDURE T-SQL
	  in the SQL window of ISQL/W and execute it:
	
	        CREATE PROCEDURE TestProc (@IDCol varchar(11) = NULL) AS
	           IF @IDCol = NULL
	              select count(au_id) from authors
	           ELSE
	              select count(au_id) from authors where au_id = @IDCol
	
	Task Two: Create the UserConnection
	-----------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select Components, select the Designer tab, and then
	  place a check next to Microsoft UserConnection.
	
	3. From the Project menu, select Add ActiveX Designer, and then select Microsoft
	  UserConnection. This will bring up a dialog titled UserConnection1
	  Properties.
	
	4. On the Connection tab, select either a DSN or DSN-less connection and fill in
	  the appropriate information. If you select DSN-less, make sure you specify a
	  database in the Other ODBC Attributes area with database=Pubs. On the
	  Authentication tab, fill in your username and password, and place a check
	  next to Save Connection Information for Design Time. On the Miscellaneous
	  tab, in the Other section, choose Use ODBC cursor library because you have
	  more than one Select statement in the stored procedure.
	
	5. Click OK to save this information and return to the Designer window.
	
	6. Insert a new Query by right-clicking on UserConnection1 and choosing Insert
	  Query or by clicking on the Insert Query toolbar icon. Change the name of the
	  Query from Query1 to TestProc1.
	
	7. From the Source of Query, choose Based on User-Defined SQL. Then type the
	  following SQL into the TextBox:
	
	        {call TestProc (?)}
	
	8. Click OK to save this information.
	
	9. Repeat Step 6 through 8 to add another new query. Name this query as
	  TestProc2. Type the following SQL into the TextBox of User-Defined SQL:
	
	        {call TestProc ()}
	
	Task Three: Build the Visual Basic Code
	---------------------------------------
	
	1. Add two CommandButtons, Command1 and Command2, to Form1.
	
	2. Add a ListBox control, List1, to Form1.
	
	3. Paste the following code in the General Declaration section of Form1:
	
	        Dim cn As New UserConnection1
	
	        Private Sub Command1_Click()
	           Dim rs As rdoResultset
	
	           If List1.ListIndex = -1 Then
	              cn.TestProc2
	           Else
	              cn.TestProc1 (List1.Text)
	           End If
	           Set rs = cn.LastQueryResults
	           MsgBox rs(0) & " records selected"
	           rs.Close
	           List1.ListIndex = -1
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim rs As rdoResultset
	           If List1.ListIndex = -1 Then
	              Set rs = cn.TestProc3
	           Else
	              Set rs = cn.TestProc3(List1.Text)
	           End If
	           MsgBox rs(0) & " records selected"
	           rs.Close
	        End Sub
	
	        Private Sub Form_Load()
	           List1.AddItem "648-92-1872"
	           List1.AddItem "722-51-5454"
	           List1.AddItem "756-30-7391"
	
	           Command1.Caption = "Alternative 1"
	           Command2.Caption = "Alternative 2"
	
	           cn.EstablishConnection
	        End Sub
	
	4. Paste the following code under UserConnection object: (Hint: Select View Code
	  from the UserConnection toolbar.)
	
	        Public Function TestProc3(Optional theID As Variant) As rdoResultset
	           Dim sCallSyntax As String
	           If IsMissing(theID) Then
	              sCallSyntax = "{call TestProc()}"
	           Else
	              sCallSyntax = "{call TestProc('" & theID & "')}"
	           End If
	           Set TestProc3 = Me.OpenResultSet(sCallSyntax)
	        End Function
	
	5. Start the program or press the F5 key.
	
	NOTE: Two CommandButtons demonstrate two ways to do the same thing; Alternative 1
	uses two query objects to call the same stored procedure vs. Alternative 2 which
	uses a custom method in the UserConnection object to dynamically decide the ODBC
	call syntax, with or without parameters.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166281 HOWTO: Create and Implement a UserConnection
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Adrian
	Chiang, Microsoft Corporation
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbODBC
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
