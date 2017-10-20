---
layout: page
title: "Q142286: FIX: GETPEM Returns Cryptic Characters On Sub-Classed Object"
permalink: /kb/142/Q142286/
---

## Q142286: FIX: GETPEM Returns Cryptic Characters On Sub-Classed Object

{% raw %}

	Article: Q142286
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the GETPEM() function to return any property, event, or method from any
	object contained within a class will result in cryptic characters if that
	property, event, or method has been populated within the finished form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The GETPEM() function is new to Microsoft Visual FoxPro version 3.0b. GETPEM()
	requires two arguments. The first argument should refer to either the object or
	class that contains the property, event, or method. The second argument should
	refer to the property, event, or method.
	
	For more information about the GETPEM() function, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q141632 GETPEM Function Doesn't Work on Object Contained in Class
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place a command button on it.
	
	2. On the File menu, click Save as Class. In the Name field, enter "pemclass"
	  (without the quotation marks) and in the File field, enter "Test" (without
	  the quotation marks).
	
	3. Exit the Form Designer. On the Tools menu, click Options, and then click the
	  Forms tab. Under Template Classes, select the Form check box and locate the
	  Test.vcx file. Highlight it, and click OK. Click the OK button on the Options
	  page to save the change.
	
	4. Create a new form, and note that the pemclass is now the template. In the
	  Click event of the command button, add this code:
	
	     ThisForm.Release
	
	5. Save the form as pemform. Then close it, and use the DO FORM command to run
	  the form.
	
	6. On the Tools menu, click Debug Window. Resize it so that there is sufficient
	  area on both sides.
	
	7. In the left side of the Debug window, type:
	
	     GETPEM(_Screen.ActiveForm.Command1,"Click")
	
	On the right side of the Debug window, you will see that cryptic characters are
	displayed when what is expected is that the Click event code, "ThisForm.Release"
	of the command button is displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
