---
layout: page
title: "Q194068: Err Msg: Your Server Has Unexpectedly Terminated the..."
permalink: /kb/194/Q194068/
---

## Q194068: Err Msg: Your Server Has Unexpectedly Terminated the...

	Article: Q194068
	Product(s): The Microsoft Network
	Version(s): 5.4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 22-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 5.4 
	- The Microsoft Network Version 5.5 
	- The Microsoft Network Version 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send e-mail messages using MSN, The Microsoft Network, and
	Microsoft Outlook Express, you may receive one of the following error messages:
	
	  Your server has unexpectedly terminated the connection. Possible causes for
	  this include server problems, network problems, or a long period of
	  inactivity. Account: 'MSN Mail', Server:'smtp.email.msn.com', Protocol:
	  'SMTP', Port: 25, Secure(SSL): No, Error Number: 0x800CCC0F
	
	  The TCP/IP connection was unexpectedly terminated by your mail server. If
	  this problem persists, contact your LAN Administrator or Internet provider.
	
	CAUSE
	=====
	
	This behavior can occur when you connect to MSN using a local area network (LAN)
	or third-party Internet service provider (ISP).
	
	RESOLUTION
	==========
	
	To resolve this behavior, configure Outlook Express to use the following Mail
	server settings:
	
	Step 1: Configure Mail Servers
	------------------------------
	
	1. Start Outlook Express. If you are prompted to connect to MSN, click Cancel.
	
	2. On the Tools menu, click Accounts, and then click the Mail tab.
	
	3. Click MSN Mail, and then click Properties.
	
	4. Click the Servers tab, and then do the following:
	
	   - Type pop3.email.msn.com in the Incoming Mail (POP3) box.
	
	   - Type smtp.email.msn.com in the Outgoing Mail (SMTP) box.
	
	5. In the Account name box, type your user name (username@msn.com).
	
	6. In the Password box, type MSN password and select Remember password.
	
	7. Select Log on using Secure Password Authentication.
	
	8. Select My Server requires authentication.
	
	9. Click Apply, and then click OK.
	
	Step 2: Configure TCP/IP for MSN
	--------------------------------
	
	Note: You may be asked for the disks/CD for Windows 95, 98, 98 Second Edition, or
	Millennium Edition.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click either TCP/IP (if you do not have a network
	  adapter) or TCP/IP -> Dial-Up Adapter (if you do have a network adapter),
	  and then click Properties.
	  If using Windows 98 you will be prompted with a warning about changing the
	  TCP/IP configuration, click OK.
	
	4. On the IP Address tab, click Obtain An IP Address Automatically.
	
	5. On the DNS Configuration tab, click Disable DNS.
	
	6. On the WINS Configuration tab, click Disable WINS Resolution.
	
	7. On the Gateway tab, make sure the Installed Gateways box is empty. If any
	  gateways are listed in this box, click a gateway and then click Remove.
	  Repeat this step until the Installed Gateways box is empty.
	
	8. On the Bindings tab, make sure Client For Microsoft Networks is selected.
	
	9. Click OK. If you are prompted to restart the computer, click Yes.
	
	MORE INFORMATION
	================
	
	Microsoft has added anti-spamming e-mail servers and Internet protocol (IP)
	filtering on MSN.
	
	The new MSN e-mail servers reduce spamming and the unauthorized relay of e-mail.
	Non-MSN members cannot send e-mail messages using MSN servers.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. outex ol98
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN550 kbMSN560 kbMSN540
	Version           : :5.4
	Issue type        : kbprb
	
	=============================================================================
	
