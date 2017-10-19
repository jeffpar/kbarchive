---
layout: page
title: "Q141630: PRB: Visual Foxpro Must Quit After Error When Set PageCount"
permalink: /kb/141/Q141630/
---

## Q141630: PRB: Visual Foxpro Must Quit After Error When Set PageCount

	Article: Q141630
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the PageCount property of a pageframe generates this error:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	If you click Details, the following error appearss:
	
	  Visual FoxPro caused an invalid page fault in module ...
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form in the Form Designer.
	
	2. Add a pageframe to the form, and set its PageCount property to 0.
	
	3. Run the form.
	
	4. In the Command window, type these commands:
	
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page1","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page2","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page3","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.REMOVEOBJECT("Page1","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.REMOVEOBJECT("Page2","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page1","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.ADDOBJECT("Page2","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.PAGECOUNT=0
	     _SCREEN.FORMS(1).PAGEFRAME1.PAGECOUNT=0
	
	  The error message is generated and Visual FoxPro must be shut down.
	
	Additional query words: VFoxWin Closed Terminated
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
