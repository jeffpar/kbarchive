---
layout: page
title: "Q194927: INFO: VB6 Enables Single Project Testing of Controls/Documents"
permalink: /kb/194/Q194927/
---

## Q194927: INFO: VB6 Enables Single Project Testing of Controls/Documents

{% raw %}

	Article: Q194927
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbDebug kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create and test an ActiveX Control in Visual Basic 5.0, it was necessary to
	create two projects: one for the control and one to test it. Similarly, in order
	to test a UserDocument in Visual Basic 5.0, you had to run the document in the
	IDE, then start the Web browser and point the browser to the location of the
	temporary VBD file. This is no longer true in Visual Basic 6.0. Testing a
	UserControl or UserDocument inside the Visual Basic 6.0 IDE has become much
	simpler.
	
	MORE INFORMATION
	================
	
	Steps to debug a UserControl within a single project:
	
	1. Create a new ActiveX Control project. UserControl1 is created by default.
	
	2. Start the project. When the dialog containing the Debugging tab is displayed,
	  click OK. Your Web browser will start and the control will be activated
	  inside the browser.
	
	Steps to debug a UserDocument:
	
	1. Create an ActiveX Document DLL project. UserDocument1 is created by default.
	
	2. Add a CommandButton to the document.
	
	3. Add the following code to the General Declarations section of UserDocument1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           MsgBox "See, this really does work!!"
	        End Sub
	
	4. Start the project. When the dialog containing the Debugging tab is displayed,
	  click OK. Your Web browser will start and the UserDocument will be activated
	  inside the browser. Click the CommandButton and the message box will appear.
	
	REFERENCES
	==========
	
	For more information, search Visual Basic help for UserControls or
	UserDocuments.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Richard T.
	Edwards, Microsoft Corporation
	
	Additional query words: kbDSupport kbDSD
	
	======================================================================
	Keywords          : kbActiveX kbDebug kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
