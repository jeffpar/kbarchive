---
layout: page
title: "Q141932: HOWTO: Create a Basic Add-In Using Visual Basic 4.0"
permalink: /kb/141/Q141932/
---

## Q141932: HOWTO: Create a Basic Add-In Using Visual Basic 4.0

	Article: Q141932
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbAddIn kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create the basic framework of a working Visual
	Basic 4.0 add-in.
	
	MORE INFORMATION
	================
	
	Creating a Minimal Add-in
	-------------------------
	
	At its minimum, a Visual Basic add-in is an OLE automation server that provides
	an object with both ConnectAddin and DisconnectAddin methods. The server can be
	written in any language that can create OLE automation servers.
	
	The steps to create the minimal add-in using Visual Basic 4.0 are documented in
	this article. Then, this article shows you how to make some basic enhancements
	that the majority of add-ins will need.
	
	1. Start Project:
	
	  The first step in creating the minimal add-in is to start a new project. The
	  minimal add-in does not need the default form; so, remove the form from the
	  project.
	
	2. Create Sub Main:
	
	  The minimal add-in needs a starting point. So, add a new standard (.BAS)
	  module to the project. Then, add an empty Sub Main procedure to the module:
	
	     Sub Main()
	
	     End Sub
	
	3. Create a Class:
	
	  The heart of the add-in is the public-creatable OLE automation object. The
	  following are the steps for creating this object:
	
	  a. Add a new Class (.cls) module to the project.
	
	  b. Set the following properties on the new class:
	
	     Property                Value
	     --------------------------------------------------------------
	     Instancing              2 - Creatable MultiUse
	     Name                    MinimalAddIn
	     Public                  True
	 
	
	4. Expose ConnectAddIn and DisconnectAddIn Methods:
	
	  When the automation manager loads an add-in, it looks for and calls the
	  ConnectAddin method. The add-in manager passes an instance of the Application
	  object to the ConnectAddin method. The add-in can then use this object for
	  automating the Visual Basic design environment. In the minimal add-in, show a
	  message in this method of the class with the following code:
	
	     Public Sub ConnectAddIn(VBInstance As Object)
	        MsgBox "ConnectAddIn"
	     End Sub
	
	  Similarly, the add-in manager looks for and calls the DisconnectAddIn method
	  when unloading an add-in. In the minimal add-in, show a message in this
	  method of the class with the following code:
	
	     Public Sub DisconnectAddIn()
	        MsgBox "DisconnectAddIn"
	     End Sub
	
	5. Set the Project Options:
	
	  At this point you have added all the code necessary for the minimal add-in.
	  However, you need to set the project options to expose this project as an OLE
	  automation server. Set the following in the Tools/Options dialog box:
	
	  Option                  Value
	  -----------------------------------------------------------
	  Start up Form           Sub Main
	  Project Name            Example
	  Start Mode              OLE Server
	  Error Trapping          Break in Class Module
	
	6. Make Add-In available to Add-In Manager:
	
	  Now you need to make the minimal add-in available to the Add-In manager. The
	  add-in looks in Vb.ini under either the Add-Ins16 or Add-Ins32 section
	  depending on whether you are running the 16-bit or 32-bit versions of Visual
	  Basic. The add-in manager looks for available add-ins in the form of
	  ProgID=n, where ProgID is the OLE Automation ProgID for your class and n is 0
	  or 1. 0 means the add-in is available but Visual Basic doesn't have it
	  loaded. 1 means that the add-in is or should be loaded. For the minimal add-
	  in in 32-bit Visual Basic, you need to add the following to the Vb.ini:
	
	     [Add-Ins32]
	     Example.MinimalAddIn=0
	
	7. Testing the Add-In:
	
	  That is it for the minimal add-in. Now you can test it. Go ahead and start up
	  the add-in by running the project. To test it you must start up a second
	  instance of Visual Basic. In the second instance, bring up the Add-In Manager
	  dialog box. There should be a check box with ProgID Example.MinimalAddin next
	  to it. Check the box and click OK. The Add-In Manager will call the
	  ConnectAddin method of the minimal add-in and the add- in will display the
	  message box "ConnectAddIn."
	
	  Now go back to the Add-In Manager in the second instance of Visual Basic.
	  Clear Example.MinimalAddin and click OK. The Add-In Manager will call the
	  DisconnectAddIn method and the add-in will display the message box
	  "DisconnectAddIn."
	
	Expanding the Minimal Add-in
	----------------------------
	
	The minimal add-in demonstrated the absolute minimum requirements for creating an
	add-in. However, there are some basic things that most add-ins need to do. In
	this section you will expand upon the minimal add-in to create a basic add-in
	that automatically adds itself to Vb.ini and adds a menu to the Visual Basic
	Add-In menu.
	
	1. Reference VBIDE:
	
	  In the minimal add-in you did not use the Visual Basic IDE add-in object
	  model. Any add-in that needs to program the IDE must add a reference to the
	  "Microsoft Visual Basic 4.0 Development Environment" object library. Almost
	  all add-ins need to add a reference to this library. For the basic add-in, we
	  need to use the library to declare variables and to add a menu. So, add a
	  reference to this library in the Tools/References dialog box.
	
	2. Change the Class Name:
	
	  To help distinguish the basic add-in from the minimal add-in, change the Name
	  property of the class module to BasicAddIn.
	
	3. Store the Instance of the Application Object:
	
	  Most add-ins need to store the instance of the Application object that is
	  passed in through the ConnectAddIn method so that it can be used later to
	  automate the IDE. For the basic add-in, this means that you need to declare
	  an object in the class to store the instance. To do this you need to add the
	  following to the general declarations section of the class:
	
	     Private ThisInstance As VBIDE.Application
	
	  When the ConnectAddIn method is called, the ThisInstance variable needs to be
	  set to the instance passed in. To do this, change the ConnectAddIn method to
	  the following:
	
	     Public Sub ConnectAddIn(VBInstance As Object)
	        Set ThisInstance = VBInstance
	     End Sub
	
	4. Adding and Removing a MenuLine:
	
	  The majority of add-ins also need to add a menu item to the Add-In menu so
	  that users can trigger some functionality in their add-in. In the basic add-
	  in, you simply show a message if the user clicks the menu item. Before adding
	  the code to create the menu, you need to add two variables to the general
	  declarations section of the class:
	
	     Private AddInMenuLine As VBIDE.MenuLine
	     Private hMenuLine As Long
	
	  The AddInMenuLine object is used to store a reference to the newly created
	  menu and the hMenuLine is used to store a handle that will be discussed
	  shortly.
	
	  Now you can add the code necessary for adding the MenuLine to the ConnectAddIn
	  method:
	
	     Set AddInMenuLine = ThisInstance.AddInMenu.MenuItems.Add("Basic Add-In")
	
	  This adds a MenuLine to the Add-In menu with the caption "Basic Add-In" and
	  sets a reference to the object.
	
	  After adding the MenuLine you need to connect the MenuLine to an event
	  handler. In this case the AfterClick event of the MenuLine object is what you
	  want to handle. First you need to create an event handler for the AfterClick
	  in the class. The AfterClick event handler should look like the following:
	
	     Public Sub AfterClick()
	        MsgBox "Basic Add-In Example"
	     End Sub
	
	  Now that you have an event handler you need to add code to the ConnectAddIn
	  method that connects the MenuLine to the class. To do this you need to call
	  the ConnectEvents method of the MenuLine object. This method returns a handle
	  that we will use later to disconnect the event handler. Here is the code for
	  connecting the events to the class:
	
	     hMenuLine = AddInMenuLine.ConnectEvents(Me)
	
	  You also need to add code to the DisconnectAddIn method that disconnects the
	  event handler and removes the MenuLine. The events are disconnected by
	  calling the DisconnectEvents method of the MenuLine object and the MenuLine
	  is removed by calling the Remove method of the MenuItems collection:
	
	     AddInMenuLine.DisconnectEvents hMenuLine
	     ThisInstance.AddInMenu.MenuItems.Remove AddInMenuLine
	
	  At this point, the entire class module should look something like the
	  following:
	
	    Option Explicit
	
	    Private ThisInstance As VBIDE.Application
	    Private AddInMenuLine As VBIDE.MenuLine
	    Private hMenuLine As Long
	
	    Public Sub ConnectAddIn(VBInstance As Object)
	       Set ThisInstance = VBInstance
	        Set AddInMenuLine = ThisInstance.AddInMenu.MenuItems.Add("Basic Add-_ 
	                                                               In")
	       hMenuLine = AddInMenuLine.ConnectEvents(Me)
	    End Sub
	
	    Public Sub DisconnectAddIn(Mode As Integer)
	       AddInMenuLine.DisconnectEvents hMenuLine
	       ThisInstance.AddInMenu.MenuItems.Remove AddInMenuLine
	    End Sub
	
	    Public Sub AfterClick()
	       MsgBox "Basic Add-In Example"
	    End Sub
	
	5. Automatically Adding Add-In to Vb.ini:
	
	  In the minimal add-in, you added the add-in to the Vb.ini by hand. However, it
	  is much easier for the user to install the add-in if it does this
	  automatically. To do this requires the use of GetPrivateProfileString to
	  check if it has already been added and WritePrivateProfileString to add it if
	  it isn't there. A good place to put this code is in the Sub Main for EXE
	  servers. However, for DLL servers, the Sub Main is not executed so this does
	  not work. If you are creating a DLL server you will have to put this code
	  somewhere else, such as in your setup program:
	
	     #If Win16 Then
	        Declare Function WritePrivateProfileString Lib "KERNEL" ( _
	           ByVal AppName As String, ByVal KeyName As String, _
	           ByVal keydefault As String, ByVal FileName As String) As Integer
	        Declare Function GetPrivateProfileString Lib "KERNEL" ( _
	           ByVal AppName As String, ByVal KeyName As String, _
	           ByVal keydefault As String, ByVal ReturnString As String, _
	           ByVal NumBytes As Integer, ByVal FileName As String) As Integer
	     #ElseIf Win32 Then
	        Declare Function WritePrivateProfileString Lib "KERNEL32" _
	           Alias "WritePrivateProfileStringA" (ByVal AppName As String, _
	           ByVal KeyName As String, ByVal keydefault As String, _
	           ByVal FileName As String) As Long
	        Declare Function GetPrivateProfileString Lib "KERNEL32" _
	           Alias "GetPrivateProfileStringA" (ByVal AppName As String, _
	           ByVal KeyName As String, ByVal keydefault As String, _
	           ByVal ReturnString As String, ByVal NumBytes As Long, _
	           ByVal FileName As String) As Long
	     #End If
	
	     Sub Main()
	        #If Win16 Then
	           Const Section = "Add-Ins16"
	        #ElseIf Win32 Then
	           Const Section = "Add-Ins32"
	        #End If
	        Const BufSize = 255
	
	        Dim Ret As Variant
	        Dim RetStr As String
	
	        'Check to see if the entry is already in the Vb.ini file.
	        'Add if not.
	
	        RetStr = Space(BufSize)
	        Ret = GetPrivateProfileString(Section, "Example.BasicAddin", _
	           "NotFound", RetStr, BufSize, "VB.INI")
	        RetStr = Left(RetStr, Ret)
	        If RetStr = "NotFound" Then
	           WritePrivateProfileString Section, "Example.BasicAddin", _
	              "0", "VB.INI"
	        End If
	     End Sub
	
	6. Testing the Basic Add-In:
	
	  At this point the basic Add-in has been created. To test it, run the project.
	
	  Then, start a second instance of Visual Basic. From the second instance, go to
	  the Add-In manager and check Example.BasicAddIn. Then go to the Visual Basic
	  Add-In menu. You should see a newly added menu item under the Visual Basic
	  Add-In menu. Click the menu and the message box should be displayed.
	
	Additional query words: addin addins
	
	======================================================================
	Keywords          : kbAddIn kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
