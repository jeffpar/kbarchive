---
layout: page
title: "Q162554: BUG: MODIFY COMMAND GETFILE() Creates a New File"
permalink: kb/162/Q162554/
---

## Q162554: BUG: MODIFY COMMAND GETFILE() Creates a New File

	Article: Q162554
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the GETFILE() function with the MODIFY COMMAND command to open a file
	without an extension creates a new file with a .prg extension. The original file
	is not opened.
	
	RESOLUTION
	==========
	
	In FoxPro 2.6a for the Macintosh, use the MODIFY FILE command instead of the
	MODIFY COMMAND command with the GETFILE() function.
	
	However, in Visual FoxPro 3.0b for the Macintosh, using GETFILE() with the MODIFY
	FILE has the same problem as GETFILE() with MODIFY COMMAND. The command opens a
	new file with a .txt extension.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a text file named Test. Make sure the file does not have an extension.
	
	2. In the Command window, type the following command and press enter:
	
	        MODIFY COMMAND GETFILE()
	
	3. Select the "All Files" check box and locate the file named Test.
	
	4. Highlight Test and choose Open.
	
	5. An edit window appears; however, a new file named Test.prg opens.
	
	Additional query words: VFoxMac FoxMac buglist3.00b buglist2.60a
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
