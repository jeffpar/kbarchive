---
layout: page
title: "Q295812: XFOR: Messages from Exchange to CC:Mail Remain Queued"
permalink: kb/295/Q295812/
---

## Q295812: XFOR: Messages from Exchange to CC:Mail Remain Queued

	Article: Q295812
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send messages from Exchange Server to Lotus cc:Mail by using the
	Microsoft Exchange Connector for Lotus cc:Mail, the Connector for cc:Mail
	Service starts but the messages may remain queued in the
	\Exchsrvr\Ccmcdata\Submit folder instead of going to the Lotus cc:Mail users. No
	error message appears in the Application Event log.
	
	CAUSE
	=====
	
	This behavior can occur if the \Exchsrvr\Ccmcdata\Import folder is damaged.
	
	WORKAROUND
	==========
	
	To work around this behavior, recreate the subfolders and .ini files that are in
	the \Exchsrvr\Ccmcdata folder:
	
	1. Under Services in Control Panel, stop the Connector for cc:Mail Service, and
	  then move all of the subfolders and files from the \Exchsrvr\Ccmcdata folder
	  to a temporary folder.
	
	2. Under Services in Control Panel, restart the Connector for cc:Mail Service to
	  recreate all of the subfolders and .ini files that are in the
	  \Exchsrvr\Ccmcdata folder.
	
	3. Stop the Connector for cc:Mail Service again, and then move all of the files
	  from the temporary folder back to the \Exchsrvr\Ccmcdata\Submit folder.
	
	4. Restart the Connector for cc:Mail Service to send the files that are in the
	  Submit folder to the cc:Mail post office.
	
	MORE INFORMATION
	================
	
	When the Connector for cc:Mail finishes the conversion process, the messages are
	written to the \Exchsrvr\Ccmcdata\Submit folder. The cc:Mail Import program then
	writes the files to the \Exchsrvr\Import folder. However, if the
	\Exchsrvr\Import folder is damaged, the messages remain queued in the
	\Exchsrvr\Ccmcdata\Submit folder.
	
	Additional query words: ccmail stuck directory
	
	======================================================================
	Keywords          : kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
