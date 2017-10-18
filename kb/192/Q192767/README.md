---
layout: page
title: "Q192767: FIX: HalfHeight Form Close Even when Closable Property is False"
permalink: kb/192/Q192767/
---

## Q192767: FIX: HalfHeight Form Close Even when Closable Property is False

	Article: Q192767
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.x and 5.x, when the Closable property of a HalfHeight form is
	set to .F., double-clicking the control box of the form closes the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program containing the following code:
	
	        PUBLIC oForm
	        oForm = CREATEOBJECT('Form')
	        oForm.HalfHeightCaption = .T.
	        oForm.Closable = .F.
	        oForm.Show()
	
	2. Save the program and run the program.
	
	3. When the form appears, double-click the form's control box that is located in
	  the upper right corner, close to the Fox icon.
	
	The form closes despite the setting of the Closable property.
	
	NOTE: You may need to double-click the control box several times in order to
	duplicate this behavior.
	
	Additional query words: kbVFp600fix kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
