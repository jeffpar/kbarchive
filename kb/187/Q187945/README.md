---
layout: page
title: "Q187945: HOWTO: Pass Text Fields to a Stored Procedure Using RDO 2.0"
permalink: kb/187/Q187945/
---

## Q187945: HOWTO: Pass Text Fields to a Stored Procedure Using RDO 2.0

	Article: Q187945
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Repeatedly passing a text field to a SQL server stored procedure using RDO 2.0
	will result in concatenation of the newly-passed text field to the earlier one.
	This also applies to executing the stored procedure through User Connection
	Object.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a table using the following script in the pubs sample database (SQL
	  Server):
	
	        CREATE TABLE dbo.textbloat (
	          ID int NOT NULL ,
	          text1 text NULL
	        )
	        GO
	
	2. Create a procedure using the following script:
	
	        CREATE PROCEDURE p_Edit
	          @ID int,
	          @Desc Text AS
	          UPDATE textbloat SET Text1 = @Desc WHERE ID = @ID
	        GO
	
	3. Add three dummy records into the table using the following script:
	
	        insert into textbloat values (1,null)
	        insert into textbloat values (2,null)
	        insert into textbloat values (3,null)
	
	4. Create a new Standard EXE project. Form1 is created by default. Add a
	  CommandButton to the form, and name it Command1. Paste the following code
	  into its click event.
	
	       Private Sub Command1_Click()
	        Dim rdoenv As RDO.rdoEnvironment
	        Dim rdoconn As RDO.rdoConnection
	        Dim rdq As RDO.rdoQuery
	          Set rdoenv = rdoEnvironments(0)
	          rdoenv.CursorDriver = rdUseOdbc
	          Set rdoconn = rdoenv.OpenConnection("", rdDriverNoPrompt, False, _
	                        "DSN=<Your DSN Name>;UID=sa;PWD=;database=pubs")
	          Set rdq = rdoconn.CreateQuery("", "{Call p_Edit(?,?)}")
	          rdq.Prepared = True
	          rdq(0).Type = rdTypeINTEGER
	          rdq(0).Direction = rdParamInput
	          rdq(1).Direction = rdParamInput
	          rdq(1).Type = rdTypeLONGVARCHAR
	          rdq(0).Value = 1
	          'rdq(1).Value = ""
	          rdq(1).Value = "ABCDE"
	          rdq.Execute
	          rdq(0).Value = 2
	          'rdq(1).Value = ""
	          rdq(1).Value = "ABCDE"
	          rdq.Execute
	          rdq(0).Value = 3
	          'rdq(1).Value = ""
	          rdq(1).Value = "ABCDE"
	          rdq.Execute
	        End Sub
	
	5. Click the CommandButton.
	
	6. Executing "select text1 from textbloat" using ISQL you will get the following
	  output that shows the concatenation:
	
	     text1
	     -----
	     ABCDE
	     ABCDEABCDE
	     ABCDEABCDEABCDE
	
	7. Remove the commented lines from the above code and do a "select text1 from
	  textbloat" again using ISQL. You will get the expected output:
	
	     text1
	     -----
	     ABCDE
	     ABCDE
	     ABCDE
	
	8. If you intend to execute the above stored procedure using a UserConnection
	  object, you will have to explicitly set the text field parameter to null or
	  "" before executing, in the following way:
	
	        Private Sub Command2_Click()
	        Dim uc As New UserConnection1
	          uc.EstablishConnection
	          uc.p_edit 1, "ABCDE"
	          uc.rdoQueries.Item("p_edit").rdoParameters("Desc").Value = ""
	          uc.p_edit 2, "ABCDE"
	          uc.rdoQueries.Item("p_edit").rdoParameters("Desc").Value = ""
	          uc.p_edit 3, "ABCDE"
	        End Sub
	
	For the above code to work, you will have to add a UserConnection Object to the
	Visual Basic project and name it UserConnection. You will also have to add a new
	CommandButton to the form named Command2.
	
	REFERENCES
	==========
	
	Visual Basic RDO Help
	
	Additional query words: kbDSupport kbDse kbRDO200 kbVBp500 kbVBp kbVBp600 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
