---
layout: page
title: "Q130464: BUG: Number Entry Starts at Center or Left in a Browse"
permalink: kb/130/Q130464/
---

## Q130464: BUG: Number Entry Starts at Center or Left in a Browse

	Article: Q130464
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbui kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When entering a number in a numeric field, the numbers are echoed to the Browse
	field at a position other than the far right as expected. The exact location
	depends on which font you are using. The starting position can be anywhere from
	the third to the tenth position.
	
	RESOLUTION
	==========
	
	When you press the ENTER key, the number shifts to the correct location.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	This problem was not corrected in version 3.0 in order to maintain backward
	compatibility with version 2.6. There are many complex issues concerning input
	masks and picture clauses that would be effected by a change in this area.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a table containing a numeric field with no decimal point:
	
	     CREATE CURSOR testnum (num n(10))
	
	2. Browse the table, and add a record.
	
	3. Enter the number 123456789.
	
	Notice that the numbers start somewhere other than the far right as expected for
	a numeric field. However, when you press the ENTER key, the number shifts to the
	correct location.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbui kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
