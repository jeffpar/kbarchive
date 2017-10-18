---
layout: page
title: "Q160470: Stop 0x0000000a IPX Sends Browser an Incomplete Datagram"
permalink: kb/160/Q160470/
---

## Q160470: Stop 0x0000000a IPX Sends Browser an Incomplete Datagram

	Article: Q160470
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 may experience a Stop 0x0000000a error with
	the IPX IPX\SPX compatible transport installed on the computer.
	
	CAUSE
	=====
	
	There was a problem with Rdr.sys, where IPX sends the browser an incomplete
	datagram indication. The datagram indication determines if there is more data in
	the buffer to be processed. The browser does not always ask for the remainder of
	the buffer and the result is a Stop 0x0000000a error.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt blue screen
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
