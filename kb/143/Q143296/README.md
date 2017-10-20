---
layout: page
title: "Q143296: FIX: NODEFAULT in Page's Deactivate Event Activates Wrong Tab"
permalink: /kb/143/Q143296/
---

## Q143296: FIX: NODEFAULT in Page's Deactivate Event Activates Wrong Tab

{% raw %}

	Article: Q143296
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using NODEFAULT in the Page's Deactivate event stops the current page from
	changing, but the tab of the page will not be active. Whichever tab is clicked,
	the tab - 1 is the one that is brought forward. Therefore, if you are located on
	page one and click the fourth page, tab 3 will be moved to the front yet page
	one's objects continue to show on the pageframe.
	
	WORKAROUND
	==========
	
	Move the NODEFAULT condition to the Activate event of each page. Create one
	property in the form, and make it store the current page of the pageframe. The
	default value should be 1. In the Activate event for each page, evaluate the
	variables to see if the page should come forward. If it shouldn't come forward
	based on certain conditions, issue the NODEFAULT and set the ACTIVEPAGE to the
	form property. If the page should come forward, don't use the NODEFAULT clause,
	and reset the curPage property to the current page.
	
	Following is an example of what might be used in the Activate event of the page.
	CurPage is a form property that stores the current active page in the pageframe.
	Lexpression is the condition that must be met before the page will activate.
	
	      IF THISFORM.curPage != 1 AND <lexpression>
	       THISFORM.curPage = 1
	     ELSE && Resets the active page
	       NODEFAULT
	       THIS.PARENT.ActivePage = THISFORM.curPage
	     ENDIF
	
	The value of curPage in this code would change to the page's number of the
	current Activate event. For example, if this code was in the fourth page of the
	pageframe, the code would be as follows:
	
	     IF THISFORM.curPage != 4 AND <lexpression>
	       THISFORM.curPage = 4
	     ELSE && Resets the active page
	       NODEFAULT
	       THIS.PARENT.ActivePage = THISFORM.curPage
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form named zJunk.
	
	2. Add a pageframe to the form.
	
	3. Set the PageCount to 4.
	
	4. Add the following code to the Deactivate event of Page1:
	
	     NODEFAULT
	
	5. Add text labels to each of the four pages to identify each page.
	
	6. Save and run the form.
	
	7. Click the Page4 tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
