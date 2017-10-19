---
layout: page
title: "Q93624: How to Activate Screen Background Color in FoxBASE+/Mac"
permalink: /kb/093/Q93624/
---

## Q93624: How to Activate Screen Background Color in FoxBASE+/Mac

	Article: Q93624
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	To activate the colors of a screen, issue a CLEAR command on the line
	following the SCREEN definition. Doing so erases the screen and releases
	all pending GET statements to allow the new color to be "painted" on the
	screen. For example:
	
	     STORE "My Name" TO x
	
	     SCREEN 1 COLOR 0,0,0,-8552,-30998,-1 TOP
	     CLEAR
	     @ PIXELS 72,83 GET x COLOR 0,0,0,-1,-1,-1
	     READ
	
	Additional query words: 2.01 plus colour FoxBASE+/Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
