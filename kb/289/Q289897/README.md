---
layout: page
title: "Q289897: XADM: Mailbox Manager System Cleanup Folder Is Absent on Client"
permalink: /kb/289/Q289897/
---

## Q289897: XADM: Mailbox Manager System Cleanup Folder Is Absent on Client

	Article: Q289897
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mailbox Manager System Cleanup folder may be reported as absent on client.
	
	MORE INFORMATION
	================
	
	Typically, the System Cleanup folder is created on the client when Mailbox
	Manager is configured to use the System Cleanup folder to temporarily hold
	deleted items until you permanently remove the deleted items. If no items are in
	the System Cleanup folder the next time the System Cleanup process runs, the
	System Cleanup folder is removed from the client.
	
	This behavior is by design.
	
	Additional query words: xadm
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :4.0,5.5,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
