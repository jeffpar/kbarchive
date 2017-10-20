---
layout: page
title: "Q141971: PRB: Setting PageOrder May Generate an Error"
permalink: /kb/141/Q141971/
---

## Q141971: PRB: Setting PageOrder May Generate an Error

{% raw %}

	Article: Q141971
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the PageOrder property of a page to a value higher than the PageCount
	property will trigger the error "Expression evaluated to an illegal value."
	
	WORKAROUND
	==========
	
	The PageOrder property should not be greater than the value of the pageframe's
	PageCount property.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a pageframe to the form.
	
	3. Set the PageCount property of the pageframe to 0.
	
	4. Create a new program file that contains the following code:
	
	     SET PROCEDURE TO <this program>
	     DO FORM <form name>
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page1","Page1")
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page2","Page1")
	     _SCREEN.FORMS(1).REFRESH
	
	     DEFINE CLASS Page1 AS PAGE
	     ADD OBJECT command1 AS COMMANDBUTTON
	     ENDDEFINE
	
	5. Run the program. A form with two pages should appear.
	
	6. In the Command window, type:
	
	      _SCREEN.FORMS(1).PAGEFRAME1.PAGE1.PAGEORDER=3
	
	  The error "Expression evaluated to an illegal value" appears
	
	7. In the Command window, type:
	
	      _SCREEN.FORMS(1).PAGEFRAME1.PAGE1.PAGEORDER=2
	
	  No error appears
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
