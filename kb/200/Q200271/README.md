---
layout: page
title: "Q200271: INFO: How to Diagnose and Resolve Some Automation Errors"
permalink: kb/200/Q200271/
---

## Q200271: INFO: How to Diagnose and Resolve Some Automation Errors

	Article: Q200271
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to diagnose and resolve some automation errors. The
	information in this article may be useful if you receive 429 and 438 error
	messages when you are automating an ActiveX/COM server from Visual Basic.
	
	MORE INFORMATION
	================
	
	Error 429
	---------
	
	Error 429 typically occurs when code tries to instantiate an object. This error
	can be caused in many ways. The following list includes some of the most common
	scenarios that could cause this error:
	
	- License information for a particular component is not present.
	
	- A component is missing or is not registered.
	
	- A DCOM issue exists.
	
	- A Packaging and Deployment Wizard (PDW) issue exists.
	
	License Information for a Particular Component Is Not Present:
	
	When you try to site a control from the Visual Basic toolbox onto a form, the
	code may throw the following 429 error:
	
	  License Information For This Component Not Found. You Do Not Have An
	  Appropriate License To Use This Functionality In The Design Environment.
	
	This error occurs when the problem computer does not have the appropriate
	design-time license for the control that is being added. For additional
	information about how to resolve this problem, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q194751 FILE: VB6Cli.exe Fixes License Problems with Visual Basic 6.0
	
	A Component Is Missing or Is Not Registered:
	
	When you try to run a Visual Basic program after you distribute it, the program
	throws the following run-time error 429:
	
	  ActiveX component can't create object.
	
	The run-time error 429 usually occurs if you do not include one or more of the
	components that your program requires or uses. One common example is the File
	System object that is described in the following Microsoft Knowledge Base
	article:
	
	  Q247979 PRB: Error 429 Using MSDN File System Object Programming Example
	
	The run-time error 429 can also occur if you do not distribute the correct Visual
	Basic runtime files that are needed by your program executable (.exe) file. Make
	certain that you are distributing the correct runtime files by creating a Setup
	package for your program by using the Package and Deployment Wizard (PDW).
	
	Another way that the run-time error 429 occurs is when one of the components that
	is needed by the program is not registered correctly. The best way to
	troubleshoot what line of code is causing this error is to add tracing code. The
	recommended method is to write to a file (or the event log) instead of
	generating message boxes. After you determine which line of code is throwing
	this error, make certain that the problem component is registered. For example,
	you narrow down the error to the following line of code:
	
	  Dim fs as Scripting.FileSystemObject
	  Set fs = New Scripting.FileSystemObject      ' this line throws error 429
	
	The File System object is contained in the Scrrun.dll file. Make certain that
	this DLL file is installed on the target computer, and that it is correctly
	registered.
	
	A DCOM Issue Exists:
	
	The attempt to access a DCOM server from a remote-client program throws a runtime
	error 429. For additional information about how to troubleshoot this issue,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q177394 HOWTO: Troubleshoot Run-Time Error '429' in DCOM Applications
	
	  Q183607 HOWTO: Configure DCOM for Visual Basic Using DCOMCNFG.EXE
	
	A Packaging and Deployment Wizard (PDW) Issue Exists:
	
	You can get this error when you are trying to use the PDW, either by trying to
	start the wizard, or by clicking the Package or Deploy button. For additional
	information about how to troubleshoot this issue with the PDW, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q255726 PRB: Error 429 Occurs When You Use the Package and Deployment Wizard
	
	Run Time Error 438 - Object Doesn't Support this Property or Method
	-------------------------------------------------------------------
	
	The most common cause of error 438 is not maintaining binary compatibility
	between successive versions of your components. Each COM interface has an
	associated GUID that is called an interface ID (IID). Each coclass has an
	associated GUID that is called class ID (CLSID). When you compile an ActiveX
	component in Visual Basic, the CLSIDs and IIDs are compiled into the component's
	type library.
	
	Example:
	
	A program that consists of a Visual Basic client and an ActiveX DLL is released
	to the user community. At a later time, additional functionality is to be added
	to the DLL component. The necessary modifications are made, and the ActiveX DLL
	is compiled without maintaining binary compatibility. When the DLL is released,
	the client that is trying to use the DLL will throw run time error 438. The
	reason this occurs is that when the DLL was compiled, a fresh set of GUIDs was
	compiled into the DLL, and the client has no reference to these new GUIDs. This
	is why it is important to maintain binary compatibility with the last-released
	version of the component when you are trying to release a newer version.
	
	Another example for the runtime error 438 would be including the wrong version of
	Microsoft Data Access Components (MDAC) in the distribution package. For
	example, a Visual Basic 6 Service Pack 5 program is built on Microsoft Windows
	2000 Service Pack 2 by using the latest version of MDAC that is present (version
	2.6). When the distribution is built, an earlier version of MDAC (version 2.5)
	is used (unless MDAC 2.6 is downloaded), causing an error 438 to be thrown when
	the distributed program is run.
	
	Another scenario would be misspelled method or property names, and this scenario
	is described in the following Microsoft Knowledge Base article:
	
	  Q193265 PRB: VB Doesn't Generate Compile Error for Misspelled Methods
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
