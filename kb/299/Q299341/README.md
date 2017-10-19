---
layout: page
title: "Q299341: FIX: Rounding Error Saving Calculated Value into Integer"
permalink: /kb/299/Q299341/
---

## Q299341: FIX: Rounding Error Saving Calculated Value into Integer

	Article: Q299341
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp kbvfp300bBUG kbvfp300BUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug k
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a calculated value is written into an integer field in a table, the value may
	be rounded improperly and stored incorrectly. For example, if X = 2.05 * 100,
	when X is added to an integer field, the actual value stored to the table is
	204.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code to a new program:
	
	  CLEAR
	  LOCAL lnCalcedVal
	  lnCalcedVal = 2.05 * 100
	
	  CREATE CURSOR TstCurs (iFLD1 i)
	  INSERT INTO TstCurs VALUES(lnCalcedVal)
	  ? "2.05 * 100"
	  ? "----------------"
	  ? "Calculated Value:",lnCalcedVal
	  ? "Value inserted into table:",TstCurs.iFLD1
	
	  USE IN TstCurs
	
	2. Save and run the code (the program name does not matter).
	
	When the code runs, 2.05 * 100 is stored to a local variable, lnCalcedVal. This
	variable is then inserted into an integer field in a cursor. The output on the
	screen shows the value of lnCalcedVal and the contents of the cursor's integer
	field. Note that the two values are different.
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp kbvfp300bBUG kbvfp300BUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
