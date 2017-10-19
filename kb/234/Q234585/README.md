---
layout: page
title: "Q234585: XFOR: GW Connector Fails to Deliver Mail Multiple Attachments"
permalink: /kb/234/Q234585/
---

## Q234585: XFOR: GW Connector Fails to Deliver Mail Multiple Attachments

	Article: Q234585
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Novell GroupWise 4.x user sends a mail message with two or more file
	attachments to an Exchange Server user, the message may not be delivered. Upon
	investigation, the message has moved to the GroupWise API Gateway's Gwprob
	directory.
	
	CAUSE
	=====
	
	The GroupWise API gateway malforms the API file when the Convert Attachments
	option in the GroupWise Administrator is selected. The GroupWise API gateway
	malforms the ATTACH-FILE section of the API file it creates by placing a comma
	at the end of the "-CONVERSION-ALLOWED-" keyword. It should use a semi-colon.
	According to the GroupWise API documentation, the comma it places at the end of
	the "-CONVERSION-ALLOWED-" key word is illegal. Subsequent processing of this
	malformed API file by the API gateway reports that the keyword is unrecognized,
	and the message is then moved to the <groupwise domain>\Wpgate\Api\Gwprob
	folder.
	
	RESOLUTION
	==========
	
	Clear the Convert Attachments option in the GroupWise Administrator. To do so:
	
	GroupWise 4.x
	-------------
	
	1. Start the GroupWise Administrator program (Ad.exe).
	
	2. Click the GroupWise System object.
	
	3. On the Actions menu, click GroupWise 4.x Options.
	
	4. Click Send Options, then click Advanced Send Options.
	
	5. You see a series of check boxes; make sure that the Convert Attachments check
	  box is cleared.
	
	GroupWise 5.x
	-------------
	
	1. Start the GroupWise 5.x client.
	
	2. On the Tools menu, select Options. This should bring up a new window;
	  double-click the Send icon.
	
	3. From the Advanced tab, clear the Convert Attachments check box.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The Convert Attachments option is not needed to send attachments from GroupWise
	to Exchange Server. However, there may be a compelling reason to have this
	turned on. It is the responsibility of the GroupWise administrator to make any
	decisions about having this option turned on or off.
	
	The problem is caused by the GroupWise API gateway, meaning the malformation in
	the API file is caused by the GroupWise API gateway as it is converting the
	GroupWise message.
	
	Additional query words: API_IN API_OUT groupwise
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
