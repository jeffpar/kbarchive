---
layout: page
title: "Q264304: XFOR: Migration from Lotus Notes to Exchange Fails"
permalink: /kb/264/Q264304/
---

## Q264304: XFOR: Migration from Lotus Notes to Exchange Fails

{% raw %}

	Article: Q264304
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate data from a Lotus Notes environment to a Microsoft
	Exchange Server environment, the Notes.pkl file and the Directory.pri file are
	created successfully. However, the 00000001.pri and 00000001.sec files are not
	created.
	
	CAUSE
	=====
	
	This behavior occurs because the account being used to perform the migration
	does not have rights to the Organization, Site and Server containers in the
	Microsoft Exchange Server Administrator program.
	
	RESOLUTION
	==========
	
	To resolve this issue, log on as a service account.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q162833 XFOR: Event 283 May Occur When Running the Migration Wizard
	
	Additional query words: xadm
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
