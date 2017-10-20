---
layout: page
title: "Q143376: XADM: Storage Capacity Limits of Microsoft Exchange Server"
permalink: /kb/143/Q143376/
---

## Q143376: XADM: Storage Capacity Limits of Microsoft Exchange Server

{% raw %}

	Article: Q143376
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbother kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The capacity limit for a Microsoft Exchange Server server-based Information
	Store is 16GB. This could be all in one folder, or split up among many folders.
	A Microsoft Exchange Server generally hosts one Private Information Store (16GB
	for all Mailboxes), and one Public Information Store (16GB for all public
	folders).
	
	Personal Folder stores have a theoretical maximum of 2GB total storage. This
	could be all in one folder or split among many folders. The limit to the number
	of messages (objects: messages, folders, files, etc.) in a Personal Store is
	16K.
	
	MORE INFORMATION
	================
	
	A Microsoft Exchange Server can be configured as a private only, public only, or
	public/private Server. There is a limit of 16GB on any Microsoft Exchange Server
	for the private database (DB) and a different 16GB limit for the public DB.
	Therefore, a public/private Microsoft Exchange Server can house 32GB of storage,
	16GB of which is for the private DB and the other 16GB for the public DB.
	
	If you have a large Public Folder, you can dedicate a single Microsoft Exchange
	Public Folder Server to house the data for that one Public Folder, so the limit
	for the size of a single Public Folder is 16GB.
	
	Microsoft Exchange performs single instance storage in the database on a
	Microsoft Exchange Server, so the 16GB limit on the private database is really a
	much larger logical storage. Single instance storage means that if 1000 users on
	a Microsoft Exchange Server get the same message, the message is only stored
	once in the database and each of the users gets a pointer to the message. The
	same single instance storage also holds for attachments. If a user opens their
	copy of a message and modifies it but they don't modify the attachment,
	Microsoft Exchange doesn't resave the attachments, just the new message body.
	
	The Microsoft Exchange beta sites saw at least 3:1, and sometimes upwards of 6:1,
	single instance storage rates because most messages have an average of between 3
	and 6 recipients. To extend this, the logical storage limit for users on a
	single Microsoft Exchange Server is at probably least 16GB*3 and possibly
	upwards of 16GB*6.
	
	Another factor to consider is how many people use Personal Folders (.PST files)
	as their delivery store. If users are using Personal Folders, the Microsoft
	Exchange Server can handle more users. The time at which the limit is reached
	for storage in the private DB on a specific Microsoft Exchange Server will
	depend on the pattern of usage by the users.
	
	By default Microsoft Exchange sets up circular logging on the Directory service
	and the private and public DB's. What this means is that as the transaction log
	files get flushed to the databases, they are deleted. The beta sites saw, on
	average, no more than 4 logs files, each of which was MB. So in the default
	install configuration, log file growth will not be a factor. If an administrator
	configures their Microsoft Exchange Server not to use circular logging, the log
	file growth will be based on the number of transactions that are occurring on
	the Microsoft Exchange Server. This is based purely on activity.
	
	======================================================================
	Keywords          : kbother kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
