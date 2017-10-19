---
layout: page
title: "Q138757: HOWTO: Change the Icon in an Application"
permalink: /kb/138/Q138757/
---

## Q138757: HOWTO: Change the Icon in an Application

	Article: Q138757
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbvfp300 kbvfp500 kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a distributed application that will be run under Windows 95, you may need to
	change the icon so that the executable displays your own icon file instead of
	the FoxPro Logo. You can accomplish this by using a reference to the _SCREEN
	object. This will also change the title bar icon in a Windows 95 application.
	
	MORE INFORMATION
	================
	
	The _SCREEN system memory variable specifies properties and methods for the main
	Visual FoxPro window. The property that needs to be changed in this case is the
	Icon property. To change the icon shown on the screen's title bar, use this
	command:
	
	     _SCREEN.ICON = HOME()+"SAMPLES\GRAPHICS\ICONS\FLAG\FLGDEN.ICO"
	
	To show how this works, enter this command in the Command window with Visual
	FoxPro running under Windows 95. There is a directory of icons shipped with
	Visual FoxPro located in the following directory:
	
	  Vfp\Samples\Graphics\Icons
	
	For more information on the _SCREEN system memory variable, query in the online
	Help using _SCREEN.
	
	
	Additional query words: WINDOW MODIFY _SCREEN
	
	======================================================================
	Keywords          : kbenv kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
