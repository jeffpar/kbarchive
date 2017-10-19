---
layout: page
title: "Q120549: How to Start FoxPro from the Apple Menu"
permalink: /kb/120/Q120549/
---

## Q120549: How to Start FoxPro from the Apple Menu

	Article: Q120549
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to be able to start FoxPro from the Apple menu, place an alias for
	the FoxPro application program in the "<volume_name>:System Folder:Apple
	Menu Items" folder.
	
	MORE INFORMATION
	================
	
	An alias is a pointer to a file. It is generally safer to leave the original
	"Microsoft FoxPro" file (or "Microsoft Visual FoxPro" with Visual FoxPro for
	Macintosh 3.0b) in the FoxPro folder and place an alias for it elsewhere.
	
	NOTE: Items placed in the "<volume_name>:System Folder:Apple Menu Items"
	folder do not need to be removed when you perform a clean boot.
	
	Steps to Place a FoxPro Alias on the Apple Menu
	-----------------------------------------------
	
	1. Open the FoxPro, or the Visual FoxPro, folder.
	
	2. Select the "Microsoft FoxPro", or the "Microsoft Visual FoxPro", file.
	
	3. From the File menu, choose Make Alias. This creates a file called "Microsoft
	  FoxPro alias."
	
	4. Open the "System Folder:Apple Menu Items" folder, located on your main hard
	  disk (volume).
	
	5. Drag the "Microsoft FoxPro alias" file from the FoxPro folder to the "System
	  Folder:Apple Menu Items" folder.
	
	NOTE: You can change the name of the "Microsoft FoxPro alias" file.
	
	The next time you choose the Apple menu, you will see the alias file.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: vFoxMac FoxMac akz
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
