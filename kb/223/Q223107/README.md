---
layout: page
title: "Q223107: FIX: Error Picking Deleted Object From Dropdown List"
permalink: /kb/223/Q223107/
---

## Q223107: FIX: Error Picking Deleted Object From Dropdown List

	Article: Q223107
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActivexEvents kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A class module in a Standard EXE project contains a declaration for a public
	event. A form in the Standard EXE project instantiates an object variable based
	on the class module with the WithEvents keyword. When you delete the declaration
	statement for the object variable in the code window of the form and select the
	object variable from the object box of the code window, an application error
	occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section shows you how to create a sample project that demonstrates the bug
	behavior. The section assumes you are familiar with adding a class module to a
	Standard EXE project and instantiating the COM object from that Class module. If
	you are not familiar with these tasks, see the REFERENCES section for more
	information on these tasks.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a class module to the project. Class1 is created by default.
	
	3. Copy the following code to the Code window of Class1:
	
	  Option Explicit
	  Public Event MyCustomEvent()
	      
	
	4. Copy the following code to the Code window of Form1:
	
	  Option Explicit
	  Private WithEvents X As Class1
	      
	
	5. Delete the following line from the Code window of Form1:
	
	  Private WithEvents X As Class1
	
	6. In the Object box of Form1, select X.
	
	BUG: An application error occurs.
	
	REFERENCES
	==========
	
	For more information about form, standard, and class modules, please see the
	following:
	
	- Code Modules
	
	  in the Online Help or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconcodemodules.htm
	
	For more information about creating your own classes and objects, please see:
	
	- Programming With Objects
	
	  in the Online Help or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconprogrammingwithobjects.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActivexEvents kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
