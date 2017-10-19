---
layout: page
title: "Q159093: Windows NT Muldiv() Function Returns Incorrect Value"
permalink: /kb/159/Q159093/
---

## Q159093: Windows NT Muldiv() Function Returns Incorrect Value

	Article: Q159093
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Muldiv(0,0,-1) returns -1 when it should be 0. The MulDiv function multiplies
	two 32-bit values and then divides the 64-bit result by a third 32-bit value.
	The return value is rounded up or down to the nearest integer.
	
	  int MulDiv(
	      int nNumber,        // 32-bit signed multiplicand
	      int nNumerator,     // 32-bit signed multiplier
	      int nDenominator    // 32-bit signed divisor
	
	Parameters
	----------
	
	nNumber: Specifies the multiplicand.
	
	nNumerator: Specifies the multiplie
	
	nDenominator: Specifies the number by which the result of the multiplication
	(nNumber * nNumerator) is to be divided.
	
	Return Values
	-------------
	
	If the function succeeds, the return value is the result of the multiplication
	and division. If either an overflow occurred or nDenominator was 0, the return
	value is -1.
	
	CAUSE
	=====
	
	The multiplier is positive, the multiplicand is positive, the divisor is
	negative. The result is negative when actually, the result was positive (0).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
