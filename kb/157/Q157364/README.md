---
layout: page
title: "Q157364: Attempt to Log on During an Unauthorized Time Period"
permalink: kb/157/Q157364/
---

## Q157364: Attempt to Log on During an Unauthorized Time Period

	Article: Q157364
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have client workstations that use the Novell 16bit Netx network client
	software to connect to a Windows NT 3.51 or 4.0 server with File and Print
	Services for NetWare, you may encounter the following error on the client when
	attempting to log on to the server:
	
	  SERVER/USERNAME: Attempt to log on during an unauthorized time period. The
	  Supervisor has limited the time that you can log on to this server. You are
	  attached to server SERVERNAME.
	
	CAUSE
	=====
	
	The licensing service is configured for "Per Server," and does not have enough
	licenses to handle the additional connections of the Novell clients.
	
	RESOLUTION
	==========
	
	In Control Panel, double-click the Licensing icon. Increase the amount of
	concurrent connections to the proper level that are configured for the "Per
	Server" licensing option. The licensing service can be configured for "Per
	Seat," as long as the correct amount of client licensees have been obtained.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q153140
	  TITLE : How to Reset License Manager Information
	
	
	Additional query words: prodnt FPNW
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
