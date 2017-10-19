---
layout: page
title: "Q190168: XCLN: Outlook Client Dials Incorrect Connectoid When Syncing"
permalink: /kb/190/Q190168/
---

## Q190168: XCLN: Outlook Client Dials Incorrect Connectoid When Syncing

	Article: Q190168
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an Outlook client to connect to an Exchange Server computer
	remotely and try to synchronize your offline storage file (OST), the dial- up
	connection may dial by using the wrong connectoid. (The connectoid appears on
	the screen with a message that includes the number being dialed, which is not
	the number you want.) If you hang up and connect again by going to the Tools
	menu and clicking Synchronize, the correct connectoid will be used. This
	behavior may repeat itself upon subsequent synchronizations and cycle back and
	forth between the two connectoids.
	
	CAUSE
	=====
	
	The above behavior occurs if two different dial-up connectoids are created. The
	first is used for Internet Explorer version 4.0 or later and is configured to
	"Connect to the Internet using a Modem" on the Connections tab of Internet
	Explorer Properties. A second connectoid is configured to allow an Outlook
	client to automatically connect and synchronize with an Exchange Server
	computer.
	
	WORKAROUND
	==========
	
	There are two possible ways to work around this issue:
	
	Method 1
	--------
	
	1. In the Properties for Internet Explorer, select View, Internet Options, and
	  the Connections tab. Select "Connect to the Internet using a local area
	  network". This allows Internet Explorer to open and browse after a connection
	  is established to your Internet Service Provider (ISP).
	
	2. Start Outlook offline. On the Tools menu, click Synchronize. This allows the
	  connection to be made using the correct connectoid as it was configured in
	  the Dial Up Networking properties for the Outlook client. (To configure this,
	  on the Tools menu, click Services, click Microsoft Exchange Server, and then
	  click Properties. Select the Dial-Up Networking tab.)
	
	3. To browse using Internet Explorer, double-click the dial-up connectoid to
	  connect to the ISP. Then you can open Internet Explorer for browsing.
	
	Method 2
	--------
	
	1. In the properties for Internet Explorer, select View, Internet Options, and
	  the Connections tab. Select "Connect to the Internet using a Modem".
	
	2. Configure the connection to be made with the dial-up connectoid that dials
	  the Internet Service Provider (ISP). This allows a connection to be made to
	  the ISP when you double-click the Internet Explorer icon.
	
	3. Change the Dial-Up Networking properties for the Outlook client to "Do not
	  dial, Use existing Connection". To do this, on the Outlook menu bar, click
	  Tools, and then click Services. Select Microsoft Exchange Server, and then
	  select Properties. Click the Dial-Up Networking tab, and select "Do not dial,
	  Use existing Connection".
	
	4. To connect to the RAS server that allows access to the Exchange Server
	  computer, first double-click the dial-up connectoid and make the connection.
	  Then open the Outlook client. On the Tools menu, select Synchronize to
	  synchronize your OST.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
