---
layout: page
title: "Q249133: XFOR: Messages from cc:Mail to Exchange Missing Address Info."
permalink: /kb/249/Q249133/
---

## Q249133: XFOR: Messages from cc:Mail to Exchange Missing Address Info.

	Article: Q249133
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Server is used as a backbone between two Lotus cc:Mail
	post offices, all of the messages that are sent from cc:Mail users that are
	addressed to cc:Mail users on a different post office are rejected by the
	Microsoft Exchange Connector for Lotus cc:Mail. A non-delivery report (NDR) that
	is similar to the following is sent to the originator of the message:
	
	  From: ~BEL01 at CCMAIL
	  Sent: Wednesday, December 22, 1999 11:31 AM
	  To: User, Test
	  Subject: Undeliverable: test from bel02
	
	  Your message was not delivered to all recipients.
	
	  Subject: test from bel02
	  Sent: 12/22/99 9:02:00 AM
	
	  The following email address(es) were unknown:
	
	  at PO_NAME
	
	CAUSE
	=====
	
	This problem may occur if the Connector for cc:Mail cannot process the message
	because the recipient address is incomplete in the TO field. To determine if the
	recipient address is incomplete, use one of the following methods:
	
	- In the text of the NDR, look for a description that is similar to the
	  following:
	
	  The following email address(es) were unknown: at PO_NAME
	
	  If the description is missing the user name portion of the e-mail address, the
	  recipient address is incomplete. If the recipient address is complete, the
	  e-mail address is formatted as "USER_NAME at PO_NAME."
	
	- If cc:Mail message archiving is enabled, a copy of the original message from
	  cc:Mail is saved in the Exchsrvr\Ccmcdata\Export.bak folder. Open the CCM
	  file and examine the message header. If the TO field is missing the user name
	  portion of the e-mail address, the recipient address is incomplete.
	
	For additional information about how to enable cc:Mail message archiving, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q192516 XFOR: T-shooting cc:Mail Connector Mail Conversion Problems
	
	This problem is caused by the cc:Mail version 8.3 Export.exe file.
	
	WORKAROUND
	==========
	
	Use an earlier version of the Export.exe file. Lotus recommends that you use the
	cc:Mail version 8.01 Export.exe file.
	
	STATUS
	======
	
	Lotus is aware of this problem and has documented it in technical document
	number 167695 located at the following Web site:
	
	  http://support.lotus.com
	
	Refer to Lotus support for additional information about the status of this
	problem.
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: ccmc corrupt router postoffice
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
