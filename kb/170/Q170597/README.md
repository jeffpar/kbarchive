---
layout: page
title: "Q170597: BUG: Special Effect Does Not Work for Container Control"
permalink: kb/170/Q170597/
---

## Q170597: BUG: Special Effect Does Not Work for Container Control

	Article: Q170597
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0x, the SpecialEffect property of a Container control does
	not refresh to display as 0-flat, 1-sunken, or 2-raised at run time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When changing the SpecialEffect property of a Container control to 0-flat,
	1-sunken, or 2-raised, at run time, the Container does not reflect the change
	even after the REFRESH method has been issued. The only way to refresh the
	Container control is to click on an object other than the form that contains the
	Container object, and then click back on the form. At this point, the Container
	is refreshed correctly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form and place a Container control on it.
	
	2. Set the SpecialEffect property of the Container to "2 - Flat(Default)."
	
	3. Change the Name of the Container to TstC1.
	
	4. Add a command button, named CB0, to the form with the following code in the
	  Click event:
	
	        ThisForm.TstC1.SpecialEffect = 0 &&Raised
	        ThisForm.Refresh
	
	5. Add another command button to the form, CB1, with the following code in Click
	  event:
	
	        ThisForm.TstC1.SpecialEffect = 1  &&Sunken
	        ThisForm.Refresh
	
	6. Run the Form and click on the command buttons several times.
	
	NOTE: The effect of the Container stays the same and does not change to the
	specified setting of SpecialEffect.
	
	Here is the workaround for the above sample:
	
	1. Replace the code in steps 4 and 5 from the above example with the following
	  code:
	
	     Step4:
	
	        ThisForm.TstC1.Visible = .F.
	        ThisForm.TstC1.SpecialEffect = 0 &&Raised
	        ThisForm.TstC1.Visible = .T.
	
	     Step5:
	
	        ThisForm.TstC1.Visible = .F.
	        ThisForm.TstC1.SpecialEffect = 1 &&Sunken
	        ThisForm.TstC1.Visible = .T.
	
	2. Save and run the form. After clicking the command buttons, the effect of the
	  Container will now change according to the SpecialEffect property setting.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
