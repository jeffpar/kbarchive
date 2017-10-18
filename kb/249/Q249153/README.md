---
layout: page
title: "Q249153: XCON: MTA Stops While Processing Malformatted Incoming X.400 Msg"
permalink: kb/249/Q249153/
---

## Q249153: XCON: MTA Stops While Processing Malformatted Incoming X.400 Msg

	Article: Q249153
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may stop while processing an
	incoming X.400 message. One of the following 9405 error messages may be logged
	in the Windows NT application event log:
	
	  Access violation (0xc0000005) at Address 0x4144dc reading from 0x3032376c.
	  [BASE APPLICATION 28] (16)
	
	  Access violation (0xc0000005) at Address 0x77f7cc66 writing to 0x10. [BASE
	  MAIN BASE 28] (16)
	
	  Access violation (0xc0000005) at Address 0x401eac reading from 0x30323766.
	  [BASE SUBMIT 15] (16)
	
	  Access violation (0xc0000005) at Address 0x77f74767 writing to 0x3032376a.
	  [BASE SUBMIT 15] (16)
	
	Before the event 9405, an event 2245 may be logged:
	
	  ds_read failed with Problem DS_E_NO_SUCH_OBJECT.
	  Attribute: Directory Name:
	  /O={ASN}1403424D4900/OU={ASN}1412534952454E452D4F5045524154494F4E414C00
	  /CN={ASN}140A53656B74696F6E2D494900/CN={ASN}140847722E2D49492D4400
	  /CN={ASN}140A4162742E2D49492D313000/CN={ASN}140C5265662E2D49492D31302D6100
	  /CN={ASN}14085341542D4F50455200/CN={ASN}140C53415.
	  [RD Server APPLICATION 27 114] (12)
	
	CAUSE
	=====
	
	The Exchange Server MTA receives a malformatted message from a foreign X.400
	messaging system. The message in question contains one or more invalid
	characters in an X.400 P1 directory name, for example "{" or "}". These
	characters are not part of the T.61 character set which is used here. Also, the
	directory name field exceeds the maximum allowed length of 64 characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	The only workaround is to configure the link to send messages in 1984 format, so
	the invalid directory names are removed before the message reaches Exchange
	Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	
	When a malformatted message arrives, the following event is written to the
	Windows NT application event log:
	
	  Event ID 2024
	  Unable to access the object manager (OM) object from the Microsoft Exchange
	  MTA for MH_T_PER_RECIP_REPORTS.
	
	Additional query words: Dr watson crash hang stop malfunction user.dmp drwtsn32
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
