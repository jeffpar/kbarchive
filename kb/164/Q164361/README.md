---
layout: page
title: "Q164361: FIX: Using EditBox SelStart Property Causes Refresh Problems"
permalink: kb/164/Q164361/
---

## Q164361: FIX: Using EditBox SelStart Property Causes Refresh Problems

	Article: Q164361
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbtool kbservicepack kbvfp kbvfp500aFIX kbvfp500bug kbvfp600 kbVS600sp2 kbVS600SP1 kbVS
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SelStart property on an Edit box that is in a PageFrame, Page
	tabs appear to freeze and any object outside of the PageFrame do not receive
	focus. Additionally, resizing or minimizing and then maximizing, the form
	results in improper refreshing of the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was fixed in Visual FoxPro 5.0a.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The SelStart property is used with the Edit box to return the starting point of
	a text selection made by the user in a text-entry area of the edit box, or it
	indicates the position of the insertion point if no text is selected. But using
	the SelStart property on an Edit box in a PageFrame causes unexpected behavior
	with the objects on a form and with the form itself.
	
	For example, moving through the pages of the PageFrame after the SelStart
	property has been activated on the Edit box can only be accomplished by clicking
	on a Page tab. Note the Page tab that is clicked does not become highlighted. If
	the tab key is pressed or the cursor is used to move to an object on the
	PageFrame, it is possible to move through the objects on the PageFrame but any
	objects outside of the PageFrame do not receive focus when trying to click on or
	tab to them.
	
	The form has refresh problems, also, after the SelStart property is activated on
	the Edit box. For example, resizing the form larger than the original size
	causes multiple form borders to appear. Minimizing and then maximizing the form
	causes the tabs of the PageFrame to disappear. Moving through the objects on the
	PageFrame can still be accomplished, but to move to another page of the
	PageFrame requires clicking where the tab should be located and then the objects
	on that page appear.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and place a PageFrame on it.
	
	2. Right-click on the PageFrame and choose the Edit menu option.
	
	3. Place a text box on page one of the PageFrame.
	
	4. Click on page two of the PageFrame and place an edit box and text box on it.
	
	5. Place the following code in the GotFocus event of the edit box.
	
	  THIS.SELSTART = 0
	
	6. Click on the form to set focus back to the form. Place a text box on the
	  form.
	
	7. Run the form and press the Tab key to move through the objects on the form.
	  Note that the cursor moves from the text box on the PageFrame and then to the
	  text box on the form.
	
	8. Click on page two of the PageFrame and tab to the edit box. Note that trying
	  to click back to page one shows the text box on page one, but the tab for
	  page two stays highlighted. When trying to click on the text box on the form,
	  focus stays on the objects in the PageFrame.
	
	9. Try resizing or minimizing the form and then maximizing it. Note that the
	  form does not refresh properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbservicepack kbvfp kbvfp500aFIX kbvfp500bug kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
