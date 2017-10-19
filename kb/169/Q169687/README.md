---
layout: page
title: "Q169687: XCON: Some Extended Characters Not Correctly Translated"
permalink: /kb/169/Q169687/
---

## Q169687: XCON: Some Extended Characters Not Correctly Translated

	Article: Q169687
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message from Microsoft Exchange Server containing some Nordic
	characters, the characters are not translated correctly. The characters affected
	by this are:
	
	- (ALT 145) is incorrectly translated to ae
	
	- (ALT 146) is incorrectly translated to AE
	
	This character is also in the same code position as the Hebrew Zayen character,
	and this also gets incorrectly translated to ae.
	
	CAUSE
	=====
	
	This is caused by a problem in the MS Mail Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
