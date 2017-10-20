---
layout: page
title: "Q150752: HOWTO: Skip the Validation of a Control and Exit the Form"
permalink: /kb/150/Q150752/
---

## Q150752: HOWTO: Skip the Validation of a Control and Exit the Form

{% raw %}

	Article: Q150752
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, it is necessary to exit a form even if the data in a given
	control does not meet the validation rules in the Valid method. To make this
	behavior possible, testing is done for some specific condition by stopping the
	code in the Valid Method from being evaluated. This article describes how to
	release a form by clicking a command button even if the data in the Textbox
	control is not valid.
	
	MORE INFORMATION
	================
	
	The following example shows that by testing for the mouse position relative to
	the Exit Command button, the Tab key, and the Enter key, the code skips around
	the validation. Text1 Valid method contains an IF ELSE statement where the IF
	portion tests a special condition, and the ELSE portion does the validation.
	
	When the ELSE portion is skipped, other controls get focus and the form is
	terminated.
	
	The special condition is an attempt by the user to exit the Text1 field while the
	mouse is positioned on top of the exit button. The TAB and ENTER keys are also
	part of that special condition because, by default, they also cause the focus to
	move to another object.
	
	NOTE: For this behavior to work, the ScaleMode of the form is set to 0- Foxels.
	
	Steps to Create Example
	-----------------------
	
	1. Create a Form.
	
	2. Set the ScaleMode property of the Form to 0-Foxels.
	
	3. Add two textboxes named Text1 and Text2.
	
	4. Add a Command button (Command1), and set the Caption property to Exit.
	
	5. Add the following code to the Valid method of the Text1 object:
	
	        IF MCOL(THISFORM.name)>=THISFORM.command1.left AND ;
	           MCOL(THISFORM.name)<=THISFORM.command1.left + ;
	           THISFORM.command1.width AND ;
	           MROW(THISFORM.name)>=THISFORM.command1.top AND ;
	           MROW(THISFORM.name)<=THISFORM.command1.top +  ;
	           THISFORM.command1.height AND ;
	           LASTKEY()<>9 AND LASTKEY()<>13
	           RETURN .t.
	        ELSE && The next IF changes the Lastkey value to something
	             * other than Tab or Enter, which is part of the workaround.
	           IF LASTKEY()=9 OR LASTKEY()=13
	              KEYBOARD "{RIGHTARROW}"
	                    KEYBOARD "{LEFTARROW}"
	              ENDIF
	              * The next IF is an example of a validation code.
	              * You can replace this example with your own validation code.
	              IF EMPTY(THIS.value)
	              RETURN .f.
	              ENDIF   && End of validation example.
	        ENDIF
	
	6. In the Click method of Command1, type "THISFORM.RELEASE", without the
	  quotation marks.
	
	7. Run the form and test it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
