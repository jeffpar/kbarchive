---
layout: page
title: "Q274011: BUG: SET(&quot;FILTER&quot;) Converts Dates to Current Date Format"
permalink: /kb/274/Q274011/
---

## Q274011: BUG: SET(&quot;FILTER&quot;) Converts Dates to Current Date Format

	Article: Q274011
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500aFIX kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbGr
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set a filter on a table involving a date field and then use the
	SET("FILTER") function to see the filter, the date is converted according to the
	current SET DATE setting. This is particularly likely to cause problems if SET
	STRICTDATE is set to 1 or 2 in Visual FoxPro version 6.0. This behavior also
	applies to the FILTER() function.
	
	RESOLUTION
	==========
	
	The following code saves and restores the filter properly:
	
	  *!* Save the current filter
	  lcSetDate = SET("DATE")
	  lcSetMark = SET("MARK")
	
	  SET DATE TO YMD
	  SET MARK TO "-"
	
	  lcSetFilter = SET("FILTER")
	  lcNewSetFilter = STRTRAN(lcSetFilter, "{", "{^")
	
	  SET DATE TO &lcSetDate
	  SET MARK TO "&lcSetMark"
	
	  *!* Restore the old filter
	  SET FILTER TO &lcNewSetFilter
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To view the problem, run the following code in a .prg file:
	
	  CREATE TABLE datetest (dField D)
	
	  FOR i = 1 TO 10
	     INSERT INTO datetest VALUES ({^2000-09-28} + i)
	  ENDfor
	
	  SET FILTER TO dField = {^2000-10-04}
	
	  *!* Displays the problem under VFP6 only
	  *!* SET STRICTDATE TO 2
	  *!* lcFilter = SET("FILTER")
	  *!* SET FILTER TO &lcFilter
	
	  *!* Displays the problem under both VFP5 and 6 -
	  *!* interprets date as April 10th
	  lcSetDate = SET("DATE")
	  SET DATE TO MDY
	  lcFilter = SET("FILTER")
	  SET DATE TO DMY
	
	  SET FILTER TO &lcFilter
	
	  SET DATE TO &lcSetDate
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500aFIX kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
