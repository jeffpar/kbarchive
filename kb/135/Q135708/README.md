---
layout: page
title: "Q135708: BUG: Changing PageOrder in PageFrame Gives Incorrect PageName"
permalink: /kb/135/Q135708/
---

## Q135708: BUG: Changing PageOrder in PageFrame Gives Incorrect PageName

	Article: Q135708
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the PageOrder property of a page on a pageframe, the Page Name
	value will become invalid. Issuing the following in the debug window, returns
	the name of the page that was located in that position prior to changing the
	PageOrder:
	
	     <Formname>.PageFrame1.Pages[<Formname>.Pageframe1.ActivePage].Name
	
	NOTE: <Formname> is replaced with the name of your form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form and add a pageframe to the form.
	
	2. Set the PageCount property of the form to 3.
	
	3. Select the PageFrame, click the secondary (right) mouse button, and click
	  Edit. Add a text box to each page of the PageFrame.
	
	4. Change the PageOrder property of Page1 to 2.
	
	5. Save the form as Test1.
	
	6. Run the form.
	
	7. On the Tools menu, click Debug. (Click Debugger for Visual FoxPro 5.0 and
	  6.0)
	
	8. Type the following into the Debug window (the Watch window in Visual FoxPro
	  5.0 and 6.0):
	
	     TEST1.PageFrame1.Pages[TEST1.Pageframe1.ActivePage].Name
	
	If you click Page2, the debug window shows Page1 as the page name. The page name
	should be Page2.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
