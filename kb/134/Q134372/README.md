---
layout: page
title: "Q134372: PROFS: Reply All Feature Not Supported"
permalink: kb/134/Q134372/
---

## Q134372: PROFS: Reply All Feature Not Supported

	Article: Q134372
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.2; WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.0, 3.2 
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PROFS and OfficeVision do not include Reply All functionality when you respond
	to messages. Due to this limitation in the PROFS and OfficeVision product, the
	Microsoft Mail Gateway to IBM PROFS and OfficeVision does not support this
	feature.
	
	MORE INFORMATION
	================
	
	When you address messages in Microsoft Mail for PC Networks, you can add
	multiple recipients to the To: and Cc: lines. This allows you to send one
	message to more than one person. When the recipient of the message receives the
	mail, they have the option to reply to the sender via the Reply command in
	Microsoft Mail. Additionally, the recipient can reply to both the sender and all
	other recipients by using the Reply All feature.
	
	The Reply All functionality works with mail messages exchanged between Microsoft
	Mail users and most gateways to foreign mail systems. The Reply All feature is
	not available to PROFS and OfficeVision users because PROFS and OfficeVision
	addressing information is maintained in the message header only for a single
	recipient. Other users entered on the To: line and Cc: line are not maintained
	in the message header. They appear only in the textual body of the message.
	
	
	NOTE: This is no different than PROFS and OfficeVision functionality. PROFS and
	OfficeVision create an individual message for each recipient addressing each
	message to a single recipient. Only the single recipient is included in the
	message header with additional recipients placed in the textual body of the mail
	message.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN320 kbMailGateIBMPROFS300 kbMailGateIBMPROFS320
	Version           : :3.0,3.2; WINDOWS:3.2
	
	=============================================================================
	
