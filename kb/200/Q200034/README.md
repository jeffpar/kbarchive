---
layout: page
title: "Q200034: HOWTO: Debug a Visual Basic Out-of-Process Server with Visual C+"
permalink: kb/200/Q200034/
---

## Q200034: HOWTO: Debug a Visual Basic Out-of-Process Server with Visual C+

	Article: Q200034
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Debugging out-of-process servers by using the Microsoft Visual C++ debugger
	requires a different set up than debugging in-process servers (DLLs and OCXs).
	This article demonstrates how to debug a Visual Basic ActiveX out-of-process
	server component by using the Microsoft Visual C++ debugger.
	
	For additional information on how to debug Visual Basic in-process servers, as
	well as standard executables, by using the Visual C++ debugger, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q166275 HOWTO: Debug a Native Code Visual Basic Component in VC++
	
	MORE INFORMATION
	================
	
	The first two of the following four sections describe how the Visual Basic
	ActiveX server application (activex.exe) and the Visual Basic client application
	(standard.exe) can be built. The third section provides the steps for debugging
	both the ActiveX server application and the client application through the
	Visual C++ debugger. The final section provides more information on the command
	line options for launching an out-of-process server.
	
	Creating the Demo Server
	------------------------
	
	1. Start Visual Basic, create a new ActiveX EXE project, and then rename the
	  project to DemoSvr.
	
	2. Add the following code to the default class (Class1):
	
	  Dim strProp As String
	  Public Property Let StringProp(s As String)
	      strProp = s
	  End Property
	  Public Property Get StringProp() As String
	     StringProp = strProp
	  End Property
	
	3. On the Project menu, select DemoSvr Properties, and then switch to the
	  Compile tab. Make sure that Compile to Native Code, Create Symbolic Debug
	  Info, and No Optimization are selected.
	
	4. Save and compile the project to create DemoSvr.exe.
	
	Creating the Demo Client
	------------------------
	
	1. Start Visual Basic, create a Standard EXE project, and then rename the
	  project to DemoCli.
	
	2. On the Project menu, select References.
	
	3. Find and check DemoSvr, and make sure that it is pointing to the DemoSvr.exe
	  file that you just built. Click OK.
	
	4. Add a CommandButton control to the default form (Form1).
	
	5. Add the following code to the module of Form1:
	
	  Private Sub Command1_Click()
	      Dim objServer As New DemoSvr.Class1
	      objServer.StringProp = "Test"
	      Command1.Caption = objServer.StringProp
	      Set objServer = Nothing
	  End Sub
	
	6. If you want to debug the client also, set the compile options for DemoCli to
	  be the same as those of the DemoSvr. To do this, on the Project menu, select
	  DemoCli Properties, and then switch to the Compile tab. Make sure that
	  Compile to Native Code, Create Symbolic Debug Info, and No Optimization are
	  selected.
	
	7. Save and compile the project to create DemoCli.exe.
	
	Debugging Setup
	---------------
	
	1. Start Visual C++ (msdev.exe).
	
	2. Open DemoSvr.exe as a workspace or a file (Open as Auto).
	
	3. Open the Class1.cls file and place breakpoints on the lines pointed to by
	  arrows shown as follows. (Place the cursor on the line and press the F9 key.)
	
	        Public Property Let StringProp(s As String)
	  ==>     strProp = s
	        End Property
	        Public Property Get StringProp() As String
	  ==>      StringProp = strProp
	        End Property
	
	4. On the Project menu, select Settings.
	
	5. On the Debug tab under Program arguments, type "/embedding" (without the
	  quotation marks).
	
	  NOTE: For more information on the /embedding argument, see the "Command Line
	  Arguments for Local Servers" section.
	
	6. Press the F5 key to start the server. At this point, DemoSvr.exe would be
	  loaded and waiting for any potential client connections.
	
	7. Start the DemoCli.exe and click Command1 to start debugging. Note that you
	  hit the strProp = s breakpoint.
	
	Alternatively, you can start the server first and then attach the debugger to it
	as shown below:
	
	1. Start DemoSvr.exe from the command line by typing "demosvr /embedding"
	  (without the quotation marks).
	
	  Once this command has run, you can see that DemoSvr.exe is loaded in the Task
	  Manager even without any client process running.
	
	2. Start Visual C++ (msdev.exe).
	
	3. Open Class1.cls and place your breakpoints as before.
	
	4. On the Build menu, select Start Debug, and then choose Attach to Process.
	
	5. Select DemoSvr from the process list.
	
	6. Run DemoCli.exe as shown.
	
	If you want to debug the client as well, you need to start another instance of
	Visual C++ (msdev.exe) as follows:
	
	1. Start Visual C++ and load the server and class module as shown in the
	  preceding step. Place your breakpoints.
	
	2. Start a new instance of Visual C++ (msdev.exe).
	
	3. Open DemoCli.exe as a workspace.
	
	4. Open Form1.frm, and then place breakpoints at desired locations.
	
	5. Press the F5 key to start the client. Use the F10 key to step over a line and
	  the F11 key to step into a call.
	
	Command Line Arguments for Local Servers
	----------------------------------------
	
	There are three command line options for launching a out-of-process server:
	
	- /regserver - tells the server to register itself and its associated type
	  library.
	
	- /unregserver - tells the server to unregister itself and its associated type
	  library entries.
	
	- /embedding - keeps the out-of-process server in memory waiting for the first
	  client to connect. In fact, COM services passes this argument to a
	  out-of-process server when it attempts to launch it.
	
	REFERENCES
	==========
	
	For additional information about debugging Visual Basic ActiveX components in
	VC++, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q166275 HOWTO: Debug a Native Code Visual Basic Component in VC++
	
	You may also want to look at Chapter 5 in "Inside OLE" by Kraig Brokschmidt, from
	Microsoft Press.
	
	Additional query words: DemoSvr msdev Class1
	
	======================================================================
	Keywords          : kbActiveX kbVBp kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
