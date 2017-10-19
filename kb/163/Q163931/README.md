---
layout: page
title: "Q163931: BUG: FxAlert() Function Does Not Appear Centered"
permalink: /kb/163/Q163931/
---

## Q163931: BUG: FxAlert() Function Does Not Appear Centered

	Article: Q163931
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300bBUGkbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default position of the FxAlert() function does not appeared centered
	horizontally when invoked in Visual FoxPro 3.0b for the Macintosh. When compared
	with FoxPro 2.6a for the Macintosh, the FxAlert() function appears much closer
	to the left-hand corner of the Visual FoxPro desktop after assigning the
	nHorizontal and nVertical parameters the negative one (-1) value.
	
	In FoxPro for the Macintosh 2.6a, the dialog appears centered horizontally.
	
	RESOLUTION
	==========
	
	Use the Visual FoxPro MESSAGEBOX() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The FxAlert() function topic in the FoxTools Help file, located in the Microsoft
	Visual FoxPro\Tools folder, states:
	
	  Use a value of -1 for either nHorizontal or nVertical to accept the default
	  position.
	
	The FoxTools Help file contains the complete syntax for the FxAlert() function.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual FoxPro for the Macintosh Command window, issue the following
	  commands:
	
	        SET LIBRARY TO HOME()+"FoxTools.cfm"<BR/>
	        =FxAlert(1,257,-1,-1,"Hello")
	
	2. Note that the Alert box is not centered horizontally.
	
	3. If you have FoxPro 2.6a for the Macintosh, the FxAlert() syntax remains the
	  same. However, change the line:
	
	        SET LIBRARY TO HOME()+"FoxTools.cfm"
	
	  -to-
	
	        SET LIBRARY TO GETFILE()
	
	  Navigate to the System\Extensions folder and open the FoxTools.mlb file.
	
	4. Note that in FoxPro for the Macintosh 2.6a, the Alert dialog is centered
	  horizontally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300bBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
