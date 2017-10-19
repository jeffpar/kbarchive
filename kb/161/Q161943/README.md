---
layout: page
title: "Q161943: XFOR: RFC822 Header Includes BCC Recipients Fields"
permalink: /kb/161/Q161943/
---

## Q161943: XFOR: RFC822 Header Includes BCC Recipients Fields

	Article: Q161943
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- the operating system: Microsoft Windows NT 4.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Internet Mail Service for Windows 95 and Windows NT Server
	improperly sends the BCC recipients information in the RFC-822 header of the
	mail message. This causes all recipients of the message to see who was BCC'd on
	the mail message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	RFC-822 states the following about the BCC field:
	
	  This field contains the identity of additional recipients of the
	  message. The contents of this field are not included in copies of the
	  message sent to the primary and secondary recipients.
	
	The following is a sample network monitor trace:
	
	  SMTP: Rsp: Service ready, 93 bytes
	  SMTP: Cmd: Hello, host identifier, 28 bytes
	  SMTP: Rsp: Requested mail action okay, completed, 69 bytes
	  SMTP: Cmd: Mail from <TEST>, 22 bytes
	  SMTP: Rsp: Requested mail action okay, completed, 29 bytes
	  SMTP: Cmd: Recipient <TEST@microsoft.com>, 33 bytes
	  SMTP: Rsp: Requested mail action okay, completed, 45 bytes
	  SMTP: Cmd: Recipient <test2@microsoft.com>, 31 bytes
	  SMTP: Rsp: Requested mail action okay, completed, 43 bytes
	  SMTP: Cmd: Data: Mail data to follow, 6 bytes
	  SMTP: Rsp: Enter mail ..., 50 bytes
	  SMTP: Data - continued from frame 16, 480 bytes
	     SMTP: Data = Received: by test.microsoft.com with Microsoft Mail
	     SMTP: Data = id <01BC18F8.ED1DCB00@test.microsoft.com>;
	     SMTP: Data = Message-ID: <01BC18F8.ED1DCB00@test.microsoft.com>
	     SMTP: Data = From: Test <test>
	     SMTP: Data = To: "test@microsoft.com'" <test@microsoft.com>
	     SMTP: Data = Bcc: "test@microsoft.com'" <test@microsoft.com>
	     SMTP: Data = Subject:
	     SMTP: Data = Date: Wed, 12 Feb 1997 15:23:47 -0800
	     SMTP: Data = MIME-Version: 1.0
	     SMTP: Data = Content-Type: text/plain; charset="us-ascii"
	     SMTP: Data = Content-Transfer-Encoding: 7bit
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTSsearch kbWin95search kbExchangeSearch kbExchange400 kbZNotKeyword2 kbWin95
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
