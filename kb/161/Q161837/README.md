---
layout: page
title: "Q161837: HOWTO: Create a DCOM Client/Server Application"
permalink: /kb/161/Q161837/
---

## Q161837: HOWTO: Create a DCOM Client/Server Application

{% raw %}

	Article: Q161837
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtophit kbAutomation kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 29-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Enterprise Edition of Visual Basic for Windows version 5.0, you can use
	the Distributed Component Object Model (DCOM) to perform client/server
	operations. This article shows you how to create a client/server application
	that uses DCOM to retrieve the name of the server.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	MORE INFORMATION
	================
	
	This sample was not intended to address multiple user scenarios. If you are
	attempting to create a DCOM server that will handle multiple users, process
	callbacks, raise events, or use security then please see the following article
	in the Microsoft Knowledge Base:
	
	  Q175510 : FILE: VB5DCOM.EXE: Using Callbacks and WithEvents with DCOM
	
	This is an advanced DCOM demonstration using Visual Basic 5.0. If you are using
	Visual Basic 6, please see the following articles in the Microsoft Knowledge
	Base:
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using VB
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	For additional information on how to set up security or for help with
	troubleshooting DCOM issues, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	System Requirements
	-------------------
	
	The following operating systems may be used for DCOM applications:
	
	  Operating System          Server           Client
	  ----------------          ------           ------
	  Windows 2000 Server        YES              YES
	  Windows 2000 Professional  YES              YES
	  WinNT 4.0 Server           YES              YES
	  WinNT 4.0 Workstation      YES              YES
	  Windows 98                 YES*             YES
	  Windows Me                 YES*             YES
	  Windows 95                 YES*             YES:
	
	                                              with DCOM for Win95 files
	
	  * For more information about using Windows 95/98/Me for a DCOM Server.
	    Please see the following article in the Microsoft Knowledge Base:
	
	  Q165101 : HOWTO: Use Windows 95 or Windows 98 as a DCOM Server
	
	Prepare the Computer
	--------------------
	
	(While this step is not required, it keeps your project in order.)
	
	Create the following directories on your computer:
	
	  C:\DCOMDemo
	  C:\DCOMDemo\Server
	  C:\DCOMDemo\Server\Setup
	  C:\DCOMDemo\Client
	  C:\DCOMDemo\Client\Setup
	
	Create the Server
	-----------------
	
	1. Start a new Visual Basic Project. In the New Project dialog box, select
	  ActiveX EXE and click Open.
	
	2. Set the following properties:
	
	  Control             Name        Property         Value
	  ------------------------------------------------------------------
	  Class Module        Class1      (Name)           clsDCOMDemoServer
	                                   Instancing       5 - MultiUse
	
	3. Copy the following code to the Class Module clsDCOMDemoServer:
	
	        Option Explicit
	
	        Public Function ServerTime()
	             'Retrieves the time from the server.
	             ServerTime = Time
	        End Function
	
	        Public Function AddNumbers(x As Integer, y As Integer) As Integer
	             'Receives two integers and adds them together.
	             AddNumbers = x + y
	        End Function
	
	        Public Function SubtractNumbers(x As Integer, y As Integer) _
	             As Integer
	             'Receives two integers and subtracts the second from the first.
	             SubtractNumbers = x - y
	        End Function
	
	4. On the Project menu, click Project1 Properties.
	
	  NOTE: If you saved the project previously or have another project open, the
	  menu item may not be called "Project1." Select the menu item for Properties.
	
	5. Click the General tab and set the following properties:
	
	  Project Type:             ActiveX EXE       (Create out-of-process
	                                               ActiveX component)
	
	  Startup Object:           (None)            (None required)
	
	  Project Name:             proDCOMDemoServer (Will be used in client
	                                               code to define the project
	                                               to be used)
	  Help File Name:           <Blank>
	  Project Help Context ID:  0
	  Project Description:      DCOM Demo Project - Server
	  Unattended Execution:     <Unchecked>
	  Upgrade ActiveX Controls: <Checked>          (Enables upgrading of
	                                                ActiveX controls)
	
	6. Click the Make tab and set the following properties:
	
	  Auto Increment:                     <Checked> (Useful for version
	                                                 comparison.)
	
	  Application Title:                  proDCOMDemoServer (Name of the EXE
	                                                         that will be
	                                                         compiled.)
	  Version Information:                <As desired>
	  Command Line Arguments:             <Blank>
	  Conditional Compilation Arguments:  <Blank>
	
	7. Click the Compile tab and set the following properties:
	
	  Compile to P-Code:       <Selected>
	  Compile to Native Code:  <Not Selected>
	
	  The rest of the options should be unavailable.
	
	8. Click the Component tab and set the following options:
	
	  Start Mode:             ActiveX Component
	  Remote Server Files:    <Checked> (Creates TLB and VBR files)
	  Version Compatibility:  Project Compatibility (Keeps GUIDs updated)
	
	  Click OK.
	
	9. On the File menu, click Save Project As. Save the following files as
	  described:
	
	  Directory             File           Filename              Extension
	  ---------------------------------------------------------------------
	  C:\DCOMDemo\Server    Class Module   clsDCOMDemoServer     .cls
	                        Project        proDCOMDemoServer     .vbp
	
	10. Select File from the menu, and choose Make proDCOMDemoServer.exe.
	
	11. In the Make Project dialog box, save the executable to the \DCOMDemo\Server
	  directory.
	
	12. Select Project from the menu and choose proDCOMDemoServer Properties.
	
	13. Click the Component tab and confirm that Version Compatibility is still set
	  to Project Compatibility.
	
	14. The file proDCOMDemo.exe appears in the text box at the bottom of the
	  Version Compatibility group. In the Compatible ActiveX Component dialog box,
	  select the file that you just compiled
	  (C:\DCOMDemo\Server\proDCOMDemoServer.exe).
	
	  If it is not there, click on the button with the three ellipses (...) and go
	  to step 15. If the file is already in the text box, proceed to step 16.
	
	15. Click OK to close the proDCOMDemoServer - Project Properties dialog box.
	
	16. Open a new project (select New Project on the File menu) and save the
	  changes in the server project.
	
	Create the Client
	-----------------
	
	1. In the New Project dialog box, select Standard EXE and click OK.
	
	2. On the Project menu, click References.
	
	3. Scroll down in the Available References text box until you see DCOM Project -
	  Server. Select the box on the left and click OK. Note that the component
	  automatically appears in the Available References text box. In Remote OLE
	  Automation, you have to double-click the server executable to register it. In
	  DCOM, the server component is automatically registered.
	
	4. Insert a Module. Place two CommandButtons, two text boxes, and three labels
	  on Form1. Set the following properties:
	
	  Control         Name              Property         Value
	  ------------------------------------------------------------------
	  Module          Module1           Name             modDCOMDemoClient
	
	  Form            Form1             Name             frmDCOMDemoClient
	                                    Caption          DCOM Demo - Client
	
	  CommandButton  Command1           Name             cmdServerTime
	                                    Caption          &Get Server Time
	
	                 Command2           Name             cmdComputeNumbers
	                                    Caption          &Compute Numbers
	
	  Text Box        Text1             Name             txtX
	                                    TabStop          True
	                                    TabIndex         0
	
	                  Text2             Name             txtY
	                                    TabStop          True
	                                    TabIndex         1
	
	  Label           Label1            Name             lblAnswerAdd
	                  Label2            Name             lblAnswerSubtract
	                  Label3            Name             lblServerTime
	
	  You may want to add additional labels to the form to serve as captions for
	  these labels.
	
	5. Copy the following code to the Module:
	
	        Option Explicit
	
	        Public oServer As New proDCOMDemoServer.clsDCOMDemoServer
	
	6. Copy the following code to the frmDCOMDemoClient code window:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	             'Set initial values for text boxes.
	              txtX.Text = "1"
	              txtY.Text = "2"
	        End Sub
	
	        Private Sub txtX_GotFocus()
	              'Select all the text when the text box gets focus.
	              'This makes it easier to change the values.
	              txtX.SelStart = 0
	              txtX.SelLength = Len(txtX.Text)
	        End Sub
	
	        Private Sub txtY_GotFocus()
	              'Select all the text when the text box gets focus.
	              'This makes it easier to change the values.
	              txtY.SelStart = 0
	              txtY.SelLength = Len(txtY.Text)
	          End Sub
	
	        Private Sub cmdServerTime_Click()
	             'Get the time from the server and put it in the
	             'lblServerTime label.
	             lblServerTime.Caption = oServer.ServerTime
	        End Sub
	
	        Private Sub cmdComputeNumbers_Click()
	              'Passes the integers to the server and puts the answers in the
	              'appropriate labels. The "CInt" is to ensure that you are
	              'passing integers, which is what the server is expecting.
	              lblAnswerAdd.Caption = oServer.AddNumbers _
	                  (CInt(txtX.Text), CInt(txtY.Text))
	              lblAnswerSubtract.Caption = oServer.SubtractNumbers _
	                  (CInt(txtX.Text), CInt(txtY.Text))
	        End Sub
	
	        Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As _
	                  Integer)
	       'Closes the object when the form unloads.
	              Set oServer = Nothing
	        End Sub
	
	7. On the Project menu, click Project1 Properties.
	
	  NOTE: If you saved the project previously or have another project open, the
	  menu item may not be called "Project1." Select the menu item for Properties.
	
	8. Click the General tab and set the following properties:
	
	  Project Type:             Standard EXE       (Client is a Standalone
	                                               executable)
	
	  Startup Object:           frmDCOMDemoClient  (frmDCOMDemoClient and
	                                               the code behind
	                                               the form run upon
	                                               execution)
	
	  Project Name:             proDCOMDemoClient  (Will be the name of the
	                                               client executable)
	  Help File Name:           <Blank>
	  Project Help Context ID:  0
	  Project Description:      DCOM Demo Project - Client
	  Unattended Execution:     <Disabled>
	  Upgrade ActiveX Controls: <Checked>          (Enables upgrading of
	                                               ActiveX controls)
	
	9. Click the Make tab and set the following properties:
	
	  Auto Increment:                     <Checked> (Useful for Version
	                                                checking)
	
	  Application Title:                  proDCOMDemoClient
	  Version Information:                <As desired>
	  Command Line Arguments:             <Blank>
	  Conditional Compilation Arguments:  <Blank>
	
	10. Click the Compile tab and set the following properties:
	
	  Compile to P-Code:       <Selected>
	  Compile to Native Code:  <Not Selected>
	
	  The rest of the options should be unavailable.
	
	11. Click the Component tab and ensure that all options are disabled. Click OK.
	
	12. On the File menu, click Save Project As. Save the following files as
	  described:
	
	  Directory           File         Filename              Extension
	  ----------------------------------------------------------------
	  C:\DCOMDemo\Client  Module       modDCOMDemoClient     .bas
	                      Form1        frmDCOMDemoClient     .frm
	                      Project      proDCOMDemoClient     .vbp
	
	13. Test the client by clicking Run or pressing the F5 key. When you click Get
	  Server Time, the current system time appears in the label. When you click
	  Compute Numbers, the sum and the difference between the numbers appear in
	  the appropriate labels. Stop the project.
	
	14. On the File menu, click Make proDCOMDemoClient.exe.
	
	15. In the Make Project dialog box, save the executable to the
	  C:\DCOMDemo\Client directory.
	
	16. Close your project, and save the changes.
	
	Distribute the Server
	---------------------
	
	You can use the same computer that you developed the application on as your
	server. However, if you want to distribute your server to another computer,
	follow these instructions:
	
	1. Start the Application Setup Wizard by clicking Start, Programs, Visual Basic
	  5.0, Application Setup Wizard. (If the Introduction dialog box appears, click
	  Next.)
	
	2. In the Select Project and Options dialog box, click Browse. In the Locate VB
	  application's .VBP file dialog box, select
	  C:\DCOMDemo\Server\proDCOMDemoServer.VBP.
	
	3. Click Open and set the following options:
	
	  Rebuild the Project:  <Unchecked>
	  Options:              Create a Setup Program
	
	  Click Next.
	
	4. In the Distribution Method dialog box, select Single Directory and click
	  Next.
	
	5. In the Single Directory dialog box, select the C:\DCOMDemo\Server\Setup
	  directory. Click Next.
	
	6. In the ActiveX Components dialog box, click Next. (Do not select any
	  components. They are not needed for this project.)
	
	7. In the Confirm Dependencies dialog box, make sure that the Stdole2.tlb file
	  is listed. (If it is not listed, you will have to add it later. It is located
	  in your \Windows\System directory.) Click Next.
	
	8. In the Shared ActiveX Application dialog box, select Install as a shared
	  component and No since we are installing this as a DCOM application. Click
	  Next.
	
	9. In the File Summary dialog box, the Setup Wizard processes your files. When
	  it is finished you will see a list of files that will be included in your
	  project. If the Stdole2.tlb file is not listed, click Add. In the Add Files
	  dialog box, select the file from your system directory. Click Next.
	
	10. Save the template if desired, and then click Finish.
	
	11. Connect to the distribution directory from your server and run the Setup.exe
	  file that the Setup Wizard generated.
	
	12. After the server setup is complete, start the Dcom Configuration application
	  by clicking Start then Run and type "Dcomcnfg.exe" (without the quotation
	  marks) in the Run dialog box.
	
	  If you do not configure the server class that was just installed, the default
	  configuration is used. For this example, select
	  proDCOMDemoServer.clsDCOMDemoServer and click Properties.
	
	13. Click the General tab. This tab lists the following information about the
	  application, its name, type, and where it is stored:
	
	  Application Name:  proDCOMDemoServer.clsDCOMDemoServer
	  Application Type:  Local Server
	  Local Path:        C:\WINNT\system32\proDCOMDemoServer.exe
	
	14. Click the Location tab to choose where you want the application to run from.
	  Set the following properties:
	
	
	  Run application on the computer where the data is located  <Unchecked>
	  Run application on this computer                           <Checked>
	  Run application on the following computer                  <Unchecked>
	
	15. Click the Security tab to set application security. You set Access, Launch,
	  and Configuration permissions from this tab.
	
	16. Select Use custom access permissions. Click Edit, which just became
	  available. In the Registry Value Permissions dialog box, click Add.
	
	17. In the Add Users and Groups dialog box, select Everyone, and then click Add.
	  The Add Users and Groups dialog box enables you to allow or deny access to
	  the class to certain individuals or groups.
	
	18. In Type of Access box, select Allow Access and click OK. The Registry Value
	  Permissions dialog box now reflects that you are allowing access to this
	  class to Everyone. Click OK.
	
	19. On the Security tab, select Use custom launch permissions. Click Edit which
	  just became available. In the Registry Value Permissions dialog box, click
	  Add.
	
	20. In the Add Users and Groups dialog box, select Everyone and then click Add.
	  The Add Users and Groups dialog box enables you to allow or deny certain
	  individuals or groups to launch the class.
	
	21. In the Type of Access box, select Allow Launch and click OK. The Registry
	  Value Permissions dialog box now reflects that you are allowing Everyone to
	  launch this class. Click OK.
	
	22. Close Configure Permissions in the Custom selection.
	
	23. Click the Identity tab to set the user account that you want to use to run
	  the application. Set the following properties:
	
	  The Interactive User  <Unselected>
	  The Launching User    <Selected>
	  This User             <Unselected>
	
	24. Click OK. When you get back to Distributed COM Configuration Properties,
	  click OK. The following message should appear: "The operation completed
	  successfully." Click OK.
	
	Distribute the Client
	---------------------
	
	1. Start the Application Setup Wizard by clicking Start, Programs, Visual Basic
	  5.0, Application Setup Wizard. (If the Introduction dialog box appears, click
	  Next.)
	
	2. In the Select Project and Options dialog box, click Browse. In the Locate VB
	  application's .VBP file dialog box, select
	  C:\DCOMDemo\Client\proDCOMDemoClient.VBP.
	
	3. Click Open and set the following options:
	
	  Rebuild the Project:  <Unchecked>
	  Options:              Create a Setup Program
	
	  Click Next.
	
	4. In the Missing Dependencies dialog box, click Next. Dependency files are not
	  required for this project. In the Confirm Missing Dependencies dialog box,
	  click Yes.
	
	5. In the Distribution Method dialog box, select Single Directory and then click
	  Next.
	
	6. In the Single Directory dialog box, select the C:\DCOMDemo\Client\Setup
	  directory. Click Next.
	
	7. In the ActiveX Components dialog box, deselect proDCOMDemoServer.exe. You do
	  not need to distribute it with the client.
	
	8. Click Add Remote. In the Add ActiveX Components dialog box, select
	  C:\DCOMDemo\Server\proDCOMDemoServer.VBR. This file was created when you
	  compiled the server executable. It was created because you checked the Remote
	  Server Files option on the Server's Properties Component tab.
	
	9. Click Open. The Remote Connection Details dialog box appears. Set the
	  following options:
	
	  Remote Transport:   Distributed COM (DCOM)
	  Network Address:    <The name of the computer the server will be
	                      installed on. Do not include backslashes>
	
	  Click OK. Click Next.
	
	10. In the Confirm Dependencies dialog box, make sure that the Stdole2.tlb file
	  is listed. (If it is not listed, you will have to add it later. It is
	  located in your \Windows\System directory.) Click Next.
	
	11. The File Summary dialog box appears and the Setup Wizard processes your
	  files. When it is finished you will see a list of files that will be
	  included in your project. If the Stdole2.tlb file is not listed, click Add.
	  In the Add Files dialog box, select the file from your system directory.
	  Click Next.
	
	12. Save the template if desired, and then click Finish.
	
	13. Connect to the distribution directory from your client and run the Setup.exe
	  file that the Setup Wizard generated.
	
	When you run the application from the client, it returns the time of the computer
	that the server component is on. When you click Compute Numbers, the result of
	the addition and subtraction of the numbers appears in the text boxes. Try
	changing the numbers to confirm that everything works, but don't use a very
	large number because you told that class that you are passing integers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtophit kbAutomation kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
