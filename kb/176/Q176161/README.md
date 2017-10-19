---
layout: page
title: "Q176161: XFOR: Exchange 5.5 Can Disallow Auto Forwarding to the Internet"
permalink: /kb/176/Q176161/
---

## Q176161: XFOR: Exchange 5.5 Can Disallow Auto Forwarding to the Internet

	Article: Q176161
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Exchange Server versions 4.0 and 5.0, administrators can prevent users from
	sending Out-Of-Office (OOF) messages and AutoReplies to Internet addresses.
	However, administrators cannot prevent users from auto-forwarding messages to
	Internet addresses.
	
	In Exchange Server version 5.5, administrators can configure the Exchange Server
	Internet Mail Service so that auto-forwarded messages are not delivered through
	the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	The Exchange Server Administrator program has two checkboxes for the Internet
	Mail Service, on a global and per-domain basis, to prevent users from sending
	AutoReplies and Out-Of-Office messages. If you click to select the Disable
	AutoReply check box, AutoForwards are also disabled. Previously, auto-forwarded
	messages were not detected because there were no special message classes or
	properties on the envelope, as there are for AutoReplies and OOF messages. The
	Exchange Server 5.5 information store is modified to promote the
	PR_AUTO_FORWARDED property to the envelope. If this property is present, and the
	given domain has disabled AutoReplies, the Internet Mail Service discards the
	Auto Reply message.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
