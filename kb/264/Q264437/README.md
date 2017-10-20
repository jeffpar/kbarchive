---
layout: page
title: "Q264437: XADM: Event 1088 and Error 1276 Occur After Reinstalling w. DN"
permalink: /kb/264/Q264437/
---

## Q264437: XADM: Event 1088 and Error 1276 Occur After Reinstalling w. DN

{% raw %}

	Article: Q264437
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Exchange Server Information Store service, the
	service may not start, you may receive Jet Error 1276 (ecDomainError), and Event
	ID 1088 may be logged. Typically, to troubleshoot this type of error you need to
	reinstall Exchange Server and use the organization and site name that are
	displayed in the event ID 1088 error message. However, after you reinstall
	Exchange Server the information store may still be unable to start and may log
	the same events, but in the description of this event ID 1088 the Distinguished
	Name (DN) of the directory and the message database are reversed.
	
	CAUSE
	=====
	
	This issue can occur if the Priv.edb and the Pub.edb databases have different
	DNs. This typically occurs if you install Exchange Server with an organization
	or site name that does not match the information stores that you are restoring,
	and you only restore either the Priv.edb or the Pub.edb database. When you try
	to start the restored Priv.edb or Pub.edb database, the restored database DN
	does not match the DN of the directory and the restored database logs the
	following event:
	
	  Event ID: 1088
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	
	  The information store could not be loaded because the distinguished name(DN)of
	  message database
	  /O=<org_name>/OU=<site_name>/CN=RECIPIENTS/CN= does not match the
	  DN of directory
	  /O=<org_name>/OU=<site_name>/CN=RECIPIENTS/CN=.
	
	  The database may have been restored to a computer that is in an organization
	  or site different than the original database.
	
	Note that only one of the .edb files is restored, and that the other .edb file
	has the correct DN associated to the current directory. This issue occurs
	because to troubleshoot this type of problem, you typically need to back up the
	Mdbdata directory, remove Exchange Server, and then reinstall Exchange Server
	with the organization and site name of the DN value that the event ID 1088 error
	message contains. When you install Exchange Server with a new organization and
	site name, the DN of the directory matches the .edb file that you originally
	restored, but the other .edb file DN is incorrect. When you attempt to start the
	information store, it logs an event ID 1088 error message in which the directory
	DN and the message database DN have switched from the previous event ID 1088
	error message.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Note the source of the event ID 1005 error message. For example:
	
	  Event ID: 1005
	  Source: MSExchangeIS Public
	  Type: Error
	  Category: General
	  Description:
	  Unable to start the Microsoft Exchange Information Store. Error 0x4fc.
	
	  When you attempt to start the information store, the information store starts
	  the private information store first. Therefore, if the source of event ID
	  1005 error message is MSExchangeIS Private, the DN in the directory is not
	  working on the Priv.edb database. Note that the Information Store service
	  stops processing at this point, so the Pub.edb database DN may not match the
	  directory either (make sure that the DN in the directory is correct). If the
	  source of the event ID 1005 error message is MSExchangeIS Public, the DN of
	  the Priv.edb database is correct and the DN of the Pub.edb database is
	  incorrect.
	
	2. Make sure that you restore both the Priv.edb and the Pub.edb database files
	  from the same backup set (or that the Priv.edb and the Pub.edb database files
	  at least have DNs that match) and that you reinstall Exchange Server with the
	  DN that matches the .edb files.
	
	MORE INFORMATION
	================
	
	For additional information about Event ID 1088, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q155509 XADM: Restore Exchange When Site or Organization Name Is Unknown
	
	  Q231439 XADM: Error 1276 Starting Information Store
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
