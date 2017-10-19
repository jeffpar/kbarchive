---
layout: page
title: "Q279423: XADM: How to Use the DSAdiag Utility"
permalink: /kb/279/Q279423/
---

## Q279423: XADM: How to Use the DSAdiag Utility

	Article: Q279423
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the DSAdiag utility (DSAdiag.exe), which can be very
	useful when diagnosing directory access problems with Exchange 2000 Server.
	
	MORE INFORMATION
	================
	
	Exchange 2000 uses the DSAccess API to communicate with Active Directory.
	DSAdiag.exe is a utility that lists the domain controllers, global catalog
	servers, and the configuration domain controller that the DSAccess API attempts
	to contact on behalf of Exchange 2000. The status of the connection is displayed
	in the output (Up, Down, Fast, Slow, In Synch). If DSAccess is having trouble
	communicating to a particular domain controller or global catalog server, it
	fails over to a different Active Directory server.
	
	When you use DSAdiag.exe, you can manually force server discovery. DSAdiag.exe
	must be copied into the \Program Files\Exchsrvr\Bin folder. Open a command
	prompt and change the folders to \Bin. When you type "dsadiag" (without the
	quotation marks) and press ENTER, two options are displayed:
	
	- DSAdiag 1: This option displays the domain controller, global catalog server,
	  and the configuration domain controller list.
	
	- DSAdiag 2: This option forces Topology Rediscovery, which rediscovers the
	  topology of the domain controller, global catalog server, and the
	  configuration domain controller.
	
	For example, if a global catalog server has been taken down for maintenance and
	brought back online again, and DSAccess has not realized that the server is
	available once more, you can use the DSAdiag 2 option to force the server to
	rediscover the available servers. DSAdiag enumerates the list of Active
	Directory servers that the DSAccess API reports, it does not issue its own
	Lightweight Directory Access Protocol (LDAP) requests to the Active Directory
	servers.
	
	The following text is an example of the output that you receive when you use the
	DSAdiag 1 option:
	
	D:\Program Files\Exchsrvr\BIN>dsadiag 1
	.......
	
	Working DC's:
	
	UP FAST DOWN InSync    Name
	
	X  X         X         <hostname.domain.com>
	
	Working GC's:
	
	UP FAST DOWN InSync    Name
	
	X  X         X         <hostname.domain.com>
	
	Config DC:
	                      <hostname.domain.com>
	Done
	
	In the United States and Canada you may contact Microsoft Product Support
	Services at (800)936-5800 for this utility.
	
	
	For additional information about DSAccess, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q247262 XCON: How DSAccess Detects DCs, Global Catalogs, Config DCs in a
	  Domain
	
	
	Additional query words: xmrp dsaccess api, directory service DC GC GCS config
	
	======================================================================
	Keywords          :  
	Component         : DSAccessAPI
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
