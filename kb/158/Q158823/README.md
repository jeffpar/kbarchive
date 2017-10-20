---
layout: page
title: "Q158823: FIX: Operator/Operand Type Mismatch Executing SQL with IIF"
permalink: /kb/158/Q158823/
---

## Q158823: FIX: Operator/Operand Type Mismatch Executing SQL with IIF

{% raw %}

	Article: Q158823
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Operator/operand type mismatch error occurs when executing a SQL statement
	that includes the IIF() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and run a program that contains the following code:
	
	    DIMENSION la[ 2]
	    la[ 1] = .F.
	    la[ 2] = "???"
	
	    PRIVATE ln
	    ln = 1
	
	    SELECT type FROM foxuser ;
	       WHERE IIF( ln= 1, .T., la[ ln] = "AAA")   && ln is always 1!
	
	Additional query words: VFoxWin Public kbdse
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
