---
layout: page
title: "Q120756: WINS Manager: Static Mapping Expiration Dates are 1/18/38"
permalink: kb/120/Q120756/
---

## Q120756: WINS Manager: Static Mapping Expiration Dates are 1/18/38

	Article: Q120756
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5x, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Show Database dialog box in Windows Internet Name Service (WINS) Manager,
	the statically mapped entries (which have a check mark in the S column) may have
	an expiration date looking like 1/18/38. The Year column (38) is correct,
	implying the year 2038 (not 1938). Static mapped entries are set to expire on
	the maximum date of the PC's clock and calendar chip. To verify this, select a
	format with a four-digit year by following these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings.
	
	3. Click the Date tab.
	
	4. In the Short Date Style box, click a format with a four-digit year (such as
	  MM/dd/yyyy).
	
	5. Click Apply. The year is displayed as 2038.
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	
	=============================================================================
	
