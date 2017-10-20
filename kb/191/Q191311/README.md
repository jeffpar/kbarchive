---
layout: page
title: "Q191311: BUG: Class Not Released After Being Deleted From Form"
permalink: /kb/191/Q191311/
---

## Q191311: BUG: Class Not Released After Being Deleted From Form

{% raw %}

	Article: Q191311
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to modify a class library, a .vcx file, can cause the following error
	to occur after you delete it from a form:
	
	  Cannot modify a class that is in use.
	
	CAUSE
	=====
	
	A reference to the class library remains in memory after deleting the object
	from the form.
	
	RESOLUTION
	==========
	
	Close the form before modifying the class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This behavior does not occur in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a class based on a Command button and name it Ztest. Save it to a
	  class library named Ztest.vcx.
	
	2. Create a form and add the Ztest command button to the form.
	
	3. Click the Ztest Command button class and delete it from the form.
	
	4. With the form still open, attempt to open and modify the Ztest class library,
	  and the error occurs.
	
	Additional query words: kbVFp500abug kbDesigner kbvfp500a kbVFp500bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
