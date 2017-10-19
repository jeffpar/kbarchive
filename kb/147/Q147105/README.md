---
layout: page
title: "Q147105: XCLN: GAL Is Lost If the Exchange Server Is Shut Down"
permalink: /kb/147/Q147105/
---

## Q147105: XCLN: GAL Is Lost If the Exchange Server Is Shut Down

	Article: Q147105
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The connection for the Global Address List is lost if the Microsoft Exchange
	server is shut down while a client is in the Compose window.
	
	WORKAROUND
	==========
	
	Exit and restart the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange version
	4.0 Windows 3.x, Windows 95, and Windows NT clients. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	The Personal Address Book aggressively tries to reconnect if it is disconnected
	after previously connecting to the server. If the Personal Address Book fails
	when initially asked for the hierarchy table, MAPI will not communicate with the
	Personal Address Book again, eliminating the chance to reconnect.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
