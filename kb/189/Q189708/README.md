---
layout: page
title: "Q189708: BUG: Calculator Gives Numeric Overflow on Some Calculation"
permalink: /kb/189/Q189708/
---

## Q189708: BUG: Calculator Gives Numeric Overflow on Some Calculation

{% raw %}

	Article: Q189708
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual FoxPro Calculator might give incorrect results and display the
	following message in the status bar when performing certain mathematical
	operations:
	
	  Numeric Overflow
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro to run the calculator, type the following in the Command
	  window:
	
	  " ACTIVATE WINDOW CALCULATOR" (without the quotation marks)
	
	2. On the Edit menu, click Properties.
	
	3. Under Decimal places, select Floating and close the Properties dialog box.
	
	4. Enter 123 and press the square root button.
	
	RESULT: The value returned is zero, and the Numeric Overflow message appears in
	the status bar.
	
	Additional query words: kbVFp600bug kbVFp500bug kbVFp500abug kbTools kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
