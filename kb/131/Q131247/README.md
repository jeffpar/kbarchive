---
layout: page
title: "Q131247: Microsoft Exchange Does Not Recognize Recipient"
permalink: /kb/131/Q131247/
---

## Q131247: Microsoft Exchange Does Not Recognize Recipient

	Article: Q131247
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are reading bulletin board (BBS) messages, one of the following may
	occur when you click Reply By E-mail on the Compose menu:
	
	- When you post the e-mail message, you receive a Check Names box with the
	  message "Microsoft Exchange does not recognize '<recipient>'." This
	  response occurs when the recipient is not in your personal address book.
	
	- The message is returned to you as undeliverable with the message "No
	  transport provider was available for delivery to this recipient." This
	  response occurs when the recipient is in your personal address book.
	
	CAUSE
	=====
	
	When you are reading a BBS message and click Reply By E-mail, The Microsoft
	Network opens the e-mail reply using the default profile you have set for
	Microsoft Exchange. If this profile does not contain The Microsoft Network
	Online Service, you cannot send the message.
	
	This may also happen in MSN, version 2.0 if Microsoft Internet Explorer is not
	configured to use Microsoft Exchange.
	
	RESOLUTION
	==========
	
	Set your default profile to a profile that contains The Microsoft Network Online
	Service. To set the default profile, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Mail And Fax.
	
	3. Click Show Profiles.
	
	4. In the "When starting Microsoft Exchange, use this profile" box, click the
	  profile that contains The Microsoft Network Online Service.
	
	5. Click Close.
	
	To verify Internet Explorer is configured to use Microsoft Exchange, follow these
	steps:
	
	1. Right-click the Internet icon on your desktop, and then click Properties.
	
	2. Click the Programs tab.
	
	3. In the Mail box, click Windows Messaging.
	
	4. Click OK.
	
	REFERENCES
	==========
	
	For more information about profiles, click the Index tab in The Microsoft
	Network online Help, type the following text
	
	  "profile" (without the quotation marks)
	
	and then double-click the topic you want to view.
	
	Additional query words: 1.2 msn email
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.0,1.2,1.3,2.0
	
	=============================================================================
	
