---
layout: page
title: "Q214682: XCON: MTA Deferred Delivery Message Generates NDR"
permalink: kb/214/Q214682/
---

## Q214682: XCON: MTA Deferred Delivery Message Generates NDR

	Article: Q214682
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Non-Delivery Report (NDR) may be received when sending messages
	with a deferred delivery time after the message timeout:
	
	  From: System Administrator
	  To: 'x400 to user1'
	  Sent: Monday, November 23, 1998 5:00 PM
	  Subject: Undeliverable: test 2 on Friday
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: test 2 on Friday
	  Sent: 11/13/98 9:21 AM
	
	  The following recipient(s) could not be reached:
	
	  'x400 to user1' on 11/23/98 5:00 PM
	  The maximum time for delivering the message expired
	  MSEXCH:MSExchangeMTA:Site:Server
	
	The NDR is received on the deferred delivery date, not immediately upon sending.
	
	CAUSE
	=====
	
	The Message Transfer Agent (MTA) returns the message if the deferred delivery
	date is after the message timeout. The default message timeout period is seven
	days. When the deferred delivery date arrives, the MTA checks the message
	timeout value, and displays the NDR for this message based on that date, instead
	of delivering the message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent
	
	+-------------------------+
	| File name    | Version  | 
	+-------------------------+
	| Dbserver.sch | 5.5.2534 | 
	+-------------------------+
	| Dcprods.cat  | 5.5.2534 | 
	+-------------------------+
	| Ems_rid.dll  | 5.5.2534 | 
	+-------------------------+
	| Emsmta.exe   | 5.5.2534 | 
	+-------------------------+
	| Info4log.cfg | 5.5.2534 | 
	+-------------------------+
	| Infoblog.cfg | 5.5.2534 | 
	+-------------------------+
	| Infodlog.cfg | 5.5.2534 | 
	+-------------------------+
	| Infollog.cfg | 5.5.2534 | 
	+-------------------------+
	| Infotlog.cfg | 5.5.2534 | 
	+-------------------------+
	| Mtacheck.exe | 5.5.2534 | 
	+-------------------------+
	| Mtamsg.dll   | 5.5.2534 | 
	+-------------------------+
	| P2.xv2       | 5.5.2534 | 
	+-------------------------+
	| X400om.dll   | 5.5.2534 | 
	+-------------------------+
	| X400omv1.dll | 5.5.2534 | 
	+-------------------------+
	
	Please note that this fix must be applied to all Microsoft Exchange Server
	computers in the message path, as each MTA on each server evaluates the deferred
	delivery time and message time-out.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
