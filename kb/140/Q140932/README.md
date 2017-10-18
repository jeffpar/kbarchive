---
layout: page
title: "Q140932: XCON: IMC: Resent-from Headers Use Oldest Information"
permalink: kb/140/Q140932/
---

## Q140932: XCON: IMC: Resent-from Headers Use Oldest Information

	Article: Q140932
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If incoming SMTP messages include multiple Resent headers, replies from
	Microsoft Exchange Server recipients might go to an incorrect recipient.
	
	CAUSE
	=====
	
	The Microsoft Exchange Internet Mail Connector (IMC) will use the oldest
	information in the Resent headers to place in the From field.
	
	MORE INFORMATION
	================
	
	Multiple "Resent" headers in an incoming SMTP message might look like:
	
	  Received: by host02.company.com
	  id AA01441; Mon, 9 May 96 19:12:21 -0500
	  Resent-Date: Mon, 9 May 96 19:12:20 -0500
	  Resent-From: user3@host01.company.com
	  Subject: Fw: Returned mail: Host unknown
	  Resent-To: user4@microsoft.com
	  Received: by host01.company.com
	  id AA08664; Mon, 29 Apr 96 14:12:38 -0500
	  Resent-Message-Id: <9604221912.AA08664@host01.company.com>
	  Resent-Date: Mon, 29 Apr 96 14:12:37 -0500
	  Resent-From: user2@host01.company.com
	  Subject: Fw: Returned mail: Host unknown
	  Resent-To: user3@host01.company.com
	  Resent-Date: Mon, 29 Apr 96 12:39:20 -0500
	  Resent-From: user1@host01.company.com
	  Subject: Fw: Meeting at noon
	  Resent-To: user2@host01.company.com
	  Return-Path: <me@host01.company.com>
	  Received: by host01.company.com
	  id AA18773; Mon, 29 Apr 96 12:39:05 -0500
	  Date: Mon, 29 Apr 96 12:39:05 -0500
	  From: me <me@host01.company.com>
	  Message-Id: <9604221739.AA18773@host01.company.com>
	  Subject: Meeting at noon
	  To: user1@host01.company.com
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
