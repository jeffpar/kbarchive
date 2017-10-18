---
layout: page
title: "Q116039: Results of Double-Clicking FoxPro Files in Finder"
permalink: kb/116/Q116039/
---

## Q116039: Results of Double-Clicking FoxPro Files in Finder

	Article: Q116039
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Double-clicking most types of FoxPro files in the Macintosh Finder causes FoxPro
	to open and/or run that file.
	
	Below is a list of FoxPro files and extensions (the three letters following the
	period in a file's name) and FoxPro's response when each file type is
	double-clicked.
	
	MORE INFORMATION
	================
	
	  File extension               FoxPro's action
	  -------------------------------------------------------------
	
	  .APP, .PRG, .FXP, .MPR,      Attempts to run the program or
	  .MPX, .SPR, .SPX             application
	
	  .DBF, .FPT, .QPR, .QPX       Opens the Browse window
	
	  .SCX, .SCT                   Opens the Screen Design window. If you are
	                               running Visual FoxPro for Macintosh and the
	                               .SCX was created in previous versions of
	                               FoxPro, the conversion utility starts.
	
	  .FRX, .FRT                   Opens the Report Layout window. If you are
	                               running Visual FoxPro for Macintosh and the
	                               .SCX was created in previous versions of
	                               FoxPro, the conversion utility starts.
	
	  .LBX, .LBT                   Opens the Label Layout window
	
	  .MNX, .MNT                   Opens the Menu Design window
	
	  .PJX, .PJT                   Open the Project window
	
	  .TXT, .BAK, and other        Opens a window for modifying the file
	  text files
	
	  FOXUSER.DBF, FOXUSER.FPT     Uses the resource settings for this
	                               file, in addition to opening a Browse
	                               window for it
	
	  CONFIG.FPM                   Uses the configuration settings for
	                               this file
	
	Additional query words: vFoxMac FoxMac double clicking mouse kinds akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
