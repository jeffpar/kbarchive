---
layout: page
title: "Q191998: BUG: Form Cannot Override Parent Class AutoCenter Setting"
permalink: /kb/191/Q191998/
---

## Q191998: BUG: Form Cannot Override Parent Class AutoCenter Setting

{% raw %}

	Article: Q191998
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the AutoCenter property of a form based on a parent class, will not
	override the AutoCenter setting of the form's parent class.
	
	RESOLUTION
	==========
	
	Use the ResetToDefault method to set the Top and Left property in the Init
	method of the subclassed form, when the AutoCenter property of the Parent class
	is set to .F..
	
	For instance, put the following code in the INIT event of the form:
	
	     This.ResetToDefault("Top")
	     This.ResetToDefault("Left")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the parent class by issuing the following command from the Command
	  window:
	
	        CREATE CLASS Myform OF test.vcx AS Form
	
	2. Once the Class Designer appears, change the AutoCenter property of the form
	  in Class Designer to .T.. Save the class and close the Class Designer.
	
	3. In Visual FoxPro 6.0, issue the following command from the Command window to
	  create a form based on Myform:
	
	        CREATE FORM mytestform AS myform FROM test.vcx
	
	If you issue the preceding command in Visual FoxPro 5.x, you will get an error
	because the command is not yet implemented. To do the same in Visual FoxPro 5.x,
	you must set the parent class form as a form template Class. To do this, from
	the Tools menu, choose Options and then click the Forms tab.
	
	4. In the Form Designer, change the AutoCenter property from .T. to .F..
	
	5. Save and run the form.
	
	The form still shows up in the middle of the screen even though the AutoCenter
	property is set to .F..
	
	Additional query words: kbVFp600bug kbVFp500abug kbOOP kbvfp500bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
