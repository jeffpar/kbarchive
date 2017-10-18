---
layout: page
title: "Q175868: BUG: T-SQL Debugger Does Not Run on NT with User Account"
permalink: kb/175/Q175868/
---

## Q175868: BUG: T-SQL Debugger Does Not Run on NT with User Account

	Article: Q175868
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 27-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	T-SQL Debugger causes the following error when a stored procedure is called if
	the Visual Basic 5.0 application is being run on an NT 4.0 or Windows 2000
	machine where the login was to a User Account:
	
	  "You must have Privledges to modify the registry"
	
	NOTE: The word "Privileges" is misspelled in the error message.
	
	Visual Basic will hang when the application is ended and the task manager must be
	invoked to shut it down.
	
	RESOLUTION
	==========
	
	Use an login account that has administrator rights.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Login into an NT or Windows 2000 server with administrator privileges.
	
	2. Create a stored procedure on Sqlserver 6.5 by running the following code in
	  ISQL/W:
	
	        CREATE PROCEDURE findstate @whichstate char(2) as
	        select * from authors where state= @whichstate
	
	3. Create a Visual Basic Project and check "Microsoft Remote Data Object 2.0"
	  under Project References.
	
	4. Under Add-Ins Manager, check Visual Basic T-SQL Debugger. Under Tools, T_SQL
	  Debugging Option make sure both check boxes are checked. See references
	  mentioned below for setting up T-SQL Debugger.
	
	5. Place two CommandButtons on the form. Paste the following code in the form:
	
	           Option Explicit
	             Dim cn As rdoConnection
	             Dim qy As rdoQuery
	             Dim rs As rdoResultset
	             Dim strConnect As String
	             Dim n As Integer
	
	           Private Sub Command2_Click()
	              rs.Close
	              Set rs = Nothing
	              unload me
	           End Sub
	
	       Private Sub Command1_Click()
	
	          strConnect = "driver={SQL Server};server=servername;" & _
	            "database=pubs;uid=sa;pwd="
	          rdoEnvironments(0).CursorDriver = rdUseOdbc
	          Set cn = rdoEnvironments(0).OpenConnection( _
	            dsName:="", _
	            Prompt:=rdDriverNoPrompt, _
	            ReadOnly:=False, _
	            Connect:=strConnect)
	
	          Set qy = cn.CreateQuery("sql", _
	                  "{call pubs.dbo.findstate(?) }")
	          qy.RowsetSize = 1
	          qy.rdoParameters(0) = "CA"
	          Set rs = qy.OpenResultset( _
	            Type:=rdOpenForwardOnly, _
	            LockType:=rdConcurReadOnly)
	
	          While Not rs.EOF
	            debug.print rs(0) & ", " & rs(1)
	            rs.MoveNext
	          Wend
	
	        End Sub
	
	6. Place a break point on the procedure call line.
	
	7. Run the code and T-SQL debugger should come up.
	
	8. Press the F5 key and it should continue.
	
	9. Close Visual Basic and restart NT. Login to User Account.
	
	10. Open the same project making sure T-SQL debugger is activated.
	
	11. Run the application and the error will appear.
	
	REFERENCES
	==========
	
	Visual Basic Books Online, query on "t-sql debugger," use quotes.
	
	Hitchhiker's Guide to Visual Basic & SQLserver. pp411-413
	
	For more information on T-SQL Debugger for setup problems, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q166280 T-SQL Debugger Server Setup Provides Incorrect Location
	
	  Q172099 T-SQL - Running Remote and Local SQL Debugging
	
	Additional query words: kbVBp500bug kbVBp600bug kbGrpVBDB kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
