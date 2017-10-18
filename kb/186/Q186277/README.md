---
layout: page
title: "Q186277: PRB: User Connection Designer: Zero-Length Input Parameter"
permalink: kb/186/Q186277/
---

## Q186277: PRB: User Connection Designer: Zero-Length Input Parameter

	Article: Q186277
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When passing a zero-length string ("") as an input parameter to a SQL Server
	stored procedure using User Connection Designer, it is being converted into a
	single-space string (" ") in the stored procedure.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Task One: Create the Example Stored Procedure
	
	In SQL Server, create a stored procedure GetAuthor based on Authors table in Pubs
	database. To create GetAuthor, select Pubs database, and then place the
	following Create Procedure T-SQL in the SQL window of ISQL/W and execute it:
	
	     Create procedure GetAuthor
	        @TestParam Varchar(11) As
	     If @TestParam = " "
	          Select au_id From Authors
	     Else
	          Select au_lname From Authors
	     Endif
	     GO
	
	NOTE: GetAuthor returns a Resultset with author id if the input parameter is a
	single-space string (" "). Otherwise, it returns a Resultset with authors' last
	names.
	
	Task Two: Create the UserConnection
	
	1. Start a new project in Visual Basic and choose Standard EXE. Form1 is created
	  by default.
	
	2. From the Project menu, select Components, select the Designers tab, and then
	  place a check next to Microsoft UserConnection.
	
	3. From the Project menu, select Add ActiveX Designer, and then select Microsoft
	  UserConnection. This brings up a dialog titled UserConnection1 Properties.
	
	4. On the Connection tab, select either a DSN or DSN-less connection and fill in
	  the appropriate information. If you select DSN-less, make sure you specify a
	  database in the Other ODBC Attributes area with database=Pubs. On the
	  Authentication tab, fill in your username and password. On the Miscellaneous
	  tab in the Other section, choose Use ODBC cursor library because you have
	  more than one Select statement in the stored procedure. Click OK to save this
	  information and return to the Designer window.
	
	5. Insert a new Query by right-clicking UserConnection1 and choosing Insert
	  Query or by clicking the Insert Query toolbar icon. Query1 is created by
	  default.
	
	6. On Query1 property page, choose Based on Stored Procedure as the Source of
	  Query, then select the GetAuthor stored procedure you created earlier. Click
	  OK to save this information.
	
	Task Three: Build the Visual Basic Code
	
	1. Add one CommandButton (Command1) to Form1.
	
	2. Paste the following code in the General Declaration section of Form1:
	
	        Dim cn As New UserConnection1
	        Dim rs As rdoResultset
	
	3. Paste the following code in the Command1_Click procedure of Form1:
	
	        cn.EstablishConnection
	        cn.Query1 ""          ' Pass a zero-length string
	        Set rs = cn.LastQueryResults
	        Debug.Print rs(0).Name & "=" & rs(0).Value
	
	        ' Because of the problem described above,
	        ' the input parameter becomes a single-space string (" ").
	        ' au_id, instead of au_lname, is returned back.
	
	REFERENCES
	==========
	
	For additional information about User Connection Designer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q166281 HOWTO: Create and Implement a UserConnection
	
	Additional query words: kbVBp500 kbDSupport kbdse kbVBp600 kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
