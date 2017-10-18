---
layout: page
title: "Q115331: BUG: Page Eject Before/After Doesn't Work w/ Command Window"
permalink: kb/115/Q115331/
---

## Q115331: BUG: Page Eject Before/After Doesn't Work w/ Command Window

	Article: Q115331
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
	
	When you are printing the contents of the Command window, specifying Page Eject
	Before or Page Eject After has no effect when you are printing to an Apple
	LaserWriter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro version 2.5b for
	Macintosh.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use the Chooser to set your Macintosh up to print to a LaserWriter.
	
	2. Start FoxPro.
	
	3. In the Command window, type "WAIT WINDOW" (without the quotation marks), and
	  then press ENTER.
	
	4. From the File menu, choose Print.
	
	5. In the Print dialog box, select the Page Eject Before and Page Eject After
	  check boxes. Choose OK.
	
	Note that blank pages do not print before or after the page containing the
	Command window text.
	
	Additional query words: vFoxmac FoxMac 3.00 formfeed form feed buglist2.50b akz
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
