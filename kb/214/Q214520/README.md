---
layout: page
title: "Q214520: MEPP Encrypted Password Syncs to Sun Sparc Fail with Error 8199"
permalink: /kb/214/Q214520/
---

## Q214520: MEPP Encrypted Password Syncs to Sun Sparc Fail with Error 8199

	Article: Q214520
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Password synchronization requests sent to a Sun Sparcstation using the encrypted
	MEPP propagation method may fail with the following event log error 8199:
	
	  error in receiving from socket
	
	Data in event log is 00 00 00 00.
	
	CAUSE
	=====
	
	This problem only occurs if the Ssod.config file on the Sparcstation has the
	shadow file option enabled and the last line of /etc/shadow contains only a
	colon (:).
	
	RESOLUTION
	==========
	
	To work around this problem, remove the last line in the Shadow file on the Sun
	Sparcstation and the errors will stop.
	
	
	Additional query words: SFU Services for Unix
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix
	Version           : winnt:4.0; :
	Issue type        : kbprb
	
	=============================================================================
	
