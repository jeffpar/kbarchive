---
layout: page
title: "Q162085: FIX: Using SET COLOR TO &amp; Printing a Report Prints Blank Page"
permalink: kb/162/Q162085/
---

## Q162085: FIX: Using SET COLOR TO &amp; Printing a Report Prints Blank Page

	Article: Q162085
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SET COLOR OF SCHEME or SET COLOR TO command to change the
	foreground color of the desktop to white, any reports that are previewed or sent
	to the printer are blank. These commands are still used for backward
	compatibility. The _SCREEN.FORECOLOR and _SCREEN.BACKCOLOR commands should be
	used instead.
	
	RESOLUTION
	==========
	
	Using the following commands instead results in the Report Writer performing
	properly:
	
	  " _SCREEN.FORECOLOR=RGB(255,255,255)
	  _SCREEN.BACKCOLOR=RGB(0,0,255) " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual FoxPro 5.0 for
	Windows.
	
	MORE INFORMATION
	================
	
	The SET COLOR OF SCHEME or SET COLOR TO commands are used to set colors in the
	FoxPro environment. Issuing one of the following commands changes the foreground
	color of FoxPro's desktop to white and the background color to blue:
	
	  SET COLOR TO w+/b
	  SET COLOR OF SCHEME 1 to RGB(255, 255, 255, 0, 0, 150)
	
	Issuing the CLEAR command afterward changes the desktop colors. If a FoxPro
	report is then previewed or printed, the result is blank pages.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following code into the Command window:
	
	        SET COLOR TO w+/b
	
	2. Create a quick report and preview it. Note that the pages are blank and can
	  be paged through depending on the number of records there in the table.
	  Sending the report to the printer prints out blank pages.
	
	3. Quit FoxPro and after restarting, type the following code in the Command
	  window:
	
	        _SCREEN.FORECOLOR=RGB(255,255,255)
	        _SCREEN.BACKCOLOR=RGB(0,0,255)
	        CLEAR
	
	4. Now preview or print the report and note that the pages of the report have
	  data in them.
	
	Additional query words: invisible hidden
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
