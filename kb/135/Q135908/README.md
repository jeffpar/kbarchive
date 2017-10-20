---
layout: page
title: "Q135908: FIX: Hot Keys Do Not Work If TabStop Is Set to False"
permalink: /kb/135/Q135908/
---

## Q135908: FIX: Hot Keys Do Not Work If TabStop Is Set to False

{% raw %}

	Article: Q135908
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
	
	Assigning access keys (hot keys) to a command button in Visual FoxPro is done by
	placing the "\<" characters in front of the character that is in the name of
	the caption name property of the command button. When the form is run, you can
	press the ALT key and the access key character to activate the command button.
	This works as long as the TabStop property of the command button is set to the
	default of True. If the TabStop property is set to False, pressing ALT+access
	key doesn't activate the command button.
	
	WORKAROUND
	==========
	
	If TabStop property must be set to false, place the following command in the
	form's Init event procedure to make the access key work:
	
	     ON KEY LABEL ALT + U _SCREEN.ACTIVEFORM.COMMAND2.CLICK
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form in Visual FoxPro.
	
	2. Add a text box and two command buttons to the form.
	
	3. In the Caption property of the first command button, type "\<Button1"
	  (without the quotation marks). In the command button's Click event procedure,
	  add this code:
	
	     WAIT WINDOW "Button1"
	
	4. In the Caption property of the second command button, type "B\<utton"
	  (without the quotation marks), and change the TabStop property to False. In
	  the command button's Click event procedure, add this code:
	
	     WAIT WINDOW "Button2"
	
	5. Run the form. Press the TAB key several times, and note that the mouse
	  pointer is never positioned on the second command button. Press ALT+B and a
	  wait window box appears. Pressing ALT+U will not display a wait window as it
	  should. If either command button is clicked, the wait window for each is
	  displayed.
	
	6. Modify the form to change the TabStop property to True on the second command
	  button. Now you can press ALT+U to display the wait window, but it also
	  allows tabbing to the second command button.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
