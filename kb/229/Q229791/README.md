---
layout: page
title: "Q229791: XADM: Internet Newsgroup Folder Gets Replicated Automatically"
permalink: /kb/229/Q229791/
---

## Q229791: XADM: Internet Newsgroup Folder Gets Replicated Automatically

	Article: Q229791
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Server, version 5.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up an NNTP Newsfeed Server in Exchange Server, the default setting
	for the Internet Newsgroups root folder is that it be replicated, including
	content, automatically to at least one server in every remote site.
	
	However, this replication can cause undue stress on bandwidth-sensitive
	environments that have remote sites that are connected over a slow WAN link.
	
	CAUSE
	=====
	
	This default setting is by product design to ensure that there are no
	overlapping newsfeeds.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the Internet Newsgroups public folder in the
	Exchange Administrator program to not replicate to these sites before creating
	the NNTP Server.
	
	To accomplish this, do the following before configuring the NNTP Service:
	
	1. Log on to the Exchange Administrator program as the service account.
	
	2. Click on the Internet Newsgroups public folder under the Folders object, and
	  on the File menu, click Properties.
	
	3. Click on the Replicas tab, and on the right, under the Replicate Folder to
	  section, notice the other sites listed.
	
	4. Remove any replicas on the right by selecting the site or server and clicking
	  Remove.
	
	5. Do this for all sites that do not want the replicated content from the NNTP
	  Service.
	
	6. Click OK when you are finished.
	
	To accomplish this if the NNTP Service has already been configured:
	
	1. Log on to the Exchange Administrator program as the service account.
	
	2. Click on the Internet Newsgroups public folder under the Folders object, and
	  on the File menu, click Properties.
	
	3. Click on the Replicas tab, and on the right, under the Replicate Folder to
	  section, notice the other sites listed.
	
	4. Remove any replicas on the right by selecting the site or server and clicking
	  Remove.
	
	5. Do this for all sites that do not want the replicated content from the NNTP
	  Service.
	
	6. Click Apply, then click on the General tab, and click to select the
	  "Propagate these properties to all subfolders" check box.
	
	7. Click Apply, and make sure the Replicas check box is selected in the
	  subfolder properties dialog box, and then click OK for the changes on all
	  subfolders to take place.
	
	You can remove the replicas, but as soon as a Public folder is modified and
	replication occurs, the replicas will come back. This does not have to be an
	Internet Newsgroups folder. If a normal Public folder is created, deleted, or
	modified and replication occurs, the replicas will come back. However, if you
	remove the replicas and click "Propagate these properties to all subfolders",
	the replicas will come back, but the subfolders will not. So, none of the
	content will be replicated, only the server names from the replica list.
	
	Additional query words: Network News Transfer Protocol MTA Queues XFOR slow
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP1
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
