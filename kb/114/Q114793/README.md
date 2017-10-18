---
layout: page
title: "Q114793: Color Sets Not Supported on FoxPro for Macintosh"
permalink: kb/114/Q114793/
---

## Q114793: Color Sets Not Supported on FoxPro for Macintosh

	Article: Q114793
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro for Macintosh does not support the use of color set commands. Any command
	that creates or loads color sets will be ignored.
	
	The SET COLOR SCHEME and SET COLOR TO commands are fully supported and should be
	used instead of SET COLOR SET.
	
	MORE INFORMATION
	================
	
	Color sets are incorrectly referred to as being supported in the following
	sections of the FoxPro for Macintosh version 2.5b documentation:
	
	- "Language Reference," pages 281, 711, and 713
	
	- "Installation and Macintosh Features Guide," page 28
	
	Additional query words: vFoxMac FoxMac colorset colour colourset docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
