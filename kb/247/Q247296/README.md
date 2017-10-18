---
layout: page
title: "Q247296: XFOR: How to Filter Messages with Empty From Line"
permalink: kb/247/Q247296/
---

## Q247296: XFOR: How to Filter Messages with Empty From Line

	Article: Q247296
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some messages that come in to Exchange Server from the Internet Mail Service may
	contain an empty From line. This article describes how to use the filtering
	option that is provided with Exchange Server 5.5 Service Pack 2 (SP2) and later
	to discard these messages.
	
	MORE INFORMATION
	================
	
	To use the filtering option:
	
	1. Start the Exchange Server Administrator program.
	
	2. Locate the Connections container in the site that contains the Internet Mail
	  Service.
	
	3. Open the properties of the Internet Mail Service.
	
	4. Click the Connections tab, and then click Message Filtering.
	
	5. Click Add, and then type a single period in the Domain/User box.
	
	6. Stop and restart the Internet Mail Service.
	
	The filtering option is available in the Exchange Server Administrator program in
	Exchange Server 5.5 SP2 and later. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q193926 XFOR: TURFDIR Must Be Manually Created for Message Filtering
	
	  Q197289 XFOR: Internet Mail Service May Not Save Turfed Messages or Saves
	  Them to an Unexpected Location
	
	Additional query words: Turf IMC readme IMS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : :5.5 SP2
	Issue type        : kbhowto
	
	=============================================================================
	
