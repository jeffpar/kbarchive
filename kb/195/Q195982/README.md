---
layout: page
title: "Q195982: HOWTO: Set the Connection Prompt Behavior of DataEnvironment"
permalink: kb/195/Q195982/
---

## Q195982: HOWTO: Set the Connection Prompt Behavior of DataEnvironment

	Article: Q195982
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbDataEnv kbGrpDSVBDB kbDSupport
	Last Modified: 25-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the DataEnvironment in Visual Basic 6.0, it is not possible to set
	the prompting behavior at design-time. This property is set to adPromptComplete
	by default. You might want to change this property so that a prompt is not
	displayed when establishing a connection to a database. To do this you must set
	the "Prompt" property of the DataEnvironment at run-time.
	
	MORE INFORMATION
	================
	
	The prompt property of the DataEnvironment can be set using the following
	syntax:
	
	  DataEnvironment.Connection1.Properties("Prompt") = adPromptNever
	
	There are four possible values to specify here:
	
	- adPromptAlways (1)
	- adPromptComplete (2)
	- adPromptCompleteRequired (3)
	- adPromptNever (4)
	
	Following are the steps to create a Visual Basic project that illustrates how to
	use this property:
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to the default form.
	
	3. Add a DataEnvironment to the project.
	
	4. From the DataEnvironment window, right-mouse click on Connection1 and select
	  Properties.
	
	5. Select the Microsoft OLEDB Provider for ODBC Drivers. Click Next and
	  configure the second tab so that the connection will point to a valid
	  Database using either an existing DSN or a connection string.
	
	6. Add the following code to the default form:
	
	        Private Sub Command1_Click()
	          Debug.Print DataEnvironment1.Connection1.Properties("Prompt")
	          DataEnvironment1.Connection1.Open
	        End Sub
	
	        Private Sub Form_Load()
	        DataEnvironment1.Connection1.Properties("Prompt") = adPromptAlways.
	        '  Uncomment this line to suppress the prompt dialog:
	        '  DataEnvironment1.Connection1.Properties("Prompt") = adPromptNever.
	        End Sub
	
	7. Run the project and click the CommandButton. Note that a prompt is displayed
	  when you try to connect to the database. Uncomment the line of code in the
	  Form_Load() event that sets the prompt to adPromptNever and comment out the
	  code that sets the prompt property to adPromptAlways. Run the code again and
	  note that this time no prompt is displayed.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike Ruthruff, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Hitchhiker's Guide to Visual Basic and SQL Server (sixth edition)
	
	Visual Basic 6.0 Online Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbDataEnv kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
