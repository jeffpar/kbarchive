---
layout: page
title: "Q181894: PRB: &quot;The Remote Procedure Call Failed&quot; During OLE Automation"
permalink: /kb/181/Q181894/
---

## Q181894: PRB: &quot;The Remote Procedure Call Failed&quot; During OLE Automation

	Article: Q181894
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbole kbAutomation kbCOMt kbMFC kbThread kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Office 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are performing intensive OLE Automation, most likely in a loop without user
	intervention, and receive the following error:
	
	  The remote procedure call failed.
	
	CAUSE
	=====
	
	Every thread that uses COM or OLE must call CoInitialize() or OleInitialize(),
	respectively. When this call is made, the OS creates a hidden top-level window,
	owned by your thread, for implementation purposes. Because the OS relies on
	Windows messaging behind-the-scenes, your thread should, and in some cases MUST,
	pump messages. Failure to do so can result in automation errors, and sometimes
	in a deadlock situation when another application broadcasts a message to all
	top-level windows (for example, an application might broadcast a WM_WININICHANGE
	or WM_SETTINGCHANGE message to notify other applications the default printer has
	changed).
	
	RESOLUTION
	==========
	
	If you are using OLE Automation in a loop (for example, writing out 10,000 rows
	of data to Microsoft Excel), you need a PeekMessage() loop inside your loop so
	that messages will get processed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Here is an example of a PeekMessage() loop you can use in your code.
	
	     MSG msg;
	     while(PeekMessage(&msg, NULL, NULL, NULL, PM_REMOVE)) {
	        TranslateMessage(&msg);
	        DispatchMessage(&msg);
	     }
	
	REFERENCES
	==========
	
	Microsoft Visual C++ online for PeekMessage().
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q136885 INFO: OLE Threads Must Dispatch Messages
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Joe Crump, Microsoft Corporation
	
	
	Additional query words: excel office rpc -2147418095 800706BE 0x800706BE 1726
	
	======================================================================
	Keywords          : kberrmsg kbole kbAutomation kbCOMt kbMFC kbThread kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
