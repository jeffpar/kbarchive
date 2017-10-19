---
layout: page
title: "Q265870: XADM: Error Message: The Command Lodctr Dsactrs.ini Failed..."
permalink: /kb/265/Q265870/
---

## Q265870: XADM: Error Message: The Command Lodctr Dsactrs.ini Failed...

	Article: Q265870
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Windows NT Server 4.0 on a Hewlett-Packard (HP)
	NetServer LPr using the HP NetServer Navigator CD Version L 15, you have the
	option to install the HP NetServer Agents and Symantic PC Anywhere 8.0. These
	options are selected by default. The installation of Windows NT proceeds
	normally with no issues as does the Windows NT 4.0 service pack installation.
	When the installation is finished, eight HP processes will start referencing
	different agents.
	
	When you then install Exchange Server 5.5, just after the files are copied from
	the CD and you receive the message that states that Exchange Server 5.5 is
	installing the services and updating the registry, you receive the following
	error message:
	
	  The command lodctr dsactrs.ini failed, returning an error code of 32
	
	  NT Error Code 32= The process cannot access the file because it is being used
	  by another process.
	
	CAUSE
	=====
	
	This error is returned because the file is locked open. For example, the
	processes used by the HP agents have a lock on the following files:
	
	  Perfc009.dat
	  Perfh009.dat
	
	There are eight processes that you can view in Task Manager starting with the
	letters "hp" that are running and part of the HP NetServer agents. These
	processes have a lock on the Perfc009.dat and Perfh009.dat files that Exchange
	Server 5.5 updates during installation.
	
	This lock causes the Exchange Server 5.5 installation to fail.
	
	RESOLUTION
	==========
	
	To resolve the issue and complete the installation, follow theses steps:
	
	1. In Control Panel, click Add/Remove Programs.
	
	2. Remove the HP NetServer agents.
	
	3. Restart the server.
	
	4. Finish installing Exchange Server 5.5. The installation will now perform
	  cleanly.
	
	WORKAROUND
	==========
	
	To work around this issue, and if certain processes do not end (for example,
	HPmos.exe), disable all the HP services, then reboot the server. This ends all
	processes that are running, and ensures that the HP services do not restart
	until issue is resolved.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: HP; agents; installation
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
