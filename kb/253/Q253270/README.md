---
layout: page
title: "Q253270: Locally Created Collections Become Locked"
permalink: /kb/253/Q253270/
---

## Q253270: Locally Created Collections Become Locked

	Article: Q253270
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbsms200 kbCollections kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) 2.0, the collections at the local site server
	are displayed with locks, and you cannot edit the collections.
	
	CAUSE
	=====
	
	This issue occurs when you configure a sender address to point to the local site
	server. In SMS collections are replicated to child sites. When the sender
	address points to the local site server, the collection that is being replicated
	is displayed with a lock when it is viewed in the SMS Administrator program
	connected to the child site database. Collections at a central site or
	collections that are created at the local site should not be displayed with a
	lock.
	
	RESOLUTION
	==========
	
	To determine if you are experiencing this issue, create a new collection on the
	site. Wait for SMS to update the collection, or force it to update by
	right-clicking the collection, clicking Tasks, and then clicking Update
	Collection Membership. If the collection displays a lock after the collection is
	updated, then you are experiencing this issue.
	
	To resolve this issue, check the sender addresses to ensure that one of the
	addresses indicate the local server as the destination server. To check the
	sender addresses, open the following items:
	
	- Site Database
	
	- Site Hierarchy
	
	- Site Code
	
	- Site Settings
	
	- Addresses
	
	Examine the destination server for each address and verify that none of the
	addresses point to the local server. If an address points to the local server,
	change the server name to the correct destination server for that site code.
	
	For additional information about how to remove the locks from any locally created
	collection, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q226852 SMS: Parent Site Collections Remain Locked at a Detached Child Site
	  Server Console
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbsms200 kbCollections kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
