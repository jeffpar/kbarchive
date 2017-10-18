---
layout: page
title: "Q189866: BUG: Incorrect Results When Comparing Large Numbers"
permalink: kb/189/Q189866/
---

## Q189866: BUG: Incorrect Results When Comparing Large Numbers

	Article: Q189866
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
	
	When you compare two numbers for equality, you might receive an erroneous result
	when the resulting numbers are very large.
	
	NOTE: This behavior does not occur in Visual FoxPro 3.0x.
	
	RESOLUTION
	==========
	
	Use the ROUND() function when checking the equality of very large floating-
	point numbers. For example, the following line of code produces the correct
	result:
	
	     ?ROUND(1+(1048575+(i/1000)),5)=1048576.001
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following commands in the Command window:
	
	     SET DECIMAL to 5
	     i=1
	     ?(1+(1048575+(i/1000)))=1048576.001
	     ?1+(1048575+(1/1000))=1048576.001
	
	Notice that the first calculation, using the variable i, evaluates as false while
	the calculation using the integer evaluates true.
	
	Additional query words: kbVFp500bug kbVFp500abug kbVFp600bug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
