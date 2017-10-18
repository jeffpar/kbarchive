---
layout: page
title: "Q148694: IIS and SQL: Intermittent NamedPipe Connections Problem"
permalink: kb/148/Q148694/
---

## Q148694: IIS and SQL: Intermittent NamedPipe Connections Problem

	Article: Q148694
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user selects an option on an Internet Information Server (IIS) web page
	that requests a connection to a SQL Server, a STATUS_PIPE_NOT_AVAILABLE
	C00000ACL error occurs between the IIS and the SQL Server. An occasional
	instance of this error is normal, but numerous frequency of this error can
	result in problems seen on the Internet browser application.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one or all of the following:
	
	- Upgrade to SQL Server 6.0 Service Pack 2.
	
	- Remove the TCP/IP protocol and use the IPX/SPX Compatible Transport protocol
	  only.
	
	- Upgrade to Windows NT Server 3.51 Service Pack 4.
	
	- Upgrade from a 486/66 dual processor 486/66 to a Pentium quad-processor, for
	  example.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : :1.0,3.51
	
	=============================================================================
	
