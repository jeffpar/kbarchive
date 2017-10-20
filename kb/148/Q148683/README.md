---
layout: page
title: "Q148683: FIX: Command Button's Default Property Cannot Be Changed"
permalink: /kb/148/Q148683/
---

## Q148683: FIX: Command Button's Default Property Cannot Be Changed

{% raw %}

	Article: Q148683
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A command button's Default property is set to true (.T.), and it can't be set
	back to false (.F.). This Results in a command button that fires its Click event
	whenever the user presses the ENTER key anywhere on the form.
	
	This problem occurs when all of the following are true:
	
	- Another form in the form set is called from the Click event of a command
	  button.
	
	- The command button is not the first object in the Tab order.
	
	- The form that is being called has its Visible property set to false.
	
	WORKAROUND
	==========
	
	Here are two possible workarounds:
	
	- Pull the "called" form from the form set, and make it a stand-alone form.
	  Then call it from the Click event of the command button with a DO FORM
	  command.
	
	-or-
	
	- If the form set must stay intact, set the Visible property of the "called"
	  form back to true (.T.), which is the default. Set its Top property to a very
	  high negative value such as -500. Then in the "called" form's Show method,
	  set the Top value back to an appropriate value such as 12, and in the Hide
	  method, set the Top value back to the high negative value. This effectively
	  keeps the form hidden until the application is ready to present the form and
	  then rehides it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. On the Form menu, click "Create a Form Set," and then click "Add a New Form."
	
	3. Select the Form1 form. Place a Text box and two command buttons on the form.
	
	4. Double-click the Command1 button to bring up its Code window. Enter the
	  following line of code in its Click event:
	
	     THISFORMSET.FORM2.SHOW()
	
	5. Double-click the Command2 button to bring up its Code window, and enter the
	  following in its Click event:
	
	     THISFORMSET.RELEASE()
	
	6. Select the Form2 form, and bring up the Property Sheet. Place a command
	  button on Form2, and enter the following code in the command button's Click
	  event procedure:
	
	     THISFORM.HIDE()
	
	7. Set Form2's Visible property to false (.F.).
	
	8. Save and Run the Form Set.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
