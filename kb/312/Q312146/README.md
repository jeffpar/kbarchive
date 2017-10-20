---
layout: page
title: "Q312146: Microsoft Windows 2000 Server Administrator's Companion Comments"
permalink: /kb/312/Q312146/
---

## Q312146: Microsoft Windows 2000 Server Administrator's Companion Comments

{% raw %}

	Article: Q312146
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 26-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Administrator's Companion ISBN 1-57231-819-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 Server
	Administrator's Companion, ISBN 1-57231-819-8.
	
	The following topics are covered:
	
	- Page 154: Changes Regarding Transitive Trusts
	
	- Page 154: Changes Regarding Transitive Trusts
	
	- Page 154: Changes Regarding Transitive Trusts
	
	- Page 155: Incorrect Items In Table 7-1
	
	- Page 162: Changes To Single-Master Domain Model Section
	
	- Page 162: Incorrect Statement About OU's
	
	- Page 163: Changes Regarding Moving Accounts Between Transitive Trusts
	
	- Page 163: Changes Regarding Domain Upgrades
	
	MORE INFORMATION
	================
	
	Page 154: Changes Regarding Transitive Trusts
	---------------------------------------------
	
	On page 154, in the third paragraph, change the second sentence from:
	
	"Transitive trusts are always two-way."
	
	To:
	"Transitive trusts are always two-way, and support pass-through authentication."
	
	
	Page 154: Changes Regarding Transitive Trusts
	---------------------------------------------
	
	On page 154, in the third paragraph, change all the text after the third line:
	"However, transitive trusts don't enter the picture..." through to the end of the
	paragraph.
	
	To:
	"Transitive trusts become available once a domain is upgraded to Active
	Directory. Despite some confusion over the matter, they do operate in mixed mode
	domains, but do not apply to remaining Windows NT domains in your company, or to
	clients connected to Windows NT BDC's. Explicit one-way trusts are also
	available between Active Directory based domains, but they must be manually
	established."
	
	
	Page 154: Changes Regarding Transitive Trusts
	---------------------------------------------
	
	On page 154, in the "Real World: Whom Do You Trust?" box, change all text after
	the first sentence, beginning with "The question of transitive trusts arises in
	large multidomained enterprises...",
	
	To:
	"Windows 2000 DC's automatically make use of transitive trusts when communicating
	with other Windows 2000 DC's even in mixed mode. The existing trusts remain in
	place for use by Windows NT BDC's until the domain is switched to native mode.
	Trusts that you add to or from Windows NT domains will be nontransitive trusts
	that you explicitly and deliberately set. This means that if you are creating a
	new Windows 2000 domain, you will have to manually create trusts with existing
	Windows NT domains."
	
	
	Page 155: Incorrect Items In Table 7-1
	--------------------------------------
	
	On page 155, in Table 7-1, first row, change:
	
	"Windows 2000 Domain (same forest)"
	To:
	"Active Directory Domain (same forest)"
	
	Change:
	"Windows 2000 Domain (different forest)"
	To:
	"Active Directory Domain (different forest)"
	
	In the 3rd row, change:
	"Windows 2000 Domain"
	To:
	"Active Directory Domain"
	
	Change:
	"Two-way transitive trust only"
	To:
	"Two-way transitive trust"
	
	
	Page 162: Changes To Single-Master Domain Model Section
	-------------------------------------------------------
	
	On page 162, in the second paragraph, third line, change the following sentence:
	"If the company has a centralized network structure, you might want to consider
	restructuring the domains into a single domain after you?ve upgraded the domain
	and switched to native mode."
	
	To:
	"If the company has a centralized network structure, you might want to consider
	restructuring the domains into a single domain after you?ve upgraded the domains
	to Active Directory."
	
	
	Page 162: Incorrect Statement About OU's
	----------------------------------------
	
	On page 162, in the third paragraph, change the third sentence from:
	"You can use OU's to create a detailed network structure without the necessity of
	dealing with trusts (although switching to native mode will eliminate most of
	the hassle of managing trust relationships)."
	
	To:
	"You can use OU's to create a detailed network structure without the necessity of
	dealing with trusts."
	
	
	Page 163: Changes Regarding Moving Accounts Between Transitive Trusts
	---------------------------------------------------------------------
	
	Page 163, first paragraph, seventh line down, change the following sentence
	from:
	"You should wait, however, until the network has been converted to Windows 2000
	native mode before moving the accounts because transitive trusts make moving
	accounts between domains much easier, and this type of trust is available only
	in a native-mode domain."
	
	To:
	"You should wait, however, until all relevant domains have been upgraded before
	moving the accounts because transitive trusts make moving accounts between
	domains much easier, and this type of trust is available only between Active
	Directory domains."
	
	
	Page 163: Changes Regarding Domain Upgrades
	-------------------------------------------
	
	Page 163, in the first paragraph of "Multiple-Master Domain Model," change the
	following section from:
	"If you choose to consolidate the domains, you should first perform the domain
	upgrade just as if you were going to preserve the existing domain structure, and
	then perform the domain consolidation only after upgrading the network to native
	mode. After the domains are in native mode, all accounts can be moved into the
	single domain without the need to reassign permissions on the objects."
	
	To:
	"If you choose to consolidate the domains, you should first perform the domain
	upgrade just as if you were going to preserve the existing domain structure, and
	then perform the domain consolidation. After the domains are upgraded, all
	accounts can be moved into the single domain without the need to reassign
	permissions on the objects."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-819-8 ITBOOK GLENN ENGLISH
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
