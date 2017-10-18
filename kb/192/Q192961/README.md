---
layout: page
title: "Q192961: PRB: SET DECIMAL Limited to Four Decimals in Currency Data"
permalink: kb/192/Q192961/
---

## Q192961: PRB: SET DECIMAL Limited to Four Decimals in Currency Data

	Article: Q192961
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The maximum number of decimal places allowed in a currency value is four. Using
	the SET DECIMAL command to set more than four decimal places in a currency value
	does not work.
	
	RESOLUTION
	==========
	
	You can use the Transform function to convert a currency value to the number of
	decimals you want, but this also changes the data type to character instead of
	currency type. You will note this problem, for instance, if you type the
	following in the Command window:
	
	     x=$123.323
	     ? TRANSFORM(x,'9999.9999999')
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If the initial currency value has two decimals, setting SET DECIMAL to four pads
	two zeros at the end of the currency value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following commands in Command window or from a program:
	
	        CLEAR ALL
	        x=$37.493
	        ?x       && displays 37.4938
	        SET FIXED ON
	        SET DECIMALS TO 2
	        ?x       && displays 37.49
	        SET DECIMAL TO  4
	        ?x       && displays 37.4930
	        SET DECIMALS to 7
	        ?x       && displays 37.4930
	        SET FIXED OFF
	
	If the preceding code runs in Visual FoxPro 3.x, four decimals appear regardless
	of the setting of the SET DECIMAL command.
	
	Additional query words: kbDSupport kbDse kbXBase kbVFp500abug kbVFp600bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
