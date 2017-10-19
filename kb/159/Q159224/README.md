---
layout: page
title: "Q159224: Stop 0x0000000A Nwlnkrip.sys RAS Server w/2 Token Ring Cards"
permalink: /kb/159/Q159224/
---

## Q159224: Stop 0x0000000A Nwlnkrip.sys RAS Server w/2 Token Ring Cards

	Article: Q159224
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT Server configured as a RAS Server with two token ring cards on the
	same computer may stop with the following message:
	
	  STOP: 0x0000000A (0x00000030, 0x00000002, 0x00000000, 0xf8fb3695)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The first will appear exactly as shown on the x86 platform. The fourth
	parameters will fall within Nwlnkrip.sys.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, complete one of the following steps:
	
	- Connect the Token Ring Cards to different nets.
	
	- Remove a Token Ring Card from the system.
	
	- Remove the RAS Server Service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 0xA
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
