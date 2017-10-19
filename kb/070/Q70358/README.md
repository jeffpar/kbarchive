---
layout: page
title: "Q70358: BUG: Num of Help Topic Lines May Cause Trash or GP Fault in QH"
permalink: /kb/070/Q70358/
---

## Q70358: BUG: Num of Help Topic Lines May Cause Trash or GP Fault in QH

	Article: Q70358
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.7,1.83; OS/2:1.6,1.7,1.83
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft QuickHelp for MS-DOS, versions 1.7, 1.83 
	- Microsoft QuickHelp for OS/2, versions 1.6, 1.7, 1.83 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using QuickHelp (QH.EXE) with certain help files, a problem (described
	below) may occur if there is exactly one blank line below the text displayed by
	QuickHelp. In this situation, the help lines can be shifted down one line (by
	positioning the mouse on the elevator box and clicking the left mouse button),
	which results in the problem.
	
	The problem that occurs when the lines are shifted down depends upon whether you
	are running QuickHelp under DOS or OS/2. Under DOS, the screen will go blank.
	Scrolling up at this point puts garbage on the screen.
	
	Under OS/2, the list of topics will shift down one row leaving a blank line at
	the top of the screen. The topics brought up by selecting any line will be the
	topic listed on the next line down. If you then select the blank line with the
	mouse or move off the blank line and back onto it with the cursor, you will get
	a protection violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in QuickHelp. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	The OS2.HLP help file that shipped with Presentation Manager Toolkit for OS/2
	version 1.20 can be used to demonstrate this problem. Make sure OS2.HLP can be
	accessed from QuickHelp and do the following:
	
	1. Before entering QuickHelp, enter a 50-line display mode.
	
	2. Start QuickHelp.
	
	3. Select Categories and choose OS/2 API.
	
	4. Choose Function group.
	
	5. At this point, the elevator for the scroll bar will appear at the bottom of
	  the page. Position the cursor on the elevator, just above the down arrow of
	  the scroll bar, and click the left mouse button.
	
	6. The highlight will be at the top of the screen on a blank line. Press the UP
	  ARROW key.
	
	Depending on the operating system, one of the previously described problems will
	occur.
	
	Other situations where these problems may occur are in 25-line mode on the
	"Region functions" screen or the "Window functions." These screens can be
	reached by selecting Categories, choosing OS/2 API, and then sequencing through
	the screens with the N key until reaching the appropriate screen.
	
	Additional query words: 1.60 1.70
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbQBASICSearch kbQuickHelpSearch kbQuickHelp170DOS kbQuickHelp183DOS kbQuickHelp170OS2
	Version           : MS-DOS:1.7,1.83; OS/2:1.6,1.7,1.83
	
	=============================================================================
	
