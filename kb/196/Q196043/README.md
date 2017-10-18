---
layout: page
title: "Q196043: XADM: Directory Service Stops When Upgrading to 5.5 or 5.5 SP1"
permalink: kb/196/Q196043/
---

## Q196043: XADM: Directory Service Stops When Upgrading to 5.5 or 5.5 SP1

	Article: Q196043
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to upgrade to Microsoft Exchange Server 5.5 or apply Exchange
	Server 5.5 Service Pack 1, the Directory service may stop unexpectedly after the
	"Setup is making sure the system is ready for installation" message is displayed
	on the screen. When this occurs, the last line that appears in the Exchange
	Server Setup log file may be similar to the following:
	
	  Interpreting line <StopService:MSExchangeSA>
	
	In addition, events similar to the following may appear in the event log:
	
	  Event ID: 195
	  Source: ESE97
	  Description: MSExchangeDS ((456)) Internal trace: dir.cxx@2041
	
	  Event ID: 15
	  Source: MSExchangeES
	  Description: Error 0x8004011d occurred while trying to run a timer-
	  based agent.
	
	CAUSE
	=====
	
	This problem can occur when the Setup or Update program attempts to stop the
	directory service while directory replication is being performed and the process
	used to stop the service times out before directory replication is finished. The
	Directory service cannot be stopped until directory replication is finished.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Directory Service
	
	  File Name     Version
	  -----------------------
	  Dsamain.exe   5.5.2404.0
	
	
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
	
