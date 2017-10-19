---
layout: page
title: "Q139863: How to Determine the Variable Type"
permalink: /kb/139/Q139863/
---

## Q139863: How to Determine the Variable Type

	Article: Q139863
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Visual FoxPro TYPE() function, you must ensure that the
	expression passed to the function is always be of the character type. You can
	use a user-defined function (UDF) to determine the type of a variable without
	trying to convert the variable to a character string. This article shows you how
	to do it.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a program file, and type the following function into it:
	
	     FUNCTION ALLTYPE
	      *
	      *  Purpose:  Determine the data type of a variable
	      *  Syntax:   m.cNewValue = ALLTYPE(<Variable Name>)
	      *  Parms:    xxx (Can be Character, Numeric, Date, or Logical)
	      *            The variable for which the type is to be determined.
	      *  Return:   lcType:  C for Character
	      *                     N for Numeric
	      *                     D for Date
	      *                     L for Logical
	      *  Example:  lcTheType=ALLTYPE(Variable)
	      *
	      PARAMETER xxx
	      local llType,lcType
	      lcTemperror=ON('ERROR')
	      ON ERROR llType=.f.
	      llType=.T.
	      xxx=xxx+" "
	      IF llType
	        lcType="C"
	      ENDIF
	      llType=.T.
	      xxx=!xxx
	      IF llType
	        lcType="L"
	      ENDIF
	      llType=.T.
	      xxx=xxx+1
	      IF llType
	        lcType="N"
	      ENDIF
	      llType=.T.
	      xxx=MONTH(xxx)
	      IF llType
	        lcType="D"
	      ENDIF
	      ON ERROR &lcTemperror
	     RETURN lcType
	
	2. The value returned is N.
	
	The TYPE() function may be used to obtain the same result if the variable is
	placed enclosed in quotation marks. For example, the following will also return
	N:
	
	     ? TYPE('x')
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
