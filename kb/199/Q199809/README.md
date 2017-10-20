---
layout: page
title: "Q199809: INFO: How VB Interprets Numbers, Constants and Numeric Types"
permalink: /kb/199/Q199809/
---

## Q199809: INFO: How VB Interprets Numbers, Constants and Numeric Types

{% raw %}

	Article: Q199809
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic interprets numbers, numeric constants and data types in expressions
	in a way that may cause unexpected results if you are not aware of the way they
	are handled. This article gives some background on this process and explains how
	to guarantee the correct results when using expressions.
	
	MORE INFORMATION
	================
	
	Visual Basic stores data as the smallest possible data type if no explicit type
	is specified. For example, if you type in the following statement 50 is
	temporarily stored as an integer (2 bytes), internally, regardless of the type
	specified for x:
	
	  x = 50
	
	This can lead to unexpected results when you use the following code sequence:
	
	  Dim x as Long
	
	  x = 24 * 24 * 60
	
	This statement generates an overflow error, since 24 * 24 * 60 = 34560, which
	exceeds the maximum size of a 2 byte integer (32767). Visual Basic does not
	evaluate the entire expression to check for the size of the result, but instead
	continues to use a 2 byte temporary space for the calculation. The same overflow
	error occurs if you declare the preceding values as constants and multiply the
	constants.
	
	In order to work around this behavior, it is important to always explicitly type
	numbers when using them in numeric calculations or when defining constants. If
	the preceding expression is changed to the following:
	
	  Dim x as Long
	
	  x = 24& * 24& * 60&
	
	No error occurs. This is because the & character is used to explicitly type
	the numbers as long integer types (4 bytes). Similarly, if you declare a numeric
	constant that will be used in a numeric calculation, you should explicitly type
	the declaration, as follows:
	
	  Const X as Long = 50
	
	-or-
	
	Use the older format:
	
	  Const X  = 50&
	
	This avoids any unexpected results.
	
	There is one other time when it is very important to understand how Visual Basic
	treats these numbers internally:
	
	  When you are passing values to an API function.
	
	If the API function is expecting a long integer for a parameter, and you need to
	pass a value of 0, you should always pass in the value 0&. This ensures
	proper byte alignment of the parameter list that is sent to the API function.
	Visual Basic correctly performs this conversion for you under most
	circumstances, but explicitly specifying the size of the value eliminates the
	potential risk. For example:
	
	  Declare Function MyFunc Lib "MyDll.dll" (i as Any) as Long
	
	Here you need to call the function as follows, which is equivalent to passing a
	NULL pointer:
	
	  k = MyFunc(ByVal 0&)
	
	If you use 0 instead of 0& your application may crash.
	
	REFERENCES
	==========
	
	For additional information on how Visual Basic treats data types internally,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q129803 Variable Coercion Rules in Visual Basic
	
	Additional query words: kbDSupport, overflow, coercion
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
