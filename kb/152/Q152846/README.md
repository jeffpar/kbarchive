---
layout: page
title: "Q152846: Srv Event 2000 With Shared Removable Media"
permalink: /kb/152/Q152846/
---

## Q152846: Srv Event 2000 With Shared Removable Media

	Article: Q152846
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT logs between one and nine of the following messages per second in the
	SYSTEM EventLog. The error occurs when a client computer attempts to access a
	shared removable drive (such as a CD-ROM or floppy disk) that has no media in
	the drive.
	
	   Date:     06/24/96          Event ID:  2000
	   Time:     03:27:14 PM       Source:    Srv
	   User:     N/A               Type:      Error
	   Computer: <servername>      Category:  None
	
	   Description:
	   The server's call to a system service failed unexpectedly.
	
	   Data (words):
	
	0000: 00040000 00540001 00000000 c00007d0
	0010: 00000000 c0000013 00000000 00000000
	0020: 00000000 00000000 04e80bb9
	
	NOTE: There are many causes for SRV 2000 error messages. The data segment must
	match the above exactly (in the C0000013 and 04E80BB9 fields) for the
	information in this article to apply.
	
	CAUSE
	=====
	
	The event indicates that the server received an exception of
	STATUS_NO_MEDIA_IN_DEVICE (c0000013). The error occurs when the server tries to
	access a shared resource (for example, a CD-ROM or floppy disk) which has no
	media (that is, no disk) in the drive.
	
	RESOLUTION
	==========
	
	These errors are informational. Notify the administrator that there is no disk
	in the drive. To prevent these errors, insert a disk in the drive.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.50 3.51
	
	=============================================================================
	
