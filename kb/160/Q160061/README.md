---
layout: page
title: "Q160061: PRB: Page Activate Event Does Not Set Focus to Different Page"
permalink: kb/160/Q160061/
---

## Q160061: PRB: Page Activate Event Does Not Set Focus to Different Page

	Article: Q160061
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Activate event of a Page in a PageFrame to set focus to a different
	page does not work.
	
	WORKAROUND
	==========
	
	To work around this problem, disable all pages except the one that is to have
	focus. For example, in the Deactivate event of the first page place the
	following code:
	
	     This.Parent.Page1.Enabled = .F.
	     This.Parent.Page2.Enabled = .F.
	     This.Parent.Page3.Enabled = .F.
	     This.Parent.Page4.SetFocus
	
	This code disables all the other pages in the PageFrame and sets the focus to the
	remaining active page, Page 4 in this case. Since this code is in the Deactivate
	event of the prior page, no problems occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Using the NODEFAULT keyword does not produce the intended behavior. However, the
	addition of the NODEFAULT keyword to the Activate event causes the behavior of
	the examples below to differ.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form that contains a PageFrame object.
	
	2. Change the PageCount property in the PageFrame to 4.
	
	3. In the Activate of Page2, place the following code:
	
	        This.Parent.ActivePage=4
	        This.Parent.Page4.SetFocus
	        NODEFAULT  && This line is optional.
	
	4. Run the Form and use the Right Arrow key to move to Page2 of the PageFrame.
	
	If the NODEFAULT keyword is in the Activate event, the first time you use the
	Right Arrow key to move to Page2, Page4 briefly gains focus, then focus returns
	to Page2. If you use the Right Arrow key to traverse pages, each time Page2 gets
	focus from the Right Arrow key, the focus is directed to Page4 correctly.
	
	If NODEFAULT is removed from the above example, focus is never directed to Page4
	after activating Page2. Moving from page to page behaves as if no code exists in
	the Activate event.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
