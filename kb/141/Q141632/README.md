---
layout: page
title: "Q141632: PRB: GETPEM Function Doesn't Work on Object Contained in Class"
permalink: /kb/141/Q141632/
---

## Q141632: PRB: GETPEM Function Doesn't Work on Object Contained in Class

{% raw %}

	Article: Q141632
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the GETPEM() function to return any property, event, or method from any
	object contained within a class doesn't work unless that object is a class
	(other than the object's base class) unto itself.
	
	CAUSE
	=====
	
	When the GETPEM() function receives a class name as its first parameter, it only
	retrieves the event and method code associated with this class. It does not
	return the program code of any contained object.
	
	RESOLUTION
	==========
	
	To examine the properties, events, or methods of any contained object of a
	parent class, use the Class Designer or Class Browser.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The GETPEM() function is new to Microsoft Visual FoxPro version 3.0b. GETPEM()
	requires two arguments. The first argument should refer to either the object or
	class that contains the property, event, or method. The second argument should
	refer to the property, event, or method.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and place a command button on it. In the Init event of the
	  form, add this code:
	
	     This.Command1.SetFocus
	
	2. In the Click event of the command button, add this code:
	
	     ThisForm.Release
	
	3. On the File menu, click Save as Class. In the Name field, enter pemclass and
	  in the File field, enter Test.
	
	4. Exit the Form Designer. On the Tools menu, click Options, and then click the
	  Forms tab. Under Template Classes, select the Form check box and locate the
	  Test.vcx file. Highlight it, and click OK. Click the OK button on the Options
	  page to save the change.
	
	5. Create a new form, and note that the pemclass is now the template. Without
	  making any changes, save the form as pemform. Then close it, and use the DO
	  FORM command to run the form.
	
	6. On the Tools menu, click Debug Window. Resize it so that there is sufficient
	  area on both sides.
	
	7. In the left side of the Debug window, type:
	
	     GETPEM("pemclass","init")
	
	  On the right side of the Debug window, the following should be displayed:
	
	     This.Command1.SetFocus
	
	NOTE: When trying to see the code under the Click event of the command button,
	you must realize that the Click event belongs to the command button. Therefore,
	you are not able to use pemclass as the left side of the argument in the
	GETPEM() function. The only way to get to the command button is to use object
	referencing from the top down. In the left side of the Debug window, type:
	
	     GETPEM(_Screen.ActiveForm.Command1,"Click")
	
	On the right side of the Debug window, you will see "", but you know there is a
	ThisForm.Release command. Because the command was put in at the class level, the
	only thing that is returned with the GETPEM() function is the code that was
	inserted at the object (or form) level, which is a null string.
	
	
	There is no syntax that can be used with the GETPEM() function that can return
	the ThisForm.Release code from the Click event of the command button in the
	above example. However, if a class were created based on the command button (for
	example, mybutton) and the Click event at that class level contained code, then
	it would be possible to use this:
	
	     GETPEM("mybutton","click")
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	

{% endraw %}
