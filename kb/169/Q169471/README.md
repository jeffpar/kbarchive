---
layout: page
title: "Q169471: BUG: SET CENTURY OFF is Ignored if Date is Over Year 2000"
permalink: /kb/169/Q169471/
---

## Q169471: BUG: SET CENTURY OFF is Ignored if Date is Over Year 2000

	Article: Q169471
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp kbvfp300 kbvfp500
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"SET CENTURY OFF" is ignored within text box of a form if the date type is set
	to "Taiwan" and the date is over "1/1/2000."
	
	RESOLUTION
	==========
	
	Convert the Date with the DTOC() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type following commands:
	
	  SET DATE to Taiwan
	  SET CENTURY OFF
	  *** Note : Year 2000 is equivalent to Taiwan Year 0089
	  ? {^2000-01-01}
	
	  "89/01/01" displays on the FoxPro desktop (or in the active window).
	
	2. Place the same setting within a text box of a form and set the "Readonly"
	  property to .F. The result is "0089/01/01."
	
	3. Add a TextBox control within a form.
	
	4. Change the property "Century" of the TextBox to "0 - Off."
	
	5. Change the property "DateFormat" to "8 - Taiwan."
	
	6. Change the "value" of the TextBox to {^2000-01-01}, which is January 1, 2000,
	  and run the form.
	
	NOTE: The display of the TextBox will be "0089/01/01." The TextBox value,
	however, is "89/01/01."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbvfp kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	
