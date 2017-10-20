---
layout: page
title: "Q172447: BUG: PageFrame SubClass Invisible at Runtime"
permalink: /kb/172/Q172447/
---

## Q172447: BUG: PageFrame SubClass Invisible at Runtime

{% raw %}

	Article: Q172447
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SubClass based on a PageFrame Class, whose PageCount property is set to 0,
	does not display any pages at design time and is invisible at run time.
	
	RESOLUTION
	==========
	
	A workaround is to set the PageCount property of the PageFrame class to a value
	greater than 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a class, named "pgf," as follows:
	
	        CREATE CLASS pgf OF MyClass AS PageFrame
	
	2. When the Class Designer comes up, reset the PageCount to default by
	  right-clicking the PageCount property of the PageFrame and then selecting the
	  Reset To Default option from the Shortcut menu. This should set the PageCount
	  property to 0.
	
	3. Save the class and close Class Designer.
	
	4. Create another class "pgfreal" based on "pgf" as follows:
	
	        CREATE CLASS pgfreal OF MyClass AS pgf FROM MyClass
	
	5. When the Class Designer comes up, set the PageCount to 3.
	
	6. Save the Class and close the Class Designer.
	
	7. Create a form as follows:
	
	        CREATE FORM MyForm
	
	8. Drop each of the classes, pgf and pgfreal, onto the form and observe that the
	  PageFrames are displayed without any pages.
	
	9. Run the Form and now observe that neither PageFrame appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
