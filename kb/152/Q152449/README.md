---
layout: page
title: "Q152449: XADM: Directory Import Fails When Import File Includes DBCS"
permalink: /kb/152/Q152449/
---

## Q152449: XADM: Directory Import Fails When Import File Includes DBCS

	Article: Q152449
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusagekbbuglist
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the import file for Directory Import includes some double-byte characters,
	the Directory Import command in the Microsoft Exchange Administrator program may
	fail to create the mailbox correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Directory Import divides the import file into several pages to read it. The page
	size is 4 KB on an x86 processor. When the import file includes double -byte
	characters and its boundary is at the point of a multiple of 4 KB, Directory
	Import may not work correctly.
	
	In other words, when the lead byte of the double-byte character is at the
	4,096-byte point and the trail byte is at the 4,097-byte point, this problem may
	occur.
	
	Three kinds of phenomena have been confirmed:
	
	- All mailboxes after 4 KB are not imported.
	
	- Only the mailbox that includes 4-KB point is not imported.
	
	- All attributes after 4 KB are out of order.
	
	
	Additional query words: bulk csv attribute language Japanese JPN
	
	======================================================================
	Keywords          : kbusage kbbuglist
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
