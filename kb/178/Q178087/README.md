---
layout: page
title: "Q178087: Err Msg: Unable to Logon to the Server Using Distributed..."
permalink: /kb/178/Q178087/
---

## Q178087: Err Msg: Unable to Logon to the Server Using Distributed...

{% raw %}

	Article: Q178087
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.51,4.0,4.01
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbmsn
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.51 
	- Microsoft Outlook Express versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive e-mail messages in Outlook Express using an MSN, The Microsoft
	Network, e-mail account, you may receive any of the following error messages:
	
	- 
	
	  Unable to logon to the server using Distributed Password Authentication
	  Account pop3.email.msn.com, Server pop3.email.msn.com
	  Protocol:POP3,Server Response: ERR Permission denied,Port 110,
	  Secure(SSL):No. Server Error.
	
	- 
	
	  Error 501 "Unknown TCPIP error."
	
	CAUSE
	=====
	
	This behavior can occur if you configure your MSN e-mail account incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this behavior, configure your e-mail account to use the Post Office
	Protocol version 3 (POP3) and Simple Management Transport Protocol (SMTP) e-mail
	servers on MSN. To do so, use the following steps:
	
	1. Start Outlook Express, and then click Accounts on the Tools menu.
	
	2. On the Mail tab, click your MSN account, and then click Properties.
	
	3. On the Servers tab, click "Log on using Secure Password Authentication," and
	  then click to clear the My Server Requires Authentication box.
	
	4. Click OK, and then click Close. Test to see if the issue is resolved. If the
	  issue still occurs, continue to the next step.
	
	5. Click Start, point to Programs, and then click The Microsoft Network.
	
	6. In the upper-left corner of MSN Program Viewer, click the Click To Show
	  Internet Toolbar button. Note that the Click To Show Internet Toolbar button
	  looks like a small white triangle with a bar above it.
	
	7. In the Address box, type the following Web address, and then press ENTER:
	
	  "http://setup.msn.com/membersonly/config/default.asp" (without the quotation
	  marks)
	
	  This Web site automatically configures Outlook Express for use with the MSN
	  e-mail servers.
	
	If this behavior continues to occur, remove and reinstall Outlook Express and
	then reconfigure your MSN e-mail account. To do so, use the following steps:
	
	1. Double-click the Outlook Express icon on the desktop. If you are prompted to
	  connect to MSN, click Cancel.
	
	2. On the Tools menu, click Accounts.
	
	3. On the Mail tab, click an e-mail account, and then click Remove. When you are
	  prompted to confirm the deletion, click Yes. Repeat this step until all
	  e-mail accounts are removed.
	
	4. Click Close, and then quit Outlook Express.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. Double-click Add/Remove programs.
	
	7. On the Install/Uninstall tab, click Microsoft Outlook Express, and then click
	  Add/Remove.
	
	8. When you are prompted to confirm the removal, click Yes.
	
	9. Click OK until you return to Control Panel.
	
	10. Close Control Panel.
	
	11. Insert the MSN CD-ROM into the CD-ROM drive. If the Welcome To MSN screen
	  appears, click Browse The CD. If the Welcome To MSN screen does not appear,
	  double-click My Computer, right-click the MSN (CD-ROM drive) icon, and then
	  click Explore.
	
	12. Double-click the Ie40 folder.
	
	13. Double-click the Ie4setup.exe file. Follow the instructions on the screen.
	
	14. On the Installation Option screen, click Full Installation, and then click
	  Next. Follow the instructions on the screen.
	
	15. On the Upgrade New Items screen, click Upgrade Only Newer Items, and then
	  click OK.
	
	16. When you are prompted to restart the computer, do so.
	
	To reconfigure your MSN e-mail account, repeat steps 1-3 at the beginning of this
	section.
	
	MORE INFORMATION
	================
	
	For information about using e-mail with MSN, see the following articles in the
	Microsoft Knowledge Base:
	
	  Q176276 Frequently Asked Questions About Mail Migration on MSN
	
	  Q152786 MSN Mail/Exchange Questions & Answers
	
	Additional query words: 4.0 msnet msnetwork microsoft-net m.s.n. outexw95 ol98
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbmsn 
	Technology        : kbMSNSearch kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpress95Search kbOutlookExpress401Win95 kbOutlookExpress400Win95 kbMSN251
	Version           : WINDOWS:2.51,4.0,4.01
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
