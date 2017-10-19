---
layout: page
title: "Q240383: XCON: MTA Queues Back up with Event ID 1192 w. X.400 Connectors"
permalink: /kb/240/Q240383/
---

## Q240383: XCON: MTA Queues Back up with Event ID 1192 w. X.400 Connectors

	Article: Q240383
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) mail queues may back up over
	X.400 Connectors. The following error message may be logged in the application
	event log.
	
	  Event ID: 1192
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	
	  An interoperability error occurred with entity %5. A presentation error
	  occurred. ASN.1 decode failure. Server error code %1 was detected at offset
	  %2. Node label %4, Control block index %3. [%6 %7 %8 %9]. (14)
	
	CAUSE
	=====
	
	This problem can occur if you use an MTA password to add a higher level of
	security. You can enter this password on the General tab of the MTA for the
	local server. This is the password that foreign systems use when they connect to
	this MTA.
	
	If you use the X.400 Connector, you must configure the remote X.400 Connector to
	pass (send) this password to the MTA. You can enter this password under "Remote
	MTA password" on the General tab of the X.400 Connector. Please note that this
	password is case sensitive.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the X.400 Connectors in each site to pass the
	remote MTA password by entering the remote password on the General property page
	of each X.400 Connector.
	
	If the passwords are correct, get a raw dump of the MTAs and X.400 Connectors:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	2. In the Connections container, select each X.400 Connector individually.
	
	3. Press the CTRL key (and keep it depressed), and on the File menu, click Raw
	  Properties to create an Admindmp.txt file in the Exchsrvr\Bin folder.
	
	4. Select the local MTA, and then repeat the previous step to create an
	  Admindmp.txt file. This file appends to itself, so you do not need to rename
	  the first file.
	
	5. Open the Admindmp.txt file, and look for the following entry for the X.400
	  Connector
	
	  Gateway Local-Cred "<password_of_the_remote_system>"
	
	6. In the Admindmp.txt file, look for the following entry for the MTA:
	
	  MTA-Local-Cred "local_MTA_password"
	
	If the raw dump is accurate, re-enter the values on both the MTA and X.400
	Connector, and then restart both the Directory service and MTA service.
	
	MORE INFORMATION
	================
	
	For additional information about the creation and interpretation of Admindmp.txt
	files, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q199412 XGEN: Administrator Program Dump Files (Admindmp.txt)
	
	Additional query words: x400
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
