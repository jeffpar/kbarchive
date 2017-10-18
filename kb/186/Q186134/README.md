---
layout: page
title: "Q186134: XCLN: Authentication Credentials Error 554 in Outlook/OE"
permalink: kb/186/Q186134/
---

## Q186134: XCLN: Authentication Credentials Error 554 in Outlook/OE

	Article: Q186134
	Product(s): Microsoft Exchange
	Version(s): 4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.01,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Outlook Express versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 3.1 
	- Microsoft Outlook Express versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5, 5.01, 5.5 for Windows 95 
	- Microsoft Outlook Express versions 4.01 Service Pack 1, 4.01 Service Pack 2, 5, 5.01, 5.5 for Windows 98 
	- Microsoft Outlook Express versions 5, 5.01, 5.5 for Windows 98 Second Edition 
	- Microsoft Outlook Express versions 5.01, 5.5 for Windows 2000 
	- Microsoft Outlook Express, version 5.5 for Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Outlook and Outlook Express Express users send messages through
	Microsoft Exchange Server 5.5, the following error message may appear:
	
	  An unknown error has occurred.
	  Subject '<subject>', Account '<sender>', server '<server
	  name>',
	  Protocol: SMTP, Server Response: '554 Originator address does not match
	  authentication credentials', Port: 25, Secure(SSL); No, Server
	  Error:554,
	  Error Number:0x800CCC6F
	
	Post Office Protocol 3 (POP3) and Internet Message Access Protocol (IMAP) Outlook
	clients may see the same error message.
	
	The Exchange Internet Mail Service Administrator's inbox may have the following
	message:
	
	  An Inbound mail message was not accepted on server <server name> because
	  the authentication account did not have permission to use the originator
	  address on the message. The message that caused this notification was:
	
	     To: <Recipient@name.domain.com>
	     From: <sender>@name.domain.com>
	     Subject: <subject>
	
	     The submitting host was:
	     <Server name.domain.com>
	
	The account used to authenticate the connection was:
	
	  \<Sender>
	
	If archiving was enabled at the time of submission, the message can be found in
	the following file:
	
	  <Drive>:\ExchSrvr\Imcdata\In\Archive\W707852B
	
	If the Simple Mail Transfer Protocol (SMTP) protocol log for the Internet Mail
	Service is enabled, the following message may be present:
	
	  >>> 554 Originator address does not match authentication credentials.
	
	CAUSE
	=====
	
	The senders' SMTP e-mail address that is configured in Outlook and Outlook
	Express (POP3 or IMAP client) does not match an address in the Exchange
	directory and cannot be validated by the Internet Mail Service.
	
	RESOLUTION
	==========
	
	This resolution assumes the Exchange Administrator wants to retain the
	anti-spoofing configuration on the Internet Mail Service.
	
	In Outlook Express, ensure the e-mail address entry (from the Tools menu, click
	Accounts, click the Mail tab, select the User name, click Properties, and then
	click the General tab) is the same SMTP e-mail address for the Exchange user
	located in the Exchange directory (under the Exchange user properties, E-mail
	addresses tab, SMTP address).
	
	MORE INFORMATION
	================
	
	If you are using Netscape Communicator 4.03, the following dialog box will be
	displayed:
	
	  An Error occurred sending mail.
	
	  The mail server responded: Originator address does not match
	  authentication credential.
	
	  Please check the message and try again.
	
	Refer to Netscape documentation for proper configuration.
	
	The example companies, organizations, products, people, and events depicted
	herein are fictitious. No association with any real company, organization,
	product, person, or event is intended or should be inferred.
	
	Additional query words: Netscape
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlookExpressSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlookExpress98Search kbOutlookExpress95Search kbOutlookExpress310Search kbOutlookExpressWin2000Search kbOutlookExpressWinMESearch kbOutlookExpress550Win2000 kbOutlookExpress501Win2000 kbOutlookExpress550Win98SE kbOutlookExpress501Win98SE kbOutlookExpress500Win98SE kbOutlookExpress401Win98SP1 kbOutlookExpress401Win98SP2 kbOutlookExpress501Win98 kbOutlookExpress500Win98 kbOutlookExpress550Win98 kbOutlookExpress500Win310 kbOutlookExpress401Win310 kbOutlookExpress401Win310SP1 kbOutlookExpress401Win310SP2 kbOutlookExpress550WinME kbOutlookExpress401Win95 kbOutlookExpress401Win95SP1 kbOutlookExpress401Win95Sp2 kbOutlookExpress501Win95 kbOutlookExpress550Win95 kbOutlookExpress500Win95 kbOutlookExpress400Win95
	Version           : :4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.01,5.5
	Issue type        : kbprb
	
	=============================================================================
	
