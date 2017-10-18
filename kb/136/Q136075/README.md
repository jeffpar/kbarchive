---
layout: page
title: "Q136075: HOWTO: Disabling Menu Titles and Bars"
permalink: kb/136/Q136075/
---

## Q136075: HOWTO: Disabling Menu Titles and Bars

	Article: Q136075
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the SET SKIP OF command to disable a menu title or bar created
	using the Menu Builder, you may find the commands have no effect on your menu.
	This is because of the naming convention Visual FoxPro uses to name the objects
	in your menu. This article explains how to disable a menu title or bar
	successfully.
	
	MORE INFORMATION
	================
	
	When you run a user-created menu using the DO MYMENU.MPR syntax (using the name
	Mymenu as an example), Visual FoxPro sets your menu to the system variable
	_MSYSMENU. Hence, using syntax such as SET SKIP OF MENU MYMENU .T. fails to
	disable your menu. Visual FoxPro now sees your menu as the _MSYSMENU, so you
	could successfully disable your menu by using this syntax:
	
	     SET SKIP OF MENU _MSYSMENU.
	
	Similarly, you would find it impossible to disable a menu title named QUIT using
	syntax such as SET SKIP OF PAD quit OF MYMENU. Visual FoxPro assigns a variable
	name to both the menu title and the menu, so without referencing the correct
	name, this syntax fails. Your menu is now known to Visual FoxPro as _MSYSMENU,
	that part you can fix. But you still don't know the name of the menu title or
	bar.
	
	There are two ways to overcome this problem.
	
	- When you create your menu in the Menu Builder, you can specify a meaningful
	  name. To find the appropriate dialog box, modify your menu. Click the Options
	  button for the title or bar you want to name. The Prompt Options dialog box
	  appears. Select the Pad Name (Bar # if you are editing a bar) text box. The
	  Pad Name (Bar Number if you are editing a bar) dialog box appears. Enter a
	  name that has meaning to you.
	
	- After you generate your menu, you can open the .mpr file that was created and
	  find the variable name Visual FoxPro assigned to each item in your menu.
	  These variable names for the pads are a series of random numbers and letters
	  preceded by an underscore character. They look something like this:
	  _r3210vobi. With these system-generated names, you can reference the menu
	  titles (pads) and bars in your commands. Bars are sequentially numbered under
	  each pad and may be referred to in the following way. set skip of bar 1 of
	  _rlq0jcc27 .t. _rlq0jcc27 is the menu generated name for the pad.
	
	Additional query words: prompt popup
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
