---
layout: page
title: "Q242867: PRB: Compile Error when Declaring MSVSAEventSourceInstaller"
permalink: /kb/242/Q242867/
---

## Q242867: PRB: Compile Error when Declaring MSVSAEventSourceInstaller

{% raw %}

	Article: Q242867
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbEEdition kbVBp600 kbVisAnalyzer kbVS600 kbDSupport kbGrpDSTools kbVSVisAnalyzer
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Studio, Enterprise Edition 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a Visual Basic project that accesses the Visual Studio Analyzer
	programming interfaces, the following error may occur:
	
	  Compiler error:
	  Expected user-defined type, not project
	
	CAUSE
	=====
	
	The project contains references to both the automatable (Visual Basic and Visual
	J++) and non-automatable (Visual C++) interfaces.
	
	RESOLUTION
	==========
	
	Remove the references to the non-automatable interfaces from Project References.
	
	MORE INFORMATION
	================
	
	To access the Visual Studio Analyzer programming interfaces from within Visual
	Basic, you need to add two type library references to your Visual Basic project.
	Once you add the type library references, you can access the methods within the
	programming interfaces using the Object Browser.
	
	The following libraries are provided for use with Visual Basic:
	
	- MSVSA Automatable Event Source Installer 1.0 Type Library
	
	- MSVSA Automatable Inproc Event Creator 1.0 Type Library
	
	The following libraries are provided for use with Visual C++ and should not be
	referenced in a Visual Basic project:
	
	- MSVSA Event Source Installer 1.0 Type Library
	
	- MSVSA Inproc Event Creator 1.0 Type Library
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic project of type ActiveX DLL.
	
	2. Add references for both the MSVSA Automatable Event Source Installer 1.0 Type
	  Library and the MSVSA Event Source Installer 1.0 Type Library.
	
	3. Declare an object as follows:
	
	  Dim mESI As MSVSAEventSourceInstaller
	
	4. Save the project.
	
	5. Make the DLL.
	
	NOTE: The same error occurs for all Visual Basic project types.
	
	REFERENCES
	==========
	
	For more information, see the following in the Microsoft Developer Network
	(MSDN) Library (http://msdn.microsoft.com/library):
	
	  Visual Studio 6.0 Documentation; Visual Studio Documentation; Component,
	  Design and Analysis Tools; Visual Studio Analyzer Reference; Visual Studio
	  Analyzer Concepts; Extending Visual Studio Analyzer; Guidelines for
	  Customizing Your Application
	
	  Visual Studio 6.0 Documentation; Visual Studio Documentation; Component,
	  Design and Analysis Tools; Visual Studio Analyzer Reference; Visual Studio
	  Analyzer Language Reference
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEEdition kbVBp600 kbVisAnalyzer kbVS600 kbDSupport kbGrpDSTools kbVSVisAnalyzer 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVS600 kbVS600Search
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
