---
layout: page
title: "Q153060: XCLN: Undeliverable Msg, Illegally Formatted to: Header Text"
permalink: kb/153/Q153060/
---

## Q153060: XCLN: Undeliverable Msg, Illegally Formatted to: Header Text

	Article: Q153060
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After sending a message to a CompuServe member, the user may receive the
	following message from "Electronic Postmaster POSTMASTER@CompuServe.COM:"
	
	  Subject:    Undeliverable message
	
	  Illegally formatted To: header text
	
	  ------- Returned Message --------
	
	  Sender: user@domain.com
	  Received: from router.domain.com (router.domain.com [IP_address]) by
	     arl-
	  img-1.compuserve.com (8.6.10/5.950515)
	     id LAA28247; Thu, 27 Jun 1996 11:25:49 -0400
	  Received: by router.domain.com with Microsoft Exchange (IMC 4.0.838.14)
	     id <01BB6402.55C69350@ router.domain.com>; Thu, 27 Jun 1996 08:26:27-
	  0700
	  Message-ID: <c=US%a=_%p=domain%l=SERVER-960627152737Z-8201@
	     router.domain.com>
	  From: Display Name <user@DOMAIN.com>
	  To: "'12345,6789@compuserve.com'" <12345,6789@compuserve.com>
	  Subject: Message Subject.
	  Date: Thu, 27 Jun 1996 08:27:37 -0700
	  Return-Receipt-To: <user@DOMAIN.com>
	  X-Mailer:  Microsoft Exchange Server Internet Mail Connector Version
	  4.0.838.14
	  Encoding: 0 TEXT
	
	CAUSE
	=====
	
	The e-mail address is not in the correct syntax. In this example, the CompuServe
	member's ID is "12345,6789." The comma is not an accepted character.
	
	RESOLUTION
	==========
	
	Substitute a period (.) for the comma. The following e-mail address syntax
	should be used:
	
	  12345.6789@compuserve.com
	
	Additional query words: CIS cserve
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
