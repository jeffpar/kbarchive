---
layout: page
title: "Q119088: PC DOS: 4096 Is Maximum Number of Inbox Entries"
permalink: /kb/119/Q119088/
---

## Q119088: PC DOS: 4096 Is Maximum Number of Inbox Entries

	Article: Q119088
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	The maximum number of Inbox entries in the MS-DOS client and the Macintosh client
	of Microsoft Mail for PC Networks is 4096.
	
	This limitation is due to the size of the delete bit map in the .KEY file. The
	.MBG file contains deleted and active mail headers. The delete flag is not
	maintained in the .MBG file but in the matching .KEY file. Each .KEY file
	contains a 512-byte bitmap of deleted headers in the corresponding .MBG file.
	Thus, the maximum number of messages that can be stored in the Inbox is:
	
	  512*8=4096
	
	The Windows client and the Presentation Manager client have a limit of 5400
	messages in the Inbox folder.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
