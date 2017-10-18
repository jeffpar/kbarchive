---
layout: page
title: "Q135904: PRB: Can't Define Text Object ControlSource Property in a Grid"
permalink: kb/135/Q135904/
---

## Q135904: PRB: Can't Define Text Object ControlSource Property in a Grid

	Article: Q135904
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to change the ControlSource Property of the Text1 text object in
	a column of a grid, you receive this error message:
	
	  Parent object will not allow this property setting Text1.ControlSource
	
	CAUSE
	=====
	
	This is by design. This occurs because when the column is bound, the
	ControlSource property is implicitly set.
	
	RESOLUTION
	==========
	
	Set the Bound property to false (.F.) for the column. If the column is not
	bound, you can set the ControlSource for Text1.
	
	STATUS
	======
	
	This behavior is by design. It follows the principle of inheritance in Object
	Oriented Programming. The column is bound to a ControlSource already, so the
	Text1 object in the column is inheriting the same ControlSource property.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a grid on a form.
	
	2. Define a column. (You may need to specify a ColumnCount.)
	
	3. Select Text1 in the Property Sheet's Object box.
	
	4. Click the Data tab.
	
	5. Select the ControlSource property.
	
	6. Click the Expression box down arrow.
	
	The error "Parent object will not allow this property setting ...
	Text1.ControlSource" is displayed.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
