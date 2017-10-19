---
layout: page
title: "Q161147: BUG: ToolTips Disappear when Timer Event Fires"
permalink: /kb/161/Q161147/
---

## Q161147: BUG: ToolTips Disappear when Timer Event Fires

	Article: Q161147
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Visual FoxPro 5.0 form contains ToolTips and a timer control,
	any ToolTip that is currently displayed disappears when the timer control fires
	a timer event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following steps in Visual FoxPro 5.0. You can also do the process in
	Visual FoxPro 3.0b in order to appreciate the changed behavior in Visual FoxPro
	5.0.
	
	1. Create a form in the visual desktop using the Form Designer. On the form
	  place the following controls:
	
	  a. a label
	     name = 'Label1'
	     caption = any text
	
	  b. a textbox
	     name = 'Textbox1'
	     controlsource = thisform.mytext
	     ToolTipText = any wording for that property's caption
	
	  c. a timer control
	     Interval = 1000
	     Timer-event method containing the following:
	
	             ThisForm.Label1.Caption = TIME()
	
	  d. a command button
	     Click method that issues the command
	
	             ThisForm.Release
	
	2. Add a custom property named "MyText" (without the quotation marks) to the
	  form.
	
	3. Set the ShowTips property of the form to True (.T.).
	
	4. Run the form. Position the cursor over textbox1. Observe the ToolTip.
	
	5. In the Visual FoxPro 5.0 form, change the interval of the timer to 5000.
	
	6. Run the form again. Position the cursor over textbox1. When the ToolTip is
	  cleared move the mouse very slightly.
	
	The ToolTip on the Visual FoxPro 3.0b form persists as long as the cursor is over
	textbox1. The ToolTip on the Visual FoxPro 5.0 form clears when the timer fires.
	With the 1000ms interval it can never be restored. With the 5000ms interval
	moving the cursor with the slightest MouseMove event restores the ToolTip.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
