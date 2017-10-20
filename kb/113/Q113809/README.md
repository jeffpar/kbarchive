---
layout: page
title: "Q113809: PRB: FoxPro for Mac Displays Dialog Boxes in Unreadable Font"
permalink: /kb/113/Q113809/
---

## Q113809: PRB: FoxPro for Mac Displays Dialog Boxes in Unreadable Font

{% raw %}

	Article: Q113809
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some of the dialog boxes or other screen elements in FoxPro for Macintosh may
	appear in FoxFont, which may look unappealing or be unreadable. Among others,
	the affected items may include the New File dialog box, the Font dialog box, the
	View window, or the status bar.
	
	CAUSE
	=====
	
	According to Part 4 of the "FoxPro Readme" file, the minimum fonts required to
	run FoxPro for Macintosh are Geneva 9, Courier 10, and Monaco
	
	1. If any of these fonts are not installed or available to the System,
	
	FoxFont may be substituted.
	
	RESOLUTION
	==========
	
	To correct the problem, you may need to disable any third-party font packages.
	If the Geneva font is not installed on the Macintosh, you can copy it to the
	System Folder from the Fonts disk that ships with the Macintosh System 7
	software.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Quit FoxPro for Macintosh.
	
	2. Do one of the following, depending on which version of the System software
	  you are using:
	
	   - If you are using System 7.1 or System 7.5.3, drag the Geneva font from the
	     System Folder:Fonts folder to the Macintosh desktop.
	
	   - If you are using System 7.0, drag the Geneva font from the System
	     Folder:System file to the Macintosh desktop.
	
	3. Start FoxPro.
	
	Note that the text in the View window and the status bar is now displayed in
	FoxFont.
	
	Additional query words: vFoxMac FoxMac weird funny strange unusual ugly
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
