---
layout: page
title: "Q199325: XCON: MTA Size Restrictions Affect Local Delivery"
permalink: /kb/199/Q199325/
---

## Q199325: XCON: MTA Size Restrictions Affect Local Delivery

	Article: Q199325
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3kbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	After you enable the Message Journaling feature of Exchange Server version 5.5
	Service Pack 1, if you send large messages to other users on your local Exchange
	Server computer, you receive non-delivery reports (NDRs) similar to the
	following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: MSG Sent: 8/11/98 11:14 AM
	
	  The following recipient(s) could not be reached:
	
	  Exchange User on 8/11/98 11:16 AM Either the message size exceeds the maximum
	  allowed for the recipient or transport, or you have exceeded the storage
	  limit on your mailbox.
	
	  MSEXCH:MSExchangeIS:Site:SERVER
	
	MORE INFORMATION
	================
	
	This occurs when size limits are set on the Exchange Server message transfer
	agent (MTA). Before you enable the Message Journaling feature, only messages
	that you send to users on another Exchange Server computer go to the MTA, and
	these are sent back if the size limit is exceeded. After you enable the Message
	Journaling feature, messages that are sent to local users also go to the MTA
	and, therefore, the size restriction is invoked.
	
	Part of the Message Journaling feature, first introduced in Exchange Server 5.5
	Service Pack 1, is to send all messages to the MTA for submission to the journal
	recipient. This in turn causes the local messages to be subject to the MTA size
	restriction. To verify if Message Journaling is enabled for messages destined
	for recipients local to the server in question, check for the following registry
	value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem\No
	  Local Delivery
	
	NOTE: The No Local Delivery value is a DWORD type value.
	
	If this value is non-zero, journaling is enabled for all messages submitted to
	local recipients and is subject to any size restrictions that may be enabled for
	the local MTA.
	
	Additional query words: journal content too long mta
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbfaq
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
