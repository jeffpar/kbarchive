---
layout: page
title: "Q142282: PRB: Pageframe Does Not Display All the Pages"
permalink: /kb/142/Q142282/
---

## Q142282: PRB: Pageframe Does Not Display All the Pages

	Article: Q142282
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
	
	Using RemoveObject and then AddObject to control pages in a PageFrame may result
	in a visual loss of pages.
	
	WORKAROUND
	==========
	
	Use either of the following two workarounds to prevent a visual loss of pages:
	
	- Remove all pages before adding any new pages to the pageframe.
	
	-or-
	
	- Remove pages in the reverse order in which they were added. Then add the new
	  pages. For example, the following code adds three pages to a PageFrame:
	
	        _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page1","Page")
	        _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page2","Page")
	        _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page3","Page")
	
	  When you use RemoveObject, Page3 should be removed before Page2 and Page2
	  should be removed before Page1. After removing pages in the correct order,
	  new pages can be added and displayed properly.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form in the Form Designer.
	
	2. Add a PageFrame to the form.
	
	3. Set the PageCount property of the PageFrame to 0.
	
	4. Run the form.
	
	5. In the Command window, type the following:
	
	     _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page1","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page2","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page3","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.RemoveObject("Page1","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.RemoveObject("Page2","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page1","Page")
	     _SCREEN.FORMS(1).PAGEFRAME1.AddObject("Page2","Page")
	
	6. Open the debug window, and type the following:
	
	     _SCREEN.FORMS(1).PAGEFRAME1.PageCount
	
	The debug window shows the PageCount to be 3, which is correct. However, nly two
	pages are displayed in the PageFrame.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
