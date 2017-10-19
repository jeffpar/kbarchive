---
layout: page
title: "Q221725: FIX: DATE() Function Does Not Propagate NULLs Properly"
permalink: /kb/221/Q221725/
---

## Q221725: FIX: DATE() Function Does Not Propagate NULLs Properly

	Article: Q221725
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Placing a NULL in the DATE() function causes the following error:
	
	  Function argument, value, type or count is invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The syntax of the DATE() function is DATE([nYear, nMonth, nDay]). Placing a NULL
	in any of the parameters causes the error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Open the Command window, and type the following:
	
	  "? DATE(null,3,2)" (without the quotation marks)
	
	The error listed in the SYMPTOMS section appears.
	
	Using the NULL in place of the following parameters also causes the error:
	
	  "? DATE(1998,null,2)&& " (without the quotation marks)should return
	  January for the month
	
	  "? DATE(1998,3,null)&& " (without the quotation marks)should return
	  first day
	
	If NULL appears in place of the year, Visual FoxPro should substitute the current
	year or month. If NULL replaces the month, January should be returned for the
	month. If NULL replaces the day parameter, it should default to the first day of
	the month.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
