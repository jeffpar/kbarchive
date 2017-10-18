---
layout: page
title: "Q258678: XFOR: NDR Sending Mail To User Migrated From Lotus Notes"
permalink: kb/258/Q258678/
---

## Q258678: XFOR: NDR Sending Mail To User Migrated From Lotus Notes

	Article: Q258678
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Exchange Server user may receive a non-delivery report (NDR) after the
	Exchange Server user sends e-mail to other Exchange Server users who have been
	recently migrated from Lotus Notes. For example, if the Lotus Notes server is
	connected to Exchange Server site A and the Exchange Server computer that
	contains the new mailboxes for the migrated users is located in Exchange Server
	site B, the following NDR is generated:
	
	  Your message did not reach all or some of the intended recipients. The
	  following recipient(s) could not be reached: c=US;a= ;p=Organization;o=Site
	  A;dda:MSEXCHANGE=/o=PRI/ou=CALIFORNIA/cn=Recipients/cn=b4501a7a-4060570b-8525644b-78c319;
	  on 12/7/99 3:06 PM
	
	  The recipient name is not recognized.
	
	CAUSE
	=====
	
	This issue can occur if the unrecognized Common Name attribute
	(cn=b4501a7a-4060570b-8525644b-78c319;) is assigned to the Lotus Notes custom
	recipient before migration to create a unique name for the Lotus Notes custom
	recipient. This attribute is located in the properties for this custom
	recipient. Because the Lotus Notes mailbox is not migrated to the site where the
	custom recipient existed (in the example in the "Symptoms" section of this
	article, site A), but instead is migrated to a different site (site B), there
	are two addresses in the directory for this recipient for a brief time (the
	custom recipient in site A and the new Exchange Server mailbox in site B).
	
	If the originator selects the name from the global address list, the name may
	resolve to the custom recipient address and then generate an NDR because the
	Lotus Notes mailbox no longer exists after migration. After directory
	replication has finished throughout the organization, the custom recipient
	address is removed from the global address list, which leaves only the Exchange
	Server mailbox address.
	
	RESOLUTION
	==========
	
	To resolve this issue, either wait for a directory replication cycle to finish
	or force a directory replication cycle.
	
	Additional query words: GAL
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
