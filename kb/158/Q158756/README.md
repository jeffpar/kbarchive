---
layout: page
title: "Q158756: BUG: Double Data Type Does Not Display Small Values Correctly"
permalink: /kb/158/Q158756/
---

## Q158756: BUG: Double Data Type Does Not Display Small Values Correctly

{% raw %}

	Article: Q158756
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the stored value is smaller than 10 to the minus (-)15th power, the new
	data type, known as double, is not displayed correctly in a table field.
	
	Visual FoxPro should display numbers smaller than 10 to the -15th power. For
	example, the number 0.00000000000000009 (9 x 10 to the -17th power) should be
	displayed as 9.0000000000000E-17. You see this as .0000000000000000000 in a
	browse.
	
	In Visual FoxPro versions 3.0 and 3.0b, values smaller than 10 to the -15th power
	are displayed as a string of zeros.
	
	In Visual FoxPro 5.0, values between 10 to the -15th power and 10 to the -30th
	power are displayed as zeros. Values smaller than 10 to the -30th power are
	displayed correctly. For example, 9 x 10 to the -32nd power is displayed
	correctly as 9.0000000000000E-32.
	
	Values between 10 to the -13th power and 10 to the -15th power may also appear
	incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The values are stored correctly, but displayed incorrectly. Arithmetic
	operations that use the values are performed correctly. To see the values, you
	must multiply them by a positive power of 10. As a result, the significant
	digits are within the range of values that are displayed correctly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Visual FoxPro 3.0, 3.0b, and 5.0 may display the following commands in the
	Command window:
	
	     CREATE TABLE dpt (dp B(18))     && Double data, 18 to right of decimal
	     INSERT INTO dpt (dp) VALUES (9)
	     BROWSE     &&; The data appears as a 9, a decimal, and 18 zeros
	     REPLACE dp WITH dp/10**15  && 0. then 14 zeros followed by 9000
	     REPLACE dp WITH dp/10      && 0. then 14 zeros followed by 1000
	     REPLACE dp WITH 9          && Reset
	     REPLACE dp WITH dp/10**31  && Correct in version 5, wrong in version 3.x
	     REPLACE dp WITH dp/10**277 && Correct in version 5, zeros in version 3.x
	     REPLACE dp WITH dp*10**308 && Restores 9.00000000000000000
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
