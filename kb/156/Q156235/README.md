---
layout: page
title: "Q156235: BUG: MODIFY WINDOW SCREEN Does Not Reset BackColor Property"
permalink: /kb/156/Q156235/
---

## Q156235: BUG: MODIFY WINDOW SCREEN Does Not Reset BackColor Property

	Article: Q156235
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbui kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the MODIFY WINDOW SCREEN command to reset the value of the BackColor
	property of the _SCREEN system variable does not work.
	
	WORKAROUND
	==========
	
	You can work around this by issuing the following command:
	
	     _SCREEN.ResetToDefault('BackColor')
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	According to the Help file in Visual FoxPro 5.0, to return the main Visual
	FoxPro window to its startup configuration, issue the MODIFY WINDOW SCREEN
	command without any additional clauses. When you do so, it visually resets the
	_SCREEN BackColor property to the startup color, which is white, but the value
	of the BackColor property still has the previous value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, issue the following commands:
	
	     _SCREEN.BackColor = RGB(192,192,192)
	     ? _SCREEN.BackColor    && The value of BackColor is 12632256.
	     MODIFY WINDOW SCREEN
	     ? _SCREEN.BackColor
	
	_SCREEN.BackColor changes to white visually, but the value of the BackColor
	property is still 12632256.
	
	Now issue these commands in the Command window:
	
	     _SCREEN.ResetToDefault('BackColor')
	     ? _SCREEN.BackColor
	
	The BackColor property is now 16777215 (which is white).
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbui kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
