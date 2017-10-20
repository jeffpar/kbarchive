---
layout: page
title: "Q192912: PRB: MSDev Doesn't Close When COM Reference Count Is Zero"
permalink: /kb/192/Q192912/
---

## Q192912: PRB: MSDev Doesn't Close When COM Reference Count Is Zero

{% raw %}

	Article: Q192912
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.1,5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbAutomation kbide kbVC500 kbVC600 kbVisID100 kbVJ100 kbVJ110 kbVS97 kbDevStudio kbFAQ
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Studio 97 
	- Microsoft Visual InterDev, version 1.0 
	- Microsoft Visual J++, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a Component Object Model (COM) client has loaded MSDev.exe using the COM
	automation interface, MSDev.exe does not automatically close when its last
	reference is released.
	
	RESOLUTION
	==========
	
	Use Application.Quit method of MSDev.exe to cause it to remove itself from
	memory just before releasing the last reference to it. See the MORE INFORMATION
	section of this article for sample Visual C++ and Visual Basic code.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	MSDev.exe is the Developer Studio shell. In Visual Studio 97 it hosts Visual
	C++, Visual InterDev, Visual J++, and the InfoViewer. In Visual Studio 6.0, it
	only hosts Visual C++. It supports an automation interface that exposes its
	object model. An external application using the object model can access internal
	functions to automate tasks such as building projects, changing their settings,
	modifying text files, and so on.
	
	The automation interface is based on COM technology. Most COM automation objects
	count the number of COM clients referencing them, and automatically terminate
	themselves when the reference count goes to zero. One example is Microsoft Word,
	which starts when a COM client creates a Word.Document object, and terminates
	when the last reference to that object is released.
	
	In Visual C++, the following code illustrates proper automation of MSDev.exe:
	
	      #import <devshl.dll>       // Create smart pointers for automation.
	     using namespace DSSharedObjects;
	     CoInitialize(NULL);        // Initialize COM.
	
	     IApplicationPtr pApplication;
	
	     if (pApplication.CreateInstance(__uuidof(DSSharedObjects::Application))
	      == S_OK)
	     {
	        // Perform automation steps with pApplication.
	
	        pApplication->Quit();
	     }
	
	     CoUninitialize();
	
	This Visual Basic code illustrates the use of the Quit method:
	
	     Dim msdev As Object
	     Set msdev = CreateObject("MSDev.Application") ' Create a new instance of
	                                                   ' MSDev.exe.
	
	     ' Perform automation steps here.
	
	     msdev.Quit           ' Force MSDev.exe to unload.
	     Set msdev = Nothing  ' De-reference MSDev.exe.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q192913 BUG: EnableModeless Causes Events to Fire Late
	
	For more information on Automation and the Developer Studio object model, please
	see the following Help topics:
	
	  Visual C++ 5.0 Online Help: Developer Products; Visual C++; Developer Studio
	  Environment User's Guide; Automating Tasks in Developer Studio; Developer
	  Studio Objects; Overview: Developer Studio Objects; Automating Developer
	  Studio Tasks from Other Applications
	
	  MSDN Library: Platform SDK; COM and ActiveX Object Services; COM
	
	  Visual C++ 6.0 Online Help: Visual C++ Documentation; Using Visual C++; Visual
	  C++ User's Guide; Automating Task's in Visual C++; Developer Studio Objects;
	  Overview: Developer Studio Objects; Automating Developer Studio Tasks from
	  Other Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbide kbVC500 kbVC600 kbVisID100 kbVJ100 kbVJ110 kbVS97 kbDevStudio kbFAQ kbVJ200 kbGrpDSTools kbvc600faq 
	Technology        : kbVCsearch kbVSsearch kbVJsearch kbVisIDsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVisID100 kbVJ100 kbVJ110 kbVS97 kbVS97Search kbVC500Search
	Version           : :1.0,1.1,5.0,6.0,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
