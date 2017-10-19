---
layout: page
title: "Q161864: PRB: Return 0 in TextBox Valid Allows Switching Active Form"
permalink: /kb/161/Q161864/
---

## Q161864: PRB: Return 0 in TextBox Valid Allows Switching Active Form

	Article: Q161864
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Help for Visual FoxPro states the following about the Valid event of a
	control:
	
	  If 0 is returned, the control does not lose focus.
	
	This is true if you try to move between controls on a single form. But if a
	control returns 0 in the Valid event, you will be able to move the focus to a
	different form.
	
	RESOLUTION
	==========
	
	To prevent the control from losing focus, you should return .F. (False) from the
	Valid event of the control:
	
	     RETURN .F.
	
	To disable the "Invalid Input" message that a False (.F.) return value causes,
	issue the following command:
	
	    SET NOTIFY OFF
	
	This should be done at the start of an application or in the Init event of a
	form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called AAA.
	
	2. Add two text boxes to the form.
	
	3. In the Valid of Text1 add the following code:
	
	         IF EMPTY(This.Value)
	           RETURN 0
	         ENDIF
	
	4. Save the form.
	
	5. Create a form called BBB, and add a text box control to it.
	
	6. Save and run form BBB.
	
	7. Run form AAA.
	
	8. Try to Tab from the first text box to the second text box on form AAA. Then
	  click on form BBB.
	
	  You will not be able to move from Text1 to Text2 on form AAA as long as Text1
	  is empty. But you will be able to click on form BBB and make it the active
	  form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
