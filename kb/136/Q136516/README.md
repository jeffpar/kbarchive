---
layout: page
title: "Q136516: XCLN: Improving Windows Client Startup Times"
permalink: /kb/136/Q136516/
---

## Q136516: XCLN: Improving Windows Client Startup Times

	Article: Q136516
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a Microsoft Exchange Windows client, the main application window
	may take a relatively long time to load after the startup screen appears.
	
	RESOLUTION
	==========
	
	You can significantly improve startup time by correctly configuring the remote
	procedure call (RPC) binding order on the computer running the Exchange client.
	For additional informationabout the steps necessary to modify the RPC binding
	order, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q163576 XGEN: Changing the RPC Binding Order
	
	MORE INFORMATION
	================
	
	When the Exchange client starts up, it uses the first protocol in the RPC
	binding order to attempt to communicate with the Microsoft Exchange Server
	computer. If this attempt is unsuccessful, the Exchange client then uses the
	next protocol in the binding order, and so on, until it has established
	communication with the server or it has run out of protocols. In the latter
	case, an error message is displayed and the user is asked if he or she would
	like to work offline.
	
	Hence, if the protocol installed on the client machine is at the top of the
	binding order, the client establishes communication with the server in the first
	attempt and does not have to time out and go down the binding order. This can
	significantly reduce the startup time.
	
	
	NOTE: The information in this article only applies to setting the RPC binding
	order for the 16-bit Windows, Windows NT, and Windows 95 clients. It does not
	apply to the MS-DOS client, because a different setup method is employed.
	
	
	Additional query words: faq exfaqclnt exclnfaqold outlook
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
