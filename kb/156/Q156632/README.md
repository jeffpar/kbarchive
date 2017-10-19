---
layout: page
title: "Q156632: PRB: SetFocus Does Not Function in All Control Methods"
permalink: /kb/156/Q156632/
---

## Q156632: PRB: SetFocus Does Not Function in All Control Methods

	Article: Q156632
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, the SetFocus method does not function in the VALID, WHEN,
	RANGEHIGH, and RANGELOW methods of TextBox, EditBox, and Spinner controls.
	Attempting to use the method will result in the error:
	
	  "Cannot call SetFocus from within a When, Valid, RangeHigh or RangeLow
	  event."
	
	NOTE: The error occurs if some other control's method is called that calls a
	SetFocus. That is, this error occurs if any of the events (When, Valid,
	RangeHigh, RangeLow) somewhere lower in the call stack calls the SetFocus.
	Example: The VALID calls a CLICK that calls a CLICK that calls a SETFOCUS; the
	error still occurs.
	
	WORKAROUND
	==========
	
	Call the SETFOCUS method in the LOSTFOCUS and GOTFOCUS methods rather than in
	the VALID and WHEN methods.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The controls in Visual FoxPro that will cause this error are TextBox, EditBox,
	and Spinner.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add two Text boxes to the form (Text1 and Text2).
	
	3. In the Valid event of Text1, add the following code:
	
	     Thisform.Text2.Setfocus
	
	4. Run the form, try to tab away from Text1, and note that the following error
	  will occur:
	
	  "Cannot call SetFocus from within a When, Valid, RangeHigh or RangeLow
	  event."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
