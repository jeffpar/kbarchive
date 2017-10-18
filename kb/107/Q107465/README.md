---
layout: page
title: "Q107465: FIX: ClassWizard Floating-Point Parsing Errors"
permalink: kb/107/Q107465/
---

## Q107465: FIX: ClassWizard Floating-Point Parsing Errors

	Article: Q107465
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5 
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard cannot parse floating-point numbers written in scientific
	floating-point notation, such as 1.e+006. If a number formatted in this manner
	is in the lines of code that ClassWizard must parse, the following error is
	generated:
	
	  Parsing error: Expected ")".
	  Input Line: "DDV_MinMaxFloat(pDX, m_Var, 0., 1.e+006);"
	
	The follow sequence of steps causes the code generator of ClassWizard to generate
	floating-point numbers in scientific notation:
	
	1. Add an edit control to a dialog box in App Studio.
	
	2. Add a float or double member variable to class of the previously added edit
	  control.
	
	3. In the range validation fields, add a floating-point number that fits one of
	  the following criteria, for member variable of type float:
	
	  a. It has seven digits or more to the left of the decimal point.
	
	  b. It has one or more zeros to the right of the decimal point, between the
	     decimal point and the first nonzero number.
	
	  Or the range validation fields contain a floating-pointer number that fits one
	  of the following criteria, for a member variable of type double:
	
	  a. It has 16 digits or more to the left of the decimal point.
	
	  b. It has one or more zeros to the right of the decimal point, between the
	     decimal point and the first nonzero number.
	
	RESOLUTION
	==========
	
	The only work around is to modify the code by hand and convert it back to the
	original notation. Be aware, however, that if you edit the variables for that
	class again, the numbers will be converted back to scientific notation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual C++ 2.1.
	
	Additional query words: 1.00 1.50
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC200
	Version           : :1.0,1.5,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
