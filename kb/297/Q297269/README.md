---
layout: page
title: "Q297269: XCON: Error Message When Sending Moderated Newsgroup Messages"
permalink: kb/297/Q297269/
---

## Q297269: XCON: Error Message When Sending Moderated Newsgroup Messages

	Article: Q297269
	Product(s): Internet Information Server
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): kbOSWinNT400sp4 kbIIS exc55 kbiis400
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Information Server (IIS) 4.0, messages that are destined for a
	moderated newsgroup to an Simple Mail Transfer Protocol (SMTP) address that
	exists on a separate host that is running an SMTP agent such as Microsoft
	Exchange Server 5.5 may not be forwarded correctly.
	
	If you post a message, you may receive the following error message from the
	client software:
	
	  Outlook Express could not post your message.
	
	  Subject <Test Message>, Account: <Server Name>, Server: <Server
	  Name>, Protocol: NNTP, Server Response: '441 (442)
	
	  Article Rejected -- Failed to mail Article to administrator@domain.com', Port:
	  119, Secure(SSL): No, Server Error: 441, Error Number: 0x800CCCA9
	
	CAUSE
	=====
	
	This issue can occur because the IIS SMTP service (SMTPsvc) or Exchange Server
	5.5 is not running on the same server as the moderated newsgroup.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. From the Microsoft Windows NT Option Pack 4 CD-ROM, install the Microsoft
	  SMTP service on the newsgroup server (use the default settings).
	
	2. Restart the server, and then start the SMTP service.
	
	3. Start Internet Server Manager, and then open the properties of the default
	  SMTP site.
	
	4. Click the Delivery tab, configure the smarthost setting to match the NetBIOS
	  name of the SMTP host, for example, the name of the Exchange Server 5.5
	  computer that has Internet Mail Service installed.
	
	5. Click OK, and then open the default NNTP site properties.
	
	6. Click the NNTP Settings tab, type the server name of the IIS server in the
	  "Default SMTP server for moderated groups" box, and then click OK.
	
	7. Stop both the SMTP and NNTP service on the IIS server, and then restart the
	  services.
	
	MORE INFORMATION
	================
	
	The server establishes and maintains an SMTP connection with the Exchange Server
	5.5 computer to transfer messages. After the first message, it sends the RSET
	command to reset the connection; however, the session maintains the original
	EHLO command, but the IIS computer passes all the SMTP sequence commands.
	Exchange Server 5.5 does not allow multiple EHLO commands; therefore, you
	receive "503 Bad Sequence" messages.
	
	
	Additional query words: w3svc ntop
	
	======================================================================
	Keywords          : kbOSWinNT400sp4 kbIIS exc55 kbiis400 
	Technology        : kbiisSearch kbExchangeSearch kbExchange550 kbiis400 kbZNotKeyword2
	Version           : :4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
