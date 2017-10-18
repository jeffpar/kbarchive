---
layout: page
title: "Q132295: How to Change the Attributes of a Visual FoxPro Window"
permalink: kb/132/Q132295/
---

## Q132295: How to Change the Attributes of a Visual FoxPro Window

	Article: Q132295
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In previous versions of FoxPro for Windows, the attributes of the main FoxPro
	desktop screen could be manipulated using the MODIFY WINDOW SCREEN command.
	Although this method still works in Visual FoxPro, the preferred version 3.0
	method is to change the properties of the _SCREEN system memory variable.
	
	MORE INFORMATION
	================
	
	You can use the _SCREEN system memory variable in conjunction with the
	appropriate property to change specific attributes of the main FoxPro desktop
	screen. The following line of code changes the caption or title of the main
	FoxPro desktop screen:
	
	     _SCREEEN.Caption="New Title"
	
	You can use this method to change any of the available properties for the _SCREEN
	system memory variable. Use the AMEMBERS() function to obtain a list of the
	available properties for this object. For example, the following line of code
	loads the SCRNPROPS array with all the available properties, methods, and events
	for the main FoxPro desktop screen:
	
	     =AMEMBERS(SCRNPROPS,_SCREEN,1)
	
	Examine the SCRNPROPS array to see all the available properties, methods, and
	events. The second column of the array indicates whether the item is a property,
	method, or event.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
