---
layout: page
title: "Q131838: How OptionGroup Buttons Behave"
permalink: /kb/131/Q131838/
---

## Q131838: How OptionGroup Buttons Behave

{% raw %}

	Article: Q131838
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how OptionGroup buttons function.
	
	MORE INFORMATION
	================
	
	Determining Which Option Button Is Clicked in an Option Group
	-------------------------------------------------------------
	
	With FoxPro version 2.x, you could determine which radio button was clicked by
	setting up a case structure to return the number of the clicked radio button.
	
	In Visual FoxPro, radio buttons are called OptionGroup buttons, and in most
	cases, you no longer need a case structure to determine which option was
	clicked. Each OptionGroup button in the group can respond to a click event
	independently.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form in Visual FoxPro. Using the OptionGroup tool, place a set
	  (two is the default) of OptionGroup buttons on the form.
	
	2. Double-click the OptionGroup object to bring up the code editor, and click
	  Option1 so that you can edit the code for the events associated with the
	  option button. Select the Click procedure. In the code editing window, type:
	
	     Wait window "option button 1"
	
	3. On the Object menu, click Option2. Then select the Click procedure. In the
	  code editing window, type:
	
	     Wait window "option button 2"
	
	4. Run the form, and click the different option buttons. You should see the
	  different wait windows activate with the appropriate text for each button.
	
	Calling Parent Code
	-------------------
	
	It is possible to encapsulate code even further by using the concept of an parent
	object. Option buttons are part of an OptionGroup class, so the OptionGroup
	object is called the parent or the container of the buttons. Messages can be
	sent to a parent object by prefacing the method call with this.parent.
	
	In the following example, a set of OptionGroup buttons send messages to the Click
	method of the OptionGroup container (parent object):
	
	1. Create a new form.
	
	2. Place an OptionGroup object on the form, and change the button count property
	  to 3.
	
	3. In each option button's Click procedure, place this code:
	
	     this.parent.click
	
	4. Change the Caption and Name property of the three buttons to Red, Green, and
	  Blue.
	
	5. Place the following code in the Click procedure of the OptionGroup object
	  itself:
	
	     do case
	     case this.value='red'
	          thisform.backcolor=rgb(255,0,0)
	     case this.value='green'
	          thisform.backcolor=rgb(0,255,0)
	     case this.value='blue'
	          thisform.backcolor=rgb(0,255,0)
	     endcase
	
	6. Set the Value property of the OptionGroup object to "" (an empty string), so
	  it is created (instantiated) with a character data type.
	
	7. Run the form.
	
	8. Click the different option buttons, and observe the behaviors.
	
	The individual buttons call the parent object's Click procedure. The parent
	object in this case is the OptionGroup container. This code checks the Value
	property and determines, by using the case structure, which values to use when
	setting the form's background color.
	
	Calling Button Code from the Parent
	-----------------------------------
	
	To run a given button's code from the OptionGroup object, refer to the event for
	that particular button. For example, the Click event of the OptionGroup object
	could run Option1 button's code with this code:
	
	     this.option1.click
	
	This causes the code in the Click procedure of the Option1 button to run whenever
	the user clicks the option group frame instead of an actual button. Of course,
	the code in the Option1 Click procedure also runs when the user clicks the
	Option1 button directly. But even if another button had the focus, and the user
	clicks within the frame of the OptionGroup container, the code for the Option1
	button is run.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
