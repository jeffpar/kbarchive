---
layout: page
title: "Q136541: PRB: Visual SourceSafe Books Online Help Viewer Crashes"
permalink: kb/136/Q136541/
---

## Q136541: PRB: Visual SourceSafe Books Online Help Viewer Crashes

	Article: Q136541
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Start Books Online. The introductory dialog that appears includes an OK command
	button, a Cancel command button, and a grayed and disabled Help button. Pressing
	F1 to bring up a help dialog causes one of the following error messages to be
	appear, depending on the operating system that you are using:
	
	Windows NT
	----------
	
	  The instruction at "0x00429318" referenced memory at "0x00000320". The memory
	  could not be "read".
	
	Windows 95
	----------
	
	  The program has performed an illegal operation and will be shut down.
	
	After you dismiss this dialog, the InfoViewer terminates.
	
	CAUSE
	=====
	
	Visual SourceSafe ships with the InfoViewer application to enable documentation
	to be viewed online. This is a known InfoViewer bug.
	
	RESOLUTION
	==========
	
	Do not press F1 when you see a grayed help button. To view one of the topics,
	select its title in the list box and click OK. If you've decided you don't wish
	to view any of the listed topics, press Cancel.
	
	STATUS
	======
	
	This problem will be fixed in InfoViewer 2.52.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Microsoft Visual SourceSafe program group in Program Manager, or
	  navigate to the Visual SourceSafe menu from the Start button.
	
	2. Double-click the Books Online icon to start a copy of the InfoViewer browser.
	  A dialog appears with enabled OK and Cancel buttons, as well as a disabled
	  Help button.
	
	3. Press F1.
	
	RESULT: You receive one of the two error messages listed under the SYMPTOMS
	section, depending on your operating system.
	
	Additional query words: gp fault crash
	
	======================================================================
	Keywords          : kbSSafe400 
	Issue type        : kbprb
	
	=============================================================================
	
