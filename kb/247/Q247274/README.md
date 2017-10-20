---
layout: page
title: "Q247274: XADM: How to Set Up a Private Information Store Only Server"
permalink: /kb/247/Q247274/
---

## Q247274: XADM: How to Set Up a Private Information Store Only Server

{% raw %}

	Article: Q247274
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides steps to remove the public information store completely
	from an existing Exchange Server computer to make it a private information store
	only server. A private information store only server is a dedicated mailbox
	server. A private information store only server cannot store public folders.
	
	The main reason to create a private information store only server is to reduce
	traffic on the server by removing the server from participation in public folder
	hierarchy replication, which is message-based traffic. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q159919 XADM: Public Folder Hierarchy Replicates Through Messages
	
	MORE INFORMATION
	================
	
	To remove the public information store to create a private information store
	only server:
	
	1. Start the Microsoft Exchange Server Administrator program and connect to the
	  Exchange Server computer from which you want to remove the public information
	  store.
	
	2. Open the Private Information Store properties and click the General tab to
	  specify the new public folder server. This is the server on which all of the
	  top-level public folders that are created by users who have home mailboxes on
	  this server are stored. The public folder server is also the server on which
	  the users on this private information store view the public folder hierarchy.
	
	3. Make sure that any existing folders in the public information store are
	  rehomed to another public folder server in the site:
	
	  a. Click the public folder that you want to rehome, and then click Properties
	     on the File menu.
	
	  b. Click the Replicas tab, and then move the server name of the server that
	     you want to rehome the public folder to from the left pane under Servers
	     to the right pane under "Replicate Folders to".
	
	  c. Click the Advanced tab, and then click the new home server in the Home
	     Server list.
	
	  d. If the server is the first server in the site, ensure that you move the
	     system folders in the Pub.edb database to another server in the site by
	     performing the steps in the following article in the Microsoft Knowledge
	     Base:
	
	  Q152959 XADM: How to Remove the First Exchange Server in a Site
	
	  e. If you want the server to run the Event service, ensure that you move the
	     EventConfig_<server_name> folder for the server to another server in
	     the site.
	
	
	4. Start Performance Optimizer (Perfwiz.exe), and then click to clear the Public
	  Store check box.
	
	5. In the Administrator program, delete the Public Store object under the server
	  name.
	
	6. To make sure that the public information store has been deleted, quit the
	  Administrator program. Stop the information store by using Control Panel,
	  Services.
	
	7. Restart the information store service.
	
	8. Restart the Administrator program and make sure that the public information
	  store object is not displayed under the Server object.
	
	9. Do not remove the Pub.edb database in the Exchsrvr\Mdbdata folder.
	
	  You cannot run Performance Optimizer at a later date to move Exchange Server
	  files because Performance Optimizer requires a consistent Priv.edb and
	  Pub.edb database to work.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q264816 XADM: Performance Optimizer Does Not Move Files If the Pub.edb File
	  Is Missing
	
	NOTE: You cannot remove the public information store from every server in the
	site. There must be at least one Exchange Server computer that has a public
	information store in every Exchange Server site.
	
	However, you can remove the private information store from every server in the
	site. These are dedicated public folder sites.
	
	For additional information about how to bring back the public information store
	after it has been removed, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q247275 XADM: How to Re-Create the Public Information Store on a Private
	  Information Store Only Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
