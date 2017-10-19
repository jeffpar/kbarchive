---
layout: page
title: "Q166281: HOWTO: Create and Implement a UserConnection"
permalink: /kb/166/Q166281/
---

## Q166281: HOWTO: Create and Implement a UserConnection

	Article: Q166281
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0;
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The UserConnection Designer is one of the new ActiveX Designers included with
	Visual Basic 5.0 and higher. It allows you to wrap SQL or a Stored Procedure
	with code at design time so you can call it as a method at run time. This way,
	Visual Basic will list the parameters of your stored procedure in the object
	browser just as it does with any other VBA method. This new functionality can
	replace the rdoPreparedStatement and rdoQuery objects, although these are still
	available.
	
	The following is an excerpt on the UserConnection from Books Online:
	
	  The UserConnection designer uses Visual Basic's ActiveX designer architecture
	  to provide design-time support for programmatic data access. It allows you to
	  create connection and query objects at design time. These connections and
	  queries are persisted as project-level objects. You can pre-set properties,
	  define new properties and methods, and write code behind the objects to catch
	  events.
	
	MORE INFORMATION
	================
	
	This sample uses SQL Server and the Pubs database, but you can change the DSN,
	UID, PWD, and SQL to match any ODBC database you may be using.
	
	Task One: Create the Example Stored Procedure
	---------------------------------------------
	
	1. This sample SQL Server stored procedure accepts an input parameter of au_id
	  and returns a resultset and a test output variable. The test output variable
	  is hard-coded and has no meaning except to demonstrate how to return an
	  output using a UserConnection. If you are not using SQL Server, you might
	  have to modify the SQL into an acceptable format for your database server.
	
	2. To create this stored procedure you will need a tool that allows you to
	  execute SQL such as ISQL/W or MSQuery included with SQL Server. Select the
	  Pubs database, then place the following Create Procedure T-SQL in the SQL
	  window of your selected tool and execute it:
	
	        Create procedure GetAuthorInfo
	          @au_id Varchar(11), @testOut Varchar(10) OUTPUT As
	          Select * from authors Where au_id = @au_id
	          Select @testOut = 'Hello'
	
	Task Two: Create the Userconnection
	-----------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select Components, select the Designer tab, and then
	  place a check next to Microsoft UserConnection.
	
	3. From the Project menu, select Add ActiveX Designer, then select Microsoft
	  UserConnection. This will bring up a dialog titled UserConnection1
	  Properties.
	
	4. On the Connection tab, select either a DSN or a DSN-Less connection and fill
	  in the appropriate information. If you select DSN-less, make sure you specify
	  a database in the Other ODBC Attributes area with database=pubs. On the
	  Authentication tab, fill in your username and password, and place a check
	  next to Save Connection Information for Design time. On the Miscellaneous tab
	  in the Other section, choose Use ODBC Cursor Library because you have more
	  than one Select statement in your stored procedure.
	
	5. Click OK to save this information, and return to the Designer window. Press
	  the F4 key to display the Properties window and change the Name property from
	  UserConnection1 to StoredProcs.
	
	6. Insert a new Query by right-clicking on StoredProcs and choosing Insert Query
	  or by clicking on the Insert Query toolbar icon. Change the name of the Query
	  from Query1 to GetAuthorInfo. From the Source of Query, choose Based on
	  Stored Procedure, then select the stored procedure you created earlier,
	  GetAuthorInfo.
	
	7. If you select the Parameters tab, you can review the input and output
	  parameters. Your GetAuthorInfo Query setup is now finished. Click OK to close
	  the Dialog.
	
	8. To place code in the connection event of your UserConnection, select View
	  Code from the UserConnection toolbar. Choose UserConnection in from the
	  upper-left combo box, then choose the Connect Event from the upper-right
	  combo box. Place the following code in the UserConnection Connect event:
	
	        Debug.Print "Connect"
	
	Task Three: The Userconnection Code
	-----------------------------------
	
	1. Add a CommandButton, Command1, to Form1 of Project1.
	
	2. Paste the following code in the General Declarations section of Form1:
	
	        Private Sub Command1_Click()
	          Dim objSP As New StoredProcs             'creatable UC object
	          Dim objRs As rdoResultset                'pointer to rdoResultset
	          Dim lngRet As Long, strOut As String     'vars to hold output
	
	          objSP.EstablishConnection rdDriverNoPrompt  'establish connection
	          lngRet = objSP.GetAuthorInfo("648-92-1872", strOut) 'SP method
	          Set objRs = objSP.LastQueryResults          'get results off objRs
	          Debug.Print lngRet, strOut, objRs(0)        'output example results
	        End Sub
	
	3. Start the program or press the F5 key.
	
	4. Click the Command1 button to execute the UserConnection code. The Stored
	  Procedure return value, output value, and the first column of the returned
	  resultset will print in the Debug window.
	
	REFERENCES
	==========
	
	In Visual Basic Books Online see:
	
	 Guide to Building Client Server Applications in Visual Basic (Enterprise)
	   Part 1: Overview
	     Client/Server Tools
	       The UserConnection Designer
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jon Fowler,
	Microsoft Corporation
	
	
	Additional query words: kbDSupport kbdse kbvbp500 kbole kbNoKeyword kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
