---
layout: page
title: "Q310998: PRB: EMPTY() May Incorrectly Return False When Testing for Zero"
permalink: kb/310/Q310998/
---

## Q310998: PRB: EMPTY() May Incorrectly Return False When Testing for Zero

	Article: Q310998
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300b kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp300
	Last Modified: 07-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do floating point math and test the result for zero with the EMPTY()
	function and the equals operator (=), you may see different results.
	
	CAUSE
	=====
	
	Floating point math does the computations in binary fractions, which may not
	convert exactly back to decimal. Rounding errors can cause the internal
	representation of values to be slightly different than their displayed values.
	
	RESOLUTION
	==========
	
	Either test for the value being equal to 0 (because the = operator allows for
	slight differences) or round the value you are testing to the number of decimal
	places used in your computations.
	
	MORE INFORMATION
	================
	
	To see this behavior, run the following code:
	
	  #DEFINE vfpCR CHR(13) + CHR(10)
	
	  LOCAL lnValue
	
	  CREATE CURSOR test (nValue N (10,2))
	  INSERT INTO test VALUES (260.70)
	  INSERT INTO test VALUES (-31.60)
	  INSERT INTO test VALUES (-260.70)
	  INSERT INTO test VALUES (31.60)
	
	  lnValue = 0
	  SELECT test
	  SCAN 
	  	lnValue = lnValue + nValue
	  ENDSCAN
	
	  =MESSAGEBOX("EMPTY() = " + IIF(EMPTY(lnValue), "T", "F") + vfpCR + ;
	  	"lnValue = " + STR(lnValue, 10, 2) + vfpCR + ;
	  	"EMPTY(ROUND()) = " + IIF(EMPTY(ROUND(lnValue, 2)), "T", "F") + vfpCR + ;
	  	"Comparison on lnValue = 0 is " + IIF(lnValue = 0, "T", "F"))
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300b kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp300xSearch kbvfp500xSearch kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
