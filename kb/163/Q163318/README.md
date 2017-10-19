---
layout: page
title: "Q163318: Helpfile Word Lists May Be Rebuilt After Daylight Savings Change"
permalink: /kb/163/Q163318/
---

## Q163318: Helpfile Word Lists May Be Rebuilt After Daylight Savings Change

	Article: Q163318
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time you select the Index or Find tab in a Helpfile Help Topics
	dialog, the Help system prompts you to build an associated word list. Once the
	word list is built, it should not need rebuilding unless the Helpfile has been
	modified.
	
	However, if the Helpfile resides on an NTFS partition, and your computer is set
	to automatically adjust for Daylight Savings Time (DST), you may be prompted to
	rebuild the word lists following a change to or from DST, even though the
	underlying Helpfile has not been modified. For example, if you build the word
	lists in August (in DST), and revisit the Index or Find tabs in November
	(outside of DST), you will be prompted to rebuild the word lists.
	
	Word lists for Helpfiles that reside on FAT partitions are not affected by this
	problem.
	
	CAUSE
	=====
	
	File timestamps on NTFS file systems are stored as UTC (GMT) times. These times
	are adjusted to Local Time by applying the DST bias, for display purposes, as
	and when required.
	
	When the Help system builds word lists, it records the timestamp of the Helpfile
	from which the lists were built in the word list files themselves, and uses this
	time to detect changes to the Helpfile, when deciding whether or not the word
	lists need to be rebuilt.
	
	The Help system was incorrectly comparing the timestamp Local Time format, which
	is incorrect -- it should have been comparing the timestamps in UTC format, as
	these are invariant with respect to DST changes.
	
	RESOLUTION
	==========
	
	To work around the problem, rebuild the Helpfile word lists following each
	Daylight Savings Time change.
	
	Alternatively, apply the related hotfix and rebuild the word lists once -- word
	lists built using the hotfix are not affected by DST changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
