---
layout: page
title: "Q118535: X400: Details on Disclose Recipient Option"
permalink: kb/118/Q118535/
---

## Q118535: X400: Details on Disclose Recipient Option

	Article: Q118535
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Disclose Recipients option (chosen when you send a message) discloses P1
	recipients that are not on the P2 list. For instance, if a distribution list in
	the P2 lists is expanded, the new members are added to the P1 list and the P2
	list does not change. In this case, the Disclose Recipient feature lists all the
	P1 recipients with the X.400 Recipients header in the recipient's mail client.
	
	Also, if the intended (original) recipient is invalid, and the Alternate
	Recipient field is turned on, the message is redirected to the ADMIN account,
	rather than declared undeliverable. In this case, the ADMIN account is the
	actual recipient while the invalid address is the intended recipient. You always
	see the intended recipient regardless of any switch settings.
	
	For example, if you send a message to a group in the X.400 world, and Disclose
	Recipients on Microsoft Mail Gateway is turned OFF, then the recipients see only
	the group name, not the names of group members.
	
	Additional query words: 3.00 x400 disclose recipient
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
