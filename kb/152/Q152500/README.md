---
layout: page
title: "Q152500: XADM: ccMail Migration Wizard Hangs with Wrong ccMail Export"
permalink: kb/152/Q152500/
---

## Q152500: XADM: ccMail Migration Wizard Hangs with Wrong ccMail Export

	Article: Q152500
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Microsoft Exchange Migration Wizard against a ccMail
	database, the computer might hang. This will happen after you type in the path
	to the cc:Mail Post Office, the Post Office Name, and the Post Office password.
	The Microsoft Exchange Migration Wizard will hang until you end the task or
	reboot the server.
	
	RESOLUTION
	==========
	
	The ccMail Export program might be the wrong version, it should be version 5.12
	or greater. You can check this by running "export /?". The version number will
	be in the top left hand corner. Please contact Lotus for information about
	obtaining the latest version.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
