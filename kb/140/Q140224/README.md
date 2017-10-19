---
layout: page
title: "Q140224: How to Make a ShortCut to Modify a Project or Screen"
permalink: /kb/140/Q140224/
---

## Q140224: How to Make a ShortCut to Modify a Project or Screen

	Article: Q140224
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to create a shortcut in Windows 95 to modify a form or
	project in Visual FoxPro instead of running it.
	
	MORE INFORMATION
	================
	
	Currently, under Windows 95, Visual FoxPro only supports the actions of the OPEN
	command, which attempts to run the selected program or project. However, you can
	create a shortcut to a program that executes the functionality you want.
	
	For Example, to have a shortcut to a Project that you want Visual FoxPro to
	modify when you double-click it, create a program that contains this line of
	code:
	
	     MODIFY PROJECT HOME()+'\samples\mainsamp\tastrade.pjx' NOWAIT
	
	Save the program as Shortcut2tastrade. Create a shortcut to this program, and
	then drop the shortcut on your Desktop. Then you can double-click the shortcut
	to open or modify the project instead of running the main program.
	
	NOTE: It is important that you use the NOWAIT clause. Otherwise, you'd have to
	press the ESC key to cancel the program.
	
	This same method can be used with forms. It will also work with other FoxPro
	versions; Visual FoxPro is not required.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
