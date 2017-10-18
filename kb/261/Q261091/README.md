---
layout: page
title: "Q261091: XADM: &quot;The Directory Is Busy. Wait a Few Minutes and Try Again&quot;"
permalink: kb/261/Q261091/
---

## Q261091: XADM: &quot;The Directory Is Busy. Wait a Few Minutes and Try Again&quot;

	Article: Q261091
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add users to the directory, the following message is
	displayed:
	
	  The directory is busy. Wait a few minutes and try again.
	
	Even if you wait several hours, this behavior still occurs. No events are logged
	in the application event log that coincide with this message.
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server Administrator program tries to make
	a change to the directory when the busy flag of the directory is set. The busy
	flag is set when a section of code requires that no changes be made to the
	directory during a that time.
	
	If a thread stops responding or "hangs" in a critical section, the directory does
	not allow changes.
	
	WORKAROUND
	==========
	
	To work around this issue, cycle the directory service.
	
	MORE INFORMATION
	================
	
	Note that if you are experiencing the issue that is described in this article
	and you change the registry values as outlined in the following article in the
	Microsoft Knowledge Base
	
	  Q160850 XADM: DS_E_BUSY After Directory Service Restore
	
	the change has no effect.
	
	The issue that is described in this article is not related to the inability to
	make directory changes while the directory makes copies of all of the objects
	that the directory replicated to other computers after the directory was backed
	up (this process is back synchronization, or "backsync") that is described in
	Q160850.
	
	Additional query words: DS_BUSY DS_E_BUSY DS Dir
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
