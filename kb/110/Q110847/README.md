---
layout: page
title: "Q110847: Avg. Disk Sec/IO Not a Physical Disk Counter"
permalink: kb/110/Q110847/
---

## Q110847: Avg. Disk Sec/IO Not a Physical Disk Counter

	Article: Q110847
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The term "Avg. Disk sec/IO" is incorrectly used in the Windows NT Advanced
	Server "Concepts and Planning Guide." On page 194 of the guide under the heading
	of "Checking for Excessive Paging," the phrase "Avg. Disk sec/IO" is referred to
	as a counter for the physical disk in Performance Monitor. No such counter
	exists under the heading physical disk in Performance Monitor.
	
	MORE INFORMATION
	================
	
	The phrase "Avg. Disk sec/IO" is being used interchangeably with the actual
	counter label of "Avg. Disk sec/Transfer" On page 550 of the Windows NT Advanced
	Server "System Guide," this is explained. "Avg. Disk sec/IO" is defined there in
	terms of average disk-transfer times exactly as "Avg. Disk sec/Transfer" is
	defined with the "Explain" button in the Add To Chart dialog box of the
	Performance Monitor. The counter "Avg. Disk sec/IO" does not exist, it just
	takes the form of "Avg. Disk sec/Transfer."
	
	Also the formula to use for finding excessive paging is vaguely referenced with
	the phrase: "To confirm excessive paging, add together the Avg. Disk sec/IO (a
	physical disk counter) and Pages/sec counter values." The correct method is to
	add "Avg. Disk sec/Read" and "Avg. Disk sec/Write" to get the number for "Avg.
	Disk sec/IO (or Transfer)."
	
	Additional query words: prodnt paging file slow
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
