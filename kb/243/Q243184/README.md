---
layout: page
title: "Q243184: XFOR: Lotus cc:Mail Usernames Added to Bcc Line If in DL"
permalink: /kb/243/Q243184/
---

## Q243184: XFOR: Lotus cc:Mail Usernames Added to Bcc Line If in DL

	Article: Q243184
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you send a message to a distribution list (DL) that contains Exchange Server
	users and Lotus cc:Mail custom recipients by including the DL in the To line,
	the cc:Mail custom recipient names are added to the Bcc line in the message when
	it is received by cc:Mail.
	
	For example, if a DL called Ccm_dl contains cc:Mail custom recipients called
	Ccuser at DB8 and Ccuser2 at DB8 as members, when Ccuser receives a message that
	has been addressed to the DL, it has the following information in the header:
	
	  To: Ccm_dl
	  Bcc: Ccuser at DB8, Ccuser2 at DB8
	
	MORE INFORMATION
	================
	
	This behavior is by design. This behavior is not encountered if you use the
	custom recipient names instead of the DL in the To line.
	
	Additional query words: ccmc, db6
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
