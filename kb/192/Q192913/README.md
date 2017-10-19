---
layout: page
title: "Q192913: PRB: EnableModeless Causes Events to Fire Late"
permalink: /kb/192/Q192913/
---

## Q192913: PRB: EnableModeless Causes Events to Fire Late

	Article: Q192913
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0,1.1,2.0,97; WINNT:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbVC500bug kbVCObj kbVisID100bug kbVJ100bug kbVJ110bug kbVS97 kbDevStudio
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual InterDev, version 1.0 
	- Microsoft Visual J++, versions 1.0, 1.1, 2.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While automating the Developer Studio environment (MSDev.exe), events do not
	occur when expected. For example, the BeforeBuildStart event might not fire
	before the start of a build.
	
	CAUSE
	=====
	
	Developer Studio is visible and the Application.EnableModeless property is set
	to False.
	
	RESOLUTION
	==========
	
	If Application.EnableModeless must be False, set Application.Visible to False to
	receive events at the time they actually happen. Otherwise, keep
	Application.EnableModeless set to True.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The purpose of EnableModeless is to minimize user interface messages from
	Developer Studio while a macro or add-in is displaying a modal dialog box.
	EnableModeless should be set to False before invoking a modal dialog box, and
	set to True after dismissing the dialog box. The object model stores events
	while EnableModeless is False, and fires them when it is set to True. Under
	normal conditions, EnableModeless should be set to True.
	
	The following Visual Basic subroutine demonstrates the problem. Call
	CheckBuildEvents with the name of a workspace that includes at least one
	buildable project. Before you can run the sample code, you must set a reference
	to the Visual Studio object model.
	
	1. From the Project menu, click References.
	
	  For Visual Studio 97, click:
	
	   - Visual Studio 97 Shared Objects
	
	  -and-
	
	   - Visual Studio 97 Project System
	
	  For Visual Studio 6.0, click:
	
	   - Visual C++ Shared Objects
	
	  -and-
	
	   - Visual C++ Project System
	
	2. Click OK.
	
	Sample Code
	-----------
	
	     Private WithEvents DevSt As DSSharedObjects.Application
	     Private Sub CheckBuildEvents(strWksp As String)
	        Dim cfg As DSProjectSystem.Configuration
	
	        ' Create a new instance of DevStudio.
	        Set DevSt = New DSSharedObjects.Application
	        DevSt.Visible = True   ' Developer Studio must be invisible for
	                               ' EnableModeless.
	        DevSt.EnableModeless (False)
	        Debug.Print "Opening Workspace "; strWksp
	        DevSt.Documents.Open strWksp
	        cfg = DevSt.ActiveProject.Configurations.Item(1)
	        Debug.Print "Starting build: "; cfg
	        DevSt.RebuildAll cfg
	        Debug.Print "Closing workspace "; strWksp
	        DevSt.ExecuteCommand "WorkspaceClose"
	        DevSt.EnableModeless (True)   ' Events occur here if DevStudio is
	                                      ' visible.
	        DevSt.Quit
	     End Sub
	     Private Sub DevSt_BeforeBuildStart()
	        Debug.Print ">BeforeBuildStart"
	     End Sub
	     Private Sub DevSt_BuildFinish(ByVal nErr As Long, ByVal nWrn As Long)
	        Debug.Print ">BuildFinish: nErr ="; nErr; "; nWrn ="; nWrn
	     End Sub
	
	For example, if you have a workspace named MyWksp.dsw with one project named
	MyProj, the following Visual Basic subroutine call
	
	     CheckBuildEvents "MyWksp.dsw"
	
	produces the following output in the debug window:
	
	  Opening Workspace MyWksp.dsw
	  Starting build: MyProj - Win32 Release
	  Closing Workspace MyWksp.dsw
	  >BeforeBuildStart
	  >BuildFinish: nErr = 0; nWrn = 0
	
	Now modify the subroutine, changing the following line
	
	     DevSt.Visible = True ' Developer Studio must be invisible for
	                          ' EnableModeless.
	
	to the following:
	
	     DevSt.Visible = False
	
	Rerunning the test correctly produces the following output:
	
	  Opening Workspace MyWksp.dsw
	
	  Starting build: MyProj - Win32 Release
	  >BeforeBuildStart
	  >BuildFinish: nErr = 0; nWrn = 0
	  Closing Workspace MyWksp.dsw
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q192912 BUG: MSDev Doesn't Close When COM Reference Is Zero
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbVC500bug kbVCObj kbVisID100bug kbVJ100bug kbVJ110bug kbVS97 kbDevStudio kbVJ200bug kbGrpDSTools 
	Technology        : kbVCsearch kbVSsearch kbVJsearch kbVisIDsearch kbAudDeveloper kbVC32bitSearch kbVisID100 kbVJ100 kbVJ110 kbVS97 kbVCPE500 kbVCPE600 kbVCEE500 kbVCEE600 kbVCLE600
	Version           : WINDOWS:1.0,1.1,2.0,97; WINNT:5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
