---
layout: page
title: "Q263055: XADM: Limitations to a Public Information Store Restored to a Se"
permalink: /kb/263/Q263055/
---

## Q263055: XADM: Limitations to a Public Information Store Restored to a Se

{% raw %}

	Article: Q263055
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a public information store is restored to a server that has a different
	name, the following event is generated:
	
	  Event Type: Information
	  Event Source: MSExchangeIS
	  Event Category: Recovery
	  Event ID: 1117
	  Date: 11/13/2000
	  Time: 10:35:33 AM
	  User: N/A
	  Computer: WARDF01
	  Description:
	  The public database has been restored to an alternate server. This database
	  will no longer be able to replicate with other public databases.
	
	This article describes the limitations of a public information store when it is
	restored to a different server.
	
	MORE INFORMATION
	================
	
	You can use the DS/IS consistency adjuster to rehome public folders when the
	Pub.edb database is restored to a server that has a different name. The Exchange
	Server computer must have the same organization and site name as the server that
	the Pub.edb database came from. When folders are rehomed to another Exchange
	Server computer, you must also add the folder to the Instances tab to see the
	properties of that folder in the Exchange Server Administrator program. The
	Instances tab is located in the properties of the Public Information Store
	object in the Exchange Server Administrator program.
	
	Even though you can set up folders to replicate, the contents of a folder that
	once belonged to another server do not replicate to other public information
	stores. If a server is set up as a replica, you can see the folder from a client
	on the replica site, but none of the contents are displayed in the folder.
	Servers that have an affinity set up or users in the local site can still see
	the contents of the folder.
	
	Note that new postings to the folder can be replicated, and postings that are
	added to other replica servers replicate back to this home server. New public
	folders that are created on this information store also work as usual.
	Therefore, you can copy all of the contents of an existing folder to a newly
	created folder, and then have the old data replicated to the newly created
	folder. Keep in mind that you need to manually assign any permissions to the new
	folder.
	
	Another limitation to folders that once belonged to another server is that no
	subfolders can be added to these folders.
	
	
	Additional query words: 1117 MSExchangeIS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
