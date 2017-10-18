---
layout: page
title: "Q90473: Which Redirector Works with Comm Server in WFWG"
permalink: kb/090/Q90473/
---

## Q90473: Which Redirector Works with Comm Server in WFWG

	Article: Q90473
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Comm Server is a LAN Manager server-based product that allows
	connectivity (over Token Ring) to mainframes from workstations running the Comm
	Server client software. The server portion of Comm Server, which resides on the
	LAN Manager server, transmits Comm Server client mainframe sessions (usually
	3270 emulation sessions) using named pipes. The majority of these named pipes
	are asynchronous.
	
	This article discusses the use of Comm Server with Windows for Workgroups and
	Workgroup Connections redirectors.
	
	MORE INFORMATION
	================
	
	Comm Server requires the ability of the redirector to support asynchronous named
	pipes. The only redirectors that currently support this are the Vredir and the
	Full redirector.
	
	The Vredir is the preferred redirector to use with Comm Server because it can
	handle the multiple asynchronous named pipe requests that Comm server requires
	and it frees up more resources than does the Full redirector.
	
	The Full redirector does not have enough internal support to satisfy all the
	asynchronous requests of the Comm Server. Although the Full redirector does
	support asynchronous pipes, it cannot accept multiple requests at once.
	
	NOTE: The Full redirector does not support asynchronous named pipes inside of
	Windows, but it does support named pipes inside of Windows.
	
	The Basic redirector does not have named pipe support, and therefore does not
	work with Comm Server.
	
	
	Additional query words: 3.10 1.00 wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
