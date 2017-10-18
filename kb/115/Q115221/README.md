---
layout: page
title: "Q115221: PRB: SET SKIP OF MENU _MSYSMENU .T. Not Disabling System Menu"
permalink: kb/115/Q115221/
---

## Q115221: PRB: SET SKIP OF MENU _MSYSMENU .T. Not Disabling System Menu

	Article: Q115221
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to the online Help and the "Language Reference" manual, the SET SKIP
	OF MENU _MSYSMENU .T. command lets you disable the entire FoxPro system menu
	bar.
	
	However, the SET SKIP OF MENU _MSYSMENU .T. command only works as designed in
	both FoxPro for MS-DOS and Windows. In FoxPro for Macintosh, the SET SKIP OF
	MENU _MSYSMENU .T. does not disable the entire system menu, but when you attempt
	to select any of the menu options, FoxPro for Macintosh ignores the selection.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Load FoxPro for MS-DOS or Windows. In the Command window, issue the SET SKIP
	  OF MENU _MSYSMENU .T. command. The entire FoxPro system menu bar will be
	  disabled.
	
	2. Load FoxPro for Macintosh. In the Command window, issue the SET SKIP OF MENU
	  _MSYSMENU .T. command. The entire FoxPro system menu bar remains enabled.
	
	3. Click any of the menu options; you will not receive any response.
	
	Additional query words: VFoxMac FoxMac 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
