---
layout: page
title: "Q129836: PRB: Object Variable Not Set Error If Object Not Instantiated"
permalink: /kb/129/Q129836/
---

## Q129836: PRB: Object Variable Not Set Error If Object Not Instantiated

{% raw %}

	Article: Q129836
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing an object that has not been instantiated results in this error:
	
	  "Object variable or With block variable not Set"
	  (Err = 91)
	
	CAUSE
	=====
	
	If you declare an object as in this example:
	
	     Dim MyForm as Form1
	
	you have allocated a reference to the object (similar to a pointer in the C
	programming language), but you have not allocated or instantiated the object
	itself.
	
	Therefore, when the object is referenced in code as in this example:
	
	     MyForm.Print "Hello World!"
	
	the error message "Object variable or With block not Set" is generated.
	
	RESOLUTION
	==========
	
	The following three code examples demonstrate how to declare and use an object
	variable (MyForm in this case) correctly:
	
	Code Sample One
	---------------
	
	  Dim MyForm as Form1
	  Set MyForm = New Form1
	  ' Where the object type is the same as the object type used in the
	  ' declaration.
	  MyForm.Print "Hello World!"
	
	Code Sample Two
	---------------
	
	  Dim MyForm as New Form1
	  MyForm.Print "Hello World!"
	
	Code Sample Three
	-----------------
	
	  Dim MyForm as Form1
	  Dim MyForm1 as New Form1
	  Set MyForm= MyForm1
	  MyForm.Print "Hello World!"
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
