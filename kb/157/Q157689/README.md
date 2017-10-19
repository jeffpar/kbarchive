---
layout: page
title: "Q157689: XFOR: Importing Large Numbers of MHS Addresses is Very Slow"
permalink: /kb/157/Q157689/
---

## Q157689: XFOR: Importing Large Numbers of MHS Addresses is Very Slow

	Article: Q157689
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Importing large numbers of Message Handling Service (MHS) addresses is
	excessively slow.
	
	CAUSE
	=====
	
	A regular MHS address has the form mailbox@node. An extended MHS address has the
	form placeholder@node{real address}. By default, the DXA parses against the
	placeholder@node portion of the transaction record and attempts to create a
	unique alias and proxies using this data.
	
	Using the following example import file, you can see where the slowdown occurs.
	
	  AUser AMHS:ServerA@Company{ccmail:usera}
	  AUser BMHS:ServerA@Company{ccmail:userb}
	  AUser CMHS:ServerA@Company{ccmail:userc}
	  AUser DMHS:ServerA@Company{ccmail:userd}
	  ...
	  AUser AAAMHS:ServerA@Company{ccmail:useraaa}
	
	WORKAROUND
	==========
	
	A hotfix is now available that provides a registry setting to tell the Directory
	Synchronization service (DXA) to use the extended portion of an MHS address for
	alias and proxy name generation.
	
	NOTE: This hotfix will only parse SMTP and ccMAIL type addresses from the
	extended address. From an SMTP address it will take the xxx out of an
	xxx@yyy.com type address and from a ccMAIL address it will take the xxx out of a
	CCMAIL:xxx type address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: cc:Mail
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
