---
layout: page
title: "Q118395: BUG: Watch Expression Evaluation Gives Unexpected Value"
permalink: kb/118/Q118395/
---

## Q118395: BUG: Watch Expression Evaluation Gives Unexpected Value

	Article: Q118395
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Expressions evaluated in the watch window result in incorrect values, and no
	overflow warnings are given.
	
	CAUSE
	=====
	
	The FORTRAN expression evaluator, which calculates the value of expressions that
	are typed into the watch window, uses the same data type to store intermediate
	values as it does to store the terms in the expression.
	
	For example, if all of the terms in an expression were INTEGER*2, then the
	expression will be evaluated with INTEGER*2 arithmetic. It is very common for an
	overflow to occur in subexpressions of an expression, even if the final value
	can be stored in INTEGER*2. The result of a calculation following this
	convention is incorrect because this is not the way expressions are evaluated in
	FORTRAN code.
	
	RESOLUTION
	==========
	
	Avoid creating expressions that could overflow. The most reliable way to do this
	is to avoid using INTEGER*2 and INTEGER*1.
	
	You can make the subexpressions of an expression be calculated in INTEGER*4 by
	forcing one of the terms to be stored as INTEGER*4. To do this, use the function
	INT4() on a term in the subexpression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft FORTRAN PowerStation
	for MS-DOS, versions 1.0 and 1.0a, and the Microsoft FORTRAN PowerStation 32 for
	Windows NT, version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The expression "i1*i2/i3" in the sample code below has a subexpression "i1*i2",
	which causes an overflow in INTEGER*4. This causes an incorrect evaluation of
	the expression.
	
	To demonstrate the problem, perform the following steps:
	
	1. Build the sample code in debug mode on the Visual Workbench.
	
	2. Step to the print statement.
	
	3. From the Window menu, choose Watch.
	
	4. Type "IAN" (without the quotation marks) in the watch window and press the
	  Enter key.
	
	5. Type "i1*i2/i3" (without the quotation marks) and press the Enter key.
	
	6. Type "int4(i1)*i2/i3" (without the quotation marks) and press the Enter key.
	
	All three lines should display the 3157 because they are all (500*120/19).
	However, the watch window actually displays the following:
	
	     ian = 3157
	     i1*i2/i3 = -291
	     int4(i1)*i2/i3 = 3157
	
	Sample Code
	-----------
	
	  C Compile options needed: Debug Mode
	
	        integer*2 i1,i2,i3,ian
	        i1 = 500
	        i2 = 120
	        i3 = 19
	        ian = i1*i2/i3
	        print *, ian
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
