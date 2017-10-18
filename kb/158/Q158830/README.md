---
layout: page
title: "Q158830: FIX: OptionGroup with M, P, H, K Hot Keys Fire Valid"
permalink: kb/158/Q158830/
---

## Q158830: FIX: OptionGroup with M, P, H, K Hot Keys Fire Valid

	Article: Q158830
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an OptionGroup control has the alphabetic characters "M," "P," "H," and "K,"
	as hot keys, and the user moves through the OptionGroup using the direction (or
	arrow) keys, the Valid event fires.
	
	WORKAROUND
	==========
	
	For the Option button that has "M" as the hot key, add the following command to
	the GotFocus of this Option button:
	
	     ON KEY LABEL RIGHTARROW KEYBOARD '{DNARROW}'
	
	For the hot key "H," place the following command in the GotFocus:
	
	     ON KEY LABEL UPARROW KEYBOARD '{LEFTARROW}'
	
	For the hot key "K," place the following command in the GotFocus:
	
	     ON KEY LABEL LEFTARROW KEYBOARD '{UPARROW}'
	
	For the hot key "P," place the following command in the GotFocus:
	
	     ON KEY LABEL DNARROW KEYBOARD '{RIGHTARROW}'
	
	Then add the ON KEY command to the LostFocus of each Option button to restore all
	keys to their default behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0 for Windows.
	
	MORE INFORMATION
	================
	
	If the option button has a hot key that begins with an "M," pressing the
	right-arrow key fires the Valid event of the option button. If the hot key is an
	"H," the up-arrow fires the Valid. If the hotkey is a "K," the left- arrow fires
	the Valid, and if it is a "P," the down-arrow fires the Valid. In addition, when
	the option button uses these hot keys, the focus does not leave that particular
	option button when pressing the arrow key that fires the Valid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add an OptionGroup control to the form from the Form Controls toolbar.
	
	3. Change the ButtonCount property to four in the Property sheet.
	
	4. Click the OptionGroup control to select it, then right-click it to bring up
	  the shortcut menu. Click Edit.
	
	5. In the OptionGroup, click on the Option1 button. Change the Caption property
	  to "\<Microsoft" (without the quotation marks) in the Property sheet.
	
	6. Open the Valid event from the Methods tab of the Property sheet. Enter the
	  following:
	
	        WAIT WINDOW "Here in valid" TIMEOUT 1
	
	Repeat steps 4 through 6, but enter "\<H" (without the quotation marks),
	"\<K" (without the quotation marks), and "\<P" (without the quotation
	marks) in the Caption property for each of the three remaining option buttons.
	
	Run the form and attempt to move off of each of the option buttons using
	right-arrow for the "M" hot key, the up-arrow for "H," left-arrow for "K," and
	down-arrow for "P."
	
	Additional query words: VFoxWin kbdsd
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
