---
layout: page
title: "Q141635: FIX: ToolTipText Message Blank If Longer Than 50 Characters"
permalink: kb/141/Q141635/
---

## Q141635: FIX: ToolTipText Message Blank If Longer Than 50 Characters

	Article: Q141635
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
	
	The Symptoms for version 3.0 are different from those for version 3.0b. In
	Visual FoxPro 3.0, the ToolTipText message does not display at all if it
	contains more than 50 characters. In Visual FoxPro 3.0b, however, the
	ToolTipText message displays the first 50 characters of the ToolTipText.
	
	CAUSE
	=====
	
	The ToolTipText message is limited to 50 characters in length.
	
	WORKAROUND
	==========
	
	In both Visual FoxPro 3.0 and 3.0b, limit the length of the ToolTipText to fewer
	than 50 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form, and set the ShowTips property of the form to true.
	
	2. Place a text box on the form.
	
	3. In the ToolTipText property of the text box, type "fifty-one (51) letter As"
	  (without the quotation marks).
	
	4. Run the form, and move the mouse pointer over the text box. In version 3.0,
	  no ToolTipText message appears. In version 3.0b, the message is truncated
	  after the 50th character.
	
	5. In version 3.0, modify the form, and remove one of the letters in the
	  ToolTipText property. Run the form, and the ToolTipText message appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
