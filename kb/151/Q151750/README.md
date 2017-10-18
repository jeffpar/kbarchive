---
layout: page
title: "Q151750: BUG: SET SYSMENU OFF Malfunctioning"
permalink: kb/151/Q151750/
---

## Q151750: BUG: SET SYSMENU OFF Malfunctioning

	Article: Q151750
	Product(s): Microsoft FoxPro
	Version(s): 3.0; MACINTOSH:2.6a
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SET SYSMENU OFF command has been issued, the FoxPro menu is still
	visible and functional during program execution and some of the menu pads appear
	to be mislabeled when pulled down. Specifically, when the Format menu pad is
	chosen, it turns into the Tools menu; when the Tools menu is chosen, it turns
	into the Program menu; and when the Program menu is chosen, it turns into the
	Window menu. The Window menu does not drop down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The SET SYSMENU OFF command hides the main FoxPro menu bar during program
	execution in Visual FoxPro for Windows and FoxPro for Windows. This feature is
	not available on the Macintosh platform. Additionally, in Visual FoxPro for
	Macintosh, the Format, Tools, and Program menu pads appear to be mislabeled when
	they are chosen.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create the following program in Visual FoxPro:
	
	     ON KEY LABEL CTRL+F4 CANCEL
	     SET SYSMENU OFF
	     READ EVENTS
	
	2. Save and run the above program
	
	3. Click on the Format menu until it drops down. Note that it turns into the
	  Tools menu. Click on the Tools menu, and note that it turns into the Program
	  menu. Click on the Program menu, and note that it turns into the Window menu.
	  Click on the Window menu, and note that it does not drop down.
	
	Additional query words: 3.00 VFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300Mac
	Version           : :3.0; MACINTOSH:2.6a
	
	=============================================================================
	
