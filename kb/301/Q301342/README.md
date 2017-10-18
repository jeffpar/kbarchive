---
layout: page
title: "Q301342: XFOR: How to Enable Archiving for the GroupWise Connector in Exc"
permalink: kb/301/Q301342/
---

## Q301342: XFOR: How to Enable Archiving for the GroupWise Connector in Exc

	Article: Q301342
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Archiving both mail and directory synchronization messages that pass through the
	Microsoft Exchange Router for Novell GroupWise is sometimes necessary for
	troubleshooting purposes. To enable this archiving feature, you must create a
	new entry in the Exchange 5.5 server's Exchconn.ini file. After you have enabled
	archiving, you can locate the archives in the
	Exchsrvr\Connect\Echconn\GWrouter\Archive directory.
	
	Note: When you activate the archive feature, you have to manually purge archives
	from the hard disk. If you leave archiving enabled indefinitely, it may
	eventually fill the hard disk with archived items. It is recommended that you
	activate the archive feature only during troubleshooting sessions.
	
	MORE INFORMATION
	================
	
	To enable archiving:
	
	1. Open the Exchconn.ini file in Notepad. This file is located in the
	  Exchsrvr\Connect\Exchconn folder.
	
	2. Under the LME-GWISE section, add the following entry:
	
	  Archive=1
	
	3. Save this file.
	
	4. Stop and restart the Exchange Router for GroupWise.
	
	The procedure to enable archiving for the Exchange Connector for GroupWise mail
	in Exchange 2000 is a completely different procedure. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q269845 XFOR: How to Enable Archiving on the Exchange GroupWise Connector
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
