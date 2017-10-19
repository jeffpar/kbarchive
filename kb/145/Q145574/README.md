---
layout: page
title: "Q145574: FIX: IDE Appears to Hang If Browse Key (F11 or F12) Is Pressed"
permalink: /kb/145/Q145574/
---

## Q145574: FIX: IDE Appears to Hang If Browse Key (F11 or F12) Is Pressed

	Article: Q145574
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbui kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Developer Studio appears to hang when the browse key (F11 or F12 depending
	on the Compatibility settings) is pressed at or near an asterisk(*) in a source
	file. This will occur when there is a large .bsc file open, such as Mfc.bsc.
	Developer Studio is not actually hung, it is trying to build a very large list
	of symbols for the user to choose from.
	
	CAUSE
	=====
	
	Because of the way Developer Studio determines the selected symbol, it will try
	to build a list of all symbols in the browser database file. For example, if you
	type PreTransla* and press the browse key while Mfc.bsc is open, the Developer
	Studio attempts to browse only on the asterisk and not on PreTransla*.
	
	RESOLUTION
	==========
	
	To use the wildcard in a browse, bring up the browse dialog box and enter the
	query here instead of from the source file. Or use the mouse to select the full
	query text (including the wildcard) before pressing the browse key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbui kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
