---
layout: page
title: "Q305247: FIX: Error Setting Property Named &quot;Value&quot; to Null in Class"
permalink: /kb/305/Q305247/
---

## Q305247: FIX: Error Setting Property Named &quot;Value&quot; to Null in Class

{% raw %}

	Article: Q305247
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a class with a property named "Value", attempts to change this
	property to =NULL cause the following error:
	
	  Fatal error: Exception code = C00000FD
	
	The error does not occur if you type .NULL. instead of =NULL (or =null). Note
	that "Value" is a reserved word in Visual FoxPro, and that naming a property or
	method after a reserved word is not recommended.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and then run a program containing the following code:
	
	  DELETE FILE testxx.vc?
	  _CLIPTEXT = "value"
	  KEYBOARD '{alt+c}{p}{ctrl+v}{alt+a}{alt+c}{ctrl+s}{alt+f}{c}'
	  MODIFY CLASS test AS CUSTOM OF testxx
	  MODIFY CLASS test AS CUSTOM OF testxx NOWAIT
	
	2. In the Property sheet of the class, locate the Value property created in the
	  program from step 1.
	
	3. Change the value of the Value property from .F. to =NULL and press the UP
	  ARROW key. A memory error appears and the program closes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
