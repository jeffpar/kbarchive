---
layout: page
title: "Q168039: PRB: Lockscreen with Assert Dialog Causes Problems with Controls"
permalink: /kb/168/Q168039/
---

## Q168039: PRB: Lockscreen with Assert Dialog Causes Problems with Controls

{% raw %}

	Article: Q168039
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 26-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a form, clicking on a checkbox does not change its state. If there
	are option buttons on the form, clicking the checkbox may change the state of
	the option buttons. Clicking the checkbox may even select more than one option
	button in the same option group. Clicking one of the option buttons may change
	the state of the checkbox. In other words, the checkboxes and option buttons are
	malfunctioning.
	
	CAUSE
	=====
	
	Several factors lead to this behavior. First, ASSERTS must be set ON and the
	LockScreen property of the form changed to true (.T.) before an expression that
	is ASSERTed evaluates to false (.F.). Next, Ignore or Ignore All must be chosen
	in the message box displayed by the ASSERT command. Finally, LockScreen must be
	changed back to false (.F.).
	
	RESOLUTION
	==========
	
	Do not use LockScreen when using the ASSERT command.
	
	MORE INFORMATION
	================
	
	When SET ASSERTS is ON, the ASSERT command will display a message box if a
	logical expression evaluates to false (.F.).
	
	The following commands issued from within a program file will illustrate:
	
	     SET ASSERTS ON
	     ASSERT 1=2       && will cause a message box.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program file and run the program:
	
	        SET ASSERTS ON
	        oForm1 = CREATEOBJECT("test")
	        oForm1.Visible = .t.
	        READ EVENTS
	
	        DEFINE CLASS test AS form
	        ADD OBJECT cmdNewForm AS ccmdNewForm
	        ADD OBJECT chkBox AS CheckBox WITH ;
	               left = 10, ;
	               top = 30
	        ADD OBJECT opgBox AS OptionGroup WITH ;
	               Width = 80, ;
	               Height = 50, ;
	               ButtonCount = 2, ;
	               option1.Caption = "Option1", ;
	               option1.Autosize = .T., ;
	               option2.Caption = "Option2", ;
	               option2.Autosize = .T., ;
	               left = 10, ;
	               top = 50
	
	           FUNCTION Destroy
	               CLEAR EVENTS
	           ENDFUNC
	        ENDDEFINE
	
	        DEFINE CLASS ccmdNewForm AS CommandButton
	           Caption = "Dialog"
	
	           FUNCTION Click
	                Thisform.LockScreen = .T.
	                ASSERT 1=2
	                Thisform.LockScreen = .F.
	                ?Thisform.LockScreen
	                CLEAR
	           ENDFUNC
	        ENDDEFINE
	
	2. When the program is run, a form with a command button, a checkbox and an
	  option group is displayed. Click on the checkbox and option buttons to verify
	  that they work normally.
	
	3. Now click on the command button. This should bring up the message box from
	  the ASSERT command. It should have the message:
	
	  "Assertion failed on line 2 of procedure test1.cmdnewform.click"
	
	  Choose the Ignore button.
	
	4. Back on the form, click on the Chkbox and note that it does not become
	  checked. Then click on Option2 and note that Chkbox checks. Then click on the
	  Chkbox and note that both option buttons are selected.
	
	REFERENCES
	==========
	
	Visual FoxPro Online Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : :5.0,5.0a
	
	=============================================================================
	

{% endraw %}
