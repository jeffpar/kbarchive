---
layout: page
title: "Q139913: BUG: GotFocus &amp; Valid Events Fire Unexpectedly in Box of Grid"
permalink: kb/139/Q139913/
---

## Q139913: BUG: GotFocus &amp; Valid Events Fire Unexpectedly in Box of Grid

	Article: Q139913
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GotFocus and Valid events of a text box in a grid column fire unexpectedly
	if you set the focus to the text box from outside the grid. The GotFocus event
	fires. Then the Valid event fires, and then the GotFocus event fires again. Then
	focus finally settles on the control. This means that any code in the GotFocus
	event executes twice, and the code in the Valid event fires before the text box
	has been processed. In Visual FoxPro 5.0a, the GotFocus event fires twice but
	the Valid event does not fire.
	
	WORKAROUND
	==========
	
	Use public variables or custom properties of the form to test conditionally
	whether the Valid and GotFocus events should fire. The following steps provide
	an example.
	
	Step-by-Step Example Workaround
	-------------------------------
	
	1. Create a custom property called FiredFrom.
	
	2. Set the initial value of the FiredFrom property to "".
	
	3. Create another custom property called TimesThrough.
	
	4. Set the initial value of TimesThrough to 0.
	
	5. In the Click event of the command button that sets the focus to the text box
	  in the grid column, add the following line of code before the call to the
	  SetFocus method:
	
	     THISFORM.FiredFrom = 'CommandBtn'
	
	6. In the Valid event of the text box, add a conditional structure such as this
	  one:
	
	     IF THISFORM.FiredFrom = 'commandbtn'
	          THISFORM.FiredFrom = ""
	     ELSE
	          *do your code
	     ENDIF
	
	7. In the GotFocus event, add the following line of code as the first line:
	
	     THISFORM.TimesThrough = THISFORM.TimesThrough + 1
	
	8. Then add a conditional structure to the GotFocus event such as this one:
	
	     IF THISFORM.TimesThrough <= 1
	          *do your code
	     ELSE
	          THISFORM.TimesThrough = 0
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form, and place a grid on it.
	
	2. Set the Column Number to 2.
	
	3. Make the current control of the grid's second Column a text box.
	
	4. In the GotFocus event of the text box, enter the following line of code:
	
	     WAIT WINDOW "GotFocus"
	
	5. In the Valid event of the text box, enter the following line of code:
	
	     WAIT WINDOW "Valid"
	
	6. Place a command button on the Form.
	
	7. In the command button's Click event, enter the following line of code:
	
	     THISFORM.Grid1.Column2.Text1.SetFocus
	
	8. Save and run the Form.
	
	9. Click the command button. The GotFocus event Wait Window appears. Then the
	  Valid event Wait Window statement appears, and then the GotFocus event Wait
	  Window appears again. In Visual FoxPro 5.0a and 6.0, the GotFocus event Wait
	  Window appears twice.
	
	Comparison Example
	------------------
	
	For comparison, follow these steps:
	
	1. Place a text box anywhere on the form.
	
	2. Put the same Wait Window statements in the new text box GotFocus and Valid
	  events.
	
	3. Place a second command button on the form.
	
	4. In the new command button's Click event, enter the following line of code:
	
	        THISFORM.Text1.SetFocus
	
	5. Save and run the Form.
	
	6. Click the second command button to set the focus to the text box on the form.
	  In this case, you only see the GotFocus event Wait Window.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
