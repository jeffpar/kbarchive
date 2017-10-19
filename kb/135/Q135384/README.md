---
layout: page
title: "Q135384: FIX: Unbalanced Parentheses in IF Condition Not Seen by Parser"
permalink: /kb/135/Q135384/
---

## Q135384: FIX: Unbalanced Parentheses in IF Condition Not Seen by Parser

	Article: Q135384
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6a; WINDOWS:2.6a,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive incorrect results from an IF...ENDIF when you have unbalanced
	parentheses in the logical expression or if the later part of the expression has
	a syntactical error and the beginning of the expression can be logically
	evaluated.
	
	CAUSE
	=====
	
	This is a compatibility issue. Anything that cannot be logically parsed in the
	expression is treated as a comment on the same line if at least some of the
	first part of the expression can be evaluated to a logical value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Problem
	-------------------------
	
	  IF (.F.)) OR (.T.)
	     ?"true"
	  ELSE
	     ?"false"
	  ENDIF
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aDOS kbFoxPro260a kbVFP300 kbVFP300b
	Version           : MS-DOS:2.6a; WINDOWS:2.6a,3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
