---
layout: page
title: "Q195124: XCON: NDR When Replying All to Message Sent to Moved User"
permalink: kb/195/Q195124/
---

## Q195124: XCON: NDR When Replying All to Message Sent to Moved User

	Article: Q195124
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) may return a non- delivery
	report (NDR) similar to the following when a user attempts to Reply All to a
	message:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Test Message
	  Sent: 10/30/98 11:00 AM
	
	  The following recipient(s) could not be reached:
	
	     "User in PAB" on 10/30/98 11:01 AM
	        The recipient name is not recognized
	        MSEXCH:MSExchangeMTA:SITE:SERVER
	
	This problem may occur when the recipient's address was chosen from an old
	personal address book (PAB) entry that had been originally selected as a custom
	recipient in Container A, but had since been relocated to Container B.
	
	CAUSE
	=====
	
	These NDRs occur because the PAB entry is storing an old distinguished name that
	is no longer accurate for that custom recipient since the custom recipient has
	been relocated to a new container. However, it should be possible to add an X500
	distinguished name with the old address to the relocated custom recipient. The
	MTA will be able to send the message, but if the recipient attempts to "Reply
	All", they will receive an NDR when it attempts to send a message to the
	incorrect distinguished name for the original recipient.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	      File Name      Version
	      -------------------------
	      Dbserver.sch   5.5.2427.0
	      Dcprods.cat    5.5.2427.0
	      Ems_rid.dll    5.5.2427.0
	      Emsmta.exe     5.5.2427.0
	      Info4log.cfg   5.5.2427.0
	      Infodlog.cfg   5.5.2427.0
	      Infollog.cfg   5.5.2427.0
	      Infotlog.cfg   5.5.2427.0
	      Mtacheck.exe   5.5.2427.0
	      Mtamsg.dll     5.5.2427.0
	      P2.xv2         5.5.2427.0
	      X400om.dll     5.5.2427.0
	      X400omv1.dll   5.5.2427.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
