---
layout: page
title: "Q166581: XADM: Exchange/cc:Mail Dirsync: CR w/ Corrupted Proxy Addresses"
permalink: kb/166/Q166581/
---

## Q166581: XADM: Exchange/cc:Mail Dirsync: CR w/ Corrupted Proxy Addresses

	Article: Q166581
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a cc:Mail administrator moves a cc:Mail user between cc:Mail post offices,
	and Exchange Server performs a directory synchronization on this change from the
	CCMC connector post office, the moved user is created as a custom recipient (CR)
	in the Exchange Server directory, but the proxy addresses generated for the user
	may be corrupted (appended with a number).
	
	CAUSE
	=====
	
	When comparing the CCMC connector's post office with the Exchange Server CR
	list, "adds" are processed before "deletes." Because the desired proxy addresses
	are already in use, new proxies for the adds are generated (typically as
	corrupted versions of the desired address).
	
	WORKAROUND
	==========
	
	To work around this problem, manually modify a moved cc:Mail user's proxy
	addresses in Exchange Server to match what was previously generated or
	established for the user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The algorithm for processing the CCMC connector post office's global list
	compares the cc:Mail connector post office's global list with the Exchange
	Server CR list, adding any cc:Mail addresses that weren't present in the
	Exchange CR container. Any Exchange Server CRs that don't have a match in the
	cc:Mail global list are subsequently deleted. This is efficient because it
	requires only one comparison between lists.
	
	However, users in cc:Mail may be deleted and re-created or moved to different
	cc:Mail post offices. This usually results in the cc:Mail address on cc:Mail
	connector postoffice as having the same name, but different post office
	specifics. Because Exchange Server processes new cc:Mail addresses as "adds"
	first, this new name ends up with corrupted proxy addresses in Exchange Server,
	which invalidates the old X.400, SMTP and other addresses that foreign e-mail
	users may have previously cached for this cc:Mail user.
	
	With the fix applied, the algorithm compares the Exchange Server CR list against
	the cc:Mail global list on the CCMC connector post office, first removing any
	Exchange Server CR that doesn't have a match in the cc:Mail list, thus freeing
	up previously assigned proxy addresses for re-use. Afterwards, the cc:Mail list
	is compared against the Exchange CR list, adding entries that exist on the
	cc:Mail post office that don't exist in the Exchange CR list. Users whose post
	office details have changed can have their previous proxies regenerated for
	their new address. Because two comparisons are now made, this algorithm is
	somewhat less efficient, but has proved to perform adequately with reasonable
	hardware.
	
	NOTE: Exchange CCMC dirsync does not integrate into the cc:Mail dirsync process.
	It simply compares its CR list with the global list on the cc:Mail post office
	as it exists at the time dirsync runs.
	
	In the case of maintaining proxy addresses, it is presumed that only one cc:Mail
	address will exist at any time for a given user on the CCMC connector post
	office. If two addresses exist for a user at the time the dirsync between
	Exchange and CCMC runs, the new address will have corrupted proxies generated.
	
	Also, if a cc:Mail mailbox is deleted, and then, at a later time a new user is
	created in cc:Mail that has the same mailbox name as the former mailbox,
	Exchange will generate proxies based on this mailbox name. These proxies may
	match a former cc:Mail mailbox address; thus users of foreign mail systems, who
	previously e-mailed to the former address, may inadvertently send mail to the
	new mailbox.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
