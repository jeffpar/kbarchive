---
layout: page
title: "Q113530: BUG: Parent Folder Icon Not at Top of List in Filer"
permalink: /kb/113/Q113530/
---

## Q113530: BUG: Parent Folder Icon Not at Top of List in Filer

	Article: Q113530
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the name of a subfolder on the Macintosh Desktop contains leading spaces, it
	is listed before the parent folder icon (an arrow pointing to the left and up)
	in Filer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro version 2.5b for
	Macintosh.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a folder on the desktop named " Test" (without the quotation marks).
	  Note that this name contains a leading space.
	
	2. Start FoxPro.
	
	3. In the Command window, type "FILER" (without the quotation marks).
	
	4. In Filer, display the contents of the Desktop, which is shown as a directory
	  (folder) below the root directory (parent folder).
	
	Note that the " Test" folder is displayed at the top, followed by the parent
	folder icon. The parent folder icon should always be the first listed.
	
	Additional query words: vFoxmac FoxMac 3.00 blanks buglist2.50b akz
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
