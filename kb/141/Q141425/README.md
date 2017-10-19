---
layout: page
title: "Q141425: FIX: Toolbar Events Fire Differently When Using Dock Method"
permalink: /kb/141/Q141425/
---

## Q141425: FIX: Toolbar Events Fire Differently When Using Dock Method

	Article: Q141425
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The BeforeDock, Undock, and AfterDock events are not triggered in the same order
	when a toolbar is docked interactively versus when a toolbar is docked under
	program control.
	
	When the dock position of a toolbar is changed interactively, the events fire in
	the following order:
	
	     BeforeDock, AfterDock
	
	When the dock position of a toolbar is changed under program control with the
	Dock method, the events fire in the following order:
	
	     BeforeDock, Undock, BeforeDock, AfterDock
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	WORKAROUND
	==========
	
	There is no way to prevent the events from occurring, or to trigger the events
	under program control. However, if you have code for the BeforeDock and Undock
	methods and do not want to call it when the Dock method is executed, follow
	these steps:
	
	1. Add a property to the class called lDockit.
	
	2. In the Dock method, set the value of this property to true (.T.) as in this
	  example:
	
	     IF THIS.DockPosition != -1 && The toolbar is already docked
	        THIS.lDockit=.T.
	     ENDIF
	
	3. In the event handler for BeforeDock, add the following:
	
	     IF THIS.lDockit <> .T.
	        <your code here>
	     ENDIF
	
	4. In the event handler for Undock, add the following:
	
	     IF THIS.lDockit<>.T.
	        <your code here>
	        ELSE
	        THIS.lDockit=.F.
	     ENDIF
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type CREATE CLASS in the Command window.
	
	2. In the Create Class dialog box, enter the following information to create a
	  class based on the Toolbar class:
	
	     ClassName: TbrDock
	     Based On : select Toolbar
	     Store In : Clstbar
	
	3. In the Class Designer, enter the following line for the AfterDock,
	  BeforeDock, and Undock event handlers:
	
	     =MESSAGEBOX(PROGRAM())
	
	4. Save the class.
	
	5. Create a toolbar object by typing the following code in the Command window:
	
	     SET CLASSLIB TO clstbar
	     oTrdock=CREATEOBJECT("TbrDock")
	     oTrdock.Show
	
	6. Use the mouse to dock the toolbar. The BeforeDock and AfterDock events fire.
	
	7. From the Command window, call the Dock method to move to another docked
	  position:
	
	     oTrDock.Dock(1)
	
	  The BeforeDock, Undock, BeforeDock, and AfterDock events are triggered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
