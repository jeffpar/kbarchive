---
layout: page
title: "Q245062: PRB: OptionButtons Do Not Hold Logical Values"
permalink: kb/245/Q245062/
---

## Q245062: PRB: OptionButtons Do Not Hold Logical Values

	Article: Q245062
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDesigner kbvfp500 kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 25-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5, it was possible to set OptionButtons to have logical values
	instead of numeric. However, in Visual FoxPro 6, this behavior changed. While
	the buttons can be set to logical values, clicking on a button will cause the
	button's value property to be reset to numeric.
	
	CAUSE
	=====
	
	OptionButtons should only have numeric values, even if the interface allows them
	to be set differently.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in Visual FoxPro 6.0:
	
	  PUBLIC loForm
	
	  loForm = CREATEOBJECT("form")
	  WITH loForm
	     .AddObject('opgTest', 'optiongroup')
	     WITH .opgTest
	        .ButtonCount = 3
	
	        .Option1.Value = .T.
	        .Option2.Value = .F.
	        .Option3.Value = .F.
	
	        .Visible = .T.
	        .AutoSize = .T.
	     ENDwith
	     .Visible = .T.
	  ENDwith
	
	2. Open the debugger, and put the following values in the Watch window:
	
	  loForm.opgTest.option1.value
	  loForm.opgTest.option2.value
	  loForm.opgTest.option3.value
	
	3. Click the buttons and watch the debugger.
	
	   - When first run:
	
	  .T.
	  .F.
	  .F.
	
	   - Click Option2:
	
	  0
	  1
	  .F.
	
	   - Click Option3:
	
	  0
	  0
	  1
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbCtrl kbDesigner kbvfp500 kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
