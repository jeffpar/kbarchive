---
layout: page
title: "Q58384: Known Problems with Windows Solitaire"
permalink: /kb/058/Q58384/
---

## Q58384: Known Problems with Windows Solitaire

{% raw %}

	Article: Q58384
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following known problems in Windows Solitaire
	(SOL.EXE):
	
	- F1 Key Does Not Activate Help
	
	- Help Does Not Close When Exiting Solitaire
	
	- No Cards Are Displayed in Solitaire
	
	- Two Instances of Solitaire Cause Screen Redraw Problem
	
	- Icon Truncated When Solitaire Is Loaded with the LOAD= Option
	
	MORE INFORMATION
	================
	
	F1 Key Does Not Activate Help
	-----------------------------
	
	In Microsoft Windows 3.0 and 3.1 Solitaire (SOL.EXE), the F1 key does not
	activate the Help Index. To work around this problem, from the Help menu choose
	the Index command with the mouse or press ALT+H, I.
	
	Help Does Not Close When Exiting Solitaire
	------------------------------------------
	
	If Help is active in Microsoft Windows 3.0 Solitaire, and you exit Solitaire
	without quitting Help, Help does not close.
	
	Microsoft has confirmed this to be a problem in Solitaire versions 3.0 and 3.0a.
	Due to design changes, this problem does not occur in Windows 3.1.
	
	No Cards Are Displayed in Solitaire
	-----------------------------------
	
	If you start Solitaire (SOL.EXE) minimized, no cards are displayed when you
	restore the window. This problem occurs if you have Solitaire on the WIN.INI
	LOAD= line or if you run Solitaire from the Program Manager with the SHIFT key
	pressed.
	
	To start a new game, choose Deal from the Game menu.
	
	Microsoft has confirmed this to be a problem in Windows Solitaire version 3.0 and
	3.0a. This problem does not occur in later versions of Windows.
	
	Two Instances of Solitaire Cause Screen Redraw Problem
	------------------------------------------------------
	
	If you run two games of Solitaire and then close the first game, the second game
	has screen redraw problems when you restore or maximize it.
	
	The green background displays only where the cards can be placed, and a white
	background displays everywhere else. This is a cosmetic problem only; you can
	work around it by dealing the cards again. This works until Solitaire is again
	minimized and then restored or maximized. If you run only one game of Solitaire,
	this problem does not occur.
	
	Microsoft has confirmed this to be a problem in Windows Solitaire version 3.0 and
	3.0a. This problem does not occur in later versions of Windows.
	
	Icon Truncated When Solitaire Is Loaded with the LOAD= Option
	-------------------------------------------------------------
	
	The Microsoft Windows Solitaire icon is either truncated or nonexistent if you
	use the LOAD= line in the WIN.INI file to load Solitaire. This problem only
	occurs if SOL.EXE is the first program on the LOAD= line.
	
	Microsoft has confirmed this to be a problem in Windows Solitaire version 3.0 and
	3.0a. This problem does not occur in later versions of Windows.
	
	KBCategory: kbtool kbbuglist
	KBSubcategory: win30 win31
	
	Additional query words: 3.0 3.00 3.0a 3.00a left open 3.1 3.11 spliced cut gone not present
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
