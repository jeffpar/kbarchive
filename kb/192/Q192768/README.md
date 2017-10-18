---
layout: page
title: "Q192768: FIX: Ambiguous Date/Datetime Constant Error"
permalink: kb/192/Q192768/
---

## Q192768: FIX: Ambiguous Date/Datetime Constant Error

	Article: Q192768
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug kbXBase kbDSupport
	Last Modified: 07-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an ambiguous date/datetime string in Visual FoxPro 6.0 causes an ambiguous
	date/datetime constant error message to occur. For example:
	
	  Use the following format:
	  {^yyyy-mm-dd[hh[:mm[:ss]][a|p]]}
	
	CAUSE
	=====
	
	The error message is missing a reference to an optional comma between the Date
	and Time string.
	
	RESOLUTION
	==========
	
	To include the Hour and retain Minutes and Seconds the default in your datetime
	string, use one of the following formats:
	
	     ?{^1998-12-12, 10} && This returns 12-12-98 10:00:00 AM
	
	-or-
	
	     ?{^1998-12-12 10:} && This returns 12-12-98 10:00:00 AM
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual FoxPro 6.0 Service Pack 3. For additional
	information about Visual Studio service packs, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following date/time string in the Command window:
	
	        ?{^1998-12-12 10} && To display date and 10:00:00 AM
	
	NOTE: According to the preceding date/datetime format, the format used is valid.
	However, Visual FoxPro still produces an error with the Ambiguous Date/Datetime
	error message dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600bug kbXBase kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
