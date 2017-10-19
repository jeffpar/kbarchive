---
layout: page
title: "Q161153: HOWTO: Use the Assert Method for Debugging"
permalink: /kb/161/Q161153/
---

## Q161153: HOWTO: Use the Assert Method for Debugging

	Article: Q161153
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
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Assert method of the Debug object allows monitoring of an expression for
	failure conditions.
	
	MORE INFORMATION
	================
	
	The following syntax is used for the Assert method:
	
	  Debug.Assert (expression)
	
	The Assert method syntax has the following object qualifier and part:
	
	     Part            Description
	     ----            -----------
	     Debug           Required. The Assert method only applies to the
	                     Debug object.
	
	     expression      Required. Any logical expression.
	
	The Assert method forces a design-time break at the Assert statement when the
	expression evaluates to False. If the expression evaluates as True, program
	operation continues. For example:
	
	        Function myFunction (x as Long,y as Long, z as Long) as Long
	            Debug.Assert (x<>0 And y<>0 And z<>0)
	            myFunction = 1/x + 1/y + 1/z
	        End Function
	
	If you call myFunction as:
	
	        q = myFunction (1,2,3)
	
	the program continues as normal. However, passing a zero as any one of the
	parameters forces a break. The following example breaks at the Assert
	statement:
	
	        q = myFunction (1,0,3)
	
	The above example allows testing for inappropriate parameters to protect against
	a division by zero error. If a break occurs at the Assert statement, you can
	check the locals window to determine which value is inappropriate. This is
	especially useful when the argument values come from other functions:
	
	       q = myFunction ( calcX(), calcY(), calcZ() )
	
	The Assert method is only used for debugging. During compiling, Microsoft Visual
	Basic always removes Assert statements from the final code. There is no
	workaround for this behavior.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
