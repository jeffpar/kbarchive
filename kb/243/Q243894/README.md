---
layout: page
title: "Q243894: XFOR: Exchange Server 4.0, 5.0, 5.5 Do Not Support 8-Bit Mime"
permalink: kb/243/Q243894/
---

## Q243894: XFOR: Exchange Server 4.0, 5.0, 5.5 Do Not Support 8-Bit Mime

	Article: Q243894
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you send a message in 8-bit Mime file format through Exchange Server, the
	following error message may be displayed:
	
	  500 Host does not support 8bitmime
	
	MORE INFORMATION
	================
	
	Exchange Server versions 4.0, 5.0, and 5.5 do not support 8-bit Mime. Exchange
	2000 and Windows 2000 support 8-bit Mime.
	
	The "SMTP Service Extension for 8bit-MIMEtransport" section in RFC 1652 outlines
	8-bit Mime format.
	
	Additional query words: 8bit 7bit eight bit 8-bit
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
