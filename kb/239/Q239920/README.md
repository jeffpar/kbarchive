---
layout: page
title: "Q239920: XFOR: Connect-ME SNADS Gateway Stops Working with Dr. Watson"
permalink: kb/239/Q239920/
---

## Q239920: XFOR: Connect-ME SNADS Gateway Stops Working with Dr. Watson

	Article: Q239920
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Exchange Server version 5.5 Service Pack 2, the Connect-ME
	SNADS Gateway from Icom Solutions Ltd. (formerly IMI Computing Ltd.) stops
	working with a Dr. Watson error when delivering messages that are only addressed
	using the Cc (Copy To) or Bcc (Blind Copy To) field.
	
	CAUSE
	=====
	
	The Connect-ME SNADS Gateway from Icom Solutions Ltd. does not check the Cc
	field. The original specification for Exchange Server stated that recipients
	applicable to the gateway service (that is, in the message envelope) would only
	be available in the To field. Exchange Server copied recipients from other
	fields (Cc, Bcc) into the To field.
	
	If Exchange Server version 5.5 Service Pack 2 is installed, this behavior no
	longer occurs. This change in behavior is by design. For additional information
	about problems that occur if Exchange Server copies recipients from the Cc and
	Bcc fields into the To field, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q192519 XFOR: Field Moved to To: Field with MHS Extended Addressing
	
	RESOLUTION
	==========
	
	To rectify the problem, Icom Solutions Ltd. is producing a code fix for the
	Connect-ME SNADS Gateway (this may already be available). For more information
	about the Connect-ME SNADS Gateway, refer to the follwing Web site:
	
	  http://www.re-soft.com/releases/pr032796.htm
	
	After you apply Exchange Server version 5.5 Service Pack 2, and until you apply
	the Connect-ME SNADS Gateway fix, if you send mail, address it using only the To
	field, and do not use the Cc or Bcc field alone.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
