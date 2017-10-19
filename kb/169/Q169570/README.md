---
layout: page
title: "Q169570: PPT7: Mouse Pointer Disappears After Editing Graph"
permalink: /kb/169/Q169570/
---

## Q169570: PPT7: Mouse Pointer Disappears After Editing Graph

	Article: Q169570
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbusage kbdta kbgraph kbAddin
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit a Microsoft Graph 5 object in Microsoft PowerPoint, the pointer
	disappears if you click outside the graph to return to PowerPoint. This problem
	usually occurs the second time that you return from editing the graph.
	
	NOTE: This problem occurs when you are running PowerPoint on Microsoft Windows
	95. It does not occur when you are running PowerPoint on Windows NT.
	
	CAUSE
	=====
	
	This problem occurs if you are running the 16-bit version of the Package Command
	Manager, which is part of the Microsoft Systems Management Server (SMS) client.
	This problem does not occur if you are running the 32-bit version of the SMS
	client.
	
	WORKAROUND
	==========
	
	
	Use one of the following methods to work around the problem.
	
	Method 1: Right-click the Slide
	-------------------------------
	
	To make your pointer visible again, right-click any part of the slide.
	
	Method 2: Manually Quit Pcmwin16
	--------------------------------
	
	1. Press "CTRL+ALT+DELETE" (without the quotation marks).
	
	2. In the Close Program dialog box, click Pcmwin16, and then click End Task.
	
	NOTE: These steps end the Pcmwin16 task for the current Windows session. When you
	restart Windows, Pcmwin16 starts normally.
	
	Method 3: Remove SMS Client from the Win.ini File
	-------------------------------------------------
	
	1. Make a backup copy of the Win.ini file located in the Windows folder.
	
	2. Open the Win.ini file in a text editor, such as Notepad.
	
	3. Type a semicolon (";" (without the quotation marks)) at the beginning of the
	  Load= and Run= entries to comment them out.
	
	4. Save and close the Win.ini file.
	
	5. Restart Windows.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172464 SMS: PowerPoint Loses Cursor When PCMWIN16 Is Loaded
	
	
	Additional query words: ppt7 ppt95 nt16ap netutils
	
	======================================================================
	Keywords          : kbenv kbinterop kbusage kbdta kbgraph kbAddin 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
