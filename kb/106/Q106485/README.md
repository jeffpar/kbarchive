---
layout: page
title: "Q106485: PRB: Menu Hot Key (ALT+&lt;Key&gt;) Doesn't Work"
permalink: /kb/106/Q106485/
---

## Q106485: PRB: Menu Hot Key (ALT+&lt;Key&gt;) Doesn't Work

	Article: Q106485
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When user-defined menu pads are created, the "\<" characters allow a user to
	activate the user-defined menu pad by pressing ALT and then the key, but
	pressing the hot key (ALT+<key>) doesn't work. For example, if the menu
	pad is defined as "\<My Pad", pressing ALT and then M will activate the
	associated menu popup, but pressing ALT+M does not.
	
	CAUSE
	=====
	
	The hot key doesn't work because it hasn't been defined through the Options
	dialog box. A common misconception is that as long as "\<" is used to denote
	the hot key, the ALT+<key> key combination will also activate the menu
	popup. Instead, a hot key must be defined to do this.
	
	MORE INFORMATION
	================
	
	When a quick menu is created through the Menu Builder, hot keys and shortcut
	keys are automatically defined for the menu pads. For example, pressing ALT+D or
	pressing ALT (to select the menu bar) and then pressing D will open the Database
	menu.
	
	Additional query words: VFoxWin MBuilder FoxWin 2.50 2.50a 2.50b short cut accelerator quick pop up access key hotkey
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
