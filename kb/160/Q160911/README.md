---
layout: page
title: "Q160911: FIX: &quot;Mouse Click Middle&quot; Command Produces Error Message"
permalink: /kb/160/Q160911/
---

## Q160911: FIX: &quot;Mouse Click Middle&quot; Command Produces Error Message

	Article: Q160911
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type the "Mouse Click Middle" command, the following error message
	appears:
	
	  Command contains unrecognized phrase/keyword.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	The Mouse command should support Left, Right, and Middle clauses.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the following line of code and press Enter:
	
	     MOUSE CLICK MIDDLE
	
	The error message appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
