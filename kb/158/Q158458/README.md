---
layout: page
title: "Q158458: Frequent Browsing Causes Explorer Settings to Revert"
permalink: /kb/158/Q158458/
---

## Q158458: Frequent Browsing Causes Explorer Settings to Revert

	Article: Q158458
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 maintains user settings for the first 50 open folders in Windows
	Explorer on a most recently used (MRU) basis. Frequent browsing of local and
	remote drives can cause settings to revert from these user- defined values back
	to the original settings.
	
	MORE INFORMATION
	================
	
	Information on viewing folders is stored in the registry. The hard-coded number
	50 was selected as a compromise between the competing needs of controlling
	registry size and enhancing usability.
	
	There is no way to increase the number of Windows settings saved.
	
	
	Additional query words: changes settings default lost
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
