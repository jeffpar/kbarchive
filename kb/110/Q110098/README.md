---
layout: page
title: "Q110098: PC Forms: Masked Edit Control Not Automatically Packaged"
permalink: /kb/110/Q110098/
---

## Q110098: PC Forms: Masked Edit Control Not Automatically Packaged

{% raw %}

	Article: Q110098
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a custom form using version 1.0 of the Microsoft Electronic
	Forms Designer, data entered into a Masked Edit control will not automatically
	be written to the MEF Package when the form is sent. The code to package and
	unpackage data in a Masked Edit control is not included in the E-Forms toolkit.
	
	MORE INFORMATION
	================
	
	You can add code to the WriteTaggedControls and ReadTaggedControls functions so
	the Masked Edit control is automatically included in the MEF Package. To do so,
	perform the following steps:
	
	1. Open your E-Form project in Visual Basic.
	
	2. In the Project window, select EFORM.BAS.
	
	3. In the Procedures drop-down list box, select WriteTaggedControls.
	
	4. Scroll to the section of the code that is commented "'Add other custom
	  controls here".
	
	5. Add the following code directly below the comment:
	
	        ElseIf TypeOf ctrl Is MaskEdBox Then
	          MEFWriteText package, Tag, CStr(ctrl.Text)
	
	6. From the Procedures drop-down list box, select ReadTaggedControls.
	
	7. Scroll to the section of the code that is commented "'Add other custom
	  controls here".
	
	8. Add the following code directly below the comment:
	
	     ElseIf TypeOf ctrl Is MaskEdBox Then
	       ctrl.Text = MEFReadText(package, Tag, "")
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
