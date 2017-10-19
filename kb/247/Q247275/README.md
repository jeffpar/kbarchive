---
layout: page
title: "Q247275: XADM: Recreating the Public Store on a Private Store Only Server"
permalink: /kb/247/Q247275/
---

## Q247275: XADM: Recreating the Public Store on a Private Store Only Server

	Article: Q247275
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A private information store only server, also known as a dedicated mailbox
	server, is a server that the public information store has been removed from.
	This article provides steps to bring back the public information store to a
	private information store only server.
	
	MORE INFORMATION
	================
	
	To re-create the public information store:
	
	1. In the Exchange Server Administrator program, click New on the File menu, and
	  then click Other.
	
	2. Click Information Store, and then click Public.
	
	3. In the Server list, click the server on which you want to re-create the
	  public information store. Only servers in the site that do not have a public
	  information store are displayed in the list.
	
	4. You may receive the following message:
	
	  The public folder server property on the Private Information Store of
	  <server_name> has not been adjusted to point to the newly created
	  Public Information Store. You should not change this property until the
	  public folder hierarchy has been replicated to the new Public Information
	  Store. To verify that replication is complete, establish a new connection to
	  <server_name>, and view the Folders hierarchy.
	
	5. Click OK.
	
	6. Run Performance Optimizer and click to select the Public Store check box.
	
	7. Quit the Administrator program, and then restart the Administrator program
	  and connect to the server on which you created the new public information
	  store.
	
	8. In the Administrator program, make sure that the public information store
	  object has been re-created.
	
	For additional information about how to create a private information store only
	server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q247274 XADM: How to Set Up a Private Information Store Only Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
