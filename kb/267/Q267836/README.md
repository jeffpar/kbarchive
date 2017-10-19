---
layout: page
title: "Q267836: HOWTO: Create a DCOM Client/Server with Events by Using VB"
permalink: /kb/267/Q267836/
---

## Q267836: HOWTO: Create a DCOM Client/Server with Events by Using VB

	Article: Q267836
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create, package, and deploy a Distributed
	Component Object Model (DCOM) client/server application with events by using
	Visual Basic. To create a DCOM client/server application, you need the
	Enterprise Edition of Visual Basic. Microsoft assumes that the reader is already
	familiar with creating client/server applications with events that run on the
	same computer.
	
	MORE INFORMATION
	================
	
	You do not need to change your code to enable a client application to
	instantiate a remote server by using DCOM. The difference is the way in which
	you package and deploy the client. In addition, there are some security settings
	you need to make after the client and the server are installed. You can make
	these settings by using an utility called DCOMCNFG. In particular, when your
	server raises events, not only are the server settings important, but the client
	ones are too.
	
	The following steps show you how to distribute and configure a simple
	client/server application. Call the server DCOMDemoEvents_Svr and the client
	DCOMDemoEvents_Cli. Create a separate folder for each of them and, for the
	purpose of this article, name the folders c:\DCOMDemoEvents\Server, and
	c:\DCOMDemoEvents\Client.
	
	Create the Server
	-----------------
	
	1. Start a new Visual Basic Project. In the New Project dialog box, select
	  ActiveX EXE, and then click Open. Class1 is created by default.
	
	2. Add the following code to the Class1 module:
	
	  Option Explicit
	
	  Public Event TimeUpdate(sTime As String)
	
	  Public Sub CallMeBack()
	      RaiseEvent TimeUpdate(Time())
	      
	  End Sub
	
	  Public Function ServerTime() As String
	      
	      ' this method was included just in case we need
	      ' to test a method without call back.
	      ServerTime = Time
	      
	  End Function
	
	3. On the Project menu, click the Project Properties option.
	
	4. Select the General tab.
	
	5. In the Project Name field, type "DCOMDemoEvents_Svr" (without the quotation
	  marks).
	
	6. In the Project Description field, type "DCOMDemoEvents_Svr - Server" (without
	  the quotation marks).
	
	7. Select the Component tab, and then select the Remote Server Files option.
	
	  NOTE: Selecting this option makes the Visual Basic compiler generate the VBR
	  and TLB files needed for packaging the client applications that use this
	  server. The files contain registry entries that need to be included on the
	  client computer.
	
	8. Close the Project Properties dialog box.
	
	9. On the File menu, select Save As, and then save this project to the
	  c:\DCOMDemoEvents\Server folder.
	
	10. On the File menu, select Make DCOMDemoEvents_Svr and compile the server.
	
	11. On the Project menu, select the Project Properties option, and then select
	  the Component tab. On the Component tab, select Version Compatibility,
	  select the Binary Compatibility option, and then make the project binary
	  compatible with the server's executable file you just created
	  (DCOMDemoEvents_Svr.exe). By making this option, you are assuring that all
	  GUIDs are kept the same if you recompile the server.
	
	Create the Client
	-----------------
	
	1. On the File menu, select the New Project option, select Standard EXE, and
	  click OK. Form1 is created by default.
	
	2. On the Project menu, click the Project Properties option, and then select the
	  General tab.
	
	3. In the Project Name field, type "DCOMDemoEvents_Cli" (without the quotation
	  marks).
	
	4. In the Project Description field, type "DCOMDemoEvents_Cli Project - Client"
	  (without the quotation marks), and then click OK to close the Project
	  Properties dialog box.
	
	5. On the Project menu, select References, and add a reference to
	  DCOMDemoEvents_Svr - Server.
	
	6. In the General Declarations section of Form1, include the following line:
	
	  Dim WithEvents MyEventObj As DCOMDemoEvents_Svr.Class1
	
	This declares the server object with events. After typing in this line, you
	should see MyEventObj in the list of objects for this form. The list of objects
	of the form is found in the upper-left-hand combo box in the form's code
	module.
	
	7. From the list of objects of the form, select MyEventObj. The empty Sub
	  MyEventObj_TimeUpdate is created. Type in the following line of code:
	
	  MsgBox "Event from Server received. Time=" & sTime
	
	8. Place a command button on Form1, and change the button's caption to Run with
	  Events.
	
	9. Place the following code in the button's click event:
	
	      On Error GoTo err1
	      
	      Set MyEventObj = CreateObject("DCOMDemoEvents_Svr.Class1")
	      MyEventObj.CallMeBack
	      Exit Sub
	
	  err1:
	      MsgBox "Error: " & Err.Number & " - " & Err.Description
	
	10. Place a second command button on Form1, and change the button's caption to
	  Run without Events.
	
	11. Place the following code in the button's click event:
	
	      Dim MyObj As DCOMDemoEvents_Svr.Class1
	      
	      On Error GoTo err1
	      
	      Set MyObj = CreateObject("DCOMDemoEvents_Svr.Class1")
	      MsgBox "Server time without events: " & MyObj.ServerTime
	      Exit Sub
	  err1:
	      MsgBox "Error: " & Err.Number & " - " & Err.Description
	
	12. Once you have done this, the form's code should look like the following:
	
	  Option Explicit
	  Dim WithEvents MyEventObj As DCOMDemoEvents_Svr.Class1
	
	  Private Sub Command1_Click()
	
	      On Error GoTo err1
	      
	      Set MyEventObj = CreateObject("DCOMDemoEvents_Svr.Class1")
	      MyEventObj.CallMeBack
	      Exit Sub
	  err1:
	      MsgBox "Error: " & Err.Number & " - " & Err.Description
	         
	  End Sub
	
	  Private Sub Command2_Click()
	      Dim MyObj As DCOMDemoEvents_Svr.Class1
	      
	      On Error GoTo err1
	      
	      Set MyObj = CreateObject("DCOMDemoEvents_Svr.Class1")
	      MsgBox "Server time without events: " & MyObj.ServerTime
	      Exit Sub
	  err1:
	      MsgBox "Error: " & Err.Number & " - " & Err.Description
	      
	  End Sub
	
	  Private Sub MyEventObj_TimeUpdate(sTime As String)
	      MsgBox "Event from Server received. Time=" & sTime
	
	  End Sub
	
	13. On the File menu, select Save As, and then save the project to the client's
	  folder, c:\DCOMDemoEvents\Client.
	
	14. Press the F5 button to run the client in the IDE and test it out. Be aware
	  that this test is local to the development computer at this point. It is
	  running the local ActiveX EXE Server.
	
	15. On the File menu, select Make DCOMDemoEvents_Cli to compile the client, and
	  then close Visual Basic.
	
	Package the Server 
	------------------
	
	Use the Package and Deployment Wizard to package your server for distribution as
	usual. The server is instantiated by a remote client using DCOM. While creating
	the package for your server, you get a dialog box asking you if this server will
	be used as a Remote Automation server and if you want to include support files
	for this purpose. Just click NO because DCOM is not Remote Automation. Remote
	Automation is an older technology which was replaced by DCOM.
	
	Package the Client
	------------------
	
	When you package the client, there are some specific steps that need to be taken,
	considering that the server does not run on the same computer as the client. The
	changes made to the client's package assure that only the type library (.tlb
	file) is installed and some additional registry entries are included instead of
	the server's executable on the client's computer. You do not need the server's
	executable installed in the client's computer because it is not going to run
	there.
	
	Package the client following these steps:
	
	1. Start the Package and Deployment Wizard, and then select the Client's
	  project. Click the Package button.
	
	2. In the Package Type dialog box, select Standard Setup Package, and then click
	  Next.
	
	3. In the Package Folder dialog box, select the folder where the package is
	  stored, and then click Next. In this case, it is
	  c:\DCOMDemoEvents\Client\Package.
	
	  NOTE: You may get a dialog box saying that there is no dependency information
	  for your server. Click OK because your server doesn't have any dependencies.
	
	  You should now be in the Included Files dialog box.
	
	  Deselect the server's executable file, DCOMDemoEvents_Svr.exe. You do not want
	  to distribute the server's executable.
	
	4. Click the Add button, and change the Files of Type combo box to Remote Server
	  Files (*.vbr).
	
	5. Point to the folder where you have your Server's project, in this case,
	  c:\DCOMDemoEvents\Server, and then select the related VBR file
	  DCOMDemoEvents_Svr.VBR.
	
	6. Click Open and the Add File dialog box closes. Note that two files are
	  included, DCOMDemoEvents_Svr.VBR and DCOMDemoEvents_Svr.TLB. Click Next.
	
	7. In the Remote Servers dialog box, define the name of the computer (Net
	  Address) where the server will be running.
	
	  Usually you keep this field blank because you may not know in advance where
	  the server is installed. If you keep it blank, you are prompted for it when
	  you install the client. For this example, keep it blank.
	
	  Click Next to proceed. You can now proceed with the standard procedures for
	  Package and Deployment Wizard. In our example, click Next to all remaining
	  dialog boxes.
	
	Install the Server
	------------------
	
	Install the server on the computer on which you would like to run it, using the
	distribution package you created earlier. If you want to use your development
	computer to run the server, you don't need to install it because Visual Basic
	makes the registration for you when it compiles the server.
	
	Install the Client
	------------------
	
	Install the Client on the computer on which you would like to run it, using the
	distribution package you created earlier. Because this client uses a DCOM server
	and you left the actual location of the server blank when you created the
	distribution package, you now need to provide this location. When Setup prompts
	you for this location, provide the name of the computer where you installed the
	server.
	
	Set the Server's Security
	-------------------------
	
	If you installed the server on a Microsoft Windows NT or Microsoft Windows 2000
	computer, you need to configure security for it. Do this by using DCOMCNFG, as
	shown in the following steps, which assume that both client and server computers
	are part of a domain, and the user logged on to the client computer is logged on
	as a domain user. The suggested settings are just one possible configuration.
	They are very generic and give wide access to the server. Remember that this is
	just an example. When you deploy your real applications, and security is a
	concern for your environment, you should select more restrictive options. Also,
	if the computer you are using to test this example server is used to run other
	servers, make a note of the current settings before you make the following
	changes, and return to the original settings as soon as you are done with your
	tests.
	
	1. On the server computer, click the Start button, and then select Run. In the
	  Run dialog box, type "DCOMCNFG" (without the quotation marks), and then click
	  OK. You need to have Administrator rights to be able to run DCOMCNFG.
	
	2. Select the Default Properties tab, and verify that Enable Distributed COM on
	  this computer is checked.
	
	3. Set the Default Authentication Level to Connect, and set the Default
	  Impersonation Level to Identify.
	
	4. Select the Default Security tab.
	
	5. Click the Edit Default button in the Default Access Permissions panel.
	
	6. Verify that Everyone and System are included in the list with Allow Access
	  rights. If they are not, you can use the Add button to add them to the list.
	  Click OK when the list is complete.
	
	7. Click the Edit Default button in the Default Launch Permissions panel.
	
	8. Verify that Everyone and System are included in the list with Allow Launch
	  permissions. If they are not, use the Add button to add them to the list.
	  Click OK when the list is complete.
	
	9. Select the Applications tab, highlight your server, DCOMDemo_Svr.Class1, and
	  then click the Properties button.
	
	10. Select the General tab, set the Authentication Level to Default, and then
	  select the Location tab. The only option checked should be Run application
	  on this computer.
	
	11. Select the Security tab and verify that the Use default access permissions
	  and the Use default launch permissions options are checked.
	
	12. Select the Identity tab, check The launching user option, click OK to close
	  the Server's Properties dialog box, and then click OK again to close
	  DCOMCNFG.
	
	As you can see, the test server uses all of the default settings. When deploying
	your own servers, you should define settings specific to your application. All
	custom settings take precedence over the default ones.
	
	You are now ready to test your server. On the client computer, launch the client,
	and then click the Run button. You should see a message box indicating the
	server's time. If you are unable to test this sample successfully, please see
	the troubleshooting article, Q269330, listed in the "References" section.
	
	REFERENCES
	==========
	
	For additional information regarding DCOM client/server applications, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q266717 HOWTO: Create a DCOM Client/Server Application by Using Visual Basic
	
	  Q268550 HOWTO: Use DCOMCNFG for a Visual Basic DCOM Client/Server Application
	
	  Q182248 HOWTO: Use DCOMCNFG (DCOMCNFG.EXE) with Windows 95 and Windows 98
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words: DCOMDemoEvents_Svr
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
