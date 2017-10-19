---
layout: page
title: "Q96307: Mac SMI: MapiSaveMail Is Not Supported"
permalink: /kb/096/Q96307/
---

## Q96307: Mac SMI: MapiSaveMail Is Not Supported

	Article: Q96307
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Small MAPI call MapiSaveMail is not supported with version 3.1 of Microsoft
	Mail for AppleTalk Networks. This call allows mail that has been sent to be
	modified. This call will return a "Not Supported" message if called.
	
	MORE INFORMATION
	================
	
	Mail uses a single store architecture. There is one copy of a message that has
	been delivered to two or more people in the same postoffice. This single copy
	must be unchangeable or all users would see the changed message, not the
	original.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
