---
layout: page
title: "Q183772: XCLN: Unable To Connect To Server With Underscore in Name Using"
permalink: kb/183/Q183772/
---

## Q183772: XCLN: Unable To Connect To Server With Underscore in Name Using

	Article: Q183772
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:4.0,5.0,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a computer running Microsoft Exchange Server
	version 5.x using the Microsoft Exchange or Outlook client for Macintosh
	configured with Mac TCP/IP version 2.06, the following error appears if the
	Exchange Server name contains an underscore:
	
	  Microsoft Exchange could not be started. Network problems are preventing
	  connections to Microsoft Exchange Server computer. Contact your system
	  administrator if this condition persists.
	
	CAUSE
	=====
	
	Per article number 16922, "MacTCP 2.0.6: Invalid Domain Name, Syntax Error," in
	Apple's Technical Information Library (TIL) this is a known issue when using Mac
	TCP/Ip 2.06. For more information concerning specific troubleshooting, see the
	TIL at www.apple.com.
	
	WORKAROUND
	==========
	
	Installation of Open Transport version 1.1.1 or higher resolves this issue.
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac
	Version           : MACINTOSH:4.0,5.0,8.0
	Hardware          : MAC
	Issue type        : kbprb
	
	=============================================================================
	
