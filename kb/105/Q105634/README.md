---
layout: page
title: "Q105634: PRB: Records from Other Platforms Remain in .SCX/.FRX"
permalink: kb/105/Q105634/
---

## Q105634: PRB: Records from Other Platforms Remain in .SCX/.FRX

	Article: Q105634
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.5b; WINDOWS:2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft FoxPro for Windows, version 2.5b 
	- Microsoft FoxPro for MS-DOS, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you transport a screen or report from one FoxPro platform to another,
	records for the other platform remain in the .SCX or .FRX file. In addition,
	records deleted on one platform remain in the file for other platforms.
	
	STATUS
	======
	
	This behavior is by design on all platforms to ensure cross-platform code
	compatibility when platform-specific features are used.
	
	For example, if a FoxPro for MS-DOS screen that contains text push buttons is
	transported to FoxPro for Macintosh, the developer may choose to use picture
	push buttons on the Macintosh instead. Therefore, the developer will delete the
	text push buttons that were transported from the MS-DOS platform and create
	picture push buttons for the Macintosh platform. However, the MS-DOS records
	remain so that the code can be properly re- created on the MS-DOS platform if
	the screen is retransported from the Macintosh platform.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250bDOS kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.5b; WINDOWS:2.5b,3.0
	
	=============================================================================
	
