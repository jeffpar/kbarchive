---
layout: page
title: "Q235978: XGEN: Helpful Tips and Suggestions for Applying Exchange SPs"
permalink: kb/235/Q235978/
---

## Q235978: XGEN: Helpful Tips and Suggestions for Applying Exchange SPs

	Article: Q235978
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 30-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides general information about applying service packs for
	Microsoft Exchange Server. This information can help you avoid problems that may
	arise during the installation process and help make the installation process as
	smooth as possible. The following topics are discussed:
	
	- Before applying a service pack
	- Applying a service pack
	
	MORE INFORMATION
	================
	
	Before Applying a Service Pack
	------------------------------
	
	Before you apply a service pack for Exchange Server:
	
	- Stop all Exchange Server services. To stop a service:
	
	  1. In Control Panel, double-click Services.
	
	  2. Click the service you want to stop, and then click Stop. If a dialog box
	     appears stating that additional services will be stopped, click OK.
	     Otherwise, click Yes.
	
	  NOTE: The Exchange Server services are normally stopped automatically while
	  the service pack is being applied. However, in some cases, the Update program
	  is unable to stop one or more services. Stopping the services before you
	  apply the service pack may prevent this problem from occurring.
	
	- Verify that the server is not being monitored using Performance Monitor. The
	  server may be monitored by an instance of Performance Monitor running on the
	  same server, or on a different server on the network. If the server is being
	  monitored, quit Performance Monitor.
	
	- Verify that the server is not being monitored using a server monitor. If the
	  server is being monitored, stop the server monitor.
	
	- End any other connections to the server, such as Simple Network Management
	  Protocol (SNMP) connections or connections made by e-mail clients,
	  uninterruptible power supply (UPS) programs, or the Windows NT User Manager.
	
	Applying a Service Pack
	-----------------------
	
	While you are applying a service pack, you may be prompted to overwrite an
	existing file on your hard disk. When this occurs, you should only overwrite the
	existing file if the new file is a later version. If the new file is not a later
	version, you should not overwrite the existing file.
	
	In addition, a message may be displayed indicating that the Update program could
	not copy a file to your hard disk because an existing file is already open. When
	this occurs, you may be able to work around the problem by renaming the existing
	file on your hard disk, and then clicking Retry.
	
	
	For information about problems that may occur if the server is being monitored
	using a server monitor while you are applying a service pack, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177221 XADM: Errors Occur During Exchange Service Pack Upgrade
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
