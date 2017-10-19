---
layout: page
title: "Q78303: Intermittent File Corruption Problem"
permalink: /kb/078/Q78303/
---

## Q78303: Intermittent File Corruption Problem

	Article: Q78303
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If files are rapidly accessed on a Windows NT file server, intermittent data
	corruption may occur. Microsoft Internet News Server data files may exhibit
	these symptoms. The problem is more likely observed on a multiprocessor system.
	
	CAUSE
	=====
	
	If an application performs a write-extend of a file, the cache manager
	read-ahead thread is also reading the current last page of the file as part of a
	larger read. The read-ahead thread issues the read, and the write is blocked
	while the read completes. Because of a timing problem that may occur, the memory
	manager wakes the write thread associated with the I/O operation. This thread
	will place null characters in the last page that is beyond the current file size
	and then write the new data into the page. The read thread wakes up and also
	zeroes the last page after the write thread has written the new data. The update
	to the page is lost and null characters are appended in the file instead of the
	data that should have been committed for the I/O operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
