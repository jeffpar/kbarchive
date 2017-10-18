---
layout: page
title: "Q140516: FIX: Storing Array Elements Causes GP Fault"
permalink: kb/140/Q140516/
---

## Q140516: FIX: Storing Array Elements Causes GP Fault

	Article: Q140516
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the CLEAR ALL command in the Command window results in an error such
	as:
	
	  Use of Unallocated Handle
	
	  -or-
	
	  This program has performed an illegal operation and will be shut down.
	
	CAUSE
	=====
	
	It is likely that you have used the STORE command to assign values to an array.
	
	WORKAROUND
	==========
	
	Instead of using the STORE command to assign values to your array, use the
	assignment operator (=).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro
	version 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following code:
	
	     -=-=-=-=-=-=-=-=-=-=-=-=
	          BEGIN CODE
	     -=-=-=-=-=-=-=-=-=-=-=-=
	     PUBLIC yy
	     yy = CREATEOBJECT("cc")
	     RETURN
	
	     DEFINE CLASS cc AS Custom
	     DIMENSION ee(1)
	     DIMENSION bb(1)
	
	     PROCEDURE Whatever
	     LOCAL ltemp
	
	     DO FORM C:\VFP\TEST NAME ltemp LINKED
	
	     *-- Use the following two lines to demonstrate the error.
	     STORE ltemp TO THIS.bb(1)
	     STORE ltemp TO THIS.ee(1)
	
	     *-- Use the following two lines to demonstrate the workaround.
	     * THIS.bb(1) = ltemp
	     * THIS.ee(1) = ltemp
	
	     ENDPROC
	     ENDDEFINE
	     -=-=-=-=-=-=-=-=-=-=-=-=
	       END CODE
	     -=-=-=-=-=-=-=-=-=-=-=-=
	
	2. In the Command window, enter the following line of code:
	
	     yy.Whatever()
	
	3. In the Command window, enter the following line of code:
	
	     CLEAR ALL
	
	To work around the problem, change the STORE lines into comments and change the
	lines that use the assignment operator into executed lines to see the
	workaround.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
