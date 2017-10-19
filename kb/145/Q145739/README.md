---
layout: page
title: "Q145739: Internet Mail Not Delivered: No Transport Provider Available"
permalink: /kb/145/Q145739/
---

## Q145739: Internet Mail Not Delivered: No Transport Provider Available

	Article: Q145739
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send mail using the Internet Mail information service for
	Microsoft Exchange, you may receive a non-delivery receipt with the following
	message:
	
	  No transport provider was available for delivery to this recipient.
	
	CAUSE
	=====
	
	This problem can occur when the following conditions are met:
	
	- The Internet Mail information service is the only information service that is
	  installed.
	
	- You have configured the Internet Mail information service to connect to your
	  Internet service provider using a modem instead of the network.
	
	- The Work Off-Line And Use Remote Mail check box is not selected.
	
	When all of these conditions are met, you receive a non-delivery receipt if any
	of the following events occur when Microsoft Exchange attempts to connect to
	your Internet service provider:
	
	- The line is busy.
	
	- There is no answer.
	
	- Modem negotiation fails.
	
	- Logon fails.
	
	- You cancel the connection.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	Select the Work Off-Line And Use Remote Mail check box. To do so, follow these
	steps:
	
	1. In Microsoft Exchange, click Services on the Tools menu.
	
	2. Click Internet Mail, and then click Properties.
	
	3. On the Connection tab, click the Work Off-Line And Use Remote Mail check box
	  to select it.
	
	4. Click OK.
	
	When the Work Off-Line And Use Remote Mail check box is selected, you can compose
	messages and send them to the Outbox at any time, and then send the messages to
	the recipients when you manually connect to your Internet service provider.
	
	Method 2
	--------
	
	Add another information service to your Microsoft Exchange profile. To add the
	Microsoft Mail information service, follow these steps:
	
	1. If Microsoft Exchange is running, click Exit And Log Off on the File menu.
	
	2. In Control Panel, click Mail And Fax.
	
	3. Click Add.
	
	4. Click Microsoft Mail in the list of available information services, and then
	  click OK.
	
	5. On the Connection tab, click "Remote using a modem and Dial-Up Networking."
	
	6. On the Remote Configuration tab, verify that the Use Remote Mail check box is
	  selected.
	
	7. On the Dial-Up Networking tab, select the Dial-Up Networking connection that
	  you use to connect to your Internet service provider.
	
	8. Click OK.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When the Work Off-Line And Use Remote Mail check box is not selected, Microsoft
	Exchange attempts to connect to your Internet service provider each time you
	start Microsoft Exchange. After all messages have been sent and received,
	Microsoft Exchange disconnects from the Internet service provider.
	
	When you send a message using the Internet Mail information service, the message
	is placed in the Outbox and is not sent until Microsoft Exchange checks for new
	messages. To configure the interval Microsoft Exchange uses to check for new
	messages, follow these steps:
	
	1. On the Tools menu, click Services.
	
	2. Click Internet Mail, and then click Properties.
	
	3. On the Connection tab, click Schedule.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
