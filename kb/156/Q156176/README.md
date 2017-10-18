---
layout: page
title: "Q156176: BUG: BorderWidth=0 Does Not Eliminate Border for Shape Control"
permalink: kb/156/Q156176/
---

## Q156176: BUG: BorderWidth=0 Does Not Eliminate Border for Shape Control

	Article: Q156176
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the BorderWidth property to 0 for a Shape control does not make the
	border of the Shape control disappear.
	
	WORKAROUND
	==========
	
	Set the BorderColor property to the same color as the form background or the
	same color as the FillColor property for the Shape object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Setting the BorderWidth property to 0 in Visual FoxPro 3.0 and 3.0b works as
	expected. This only appears to be a problem in Visual FoxPro 5.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form
	
	2. Add a Shape control to the form.
	
	3. In the Properties window, change the BorderWidth property of the Shape
	  control to 0.
	
	  The border of the Shape control still appears in the form.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
