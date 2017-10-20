---
layout: page
title: "Q245837: XFOR: Incomplete Dirsync from Lotus Notes to Exchange Server"
permalink: /kb/245/Q245837/
---

## Q245837: XFOR: Incomplete Dirsync from Lotus Notes to Exchange Server

{% raw %}

	Article: Q245837
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server version 5.5 experiences directory synchronization
	(dirsync) problems on entries from Lotus Notes to Exchange Server. Message flow
	and dirsync from Exchange Server to Notes works fine, but only a partial dirsync
	occurs from Notes to Exchange Server.
	
	The application logs report no errors and the Exchange Connectivity Controller
	log browser reports more entries are exported than the actual amount of entries
	in the Lotus Notes Address Book.
	
	Copying the Person documents to a new Address Book does not resolve the problem.
	
	CAUSE
	=====
	
	The Lotus Notes Address Book is corrupted. The Exchange Notes Connector cannot
	read the Foreign DirSync Allowed field from the Notes Address Book correctly. It
	reads some entries as No even though they appear as Yes in the Address Book.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In the Notes administrator program, open the document properties for user
	  entries that were not exported during dirsync, and change the Foreign
	  Directory Sync field value from Yes to No, and then save the document.
	
	2. Change the same value back from No to Yes, and then save the document again.
	
	3. Run dirsync from Notes to Exchange Server. If the user appears in Exchange
	  Server, you can repeat the same process on other Lotus Notes Person documents
	  that are not being exported.
	
	MORE INFORMATION
	================
	
	In some Lotus Notes environments, Address Books are replicated to all servers to
	keep a standard Address Book synchronized. Sometimes during that process,
	because of external circumstances such as network problems, the Address Book can
	become corrupted.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: Exch, names.nsf, propagated
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
