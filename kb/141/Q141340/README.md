---
layout: page
title: "Q141340: XCLN: MAPILogon Requires Profile Name"
permalink: kb/141/Q141340/
---

## Q141340: XCLN: MAPILogon Requires Profile Name

	Article: Q141340
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run a Simple Messaging Application Programming Interface (MAPI)
	application that makes a call to MAPILogon in Microsoft Exchange, the profile
	name must be passed in the Name field of the function.
	
	MORE INFORMATION
	================
	
	MAPI version 1.0 messaging systems require the profile name. The profile name is
	required, because it contains critical information, such as the mailbox name and
	all transport providers supported by that session.
	
	NOTE: Versions 3.x of Microsoft Mail for PC Networks require only the name field
	to pass the mailbox name and only support one transport provider at a time.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
