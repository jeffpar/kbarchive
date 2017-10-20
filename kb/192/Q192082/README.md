---
layout: page
title: "Q192082: BUG: Removing DataEnvironment in Form Load Causes Fatal Error"
permalink: /kb/192/Q192082/
---

## Q192082: BUG: Removing DataEnvironment in Form Load Causes Fatal Error

{% raw %}

	Article: Q192082
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the RemoveObject method in the Load event of a form to remove the
	DataEnvironment object, causes a fatal error message.
	
	RESOLUTION
	==========
	
	Move the following code from the Load event to the Init event of the form:
	
	     Thisform.RemoveObject("DataEnvironment")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. In the Form Load event, add in the following code:
	
	        Thisform.RemoveObject("DataEnvironment")
	
	3. Save and run the form.
	
	Immediately after the form runs the fatal error message occurs. Visual FoxPro
	then terminates.
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbOOP kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
