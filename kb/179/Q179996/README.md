---
layout: page
title: "Q179996: XFOR: LDE Doesn't Send Delete Transactions for Hidden Recipients"
permalink: /kb/179/Q179996/
---

## Q179996: XFOR: LDE Doesn't Send Delete Transactions for Hidden Recipients

	Article: Q179996
	Product(s): Microsoft Exchange
	Version(s): WinNT:3.2, 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Exchange Server administrator hides an address for the Exchange Server
	address book, no delete transaction is sent to the PROFS/OV environment to
	remove the user from the address book.
	
	CAUSE
	=====
	
	When administrators hide an address from the Exchange Server address book, they
	need the address to be hidden across mail systems such as PROFS/OV. This
	functionality is not present in the LinkAge directory synchronization agent that
	ships with Exchange Server version 5.5. The problem is that the directory
	synchronization agent always ignores entries with the "Hide-from- address book"
	flag. This means that when an entry is public but the Administrator hides it,
	the appropriate delete transactions will not be sent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LinkAge Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	Microsoft has added this functionality in a hotfix. With the hotfix in place,
	the appropriate delete transactions will be sent. If a hidden entry is changed
	twice, two deletes will be propagated. In this case, the second delete will log
	a message that says "Cannot delete a previously deleted entry." This message is
	harmless and can be ignored.
	
	Additional query words: Dir-sync dirsync LDA Office Vision
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WinNT:3.2, 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
