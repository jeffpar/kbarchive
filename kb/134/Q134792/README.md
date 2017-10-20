---
layout: page
title: "Q134792: FIX: Pointer in Drop-Down Combo Box Not at the Beginning"
permalink: /kb/134/Q134792/
---

## Q134792: FIX: Pointer in Drop-Down Combo Box Not at the Beginning

{% raw %}

	Article: Q134792
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the keyboard to move to a drop-down combo box for the first time,
	the mouse pointer does not go to the beginning of the text in the editing area
	as it should. It shows up at the end of the text in the editing area of the
	combo box.
	
	WORKAROUND
	==========
	
	In the Init method of the combo box, place the following line of code:
	
	     THIS.SelStart=0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This problem applies only to drop-down combo boxes (property Style=0), not to
	drop-down list boxes. This is because items in the drop-down list cannot be
	edited or added in the list box, hence no pointer.
	
	The problem occurs only when you move to the combo box for the first time by
	using the keyboard. When you use the mouse, the pointer is placed in the
	position that the mouse is clicked. Also, even when moving to the combo box by
	using the keyboard, if the pointer is placed in a location other than the end
	with an arrow key, it will be located in that position when the combo box is
	reentered with the keyboard.
	
	Text boxes and edit boxes by default position the pointer at the beginning of the
	displayed text.
	
	The SelStart property of the combo box is read-only at design time and appears as
	zero(0) in the properties window. This property controls the position of the
	pointer in the editing field for combo boxes, text boxes and edit boxes. It can
	be accessed at run time though.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add a combo box to the form.
	
	3. Set the Style property to 0 - dropdown combo
	
	4. Place the following code in the Init Method of the combo box:
	
	     THIS.AddItem("This is a test")
	     THIS.AddItem("This is another test")
	     THIS.ListIndex=1
	     *THIS.SelStart=0    && leave this as a comment for the first run
	
	5. Save and run the form. Note that the pointer is at the end of the text in the
	  combo box.
	
	6. Modify the form and remove the asterisk from the last line (the
	  THIS.SelStart=0 line) that is in the Init Method of the combo box. Save and
	  rerun the form. The pointer should now be at the beginning of the text now.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
