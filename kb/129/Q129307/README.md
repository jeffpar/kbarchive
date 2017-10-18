---
layout: page
title: "Q129307: PRB: Project Manager Can't Be Docked at Bottom of Desktop"
permalink: kb/129/Q129307/
---

## Q129307: PRB: Project Manager Can't Be Docked at Bottom of Desktop

	Article: Q129307
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot dock the Project Manager Window at the Bottom or Side of the Visual
	FoxPro Desktop.
	
	CAUSE
	=====
	
	The Project Manager Window is not dockable at the bottom or sides of the Visual
	FoxPro Desktop.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A 'true' toolbar is 'dockable in all locations on the screen. The Project
	Manager is not a 'true' Toolbar, so it is not 'dockable' in all locations of the
	screen. The Project Manager is classified more as a Window than a Toolbar.
	Because of this limitation, you can sometimes move the Project Manager window to
	locations where it cannot be retrieved with the mouse.
	
	For example, the Project Manager Window may become positioned off the bottom of
	the screen to a spot where it is not visible or where it is barely visible but
	not moveable with the mouse. In these situations, use the "MOVE WINDOW
	<W_name> CENTER" command to put the Project Manager back in a useable
	location.
	
	The name of the Project Manager Window is as follows:
	
	  "PROJECT MANAGER - "+<Project Name>
	
	and a Project named "Test" would be re-centered like this:
	
	  MOVE WINDOW "Project Manager - Test" CENTER
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	
