---
layout: page
title: "Q178627: XFOR: Chat Server 2.0 Can Fail with Extremely Heavy Usage"
permalink: kb/178/Q178627/
---

## Q178627: XFOR: Chat Server 2.0 Can Fail with Extremely Heavy Usage

	Article: Q178627
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an extremely high number of users log on and off the Microsoft Internet
	Chat Server version 2.0 in a short period of time, the Chat Server can silently
	stop without writing an error to the Event log. The Chat Server can also produce
	an application exception in CHATSVC.
	
	CAUSE
	=====
	
	This problem was found when a stress test application was written with Visual
	Basic and the Chat.ocx. The application logged users on and off without actually
	simulating a chat dialog. When run against Internet Chat Server 1.0, the server
	generated an error indicating that the NICK was already in use. This means that
	the user is connected but not logged on. The Internet Chat Server 2.0 did not
	process authentication messages correctly when the NICK was already in use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
