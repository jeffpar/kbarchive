---
layout: page
title: "Q305238: FIX: FOR...EACH Fails with Character Array Element &gt; 255"
permalink: /kb/305/Q305238/
---

## Q305238: FIX: FOR...EACH Fails with Character Array Element &gt; 255

{% raw %}

	Article: Q305238
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSni
	Last Modified: 27-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a FOR...NEXT command with a character array element that contains
	more than 255 characters, the following error may be received:
	
	  String is too long to fit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, create a program and run the following code in Visual
	FoxPro 5.0 or 6.0:
	
	  DIMENSION  laX(1)
	  laX(1) = SPACE( 256 )
	  FOR EACH lcX IN laX
	  	? lcX
	  NEXT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp500xSearch kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
