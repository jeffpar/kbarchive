---
layout: page
title: "Q141456: FIX: Pressing F1 for Help on Error Message Doesn't Work"
permalink: /kb/141/Q141456/
---

## Q141456: FIX: Pressing F1 for Help on Error Message Doesn't Work

	Article: Q141456
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the F1 key on a compiler error or warning in the output window does not
	bring up help for the error unless the caret is positioned on the error number.
	If there is no match in Books Online for the word the caret is on, a message
	similar to this appears:
	
	  The keyword "<keyword>" was not found.
	  Choose OK to see the closest match to "<keyword>" in the Visual C++
	  Books Online 4.0 keyword index.
	
	RESOLUTION
	==========
	
	To view the help text for an error message, make sure the caret is on the error
	number, and then press the F1 key.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
