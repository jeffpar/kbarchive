---
layout: page
title: "Q121016: FIX: Long Query Name in Browser Causes Application Error"
permalink: /kb/121/Q121016/
---

## Q121016: FIX: Long Query Name in Browser Causes Application Error

{% raw %}

	Article: Q121016
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Visual C++ version 2.x, after you enter a very long string in the
	Browser's Query on Name field, you may receive an error message with the
	following information:
	
	  MSVC.EXE - Application Error The instruction at "<hex_address1>"
	  referenced memory at "<hex_address2>". The memory could not be "read".
	
	Using Visual C++ version 4.x and later, you may receive an error message with the
	following information:
	
	  MSDEV.EXE - Application Error The instruction at "<hex_address1>"
	  referenced memory at "<hex_address2>". The memory could not be "read".
	
	CAUSE
	=====
	
	Strings entered in the Browser's Query on Name field that exceeds 253 characters
	in Visual C++ version 2.x or 2876 characters in Visual C++ version 4.0 and later
	causes this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Microsoft Visual C++, version
	6.0.
	
	MORE INFORMATION
	================
	
	Depending on the video mode, errors resulting from long strings may be displayed
	in an error notification box that is partially off the screen. It may be unclear
	what action to take. Press ENTER to clear the box.
	
	Visual C++ 5.0 and later do not have a specific Query on Name field. To use this
	feature, click Source Browser from the Tools menu. In Visual C++ 5.0 the problem
	occurs when you enter the long string into the Identifier edit box.
	
	Visual C++ 6.0 limits the amount of text that it accepts to approximately 900
	characters. More than that will be truncated, but it will not generate an
	application error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,4.0,4.1,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
