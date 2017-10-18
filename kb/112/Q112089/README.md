---
layout: page
title: "Q112089: Print Manager Does Not Allow the Movement of Documents"
permalink: kb/112/Q112089/
---

## Q112089: Print Manager Does Not Allow the Movement of Documents

	Article: Q112089
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print Manager does not allow you to move documents.
	
	NOTE: Although you cannot move documents using Print Manager, you still have the
	ability to delete them.
	
	CAUSE
	=====
	
	This problem may occur if one of the following conditions exists:
	
	- Windows for Workgroups was started with the /N switch.
	
	- Windows for Workgroups was installed with the "No Windows Support For
	  Networks" option.
	
	- The networking functionality failed to load.
	
	RESOLUTION
	==========
	
	At this time, the only way to correct this problem is to enable network
	functionality.
	
	Additional query words: 3.11 printman move up down
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
