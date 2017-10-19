---
layout: page
title: "Q181504: PRB: Developer Studio Macro's ExecuteCommand Requires Quotes"
permalink: /kb/181/Q181504/
---

## Q181504: PRB: Developer Studio Macro's ExecuteCommand Requires Quotes

	Article: Q181504
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbide kbVC kbVC500 kbVC600 kbVS kbFAQ kbGrpDSTools kbvc600faq
	Last Modified: 17-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A VBScript macro ExecuteCommand method does not perform its specified command.
	Instead, it may perform an unexpected command or have no effect at all. Often,
	the macro generates no error messages.
	
	CAUSE
	=====
	
	The ExecuteCommand method takes one parameter--the keyword that Developer Studio
	will attempt to execute. If this keyword is not enclosed in quotation marks, the
	problems above may occur.
	
	RESOLUTION
	==========
	
	Enclose the command keyword following the ExecuteCommand method in quotation
	marks.
	
	If this does not correct the problem, verify that the command is valid:
	
	1. Click Customize on the Tools menu.
	
	2. Click the Keyboard tab.
	
	3. In the drop-down box labeled Category, select All Commands. Make sure that
	  the command appears in the "Commands" list box.
	
	Finally, check to see whether the command would be enabled at the point that the
	macro calls it. For example, the following statement activates the Project
	Settings dialog box:
	
	  ExecuteCommand "ProjectSettings"
	
	However, if there is no active project when the macro executes, that command will
	have no effect.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q165681 INFO: Visual C++ 5.0 Readme, Build Issues
	
	
	MORE INFORMATION
	================
	
	Always use quotation marks around the command keyword of ExecuteCommand.
	Developer Studio's behavior varies otherwise. Some commands, such as "Build",
	work without quotation marks. The "New" command generates a syntax error if it
	is not enclosed in quotation marks. Most commands perform no action at all when
	quotation marks are absent.
	
	The ExecuteCommand method requires a string parameter. This can be a literal
	string or a string variable. For example, the word "New" might be assigned to a
	string variable, such as "MyNewVar". This variable can then be used in place of
	"New" with the same result:
	
	  Dim MyNewVar
	  MyNewVar = "New"
	  ExecuteCommand MyNewVar
	
	REFERENCES
	==========
	
	"ExecuteCommand Method," Visual C++ Online Books
	
	Additional query words: kbdsstools
	
	======================================================================
	Keywords          : kbAutomation kbide kbVC kbVC500 kbVC600 kbVS kbFAQ kbGrpDSTools kbvc600faq 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
