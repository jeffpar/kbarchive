---
layout: page
title: "Q199873: PRB: Can't Remove Controls from the Controls Toolbar in VC++"
permalink: kb/199/Q199873/
---

## Q199873: PRB: Can't Remove Controls from the Controls Toolbar in VC++

	Article: Q199873
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbEditor kbide kbVC500bug kbVC600bug kbGrpDSTools
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add an ActiveX control to your resources in Visual C++, it appears in
	the Controls Toolbar of the resource editor. The resource editor does not
	provide any method to remove the control if it is no longer needed.
	
	CAUSE
	=====
	
	The reference to the control is stored in the workspace (.dsw) file. There are
	no provisions in the resource editor for removing this reference once it is
	stored.
	
	RESOLUTION
	==========
	
	Steps to Remove the Control
	---------------------------
	
	1. Rename the project's associated workspace file (.dsw). A workspace may
	  contain one or more projects. By renaming it, you lose the dependency
	  information between your projects.
	
	2. Open the project file (.dsp). (If you have multiple projects in a workspace,
	  then you can open any project file.)
	
	A clean .dsw file will automatically be created. All added controls will be
	removed from the control toolbar.
	NOTE: Any subprojects will have to be added back again to the workspace, and
	their dependencies will need to be reconstructed.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an MFC AppWizard (.exe) application with default settings.
	
	2. On the Project menu, point to Add To Project, and then click Components and
	  Controls.
	
	3. In the Components and Controls Gallery dialog box, double-click Registered
	  ActiveX Controls.
	
	4. Select any one of the controls (for example, the Label object).
	
	5. Click Insert, and follow the instructions for adding the control.
	
	6. Click Close.
	
	7. In the Workspace pane, click the Resource View tab.
	
	8. Expand the project's resources, and then double-click the Dialog node.
	
	9. Double-click IDD_ABOUTBOX. The About dialog box and the Controls toolbar
	  should appear.
	
	Note that the component added earlier is now displayed in the toolbar.
	To remove a component from the project, a user can manually delete the source
	files, but he or she cannot clean up this toolbar.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : _IK920 kbEditor kbide kbVC500bug kbVC600bug kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
