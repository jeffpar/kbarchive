---
layout: page
title: "Q191713: INFO: Type Declaration Character to Data Type Chart"
permalink: /kb/191/Q191713/
---

## Q191713: INFO: Type Declaration Character to Data Type Chart

	Article: Q191713
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you the type declaration characters and corresponding data
	types. A Type Declaration Character is a character appended to a variable name
	indicating the variable's data type. For example, the variable name MyString$
	has a dollar sign appended to the variable name and is dimensioned as a String
	data type.
	
	MORE INFORMATION
	================
	
	The following table shows the type declaration characters and corresponding data
	types.
	
	Type Declaration Character  Data Type
	--------------------------  ---------
	<BLOCKQUOTE>
	         %                 Integer
	         &                 Long
	         !                 Single
	         #                 Double
	         $                 String
	         @                 Currency
	
	Even when using type declaration characters, you still need to declare your
	variables when you have Option Explicit at the beginning of the Module. Using
	Option Explicit is recommended to prevent problems due to misspelled variable
	names. When "Require Variable Declaration" is checked in the Editor Tab of the
	Options dialog box from the Tools Menu, Option Explicit is added to new Modules
	automatically. If you use Option Explicit, but you do not declare your
	variables, you will receive the following error message at run-time:
	
	  Compile Error
	  Variable Not Defined
	
	To prevent this error from occurring, you can either remove Option Explicit or
	explicitly declare your variables. Using type declaration characters allows you
	to shorten these statements. For example, you can use this:
	
	     Dim MyVar$
	
	instead of this:
	
	     Dim MyVar As String
	
	Both statements declare MyVar to be a memory variable of type String.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp400 kbVBp500 kbVBp600 kbVBA kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	
