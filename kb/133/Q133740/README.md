---
layout: page
title: "Q133740: Null Value (.NULL.) Is a Marker - Not a Data Type"
permalink: /kb/133/Q133740/
---

## Q133740: Null Value (.NULL.) Is a Marker - Not a Data Type

{% raw %}

	Article: Q133740
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The null value (.NULL.) is not an actual value, it is a marker that denotes that
	a memory variable or a field value is missing or unknown. If .NULL. is assigned
	to a field or a variable, the field or variable's data type is not changed, but
	the value is changed to NULL.
	
	MORE INFORMATION
	================
	
	Steps to Demonstration Behavior
	-------------------------------
	
	The .NULL. value can be assigned to variables that are numeric or character as
	demonstrated by these steps:
	
	1. From the Command window, issue these commands:
	
	     nMyvariable=200        && and press ENTER
	     ? TYPE("nMyvariable")  && and press ENTER
	     ? nMyvariable
	
	  The N is displayed for nMyvariable denoting a variable of numeric type.
	
	2. To assign a null value (.NULL.) to nMyvariable, issue the following commands
	  in the Command window:
	
	     store .NULL. to nMyvariable        && and press ENTER
	     ? TYPE("nMyvariable")              && and press ENTER
	     ? nMyvariable                      && and press ENTER
	
	  The value N is displayed followed by .NULL.; the type of the variable did not
	  change but the value did.
	
	3. To assign a character string to the variable and check the variable type,
	  issue the following commands in the Command window:
	
	     cMyvariable="This is a String"     && and press ENTER
	     ? cMyvariable                      && and press ENTER
	
	  The screen displays the string "This is a String."
	
	4. Issue the following command in the Command window:
	
	     ? TYPE("cMyvariable")              && and press ENTER
	
	  The screen displays C denoting a character type.
	
	5. Issue the following commands in the Command window:
	
	     STORE .NULL. TO cMyvariable        && and press ENTER
	     ?TYPE("cMyvariable")               && and press ENTER
	
	  The screen displays C to show that the type has not been changed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
