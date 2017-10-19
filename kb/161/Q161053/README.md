---
layout: page
title: "Q161053: FIX: CALCULATE SUM() on Currency Field Gives Illegal Operation"
permalink: /kb/161/Q161053/
---

## Q161053: FIX: CALCULATE SUM() on Currency Field Gives Illegal Operation

	Article: Q161053
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performing a comparison on a value created with the CALCULATE SUM() function
	causes and illegal operation error. In Windows 95, the error message states the
	following:
	
	  This program performed an illegal operation and will be shut down.
	
	After pressing the Details push button, the following message appears:
	
	  VFP caused and invalid pagefault in module VFP .EXE at <register
	  address>.
	
	In Windows NT 4.0, the following error appears:
	
	  An application error had occurred and an application error log is being
	  generated.
	  VFP.EXE
	  Exception: access violation.
	
	This behavior does not occur in Visual FoxPro 3.0a.
	
	RESOLUTION
	==========
	
	The use of the STR() and VAL() functions may prevent this error. The modified
	code example below shows the implementation of this resolution:
	
	     SET TALK OFF
	     CREATE TABLE junk (amt y)
	     INSERT INTO junk (amt) VALUE(1.00)
	     INSERT INTO junk (amt) VALUE(0.20)
	     CALCULATE SUM(amt) TO mx
	     mx=STR(mx)  && Converts the value from numeric to character type.
	     mz = (VAL(mx) < 0)  && Converts mx back to numeric data type.
	     ? mz
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The following code illustrates this behavior. The use of other aggregate
	functions, such as AVG(), in the CALCULATE function produces similar results.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Enter the following code in a program and execute:
	
	     SET TALK OFF
	     CREATE TABLE junk (amt y)
	     INSERT INTO junk (amt) VALUE(1.00)
	     INSERT INTO junk (amt) VALUE(0.20)
	     CALCULATE SUM(amt) TO mx
	     mz = (mx < 0)
	     ? mz
	
	The error occurs during the comparison of the variable created with the CALCULATE
	SUM() function and another value. In the example above, initially declaring the
	variable mx numeric does not prevent the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
