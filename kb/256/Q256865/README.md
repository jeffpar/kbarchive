---
layout: page
title: "Q256865: XFOR: Entire GroupWise Distribution List Listed in the To Box"
permalink: /kb/256/Q256865/
---

## Q256865: XFOR: Entire GroupWise Distribution List Listed in the To Box

	Article: Q256865
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Exchange Server recipient is a member of a Novell GroupWise distribution
	list, the entire membership of the distribution list is displayed in the To box
	when the Exchange Server user receives the e-mail.
	
	CAUSE
	=====
	
	This issue can occur because of the application programming interface (API)
	gateway.
	
	E-mail that is destined for a foreign domain starts out in the client message
	database, and then the message transfer agent (MTA) moves the e-mail to the
	following API directory:
	
	  (<domain>)\Wpgate\Api\Wpcsout\Apixxx\O-7
	
	The API gateway retrieves the file, converts it, and then separates the header
	from the message. The API gateway then puts the header in the Wpgate\Api\Api_out
	directory and the message and attachments in the
	(<domain>)\Wpgate\Api\Att_out directory.
	
	When you open the .api file in the Api_out directory, the distribution list is
	expanded under the ALL-TO keyword section. The ALL-TO section is a list of all
	of the primary recipients of a message, but not courtesy copy (cc) or blind
	courtesy copy (bcc) recipients. After the API gateway performs this conversion,
	the GWRouter component of Exchange Server retrieves the e-mail, the e-mail is
	converted by the connector and delivered, and there is no further manipulation
	by the Microsoft Exchange Connector for Novell GroupWise.
	
	WORKAROUND
	==========
	
	To obtain workarounds for this issue, contact Novell Support.
	
	MORE INFORMATION
	================
	
	When a GroupWise custom recipient is a member of an Exchange Server distribution
	list, this behavior does not occur. When the GroupWise user receives the e-mail,
	only the distribution list name is in the To box.
	
	Additional query words: GroupWise, DL
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
