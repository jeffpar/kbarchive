---
layout: page
title: "Q164414: FIX: MSDEV Error: &quot;The Requested Topic Does Not Exist&quot;"
permalink: /kb/164/Q164414/
---

## Q164414: FIX: MSDEV Error: &quot;The Requested Topic Does Not Exist&quot;

	Article: Q164414
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbVC420bug kbVC600fix kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Visual C++ 4.2 over version 4.1 and then run Developer Studio,
	the following error message may appear:
	
	  The requested topic does not exist. The title is in error.
	
	CAUSE
	=====
	
	This happens because the registry key (should be all on one line):
	
	  HKEY_CURRENT_USER\SoftwareMicrosoftInfoViewer\Titles\VCBKS40.MVB\LastTopic
	
	has the last topic from Visual C++ 4.1 which is invalid in 4.2.
	
	This problem occurs in this release because the same book name is used in both
	Visual C++ 4.2 and 4.1.
	
	RESOLUTION
	==========
	
	- Use the help system once in Visual C++ 4.2. This overwrites the registry key.
	  Exit and run Developer Studio again. The error does not occur.
	
	-or-
	
	- The error message is harmless and can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The problem was corrected in Visual C 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC420bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
