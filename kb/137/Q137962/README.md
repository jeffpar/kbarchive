---
layout: page
title: "Q137962: HOWTO: Have a Disabled Picture Command Button Look Enabled"
permalink: kb/137/Q137962/
---

## Q137962: HOWTO: Have a Disabled Picture Command Button Look Enabled

	Article: Q137962
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp300
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setting the DisabledPicture Property of a Picture command button to the same
	image used in the Picture property doesn't keep the image from showing disabled.
	This article explains how to make a disabled image appear to be enabled.
	
	MORE INFORMATION
	================
	
	If you need to have a picture command button that when disabled looks as if it
	is still enabled, you need to:
	
	1. Make a copy of the image, and give it a new name.
	
	2. Set the copy of the image as the DisabledPicture property.
	
	If you do not set an image for the DisabledPicture property, you get a dimmed
	shadow of your image, which you also get if you set the DisabledPicture property
	the same image as the Picture Property.
	
	Additional query words: gray VFoxWin
	
	======================================================================
	Keywords          : kbprogramming kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
