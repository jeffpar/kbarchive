---
layout: page
title: "Q157954: BUG: ROUND() Function Not Rounding Properly After Calculations"
permalink: kb/157/Q157954/
---

## Q157954: BUG: ROUND() Function Not Rounding Properly After Calculations

	Article: Q157954
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox
	Last Modified: 30-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the ROUND() function after performing mathematical calculations on certain
	numeric values does not produce the correct result. The resulting number is not
	rounded correctly to the proper decimal place.
	
	CAUSE
	=====
	
	For some numeric values, the precision limit within FoxPro decreases after
	performing mathematical calculations.
	
	RESOLUTION
	==========
	
	Use the Currency data type when more accurate rounding of numeric values is
	necessary. However, using the Currency data type does not fix all rounding
	problems.
	
	The following code example provides a workaround by converting the numeric
	contents of mpay to a string. Then the VAL() function converts the string back
	to a numeric data type for use in the ROUND() function.
	
	     CLEAR
	     mrate = 86.173125
	     mhours = 24.0000
	     mpay = mhours * mrate
	     ? mpay
	     test=STR(mpay,LEN(STR(mpay)),LEN(STR(mpay)))
	     ? ROUND(mpay, 2)
	     ? ROUND(VAL(test),2)
	
	The code first returns the value of mpay. Next the incorrectly rounded value,
	followed by the correctly rounded value, appears. The above code may produce the
	correct result with every occurrence of rounding errors in Visual FoxPro.
	
	The discrepancy of the ROUND() function's behavior is often related to a decrease
	in precision as Visual FoxPro performs calculations on several numbers. For
	instance, by placing the value of the variable mpay, 2068.1550000000, directly
	into the ROUND() function, the correct result appears. Type the following in the
	Command window:
	
	  " ? ROUND(2068.1550000000,2) " (without the quotation marks)
	
	The correct value appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code examples illustrate possible rounding problems that may be
	encountered in Visual FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following lines of code:
	
	        mrate = 86.173125
	        mhours = 24.0000
	        mpay = mhours * mrate
	        ? mpay
	        ? ROUND(mpay, 2)
	
	2. Close the program and run it.
	
	3. The ROUND()function returns 2068.15. This is incorrect. The value is not
	  rounded correctly to the second decimal place. The correct value should be
	  2068.16.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : :3.0,3.0b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
