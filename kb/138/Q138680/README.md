---
layout: page
title: "Q138680: How to Scope Variable Declared in Event Code"
permalink: /kb/138/Q138680/
---

## Q138680: How to Scope Variable Declared in Event Code

{% raw %}

	Article: Q138680
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A variable declared in event code is not visible outside that code unless the
	variable is declared Public or you crate a new form property.
	
	MORE INFORMATION
	================
	
	Variables declared in event code for objects are only visible to those objects
	at the time the event code is running. There are two ways to make variables
	visible to code outside a specific event.
	
	Method One
	----------
	
	Declare the variable Public. To do this, add the following line of code to the
	Load event of your form:
	
	     Public X
	
	Method Two
	----------
	
	Create a custom property of the form. To do this, follow these steps:
	
	1. Create a form.
	
	2. On the Form menu, click New Property.
	
	3. In the Name box, type "X" (without the quotation marks).
	
	4. On the Other tab of the form's Property sheet locate your new property (X),
	  and select it.
	
	5. Type the words, "Hello World" (without the quotation marks), and press ENTER.
	
	6. Add a command button to your form.
	
	7. In the Click event of the command button, enter the following line of code:
	
	     WAIT WINDOW THISFORM.X
	
	8. Run your form.
	
	9. Click the command button. The wait window displays: Hello World.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form.
	
	2. In the Load event of the form, add the following line of code:
	
	     X = "Hello World"
	
	3. Add a command button to your form.
	
	4. In the Click event of the command button, add the following line of code:
	
	     WAIT WINDOW X
	
	  An error occurs that states: Variable 'X' is not found.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
