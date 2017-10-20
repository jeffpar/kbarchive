---
layout: page
title: "Q299836: FIX: Destroy() Does Not Fire for LOCAL And PRIVATE Objects"
permalink: /kb/299/Q299836/
---

## Q299836: FIX: Destroy() Does Not Fire for LOCAL And PRIVATE Objects

{% raw %}

	Article: Q299836
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a local variable for an object, the Destroy event is not called when
	you quit Visual FoxPro before releasing the object.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Save the following code as a program:
	
	  *!* Q299836 FIX: Destroy() Doesn't Fire For LOCAL And PRIVATE Objects When QUIT Is Called
	
	  LOCAL ox 
	
	  ox = CreateObject("TestClass")
	  QUIT
	
	  DEFINE CLASS TestClass AS Label
	   PROCEDURE Destroy
	    WAIT WINDOW "Destroy Event"
	   ENDPROC
	  ENDDEFINE
	
	2. Run the program. Note that Visual FoxPro exits without the WAIT WINDOW
	  appearing.
	
	3. Replace the following line
	
	  LOCAL ox
	
	with:
	
	  PUBLIC ox.
	
	4. Run the program again. Note that you see a WAIT WINDOW before Visual FoxPro
	  exits.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
