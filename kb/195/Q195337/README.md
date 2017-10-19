---
layout: page
title: "Q195337: MSN: E-mail Notification Temporarily Disabled"
permalink: /kb/195/Q195337/
---

## Q195337: MSN: E-mail Notification Temporarily Disabled

	Article: Q195337
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Quick View utility in MSN, The Microsoft Network, you may
	receive the following message:
	
	  E-mail Notification Temporarily Disabled
	
	NOTE: This notification does not prevent you from accessing your MSN e-mail
	account.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The MSN e-mail servers are not working properly.
	
	- The MSN Mail account is missing or not configured properly in Microsoft
	  Outlook Express.
	
	- The MSN Mail account is not using the MSN Post Office Protocol 3 (POP3)
	  e-mail servers.
	
	- The MSN Online Setup program did not complete successfully.
	
	RESOLUTION
	==========
	
	You can determine if the MSN e-mail servers are not working properly by waiting
	until a later time and then using the Quick View utility in MSN again. If you no
	longer receive this message, the MSN e-mail servers are now working properly
	(but were not working properly earlier).
	
	If the issue continues to occur, follow these steps:
	
	1. Start Outlook Express.
	
	2. If the MSN Sign-In screen is displayed, click Cancel.
	
	3. On the Tools menu, click Accounts.
	
	4. On the Mail tab, click the MSN Mail account, and then click Remove.
	
	5. Quit Outlook Express.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type the following line, and then click OK:
	
	  http://setup.msn.com/membersonly/config/default.asp
	
	8. When you are prompted to connect to MSN, do so, and then follow the
	  instructions on the screen to configure your MSN e-mail account.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. email
	
	======================================================================
	Keywords          : kbsetup kbtool kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
