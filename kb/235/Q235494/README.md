---
layout: page
title: "Q235494: XFOR: Certain Exchange Recipients Don't Display Properly in GW"
permalink: /kb/235/Q235494/
---

## Q235494: XFOR: Certain Exchange Recipients Don't Display Properly in GW

	Article: Q235494
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Novell GroupWise user receives a message sent by means of the Microsoft
	Connector for Novell GroupWise, certain Microsoft Exchange Server recipients may
	not be displayed correctly in the GroupWise client. This occurs for Exchange
	Server users who have the parenthesis character (())in their display name, for
	example:
	
	  John Smith (Exchange)
	
	Only the word "Exchange" is displayed representing the user. This does not affect
	the ability to reply to mail between GroupWise and Exchange Server.
	
	CAUSE
	=====
	
	This behavior is caused by the way the GroupWise client displays message header
	information.
	
	WORKAROUND
	==========
	
	Change the display name of Exchange Server users or other custom recipients such
	that their display names do not contain the parenthesis characters; for example,
	use a square bracket ([]) instead.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: gwise
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
