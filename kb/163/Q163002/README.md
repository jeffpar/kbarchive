---
layout: page
title: "Q163002: HOWTO: Open an Access Database with User Security"
permalink: /kb/163/Q163002/
---

## Q163002: HOWTO: Open an Access Database with User Security

{% raw %}

	Article: Q163002
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,7.0,97
	Operating System(s): 
	Keyword(s): kbAccess kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to open and view the contents of a secured Access
	database using Visual Basic. The steps below outline this process:
	
	1. Secure the database: From Microsoft Access, set the appropriate user and
	  group permissions to secure the database. For more information about securing
	  a Microsoft Access database, see the REFERENCES section later in this
	  article.
	
	2. In your Visual Basic code, indicate where system database, system.mdw, is
	  located. You can either set the SystemDB property of the DBEngine object or
	  set the IniPath property to the registry location of the system database. For
	  example:
	
	     DbEngine.SystemDB="C:\MyApplication\system.mdw"
	
	3. Open the database.
	
	Note that opening a secured Access database is different from opening a database
	that is secured with the Microsoft Access user-level security feature.
	
	MORE INFORMATION
	================
	
	This section demonstrates how to create a sample Visual Basic program to open a
	secured Access database. To use this sample program, you will need a secured
	database with the following attributes:
	
	  Database Name:  Secure AccessDB.mda
	  Database Table: Name
	  Table Field:    Last Name
	  User Name:      NewAdmin
	  Password:       NewAdmin
	  Member of:      Admins Group
	  Permissions:    All
	
	To create this secured database, refer to the chapter in the Access documentation
	listed in the REFERENCES section of this article. Alternatively, you could
	secure one of the sample applications using the same instructions and make the
	appropriate changes in the code.
	
	Steps To Reproduce
	------------------
	
	1. Start Visual Basic, or if it is already running, click New Project from the
	  File menu.
	
	2. Place the following objects on the Form1 form and set the appropriate
	  properties:
	
	  Control             Name              Property         Value
	  ---------------------------------------------------------------------
	
	  Label               Label1            Caption          User Name:
	                                        Height           255
	                                        Left             120
	                                        Top              120
	                                        Width            855
	
	  Text Box            Text1             Caption          <Blank>
	                                        Height           285
	                                        Left             1080
	                                        Top              120
	                                        Width            1455
	
	  Command Button      Command1          Height           372
	                                        Left             2760
	                                        Top              120
	                                        Width            1572
	
	  Label               Label2            Caption          Password:
	                                        Height           255
	                                        Left             120
	                                        Top              480
	                                        Width            855
	
	  Text Box            Text2             Caption          <Blank>
	                                        Height           285
	                                        Left             1080
	                                        Top              480
	                                        Width            1455
	
	  Label               Label3            Caption          <Blank>
	                                        Height           255
	                                        Left             120
	                                        Top              840
	                                        Width            4335
	
	3. Copy and paste the following code to the Form1 Code Window:
	
	     Private Sub Command1_Click()
	        Dim MyWorkspace As Workspace
	        Dim SecuredDB As String
	        Dim slUserName As String
	        Dim slPassword As String
	        Dim db As Database
	        Dim rs As Recordset
	
	        'Set the location of the system database
	        DBEngine.SystemDB = _
	                "C:\Projects\Secured Database Article\system.mdw"
	
	        'Create a new workspace object
	        slUserName = Text1.Text
	        slPassword = Text2.Text
	        Set MyWorkspace = DBEngine.CreateWorkspace("New", _
	                                                    slUserName, _
	                                                    slPassword)
	
	        'Open the database
	        SecuredDB = _
	               "C:\Projects\Secured Database Article\Secure AccessDB.mdb"
	        Set db = DBEngine.Workspaces("New").OpenDatabase(SecuredDB)
	
	        Set rs = db.OpenRecordset("Name", dbOpenDynaset)
	        rs.MoveFirst
	        Label3.Caption = _
	                   "The first record is " & rs.Fields("LastName").Value
	
	        'Close the recordset and the database
	        rs.Close
	        db.Close
	     End Sub
	
	4. Press the F5 key to run the project or, from the Tools menu, click Run
	  Project. Enter a valid User Name and Password, and then click the command
	  button. The first record in the Last Name field is displayed in the Label. If
	  you enter an invalid User Name or an invalid Password, a run-time error
	  (3029) occurs.
	
	Possible Errors
	---------------
	
	The following is a list of possible errors you may encounter when you write a
	program to open a secured database. The error message is shown first, followed
	by the code that is highlighted when you click the debug button. The possible
	cause and then the solution is shown for each line of code:
	
	  Error: Run-time error '3028'
	  Can't start your application. The system database is missing or opened
	  exclusively another user.
	
	  Debug: Set My Workspace = DBEngine.CreateWorkspace("New", _ "Admin", _ "")
	
	  Cause: You are setting the workspace using the global administrator user name
	  and password. The global administrator may not have the necessary permissions
	  to open the secured database.
	
	  Solution: Change the parameters to a valid user and password as specified in
	  the system database.
	
	  Debug: DBEngine.IniPath = <path and file name of an initialization file
	  specifying the location of the system database>
	
	  Cause: In 32-bit Visual Basic, this property requires the registry entry of
	  the system database.
	
	  Solution: Set the property to the system database registry location or use the
	  SystemDB property of the DBEngine object. Set the SystemDB property to the
	  location and file name of the system database.
	
	  Error: Run-time error '3029'
	  Not a valid account name or password
	
	  Debug: Set MyWorkspace = DBEngine.CreateWorkspace("New", "UserName", _
	  "Password")
	
	  Cause: User name or password is not in the system database.
	
	  Solution: Add the user name and password to the system database. Refer to the
	  chapter in the Access documentation listed in the references section of this
	  article on how to add users to the system database.
	
	  Error: Run-time Error '3265'
	  Item not found in this collection.
	
	  Debug: Set db = DBEngine.Workspaces("New").OpenDatabase("SecuredDB")
	
	  Cause: New workspace was not appended to the workspace object of the DBEngine
	  object.
	
	  Solution: Use the Append method of the DBEngine.Workspaces object to append
	  the new workspace object to the DBEngine object. For more information, see
	  the Append method in the Visual Basic online Help.
	
	REFERENCES
	==========
	
	Chapter 14 - Securing and Delivering Your Application, Building Applications
	with Microsoft Access for Windows 95.
	
	Visual Basic Online Help - search on IniPath property, and then select the topic:
	DBEngine IniPath Now Uses Registry Entry (ReadMe)
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161016 : INF: Using DAO to Open Password-Protected Database (7.0/97)
	
	
	Additional query words: Access
	
	======================================================================
	Keywords          : kbAccess kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : WINDOWS:4.0,7.0,97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
