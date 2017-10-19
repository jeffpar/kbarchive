---
layout: page
title: "Q244529: XADM: Find Recipients in Exchange Admin Does Not Use Wildcards"
permalink: /kb/244/Q244529/
---

## Q244529: XADM: Find Recipients in Exchange Admin Does Not Use Wildcards

	Article: Q244529
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Find Recipients tool in the Exchange Server Administrator program does not
	use standard wildcard characters to perform wildcard searches on recipient
	attributes.
	
	For example, if you look for recipients that have the last name of Smith by using
	"smi??" or "smi*" as criteria in your search, your search does not return the
	expected results. Instead, use "smi" without wildcard characters as the
	criteria. The Find Recipients tool uses ambiguous name resolution to find
	recipients with last names that begin with "smi."
	
	Because of this, you cannot search for recipients by checking for the existence
	of an attribute when you use the Find Recipients tool. For example, you cannot
	use an asterisk in the Last box to search for recipients who have data in the
	Last Name box.
	
	MORE INFORMATION
	================
	
	This tool is located in the Exchange Server Administrator program; to access it,
	click Tools, and then click Find Recipients.
	
	Additional query words: ANR
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
