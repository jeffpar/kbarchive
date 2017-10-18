---
layout: page
title: "Q122746: BUG: BUILD APP Fails If Program Name Has No Extension"
permalink: kb/122/Q122746/
---

## Q122746: BUG: BUILD APP Fails If Program Name Has No Extension

	Article: Q122746
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to build an application, the application is not built and no
	error message is given. This occurs after you create a program, add the program
	to a new project, and choose to build the application.
	
	RESOLUTION
	==========
	
	Include an extension of .PRG on the program file name before adding the program
	to the project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create the following program and save it as "TEST."
	
	     WAIT WINDOW "Hello"
	
	2. Create a new project named NewProject, and add the TEST program to the
	  project.
	
	3. Choose Build. Then choose Build Application.
	
	At this point, control returns to the Command window. The application has not
	been built, and no error message is displayed.
	
	Additional query words: vFoxMac FoxMac 3.00 buglist2.60a
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
