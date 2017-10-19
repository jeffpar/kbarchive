---
layout: page
title: "Q140290: How to Add a Clock Display to a Form"
permalink: /kb/140/Q140290/
---

## Q140290: How to Add a Clock Display to a Form

	Article: Q140290
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, there are two locations to place a clock display. The first is
	in the upper-right corner of the Visual FoxPro desktop. This is done by using
	the SET CLOCK ON command. The second is on the status bar at the bottom of the
	Visual FoxPro window. This is done by using the SET CLOCK STATUS ON command.
	
	This article shows by example how to place a clock display on a form by using a
	text box and a timer control.
	
	MORE INFORMATION
	================
	
	Steps to Place a Clock Display on a Form
	----------------------------------------
	
	1. Create a new form.
	
	2. Add a timer control to the form.
	
	3. Add a text box to the form.
	
	4. Set the following properties and events for the timer control:
	
	  Name: clock
	  Interval: 1000
	  Timer event: thisform.tdisplay.refresh
	
	5. Set the following properties, events, and methods for the text box:
	
	  Name: tdisplay
	  Init event: THIS.value=time()
	  Refresh method: THIS.value=time()
	
	6. Run the form, and note that the clock is updated every second.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
