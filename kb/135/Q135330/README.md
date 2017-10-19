---
layout: page
title: "Q135330: FIX: StatusBarText Does Not Change with SetFocus Method"
permalink: /kb/135/Q135330/
---

## Q135330: FIX: StatusBarText Does Not Change with SetFocus Method

	Article: Q135330
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
	
	The text string on the Status Bar does not show the correct object StatusBarText
	property with the SetFocus method.
	
	WORKAROUND
	==========
	
	You can substitute KEYBOARD '{TAB}' for the line thisform.text1.setfocus as many
	times as necessary to move to the desired object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form with three text boxes and one command button.
	
	2. Edit the property of each of the text boxes and the command button with a
	  unique text string for the StatusBarText property.
	
	3. In the Click event procedure of the command button, enter this code:
	
	     THISFORM.TEXT1.SETFOCUS
	     THISFORM.REFRESH
	
	4. Run your form.
	
	You will observe that you can press the TAB key or click to and from any object
	on the form, and you will see the correct text on the Status Bar for the object
	that has the focus.
	
	However, if you click the command button, the pointer moves to the Text1 object,
	but you will see that the text on the Status Bar is from the property of the
	command button and not the current object (Text1).
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
