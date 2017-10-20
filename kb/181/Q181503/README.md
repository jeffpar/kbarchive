---
layout: page
title: "Q181503: PRB: Custom AppWizards Can't Make Per-File Settings/Build Steps"
permalink: /kb/181/Q181503/
---

## Q181503: PRB: Custom AppWizards Can't Make Per-File Settings/Build Steps

{% raw %}

	Article: Q181503
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbwizard kbAutomation kbide kbMFC kbVC500 kbGrpDSTools
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom AppWizards can not make per-file settings or per-file custom build steps
	on the projects they generate, such as modifying the compiler settings for one
	.cpp in a project or adding a custom build step to run MIDL on a project's IDL
	file.
	
	STATUS
	======
	
	This behavior is by design.
	
	NOTE: This problem has been addressed in Visual C++ 6.0 by new methods added to
	the Configuration object: AddFileSetting, RemoveFileSetting, and
	AddCustomBuildStepToFile.
	
	MORE INFORMATION
	================
	
	As of Visual C++ 5.0, an automation object model exists that allows COM clients
	to automate and control the Developer Studio shell. Custom AppWizards now have
	an extra override in their CCustomAppWiz-derived class, CustomizeProject, which
	gives the custom AppWizard access to the project settings for the project it is
	generating. Using IConfiguration interfaces from CustomizeProject's
	IBuildProject interface, the custom AppWizard can call AddToolSettings,
	RemoveToolSettings, and AddCustomBuildStep to change various project settings.
	
	Unfortunately, AddToolSettings, RemoveToolSettings, and AddCustomBuildStep
	operate on the entire project only; they cannot make tool settings or create
	custom build steps for a single file. The current Developer Studio object model
	does not support this. Custom build steps for single files must be added by hand
	after the custom AppWizard generates the projects. Settings made with
	AddToolSettings and RemoveToolSettings are applied to all files in the project
	for the specified tool. Custom Build steps added with AddCustomBuildStep run at
	the end of the build process only and cannot be used to generate dependent
	files.
	
	For more information about using CustomizeProject to change the settings of a
	generated project, refer to the Developer Studio documentation on the Developer
	Studio Object Model. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q173483 HOWTO: Create Custom AppWizards that Generate Non-MFC Projects
	
	
	REFERENCES
	==========
	
	DevStudio Object Model documentation: "Object Model, Developer Studio."
	
	Visual C++ 5.0 AppWizard Programming Reference: "Customizing the Generated Custom
	AppWizard Project."
	
	For more information about the new Visual C++ 6.0 Object Model features, see the
	"Object Model" topic in "What's New in Visual C++ 6.0" in the Visual C++ 6.0
	Online Documentation.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAutomation kbide kbMFC kbVC500 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
