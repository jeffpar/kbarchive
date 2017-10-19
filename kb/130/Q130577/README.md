---
layout: page
title: "Q130577: PRB: Leading Equals Sign (=) Not Displayed If RowSource Value"
permalink: /kb/130/Q130577/
---

## Q130577: PRB: Leading Equals Sign (=) Not Displayed If RowSource Value

	Article: Q130577
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter operators (<>, <, >, and =) into a combo box RowSource
	property as values and the first element in the list is the equals sign (=),
	Visual FoxPro does not accept or allow the leading equals sign in the list of
	values.
	
	CAUSE
	=====
	
	Using an equals sign as the first character of an entry in a combo box RowSource
	property indicates to Visual FoxPro that the value that follows is going to be a
	numeric value returned by a function.
	
	RESOLUTION
	==========
	
	Use one of the following solutions:
	
	- Change the order of the listed operators to begin with something other than
	  the equals sign.
	
	-or-
	
	- Use the Expression Builder to enter your comma-separated list of operators.
	  To access the Expression Builder, bring up the combo box properties sheet,
	  and click the fx button. In the Expression Builder, enter the list of
	  operators:
	
	  " =,<,>,<> " (without the quotation marks)
	
	  Visual FoxPro will then place that string in the RowSource property field.
	  However, do not attempt to verify this expression in the Expression Builder.
	  Attempting to do so will result in a syntax error message.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	One reason for listing the operators in a combo box is to give a user a list of
	valid operators for use in an SQL query builder to build a query like this:
	
	     Select * from Customers where customer.city <> "WA"
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a Combo Box to the form.
	
	3. In the properties sheet under the Data tab, set the RowSourceType to 1 -
	  value.
	
	4. In the RowSource field, enter "=,<,>,<>" (without the quotation
	  marks), and press ENTER. At this point, Visual FoxPro removes the leading
	  equals sign, leaving ",<,>,<>" behind. When you run the form, the
	  position originally occupied by the equals sign appears but there is no value
	  displayed. When the same, original string is entered using the Expression
	  Builder, the leading equals sign is displayed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
