---
layout: page
title: "Q95726: PRB: SHOW WINDOW &lt;Window Name&gt; REFRESH with Browse Window"
permalink: kb/095/Q95726/
---

## Q95726: PRB: SHOW WINDOW &lt;Window Name&gt; REFRESH with Browse Window

	Article: Q95726
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Window <window name> has not been defined" occurs when the SHOW
	WINDOW <window name> REFRESH command is used to REFRESH a Browse window.
	
	CAUSE
	=====
	
	The window is being referenced by the incorrect name.
	
	RESOLUTION
	==========
	
	There are two ways to refresh a Browse window with the SHOW WINDOW <window
	name> REFRESH command. The first way is to use the TITLE name defined by the
	BROWSE command:
	
	     USE customer
	     BROWSE TITLE "My Browse"
	     SHOW WINDOW "My Browse" REFRESH  && Causes refresh
	
	If the Browse window was not defined with a TITLE, you can use the name of the
	database being browsed as the window name:
	
	     USE customer
	     BROWSE
	     SHOW WINDOW customer REFRESH  && Causes refresh
	
	It does not matter how the BROWSE command was issued (whether in the BROWSE,
	BROWSE WINDOW, or BROWSE IN WINDOW commands) or if the window's title is the one
	that appears on the screen.
	
	     USE CUSTOMER
	     DEFINE WINDOW browwind FROM 1,1 TO 23,79 TITLE "Window Title"
	     ACTIVATE WINDOW browwind
	     BROWSE IN WINDOW browwind TITLE "Browse Title"
	     SHOW WINDOW "Browse Title" REFRESH   && Causes refresh
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
