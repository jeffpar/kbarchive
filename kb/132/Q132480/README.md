---
layout: page
title: "Q132480: BUG: Aliases in View Window Are Listed in Reverse Order"
permalink: kb/132/Q132480/
---

## Q132480: BUG: Aliases in View Window Are Listed in Reverse Order

	Article: Q132480
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As you open successive tables, the tables are listed in reverse order in the
	View window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Close all tables.
	
	2. On the Window menu, click View Window.
	
	3. Click the Open button, and select a table.
	
	4. Click the Open button again, and select another table.
	
	Note that the second table opened is now first in the list of open tables.
	Although the tables are listed in reverse order, the correct work area is given
	in the bottom of the View Window.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
