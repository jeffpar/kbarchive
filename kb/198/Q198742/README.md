---
layout: page
title: "Q198742: XADM: After Running the MSW, Creating News Feeds Generates Error"
permalink: /kb/198/Q198742/
---

## Q198742: XADM: After Running the MSW, Creating News Feeds Generates Error

	Article: Q198742
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After joining a server into a site using the Microsoft Exchange Move Server
	Wizard (MSW), when you try to create a news feed, the following error message
	may be generated:
	
	  The client operation failed Microsoft Exchange Server Information Store ID
	  no: 80070057-0501-00000000
	
	The news feed is created even though you click Cancel. Errors occur during the
	public folder creation, and newsgroups cannot be added.
	
	CAUSE
	=====
	
	As the server moves to an existing site, its public store is deleted. Therefore,
	a different public folder server is set for the moved server.
	
	WORKAROUND
	==========
	
	If you plan to create a news feed on the moved server, the following operations
	should be performed on the moved server:
	
	1. Create a public store on the moved server. To do so, in the Exchange Server
	  Administrator program, on the File menu, click New Other, click Information
	  Store, click Public, select the moved server, and then click OK.
	
	2. Edit the Private Information Store object, and set the moved server as the
	  public folder server.
	
	3. Set up the news feed.
	
	Additional query words: Move Server
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
