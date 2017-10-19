---
layout: page
title: "Q176101: Err Msg: Unable to Get the Dial-Up Networking Connection..."
permalink: /kb/176/Q176101/
---

## Q176101: Err Msg: Unable to Get the Dial-Up Networking Connection...

	Article: Q176101
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.51,2.52,2.6,4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.51, 2.52, 2.6, 5.0 
	- Microsoft Outlook Express version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send or receive e-mail on MSN, The Microsoft Network, using
	Microsoft Outlook Express, you may receive the following error message:
	
	  Unable to get the Dial-Up Networking connection needed to connect to MSN.
	
	CAUSE
	=====
	
	Outlook Express may not be using the MSN Mail e-mail account to connect to the
	MSN e-mail server.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that Outlook Express is set to use MSN Mail as
	the default mail client (if there is more than one 'MSN Mail' account then
	remove one). To do so, use the following steps:
	
	1. Start Outlook Express. If the MSN Sign-In screen appears, click Cancel.
	
	2. On the Tools menu, click Accounts.
	
	3. On the Mail tab, if MSN Mail is not the default e-mail account listed, click
	  it, and then click the Set As Default button.
	
	4. Select Properties for MSN Mail, go to the Connection tab and check that it is
	  set to:
	
	  A. For Outlook Express 4.0, connect using the Internet or 3rd party option.
	
	  B. For Outlook Express 5.0 there should be no check in the box.
	
	5. Click Apply, click OK, and then click Close until you are back to main
	  Outlook Express screen.
	
	MORE INFORMATION
	================
	
	MSN Setup creates a default MSN e-mail account named "MSN Mail." If any
	additional e-mail accounts are set up in Outlook Express, MSN may use one of the
	additional e-mail accounts instead of MSN Mail when you attempt to send or
	receive e-mail on MSN. The e-mail account used by MSN may not be configured
	correctly to connect to the MSN e-mail server.
	
	For additional information about configuring Outlook Express to work with MSN,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q173952 <A0>How to Configure Microsoft Outlook Express to Work with MSN
	
	Additional query words: 4.0 msnet msnetwork microsoft-net outexw95
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMSNSearch kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpress95Search kbOutlookExpress400Win95 kbMSN500 kbMSN252 kbMSN251 kbMSN260
	Version           : WINDOWS:2.51,2.52,2.6,4.0,5.0
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
