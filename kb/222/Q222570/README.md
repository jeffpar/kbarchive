---
layout: page
title: "Q222570: XFOR: Access Rights Required for Notes Connector"
permalink: /kb/222/Q222570/
---

## Q222570: XFOR: Access Rights Required for Notes Connector

{% raw %}

	Article: Q222570
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Lotus Notes mail system is based on several databases, some of which are
	specialized. The Microsoft Exchange Notes Connector interfaces with the
	following files: Names.nsf, Mail.box, Exchange.bad, Exchange.box, Exchange.nsf,
	and any replicated Names.nsf file for other Notes domains.
	
	MORE INFORMATION
	================
	
	The Exchange Notes Connector account needs the following access rights to
	perform the actions necessary for it to work:
	
	- In Names.nsf, the Connector account needs Read rights to be able to read the
	  Notes mail address information so it can pull the Notes custom recipient
	  information to Exchange Server. If you perform directory synchronization
	  (dirsync) with that database, you need Manager rights with Delete rights. But
	  it is better, simpler, and safer to run dirsync with a specific database such
	  as Exchange.nsf, because Names.nsf is the primary Notes database.
	
	- In Mail.box, the Connector account needs Deposit right to be able to drop
	  mail messages and to perform the database maintenance operations.
	
	- In Exchange.bad, you need Manager rights with Delete rights to be able to
	  move bad mail to this database and to run database maintenance operations.
	
	- In Exchange.box, you need Manager rights with Delete rights to pick up mail
	  from this database and to run database maintenance operations.
	
	- In Exchange.nsf, you need Manager rights with Delete rights to deliver and
	  write the Exchange Server custom recipient address information and to run the
	  database maintenance operations.
	
	NOTE: The other Notes domain-replicated database will have an
	administrator-specified name because in Notes, only one Names.ncf file can exist
	and it is reserved for the local Notes system.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
