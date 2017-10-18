---
layout: page
title: "Q157397: WD97: Can't Access Form Properties With Frame Control"
permalink: kb/157/Q157397/
---

## Q157397: WD97: Can't Access Form Properties With Frame Control

	Article: Q157397
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual Basic Editor to insert a Frame control that covers an
	entire UserForm, you cannot access the properties for the form.
	
	Note that the Object box does not list the UserForm property sheet if the frame
	is selected, even when the Frame control does not cover the entire form.
	
	WORKAROUND
	==========
	
	To work around this problem, resize the frame control using one of the following
	methods.
	
	Method 1: Resize the Frame Control by Changing Property Values
	--------------------------------------------------------------
	
	If the frame control extends to the boundary of the form, change the value for
	the height or width in the properties window and then, click the form to access
	the properties window for the form.
	
	Method 2: Resize the Frame Using the Resizing Handles
	-----------------------------------------------------
	
	If you see the sizing handles of the frame control, resize the frame by dragging
	the sizing handles inward. Then, click the form to access the properties window
	for the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vba vbe vb
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
