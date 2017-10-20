---
layout: page
title: "Q140293: FIX: Missing Closing Parenthesis Acts Like a Comment"
permalink: /kb/140/Q140293/
---

## Q140293: FIX: Missing Closing Parenthesis Acts Like a Comment

{% raw %}

	Article: Q140293
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the parenthesis symbol to enclose conditions to be evaluated and
	leave off the leading parenthesis, the closing parenthesis acts like a comment
	marker as if it were a double ampersand (&&). Any code that follows the
	closing parenthesis is ignored when the program is executed.
	
	Visual FoxPro should give an error message when the opening parenthesis is
	missing, but in this case it does not.
	
	RESOLUTION
	==========
	
	Make sure that the closing parenthesis has a matching opening parenthesis.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Place the following code in a .prg file:
	
	     a = .T.
	     b = .T.
	     c = .F.
	     IF a AND b) AND c
	        WAIT WINDOW "This expression must be true."
	     ENDIF
	
	The IF statement should not evaluate to true because the variable "c" is false.
	The wait window box shows up because the closing parenthesis does not allow
	FoxPro to see the rest of the statement. If the closing parenthesis is taken out
	or if a opening parenthesis is added, then the wait window box will not appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
