---
layout: page
title: "Q268000: XADM: Exchange 5.5 Server from Select CD Limits IS to 16 GB"
permalink: kb/268/Q268000/
---

## Q268000: XADM: Exchange 5.5 Server from Select CD Limits IS to 16 GB

	Article: Q268000
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Exchange Server 5.5 from the Microsoft Select CD,
	using AutoRun from the Setup.exe program file, Exchange Server may alert you
	that the 16-gigabyte (GB) database limit is reached.
	
	CAUSE
	=====
	
	This issue can occur when you install the Standard Edition of Exchange Server
	5.5. The information store databases (Priv.edb and Pub.edb) in this version are
	limited to 16 GB each. After the limit is reached, the Exchange Server database
	engine stops taking transactions and notifies the information store to shut
	down.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the SrvRmax.exe program file from the Select CD to
	install the Enterprise Edition of Exchange Server 5.5. The Enterprise Edition
	information store databases are limited only by available hardware resources.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Setup
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
