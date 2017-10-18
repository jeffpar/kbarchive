---
layout: page
title: "Q125626: Err Msg: Application Database Cannot Server, Share or Dir..."
permalink: kb/125/Q125626/
---

## Q125626: Err Msg: Application Database Cannot Server, Share or Dir...

	Article: Q125626
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using Program Group Control (PGC) on a Systems Management Server client,
	error message 11114 appears in the SMSLOG.TXT file:
	
	  Application database cannot server, share or directory entries in SMS Profile
	
	This error is ambiguous and does not explain what problem was encountered by PGC.
	
	CAUSE
	=====
	
	Error 11114 actually indicates that PGC was unable to read a server, share, or
	directory name from the SMS.INI file. This could be caused by a number of
	problems like a corrupted file or mismatched [Server] and [Share] sections.
	
	RESOLUTION
	==========
	
	The SMS administrator will need to examine the SMS.INI file to determine what
	entry is causing the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
