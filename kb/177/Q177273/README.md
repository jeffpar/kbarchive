---
layout: page
title: "Q177273: Err Msg: The Server Name You Specified Cannot Be Found..."
permalink: /kb/177/Q177273/
---

## Q177273: Err Msg: The Server Name You Specified Cannot Be Found...

	Article: Q177273
	Product(s): The Microsoft Network
	Version(s): 2.5,97
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbmsn
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send e-mail on MSN, The Microsoft Network, using Microsoft
	Outlook 97 as your e-mail client, you may receive the following error message:
	
	  The SMTP server name you specified cannot be found.
	  Please check the name and try again.
	
	  SMTP.email.msn.com.
	
	Similarly, when you attempt to receive e-mail on MSN using Outlook 97 as your
	e-mail client, you may receive the following error message:
	
	  The POP3 server name you specified cannot be found.
	  Please check the name and try again.
	
	  POP3.email.msn.com.
	
	When you click OK, e-mail is sent or received normally.
	
	CAUSE
	=====
	
	This behavior can occur if the MSN e-mail server is very busy, or if you have
	established a slow modem connection to MSN.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the server timeout setting to give the MSN
	e-mail server additional time to respond. To do so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Mail or Mail And Fax.
	
	3. In the "The following information services are set up in this profile" box,
	  click Internet E-mail, and then click Properties.
	
	4. On the Advanced tab, move the Server Timeouts slider to the right to increase
	  the server timeout setting.
	
	  Note: The maximum server timeout setting is 5 minutes.
	
	5. Click OK until you return to Control Panel.
	
	6. Close Control Panel.
	
	Note: If proxy is being used, be sure to verify that the user has WinSock Proxy
	Client installed and enabled.
	
	MORE INFORMATION
	================
	
	The server timeout setting determines how long Outlook 97 attempts to connect to
	the MSN e-mail server before stopping or "timing out." The default server
	timeout setting for Outlook 97 is 30 seconds. You may need to increase this
	setting if your Internet connection is slow.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbmsn 
	Technology        : kbOutlookSearch kbMSNSearch kbOutlook97Search kbZNotKeyword3 kbMSN250
	Version           : :2.5,97
	Issue type        : kbhowto
	
	=============================================================================
	
