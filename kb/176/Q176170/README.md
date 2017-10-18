---
layout: page
title: "Q176170: XADM: Single Instance Ratio Counter Indicates Value Less Than 1"
permalink: kb/176/Q176170/
---

## Q176170: XADM: Single Instance Ratio Counter Indicates Value Less Than 1

	Article: Q176170
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Performance Monitor in Microsoft Windows NT, an administrator can monitor
	the Single Instance Ratio counter for the MSExchangeIS Private and MSExchangeIS
	Public objects. This value may sometimes show a number between 0 and 1, which
	can give the impression of a problem with the information store.
	
	CAUSE
	=====
	
	This value represents an approximation of the average instances of every message
	in the store. Because Microsoft Exchange supports single instances of messages
	that can be shared by multiple mailboxes, it is possible to have more than one
	message shared by many users as long as the message remains unaltered and
	resides in the server store.
	
	However, this value may sometimes show a number less than 1 because of the way
	the algorithm is designed to work and the way messages are internally tracked by
	the store. A value of less than 1 should be interpreted as close to 1.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
