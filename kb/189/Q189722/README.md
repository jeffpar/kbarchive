---
layout: page
title: "Q189722: BUG: Form Ignores the Height Change of a Form Template"
permalink: /kb/189/Q189722/
---

## Q189722: BUG: Form Ignores the Height Change of a Form Template

	Article: Q189722
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form created from a form template ignores changes made in the Height property.
	
	RESOLUTION
	==========
	
	In the form's Init method, programmatically set the Height property. For
	example, add the following line to the form's Init event:
	
	     This.Height=275
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Form templates allow the use of a standardize form design to reduce development
	time of similar forms.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form class with the following properties:
	
	  Height = 173
	  MaxHeight = 200
	
	2. Choose the Tools menu pad and the Options menu bar. Select the Forms tab and
	  set the form template class to the new form class created in step 1.
	
	3. Create a new form and change the default MaxHeight property to 300 and the
	  Height property to 275. Save and run the form. Note that the Height is not
	  the same as it was in the Designer.
	
	4. Modify the form and verify that the Height is 173 rather than 275 (to which
	  the Height was changed).
	
	Additional query words: kbVFp600bug kbOOP kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
