---
layout: page
title: "Q149518: BUG: OK Button Callback Not Called in Video Poker Sample"
permalink: kb/149/Q149518/
---

## Q149518: BUG: OK Button Callback Not Called in Video Poker Sample

	Article: Q149518
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is a problem in the Video Poker Game sample included with Microsoft
	Fortran PowerStation 4.0. If you change a value of one of the scoring hands
	payoff values in the Poker Paytable dialog box and press the ENTER key while the
	changed payoff value edit box has the focus, the OK button callback routine
	isn't called. Consequently, the changed payoff values are not saved. This
	problem also occurs if you press the OK button's shortcut keys (Alt+O).
	
	The OK button's callback routine is called and the payoff values saved only when
	the user clicks the OK button with the mouse or presses the TAB key to move to
	the OK button and then presses the ENTER key.
	
	CAUSE
	=====
	
	The IDD_POKERPAY dialog box has two different OK buttons, one directly on top of
	the other, and both are selected as the default button. The dialog box manager
	is picking the IDOK2 (not visible) OK button when you exit the dialog, but the
	callback function is expecting the other button IDCHECKOK (visible) to be the
	default.
	
	RESOLUTION
	==========
	
	Remove the IDOK2 button from the IDD_POKERPAY dialog box. In Developer Studio,
	with the Video Poker Game project open in the active workspace select the
	Poker.rc file from the file viewer and open the IDD_POKERPAY dialog. Once the
	dialog is open, highlight and drag the visible OK button to one side
	(IDCHECKOK). This should reveal a second OK button hiding directly underneath
	the first one (IDOK2). This is the button that must be removed from the dialog.
	Select it, and delete it. After deleting the IDOK2 button, move the correct
	button (IDCHECKOK) back to its original location, and rebuild the Video Poker
	Game project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Copy the "POKER: Video Poker Game" sample files from FPS 4.0 Books Online in
	  the Samples/General section to your computer's hard disk.
	
	2. Run the Poker.exe program and open the Poker Paytable dialog box by selecting
	  the Edit Paytable option from the Game menu.
	
	3. Change the Royal Flush edit box value to 200, and press the ENTER key, or
	  press the OK button's shortcut keys (Alt+O).
	
	4. From the Game menu, select the Edit Paytable option again. Note the value
	  entered in the Royal Flush edit box in Step 3 was not saved.
	
	REFERENCES
	==========
	
	Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0, FPS
	4.0 Books Online, Samples, General, POKER: Video Poker Game.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
