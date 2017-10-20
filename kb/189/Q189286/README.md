---
layout: page
title: "Q189286: XADM: How to Delete a Server from a Site"
permalink: /kb/189/Q189286/
---

## Q189286: XADM: How to Delete a Server from a Site

{% raw %}

	Article: Q189286
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Microsoft Exchange Server, it may be necessary to delete a server
	from the site. This article documents the procedure as well as the issues to be
	aware of when performing this task.
	
	MORE INFORMATION
	================
	
	It is recommended that you back up the Exchange Server computer before removing
	it.
	
	Read this entire article before beginning the process.
	
	1. Verify that there are no mail connectors on this server. If there are, bring
	  up another connector in the site and verify mail flow. Next, remove the
	  connector or connectors on the server to be deleted. Retest message flow.
	
	2. In Control Panel, stop the Exchange-related services on the server you want
	  to delete.
	
	3. Connect using the Exchange Administrator program to another server within the
	  same site. Be sure to connect while logged in as the Exchange Service account
	  or an account with equivalent privileges.
	
	4. Select the server you want to delete. On the Edit menu, click Delete.
	
	Consider the following BEFORE removing a server from a site:
	
	- If this is the first server in the site, follow the steps in the following
	  Knowledge Base article:
	
	  Q152959 XADM: How to Remove the First Exchange Server in a Site
	
	- If this server is the public folder server, add replicas of the folders that
	  are homed on this server to another server within the same site.
	
	  NOTE: The folders will be rehomed to the first server in this site listed on
	  the replicas page.
	
	- If this server is the distribution list expansion server for the site, you
	  must change the distribution list expansion server attribute for all
	  distribution lists homed on this site to "Any server in the site", or choose
	  another server in the site to be the expansion server.
	
	  If a new expansion server is not configured, you may have the problem
	  discussed in the following Knowledge Base article:
	
	  Q154537 XCON: Congestion in Message Transfer Service, Sending to DL
	
	- If the Exchange Server computer you are removing is the only version of its
	  kind within the site and is a later version than the existing servers,
	  another server of that same version should be added to the site prior to the
	  removal of this server.
	
	If this server is designated as the Bridgehead server for Directory Replication
	with another Exchange site, change the Bridgehead server to another server in
	the site. This should be done on the properties of the Directory Replication
	connector in the local site and in the remote site.
	
	If any connectors, other than site or X400, are installed on this server, the
	connectors need to be moved to another server in the site.
	
	If Key Management Server is installed on this server, it must be moved to another
	server. For additional information on moving the KM Server to another server,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q154531 XADM: Moving the KM Server to Another Server in the Site
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
