---
layout: page
title: "Q177592: PRB: User Connection Object Connect Property Remains Populated"
permalink: kb/177/Q177592/
---

## Q177592: PRB: User Connection Object Connect Property Remains Populated

	Article: Q177592
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
	
	When a UserConnection object is declared at the global level, the userid and
	password stored in the Connect property remains populated after the connection
	is closed.
	
	RESOLUTION
	==========
	
	To make sure the userid and password in Connect property is cleared after
	closing the connection, you can set the user connection object to Nothing right
	after closing the connection, such as:
	
	  uc.close
	  SET uc = Nothing
	
	You could also store the initial value of the Connect property to a variable, and
	replace the Connect property with that value after the connection is closed,
	such as the following:
	
	  Dim myConnect As String
	  myConnect = uc.Connect
	  uc.EstablishConnection
	  uc.Close
	  uc.Connect = myConnect
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Task 1: Create the UserConnection
	---------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select Components, select the Designers tab, and then
	  place a check next to Microsoft UserConnection.
	
	3. From the Project menu, select Add ActiveX Designer, and then select Microsoft
	  UserConnection. This will bring up a dialog titled "UserConnection1
	  Properties."
	
	4. On the Connection tab, select either a DSN or DSN-less connection and fill in
	  the appropriate information. On the Authentication tab, leave User Name and
	  Password blank. At ODBC Prompt Behavior dropdown box, choose "Only when
	  needed."
	
	5. Click OK to save this information and return to the Designer window.
	
	Task 21: Build the Visual Basic Code
	------------------------------------
	
	1. Add two CommandButtons, Command1 and Command2, to Form1. Command1 establishes
	  the connection; Command2 closes it Both display the Connect property in the
	  debug window.
	
	2. Paste the following code in the General Declaration section of Form1:
	
	        ' *** To workaround the problem:
	        ' *** Uncomment the 2 lines of VB code to re-set
	        ' *** Connect property using variable myConnect
	        ' ***
	
	        Dim uc As New UserConnection1
	        Dim myConnect As String
	
	        Private Sub Command1_Click()
	           '  myConnect = uc.Connect
	           Debug.Print uc.Connect
	           uc.EstablishConnection
	        End Sub
	
	        Private Sub Command2_Click()
	           uc.Close
	           '  uc.Connect = myConnect
	           Debug.Print uc.Connect
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Establish Connection"
	           Command2.Caption = "Close Connection"
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           Set uc = Nothing
	        End Sub
	
	3. Press F5 key to start the program.
	
	NOTE: Because the userid and password remain populated in the Connect property
	after closing the connection, you are only prompted once for the authentication
	information after the first connection is established.
	
	REFERENCES
	==========
	
	For additional information about User Connection Designer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q166281 HOWTO: Create and Implement a UserConnection
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Adrian
	Chiang, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
