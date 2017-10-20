---
layout: page
title: "Q231655: FIX: VC++ Crashes Opening Files or Adding Files to Projects"
permalink: /kb/231/Q231655/
---

## Q231655: FIX: VC++ Crashes Opening Files or Adding Files to Projects

{% raw %}

	Article: Q231655
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbide kbVC600bug kbDevStudio kbDSupport kbGrpDSTools kbVS600sp4fix kbVS600
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting the Open file dialog box in VC++ through the keyboard shortcut key or
	from the File menu will result in the following error:
	
	  Access Violation (0xC0000005) in DEVSHL.DLL at 0x5003eaed.
	  DevShl.Dll referenced memory at 0x0000000. The memory could not be read.
	
	The same error occurs when you select Add to Project from the Files submenu from
	the Project menu.
	
	CAUSE
	=====
	
	This problem occurs when there are too many ActiveX document servers registered
	on the computer.
	
	
	RESOLUTION
	==========
	
	Unregister any known ActiveX document servers that are not needed on the system.
	In most cases, running the server executable with a /UNREGISTER switch will
	unregister the server.
	
	Another solution is to use a Developer Studio Add-in to place the open and
	add-to-project features in Visual C++ For more information, see the following
	Knowledge Base article:
	
	  Q241396 FileTool.exe replaces the open and add-to-project features in VC++
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbAutomation kbide kbVC600bug kbDevStudio kbDSupport kbGrpDSTools kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
