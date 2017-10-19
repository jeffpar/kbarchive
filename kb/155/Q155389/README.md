---
layout: page
title: "Q155389: HOWTO: Convert Values to Hexadecimal Format with Xbase"
permalink: /kb/155/Q155389/
---

## Q155389: HOWTO: Convert Values to Hexadecimal Format with Xbase

	Article: Q155389
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 5.0 and 6.0 allow you to convert between hexadecimal and decimal
	values using Xbase code.
	
	MORE INFORMATION
	================
	
	Visual FoxPro 5.0 and 6.0 help you easily convert between decimal and
	hexadecimal numbers. The following examples demonstrate how to gain decimal
	output from a hexadecimal number. Type the following lines in the Command
	window:
	
	     x = 0xff
	     WAIT WINDOW STR(x)
	     y = 0xefff
	     WAIT WINDOW STR(y)
	
	The WAIT WINDOW commands report the numbers 255 and 61439. The zero and the x
	(0x) in front of the hexadecimal value tells Visual FoxPro to treat the
	proceeding values as hexadecimal values.
	
	Additionally, the TRANSFORM() function has a new clause to handle hexadecimal
	conversions. The following TRANSFORM() functions demonstrate this new
	functionality. Type the following code in the Command window:
	
	     ? TRANSFORM(x,"@0")
	     ? TRANSFORM(y,"@0")
	
	The TRANSFORM() function converts the decimal values back to hexadecimal form.
	The zero (0) format code directs the TRANSFORM() function to output hexadecimal
	numbers. The output is always an eight-digit hexadecimal value preceded by 0x.
	
	While these new capabilities are easy to use, earlier versions of FoxPro do not
	have this functionality. If you need backward-compatible code that converts
	decimals to hexadecimal values, create a function within Visual FoxPro using the
	CONVERT() function.
	
	For more information about this technique, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q95717 How to Convert Decimal Numbers to Hexadecimal Numbers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
