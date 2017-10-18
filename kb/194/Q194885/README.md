---
layout: page
title: "Q194885: PRB: Hiding and Showing Forms in Modal Formset Only Works Once"
permalink: kb/194/Q194885/
---

## Q194885: PRB: Hiding and Showing Forms in Modal Formset Only Works Once

	Article: Q194885
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp300 kbvfp300b kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The forms in a modal formset can only be hidden and shown once before the active
	form is all that can be shown.
	
	CAUSE
	=====
	
	This is caused when the Hide() and Show() methods are used to hide and show the
	forms in the formset.
	
	RESOLUTION
	==========
	
	Change the Visible property of the forms directly rather than using the Hide()
	and Show() methods. See steps 7 and 16 in the Steps to Reproduce Behavior
	section below for an example.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Help file for Visual FoxPro 6.0 states the following for the Show() method:
	
	  The Show method sets a form or form set's Visible property to true (.T.) and
	  makes the form the active object. If a form's Visible property is already set
	  to true (.T.), the Show method makes it the active object.
	  ...
	  Forms contained within a form set retain their Visible property setting. If a
	  form's Visible property is set to false (.F.), the Show method for the form
	  set does not show the form.
	
	One item to note in the Help file text is that the Show method sets the form's
	Visible property to true (.T.). Also note that the formset's Show method does
	not set the Visible property of a form within the formset to true. In the sample
	code below, the form's Show method is being used, not the formset's.
	
	The Help file for Visual FoxPro 6.0 states the following for the Hide() method:
	
	  Hides a form, form set, or toolbar by setting the Visible property to false
	  (.F.).
	
	Note that the workaround for this problem is to set the Visible properties of the
	forms directly rather than through the Show and Hide methods.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. From the Form menu pad, choose Create Form Set.
	
	3. Again from the Form menu, choose Add New Form. Position the forms so both can
	  be seen.
	
	4. Add two command buttons to form1.
	
	5. Set the Caption property on one to Quit.
	
	  In the Click event, place the following code:
	
	        Thisformset.Release
	
	6. Copy the Quit command button and paste it onto the other form.
	
	7. Go back to form1. Change the Caption on the other command button to "Show
	  Form 2". In the Click event, place the following code:
	
	        Thisform.Hide
	        Thisformset.Form2.Show
	        * Thisform.Visible=.F.
	        * Thisformset.Form2.Visible=.T.
	
	8. Copy the "Show Form 2" command button and paste it onto form2. Change the
	  caption and code in the Click event to refer to form1 instead of form2.
	
	9. Set the Visible property of form2 to .F.
	
	10. Select the Formset object in the Properties sheet. Set the WindowType
	  property to 1-Modal.
	
	11. Save and run the formset.
	
	12. Click on the Show Form 2 button. Form2 should display.
	
	13. Click on the Show Form 1 button that is on Form2. Form1 should display.
	
	14. Click on the Show Form 2 button that is on Form1. Form2 should not display.
	  This is the problem.
	
	15. Use the Quit button to close the formset.
	
	16. Modify the formset. In the Click event code for the Show Form 1 and Show
	  Form 2 command buttons, comment the Hide and Show commands. Uncomment the
	  commands that set the Visible properties of the forms.
	
	17. Save and run the formset again. Switch between the form. They should be able
	  to be switched between indefinitely.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, version 6.0; search on: "Hide"; topic: Hide method
	Visual FoxPro Help, version 6.0; search on: "Show"; topic: Show method
	
	Additional query words: kbDSupport kbDSE
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp300 kbvfp300b kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	
	=============================================================================
	
