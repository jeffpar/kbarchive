---
layout: page
title: "Q257421: FIX: Compiling ActiveX Project Does Not Release Reference Right"
permalink: /kb/257/Q257421/
---

## Q257421: FIX: Compiling ActiveX Project Does Not Release Reference Right

{% raw %}

	Article: Q257421
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4f
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After compiling a Visual Basic 6.0 ActiveX Control that uses an MFC ActiveX
	Control, you receive the following error message when you exit Visual Basic:
	
	  Debug Assertion Failed!
	
	  Program: C:\PROGRAM FILES\MICROSOFT VISUAL STUDIO\VB98\VB6.EXE
	  File: cmdtarg.cpp
	  Line: 52
	
	  For information on how your program can cause an assertion
	  failure, see the Visual C++ documentation on asserts.
	
	  (Press Retry to debug the application)
	
	CAUSE
	=====
	
	The problem occurs when the reference to IClassFactory2 is not released by
	Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create an MFC Control:
	
	1. Start Microsoft Visual C++.
	
	2. On the File menu, select New.
	
	3. Select the Project tab and choose MFC ActiveX ControlWizard.
	
	4. Enter the project name and click OK.
	
	5. Use all of the project defaults.
	
	6. Select Build <project name>.ocx from the Build menu or press the F7
	  key.
	
	Use an MFC Control in a Visual Basic ActiveX Control Project:
	
	1. Start a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. On the Project menu, select Components, or right-click on the Toolbox and
	  select Components.
	
	3. On the Components dialog box, check the MFC control that you just created,
	  and then click OK.
	
	4. Add the MFC control to the UserControl.
	
	5. On the File menu, select Make Project1.ocx.
	
	6. After compiling the project, close Visual Basic and note that the error
	  occurs.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
