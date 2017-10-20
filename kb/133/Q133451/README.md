---
layout: page
title: "Q133451: HOWTO: Causing a Form or Formset to Time Out"
permalink: /kb/133/Q133451/
---

## Q133451: HOWTO: Causing a Form or Formset to Time Out

{% raw %}

	Article: Q133451
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro version 2.x provided a TIMEOUT clause on the READ command. If no user
	input activity occurred during the specified interval, the read operation would
	stop. You can duplicate this functionality with a timer control on a form in
	Visual FoxPro. The enhanced event model in Visual FoxPro allows greater control
	over exactly which events cause a form to time out. For example, you can cause
	the form to close if the mouse is clicked even though no key was pressed. This
	article shows you how.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following process sets two form level properties (dtKeyPress and dtMouseMove)
	to store the time of the last keystroke or mouse movement. The timer control
	verifies the elapsed time since the last occurrence of these two events. If more
	than the specified interval has elapsed, the form is released.
	
	1. Create a new form. Add the following properties to the form:
	
	  dtCurrTime
	  dtKeyPress
	  dtMousemove
	
	2. In the Init method of the form, add the following code:
	
	     ThisForm.DtKeyPress = DATETIME()
	     ThisForm.dtMouseMove = DATETIME()
	
	3. In the KeyPress method of the form, add the following code:
	
	     ThisForm.dtKeyPress = DATETIME()
	
	4. In the MouseMove method of the form, add the following code:
	
	     ThisForm.dtMouseMove = DATETIME()
	
	5. Add a timer control to the form. Set the Interval property of the timer to
	  the desired number of seconds * 1000. Add the following code to the
	  TimerEvent method of the timer:
	
	     lnIntervalInSeconds = This.Interval / 1000
	     ThisForm.dtCurrTime = DATETIME()
	     IF ThisForm.dtCurrTime - ThisForm.dtMousemove >= lnIntervalInSeconds ;
	        AND ;
	        ThisForm.dtCurrTime - ThisForm.dtKeypress > = lnIntervalInSeconds
	           ThisForm.Release
	     ENDIF
	
	6. Add a text box to the form for testing purposes. Save and run the form.
	
	7. The form should time out and release after the specified number of
	  milliseconds.
	
	Incorporating a Timeout into a Formset
	--------------------------------------
	
	To adapt this example to close an entire formset, follow these steps:
	
	1. Create the three properties specified in step 1 of the example so that they
	  are created at the formset level.
	
	2. Place the Init code specified in step 2 in the Init method of the formset.
	  Change the reference of ThisForm to ThisFormSet.
	
	3. Create the timer control on each individual form in the formset. This is
	  required because the formset itself does not contain KeyPress and MouseMove
	  events. Each form in the formset must maintain its own unique timer, but the
	  formset itself must maintain the information as to whether the user has
	  interacted with any form within the formset. Change all ThisForm references
	  to ThisFormSet within this method.
	
	4. Change the reference of ThisForm in steps 3 and 4 of the example to
	  ThisFormSet.
	
	Additional query words: idle delay
	
	======================================================================
	Keywords          : kbtool kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
