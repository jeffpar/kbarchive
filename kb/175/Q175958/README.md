---
layout: page
title: "Q175958: XFOR: NDR When You Send Msg over MS MAIL Connector"
permalink: /kb/175/Q175958/
---

## Q175958: XFOR: NDR When You Send Msg over MS MAIL Connector

{% raw %}

	Article: Q175958
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message from a Microsoft Mail postoffice to a user on Microsoft
	Exchange Server, the user on Microsoft Mail may receive a non-delivery report
	(NDR). This is true, if the message from Microsoft Mail contains an attachment
	with extended characters in the name, for example German characters like the "A"
	with an umlaut. The NDR will look like this:
	
	  [029] This mail message could not be parsed correctly.
	  Mail item was not delivered to:
	  NETWORK/PO/TEST
	
	   -----------------------------------------------------------------------
	
	  Microsoft Mail v3.0 IPM.Microsoft Mail.Note
	  From: Administrator
	   To:  TEST
	  Subject:  test
	  Date: 1997-10-09 10:24
	  Priority:
	  Message ID: EDBA53BE
	  Parent message ID: 935DA930113BD111820200C04FC9A530
	  Conversation ID: TEST
	  Attachments:
	    OAU (except these characters have umlauts).TXT
	
	In the Windows NT event log this message will be logged:
	
	  Event 2117
	  Non delivery report generated.
	  From: Administrator
	  Subject: TEST
	  [029] This mail message could not be parsed correctly.
	  Mail item was not delivered to:
	  NETWORK/PO/TEST
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
