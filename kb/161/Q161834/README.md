---
layout: page
title: "Q161834: FIX: Long String Placed in RowSource Property Causes Error"
permalink: /kb/161/Q161834/
---

## Q161834: FIX: Long String Placed in RowSource Property Causes Error

	Article: Q161834
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
	
	Setting the RowSource property of a list or combo box object to a long string
	causes Visual FoxPro 3.0 to report an error message or to shutdown. The behavior
	depends on the platform Visual FoxPro runs on. In the Macintosh version, the
	following error appears:
	
	  Unknown Error Code 1482162264
	
	And the Debug window highlights the following line:
	
	     This.Combo1.RowSourceType = 1
	
	In Visual FoxPro 3.0b for Windows running on Windows 95, the program shuts down
	after displaying the following error:
	
	  This program performed an illegal operation and will be shut down.
	
	After pressing the Details button, the following error appears:
	
	  VFP caused an invalid page fault in module Kernel32.dll at <register
	  address>.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a combo box to the form.
	
	3. In the Activate event of the form, place the following code:
	
	        cText = ""
	        FOR nLoop = 1 TO 25
	           cText = cText + REPLICATE( "X", 10 ) + ","
	        ENDFOR
	        cText = SUBSTR( cText, 1, LEN( cText ) - 1 )
	        This.Combo1.RowSource = cText
	        This.Combo1.RowSourceType = 1
	
	4. Run the form.
	
	Additional query words: VFoxWin VFoxMac kbdsd
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
