---
layout: page
title: "Q223088: FIX: WhatsThis Help Does Not Work in UserDocs"
permalink: /kb/223/Q223088/
---

## Q223088: FIX: WhatsThis Help Does Not Work in UserDocs

	Article: Q223088
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.01,4.01 SP1,4.01 SP2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveDocs kbActiveX kbCompiler kbIE300 kbIE400 kbie401 kbVBp600bug kbG
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.01, 4.01 SP1, 4.01 SP2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form contains the WebBrowser control used to display an ActiveX Document. The
	WhatThisHelp and WhatsThisButton properties are set to True. When you run the
	project, the WhatThisButton does not display the Help topic associated with the
	ActiveX Document. The expected behavior is for the appropriate topic from the
	Help file to appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section shows you how to create a Visual Basic project that demonstrates
	the bug behavior. The section assumes you have a Windows Help file and are
	familiar with the following tasks:
	
	- Creating and compiling ActiveX Documents created with Visual Basic.
	
	- Using the WebBrowser Control shipped with Internet Explorer.
	
	- Using ActiveX controls in Visual Basic.
	
	If you are not familiar with these tasks, see the REFERENCES section of this
	article for more information.
	
	To create the project, do the following:
	
	1. Create and compile an ActiveX document DLL.
	
	2. Create a Standard EXE project to contain the WebBrowser control used to
	  display the ActiveX document.
	
	Create and Compile an ActiveX Document
	--------------------------------------
	
	1. Start a new ActiveX Document DLL project in Visual Basic. UserDocument1 is
	  created by default.
	
	2. Add a TextBox control to UserDocument1.
	
	3. In the TextBox property sheet, set the WhatsThisID property to the topic
	  number of your Help file.
	
	4. Copy the following code to the Code window of Form1. Add the name of the Help
	  file to the appropriate line:
	
	  Option Explicit
	
	  Private Sub UserDocument_Initialize()
	     App.HelpFile = App.Path & "<Help File Name>"
	  End Sub
	      
	
	5. Save the project as UserDocument.vbp. Compile the project into the file
	  UserDocument.dll.
	
	6. Close the ActiveX Document project.
	
	After you create the ActiveX Document DLL file, you can create the Standard EXE
	file that demonstrates the bug behavior.
	
	Create a Standard EXE Project
	-----------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the Microsoft Internet Controls to the project. For more information
	  about adding ActiveX controls to your project, see the REFERENCES section of
	  this article.
	
	3. Add a WebBrowser Control project to your Standard EXE project. WebBrowser1 is
	  created by default.
	
	4. In the Form1 property sheet, set the following properties:
	
	   - BorderStyle=3-Fixed Dialog
	   - WhatsThisButton=True
	   - WhatsThisHelp=True
	
	5. Copy the following code to the Code window of Form1. Add the Help file name
	  to the appropriate line:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     App.HelpFile = App.Path & "<Help File Name>"
	     WebBrowser1.Navigate App.Path & "\UserDocument1.vbd"
	  End Sub
	      
	
	6. On the Run menu, select Start, or press the F5 key to start the program. The
	  ActiveX Document appears in the WebBrowser control. In the Title Bar of
	  Form1, click the Help button. The cursor changes to a question mark. Click
	  the ActiveX Document in the WebBrowser control.
	
	  BUG: The appropriate topic from the Help file does not appear. The expected
	  behavior is for the appropriate topic to appear.
	
	REFERENCES
	==========
	
	- Creating an ActiveX Document in the Online Help, or the Microsoft Visual
	  Basic 6.0 Component Tools Guide, or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconcreatingdocumentobject.htm
	  explains how to create an ActiveX document.
	
	- Standard ActiveX Controls in the Online Help or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconstandardactivexcontrols.htm
	  shows how to add an ActiveX control to your Visual Basic Project.
	
	- Using the WebBrowser Control in the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/officedev/office/html/usingwebbrowsercontrol.htm
	  explains how to install and use the WebBrowser Control included with Internet
	  Explorer.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveDocs kbActiveX kbCompiler kbIE300 kbIE400 kbie401 kbVBp600bug kbGrpDSInet kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbie500 kbie500bug 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbSDKIE401 kbSDKIE401SP1 kbSDKIE401SP2
	Version           : WINDOWS:4.01,4.01 SP1,4.01 SP2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
