---
layout: page
title: "Q202178: XFOR: Messages to cc:Mail Queued in Submit Directory"
permalink: /kb/202/Q202178/
---

## Q202178: XFOR: Messages to cc:Mail Queued in Submit Directory

	Article: Q202178
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages from Microsoft Exchange Server to Lotus cc:Mail are sitting in the
	queue in the Exchsrvr\Ccmcdata\Submit folder. No errors are reported in the
	application log and the Microsoft Exchange cc:Mail Connector service starts
	without error. However, the messages are not delivered to cc:Mail.
	
	CAUSE
	=====
	
	When the Microsoft Exchange cc:Mail connector is converting the messages to the
	cc:Mail format, the messages are written to the Exchsrvr\Ccmcdata\Submit folder.
	After the conversion is finished, the Exchange Connector for Lotus cc:Mail
	should then write the files to the Exchsrvr\Ccmcdata\Import folder. If the
	Exchsrvr\Ccmcdata\Import folder is corrupted, the files cannot be written to the
	folder, and they remain queued in Exchsrvr\Ccmcdata\Submit.
	
	RESOLUTION
	==========
	
	To solve this problem:
	
	1. Stop the Microsoft Exchange cc:Mail connector service.
	
	2. In the Exchsrvr\Ccmcdata folder, move all files and subfolders to a temporary
	  Submit folder. Leave Exchsrvr\Ccmcdata empty.
	
	3. Restart the Microsoft Exchange cc:Mail connector service. All the subfolders
	  and .ini files are recreated in the Exchsrvr\Ccmcdata folder.
	
	4. Stop the Microsoft Exchange cc:Mail connector service.
	
	5. Move all files from the temporary Submit folder to the
	  Exchsrvr\Ccmcdata\Submit folder.
	
	6. Restart the Microsoft Exchange cc:Mail connector service. All files in the
	  Submit folder should be successfully processed and sent to cc:Mail.
	
	Additional query words: ccmc, messages stuck, import fails
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
