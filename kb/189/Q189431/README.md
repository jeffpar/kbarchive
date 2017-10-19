---
layout: page
title: "Q189431: DOC: Setting ActiveProject and ActiveConfiguration Properties"
permalink: /kb/189/Q189431/
---

## Q189431: DOC: Setting ActiveProject and ActiveConfiguration Properties

	Article: Q189431
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ documentation shows an incorrect syntax for setting the
	ActiveConfiguration and ActiveProject properties. For example, the following
	macro written in Visual Basic Scripting Edition:
	
	     ActiveProject = "MyProjectName"
	
	causes the following run-time error:
	
	  Unable to write read-only property.
	
	This error gives the impression that the property is read-only which is not the
	case. Use the following syntax instead:
	
	     Set ActiveProject = Projects("MyProjectName")
	
	MORE INFORMATION
	================
	
	The ActiveProject property
	--------------------------
	
	The ActiveProject Property topic in the Visual C++ documentation (see REFERENCES
	section) incorrectly shows the syntax for setting the ActiveProject property. It
	states:
	
	     object.ActiveProject [=string]
	
	where object is an expression that evaluates to an Application object and string
	is the name of the project minus any file extension. When you access the
	ActiveProject property of the Application object, you can omit object because
	the name of the Application object is implied when you access its properties and
	methods.
	
	If you use the following VBScript macro:
	
	     ActiveProject = "MyProjectName"
	
	the following error occurs:
	
	  Unable to write read-only property.
	
	This error gives the impression that the property is read-only which is not the
	case. Use the following syntax for setting the ActiveProject property instead:
	
	     Set ActiveProject = Projects(string)
	
	where string is the name of a project contained in the current workspace minus
	any file extension. It is case sensitive.
	
	The following is an alternative syntax:
	
	     Set ActiveProject = Projects.Item(n)
	
	where n is an integer from 1 to the total number of projects in the current
	workspace.
	
	Another alternative is:
	
	     Set ActiveProject = prj
	
	where prj is a variable already set to a project object.
	
	The ActiveConfiguration property
	--------------------------------
	
	The ActiveConfiguration Property topic in the Visual C++ documentation (see
	REFERENCES section) incorrectly shows the syntax for setting the
	ActiveConfiguration property. It states:
	
	     object.ActiveConfiguration [=string]
	
	where object is an expression that evaluates to an Application object and string
	is the name of a valid configuration in the active project. When you access the
	ActiveConfiguration property of the Application object, you can omit object
	because the name of the Application object is implied when you access its
	properties and methods.
	
	If you use the following VBScript macro:
	
	     ActiveConfiguration = "MyConfiguration"
	
	the following error occurs:
	
	  Unable to write read-only property.
	
	This error gives the impression that the property is read-only which is not the
	case. Use the following syntax for setting the ActiveConfiguration property:
	
	     Set ActiveConfiguration = ActiveProject.Configurations(n)
	
	where n is an integer from 1 to the total number of configurations in the active
	project.
	
	An alternative syntax is:
	
	     Set ActiveConfiguration = ActiveProject.Configurations.Item(n)
	
	where n is an integer from 1 to the total number of configurations in the active
	project.
	
	Another alternative is:
	
	     Set ActiveConfiguration = config
	
	where config is a variable already set to a configuration object.
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Developer Studio Environment User's Guide; Automating
	Tasks in Developer Studio; Developer Studio Objects; Reference: Developer Studio
	Objects; Properties; ActiveProject Property
	
	  URL mk:@ivt:istudio/F3/D10/S1BACE.htm
	
	Visual C++ Books Online: Developer Studio Environment User's Guide; Automating
	Tasks in Developer Studio; Developer Studio Objects; Reference: Developer Studio
	Objects; Properties; ActiveConfiguration Property
	
	  URL mk:@ivt:dsug/F22/D24/S11300.htm
	
	Additional query words: kbAutomation kbIDE kbVC500
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
