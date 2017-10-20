---
layout: page
title: "Q140244: How to Dock/Undock Project Manager or Toolbar Programmatically"
permalink: /kb/140/Q140244/
---

## Q140244: How to Dock/Undock Project Manager or Toolbar Programmatically

{% raw %}

	Article: Q140244
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
	
	In some cases, you may find it difficult to use the mouse to undock a toolbar or
	the Project Manager. Also, you may want to use code to dock or undock a built-in
	toolbar or the Project Manager. This article explains how to dock and undock
	toolbars and the Project Manager programatically.
	
	MORE INFORMATION
	================
	
	A toolbar or the Project Manager may be docked or undocked by using the MOUSE
	command. To dock or undock the Standard Toolbar, type the following line in the
	Command window:
	
	  MOUSE DBLCLICK AT 0.1,0.1 WINDOW "Standard"
	
	The command must be a bit more specific when referring to the Project Manager
	because the window name of the Project Manager changes with the project name. To
	open the Tastrade project, use this command:
	
	     MODIFY PROJECT HOME()+'samples\mainsamp\tastrade.pjx'
	
	To dock the Tastrade Project, use this command:
	
	     MOUSE DBLCLICK AT -0.1,0.1 WINDOW "PROJECT MANAGER - TASTRADE"
	
	To undock the Tastrade Project, use this command:
	
	     MOUSE DBLCLICK AT 0.1,0.1 WINDOW "PROJECT MANAGER - TASTRADE"
	
	NOTE: In this last example, you could have just used the window name PROJECT.
	However, if there is more than one project open and only PROJECT is used, Visual
	FoxPro picks one of the projects at random to dock or undock. You need to use
	the complete name to guarantee that a particular project is docked or undocked.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
