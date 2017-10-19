---
layout: page
title: "Q128077: PRB: Can't Use DOCKED or DOCKPOSITION Props to Dock a Toolbar"
permalink: /kb/128/Q128077/
---

## Q128077: PRB: Can't Use DOCKED or DOCKPOSITION Props to Dock a Toolbar

	Article: Q128077
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the value of the DOCKED or DOCKPOSITION properties is modified to dock a
	toolbar, the toolbar position does not change.
	
	CAUSE
	=====
	
	This behavior is by design. The DOCKED and DOCKPOSITION properties are
	indicators of where a toolbar is located. They are Read Only properties and
	modifying their value will not affect the toolbar.
	
	RESOLUTION
	==========
	
	Use the DOCK method to dock a toolbar along any border of the main FoxPro
	window. The following code demonstrates how to use the DOCK method:
	
	     oToolbar1=CREATEOBJECT('cToolbar')
	     oToolbar1.Show
	     = Messagebox("Moving the Toolbar")
	     oToolbar1.Dock(0)
	     = Messagebox( "Top")
	     oToolbar1.Dock(1)
	     =Messagebox( "Left")
	     oToolbar1.Dock(3)
	     =Messagebox( "Bottom")
	     oToolbar1.Dock(2)
	     =Messagebox( "Right")
	
	     DEFINE CLASS cToolbar AS TOOLBAR
	       Scalemode = 1
	       * Make this a control array
	       DIMENSION cmdim(3)
	       ADD OBJECT cmdim(1) as CommandButton WITH caption = "One", Left =1
	       ADD OBJECT cmdim(2) as CommandButton WITH caption= "Two", Left =10
	       ADD OBJECT cmdim(3) as CommandButton WITH caption = "Three",Left= 15
	     ENDDEFINE
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
