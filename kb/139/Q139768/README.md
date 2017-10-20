---
layout: page
title: "Q139768: BUG: ON ERROR Statement Not Executed in Browse of Table"
permalink: /kb/139/Q139768/
---

## Q139768: BUG: ON ERROR Statement Not Executed in Browse of Table

{% raw %}

	Article: Q139768
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ON ERROR routine in a Browse command is ignored and a system error message
	dialog box is returned instead. When code is executed that does essentially the
	same thing, the ON ERROR routine works correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Testdata database located in the Visual FoxPro directory under
	  \Samples\Data.
	
	2. Use the Employee table, and in the Command window, type:
	
	  " On error wait window "Error encountered:" + Message() " (without the
	  quotation marks)
	
	3. In the Command window, type the following commands:
	
	  " Scatter memvar
	  Append blank
	  Gather memvar && Note that ON ERROR routine triggers." (without the
	  quotation marks)
	
	4. Browse the table.
	
	5. Press CTRL+Y or click Append Blank to add a new record.
	
	6. Enter a duplicate key for emp_id, and note that the system error message is
	  returned instead of the ON ERROR routine.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
