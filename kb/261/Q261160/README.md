---
layout: page
title: "Q261160: XADM: Error Message When Backing Up Exchange Server Remotely"
permalink: /kb/261/Q261160/
---

## Q261160: XADM: Error Message When Backing Up Exchange Server Remotely

	Article: Q261160
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you back up an Exchange Server 5.5 computer from a remote computer, the
	status of the backup is "completed immediately". However, the backup report
	lists the following error messages:
	
	  Error: The Microsoft Exchange ServerA\Directory Directory Service is not
	  started on the selected computer.
	  Backup completed on <Date> at <Time>.
	  Bytes: 0
	  Time: 1 second
	  Media name: "Media created <Date> at <Time>"
	
	  Error: The Microsoft Exchange ServerA\Information Store Information Store
	  service is not started on the selected computer.
	  Backup completed on <Date> at <Time>.
	  Bytes: 0
	  Time: 1 second
	
	In addition, the following event ID message is logged in the Application event
	log:
	
	  Event Type: Error
	  Event Source: NTBackup
	  Event Category: None
	  Event ID: 8010
	  User: N/A
	  Computer: BackupSrv
	  Description:
	  Microsoft Exchange services returned 'Unable to perform the backup. Either you
	  are not connected to the specified backup server or the service you are
	  trying to backup is not running. ' from a call to 'BackupPrepare()'
	  additional data 'ServerA'
	
	CAUSE
	=====
	
	This behavior can occur if you did not click the "Enable NetBIOS over TCP/IP"
	option on the WINS tab in the Advanced TCP/IP settings dialog box.
	
	RESOLUTION
	==========
	
	To resolve this behavior, enable NetBIOS over TCP/IP:
	
	1. Click Start, and then point to Settings.
	
	2. Click "Network and Dial-up Connections".
	
	3. Double-click the applicable Local Area Connection, and then click Properties.
	
	4. In the Components pane, click "Internet Protocol (TCP/IP)", and then click
	  Properties.
	
	5. Click Advanced, click the WINS tab, and then click "Enable NetBIOS over
	  TCP/IP".
	
	6. Click OK to close all the dialog boxes.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 8010 backup exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
