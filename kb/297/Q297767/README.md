---
layout: page
title: "Q297767: FIX: Strings Stored in MEM Files Limited To 64K"
permalink: /kb/297/Q297767/
---

## Q297767: FIX: Strings Stored in MEM Files Limited To 64K

{% raw %}

	Article: Q297767
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp300BUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbC
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SAVE TO command to store a string larger than 64KB to a
	variable save (.mem) file, you may receive an error message when you restore the
	string.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, run the following code in Visual FoxPro (VFP).
	
	  *!* Q297767: FIX: Strings Stored in MEM Files Limited To 64KB
	  *!* This code demonstrates the problem.
	
	  SET SAFETY OFF
	
	  * First attempt with less than 64 KB.
	  aTest = REPLICATE(" ", 65534)
	  SAVE TO LongStr.MEM ALL LIKE aTest
	  RESTORE FROM LongStr.MEM
	
	  * Second attempt with more than 64 KB.
	  aTest = REPLICATE(" ", 65536)
	  SAVE TO LongStr.MEM ALL LIKE aTest
	  RESTORE FROM LongStr.MEM
	
	The first part of this code executes correctly in all versions of VFP, because
	the string is under 64K.
	
	When you run the second part of the code in VFP version 6.0, you receive the
	following error message:
	
	  Memory file is invalid.
	
	Other versions of VFP produce slightly different messages.
	
	If you replace the space in the REPLICATE function with an "A" in VFP 6.0, you
	receive the following error message:
	
	  Too many variables.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp300BUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
