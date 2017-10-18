---
layout: page
title: "Q160664: XFOR: Cannot Configure Microsoft Mail Connector (AppleTalk)"
permalink: kb/160/Q160664/
---

## Q160664: XFOR: Cannot Configure Microsoft Mail Connector (AppleTalk)

	Article: Q160664
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbui
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Mail Connector (AppleTalk) and you attempt to
	configure the gateway, you may be unable to do so. In the AppleTalk Mail client,
	on the Mail menu, if you point to Gateway, and then click Configuration, a
	Gateway Configuration dialog box with an Install button appears, but the entire
	dialog box is unavailable.
	
	CAUSE
	=====
	
	This problem can occur if you use Connection Installer to create a gateway with
	a gateway ID that contains lowercase letters.
	
	RESOLUTION
	==========
	
	To work around this problem, create a new gateway with a gateway ID that does
	not contain lowercase letters.
	
	MORE INFORMATION
	================
	
	AppleTalk Mail is manufactured by Apple Computer, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: macintosh mac
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbui 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
