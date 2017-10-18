---
layout: page
title: "Q183972: ODE/ADT: Error Running Setup.exe to Install Run-Time Application"
permalink: kb/183/Q183972/
---

## Q183972: ODE/ADT: Error Running Setup.exe to Install Run-Time Application

	Article: Q183972
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you try to install a run-time application that you created with the
	Microsoft Access Developer's Toolkit (ADT) or the Microsoft Office 97 Developer
	Edition Tools (ODE), you may receive one of the following error messages.
	
	  
	
	  Installing ADT 2.0 Run-Time Application on Windows 95:
	
	  Usage: [/A]
	  Use /A to run setup in administrator mode.
	
	  
	
	  Installing ADT 7.0 or ODE Run-Time Application on Windows 95:
	
	  Setup Error 530
	  This is an invalid command line option: <partial path>
	
	  When you click OK, a message box containing usage information for setup
	  appears.
	
	  
	
	  Installing Run-Time Application (Any Version) on Windows NT 4.0:
	
	  Cannot find the file <path to setup.exe> (or one of its components).
	  Check to ensure the path and filename are correct and that all the required
	  libraries are available.
	
	Setup then fails.
	
	CAUSE
	=====
	
	There is a space in the path of the file, Setup.exe. For example, you receive
	one of the errors described in the "Symptoms" section if Setup.exe is located on
	the following network share:
	
	  \\MyComputer\My Path\Setup.exe
	
	RESOLUTION
	==========
	
	Change the name of the network share on which your run-time application Setup
	program is located to one that does not contain spaces in the path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Developer's
	Toolkit and Microsoft Office 97 Developer Edition Tools.
	
	Additional query words: run time runtime
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:2.0,7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
