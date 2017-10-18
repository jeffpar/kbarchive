---
layout: page
title: "Q135710: FIX: MaxLength Property Reverts to &quot;0&quot; in the Properties Sheet"
permalink: kb/135/Q135710/
---

## Q135710: FIX: MaxLength Property Reverts to &quot;0&quot; in the Properties Sheet

	Article: Q135710
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the MaxLength property of an edit box, it reverts back to 0 after
	you press ENTER and move to another property.
	
	WORKAROUND
	==========
	
	To get the MaxLength property to accept a number place an equal sign (=) in
	front of the number you enter (for example, =25).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Place an edit box on a form.
	
	2. Change the MaxLength property to 20, and press ENTER or click the check box.
	
	3. Move to a different property; for example, press UP ARROW to move to Margin.
	  The number you typed changes back to 0 (zero).
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
