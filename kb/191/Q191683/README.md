---
layout: page
title: "Q191683: BUG: @...GET Does Not Display the Complete Century Date"
permalink: /kb/191/Q191683/
---

## Q191683: BUG: @...GET Does Not Display the Complete Century Date

	Article: Q191683
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp500aBUG kbvfp600bug kbXBase
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After issuing a SET CENTURY OFF command, a year of 2000 or greater appears
	truncated when displayed with @...GET command.
	
	CAUSE
	=====
	
	The @...GET command displays the entire date regardless of the value of SET
	CENTURY. This ensures that the current date value appears regardless of the
	century.
	
	RESOLUTION
	==========
	
	Add a SIZE clause to the @...GET command. For instance, change the code in the
	More Information section to read as follows:
	
	  @ 1,1 GET dDate FONT "arial"   SIZE 1,10
	  @ 3,1 GET dDate FONT "courier new" SIZE 1,10
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This issue will most likely effect programmers converting legacy code. Normally,
	you would use a text box to display dates.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program (.prg) file that contains the following code and run the
	  program:
	
	  CLEAR
	  SET CENTURY OFF
	  dDate = {^2001/01/02}
	  @ 1,1 GET dDate FONT "arial"
	  @ 3,1 GET dDate FONT "courier new"
	  READ
	
	Notice that the year appears truncated because Visual FoxPro places a four- digit
	year in the date even though you issue a SET CENTURY OFF command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbvfp500aBUG kbvfp600bug kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
