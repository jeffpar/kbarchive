---
layout: page
title: "Q131204: PRB: Wrong Project Selection Causes LNK2001 on _WinMain@16"
permalink: /kb/131/Q131204/
---

## Q131204: PRB: Wrong Project Selection Causes LNK2001 on _WinMain@16

{% raw %}

	Article: Q131204
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The linker generates the following error message when a Console Application
	project is built as an Application project:
	
	  LIBC.lib(wincrt0.obj):error LNK2001:unresolved external symbol "_WinMain@16"
	
	CAUSE
	=====
	
	A project of type Application is a Windows-based application, so it requires the
	WinMain function as the entry point.
	
	RESOLUTION
	==========
	
	Create a new project and select Console Application as the Project Type, or add
	a project to the existing Project.
	
	To Create a new target for an existing project with Visual C++ 2.x, from the
	Project menu, choose Targets, and select New. Enter a Target Name, and choose
	Win32 Console Application as the type. To build the new target, move to the
	project dialog box, change the Target to your new Target name, and rebuild.
	
	To add a project with Visual C++ 5.0 or 6.0, select Project, then Add to Project,
	and select New. Click on the Projects tab and select Win32 Console Application.
	
	To create a new project in Visual C++ .NET, see the online help topic on
	"Creating Win32 Projects".
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To reproduce the behavior, select Application as the Project Type, and use the
	following sample code.
	
	Sample Code to Demonstrate Behavior
	-----------------------------------
	
	  /* Compile options needed: None
	  */ 
	
	  #include <iostream.h>
	
	  void main(void)
	  {
	     cout << "Hello " ;
	  }
	
	Additional query words: 9.00 9.10 9.0 9.1
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
