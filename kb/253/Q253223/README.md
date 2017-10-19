---
layout: page
title: "Q253223: XADM: ADC Doesn't Replicate 5.5 Mailbox to Active Directory Obj."
permalink: /kb/253/Q253223/
---

## Q253223: XADM: ADC Doesn't Replicate 5.5 Mailbox to Active Directory Obj.

	Article: Q253223
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During replication, the Active Directory Connector (ADC) may not match or merge
	a Microsoft Exchange Server 5.5 mailbox to its corresponding Active Directory
	object.
	
	This behavior may be caused by problems in creating objects in a remote domain.
	For example, suppose two domains exist, Dom1 and Dom2. There is a Connection
	Agreement between Exchange Server and Dom1. The Exchange Server 5.5 mailbox may
	have an Active Directory object associated with it that is in Dom2. If the ADC
	does not have rights to create objects in Dom2, then it cannot effectively match
	or merge these two objects.
	
	MORE INFORMATION
	================
	
	To identify this situation:
	
	1. Set Diagnostic Logging for Replication to "Minimum:"
	
	  a. In the Active Directory Connector Management Microsoft Management Console
	     (MMC) snap-in, open the properties of the ADC that owns the Connection
	     Agreement.
	
	  b. Click the Diagnostic Logging tab.
	
	  c. Click Replication, and then click Minimum.
	
	2. On the Connection Agreement Schedule tab, click to select the "Replicate the
	  entire directory the next time the agreement is run" check box.
	
	  NOTE: When you set this option, everything between the target and source
	  containers replicates, setting the known USN to 0. This logs events that
	  detail that the ADC does not have write permissions to the target domain.
	
	To address this problem, you must set permissions on the target domain to allow
	the ADC to write to it, or you must configure another Connection Agreement to
	the target domain with appropriate permissions.
	
	Additional query words: AD replication directory
	
	======================================================================
	Keywords          : exc55 
	Component         : ADC
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
