---
layout: page
title: "Q189777: PRB: HalfHeight Property Must Be Zero to Remove Title Bar"
permalink: kb/189/Q189777/
---

## Q189777: PRB: HalfHeight Property Must Be Zero to Remove Title Bar

	Article: Q189777
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the HalfHeightCaption property is set to true and the TitleBar property is
	set to "0 - Off", the form's title bar remains.
	
	RESOLUTION
	==========
	
	Set the HalfHeightCaption property to false (.F.).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	        frmNoTitle = CREATEOBJECT("form")
	        frmNoTitle.TitleBar = 0
	        frmNoTitle.HalfHeightCaption = .t.
	        frmNoTitle.Show(1)
	
	RESULT: The form will appear with a half-height caption. If the HalfHeightCaption
	line, shown above, is removed or if the HalfHeightCaption property is set to
	false, the form will not have a TitleBar.
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
