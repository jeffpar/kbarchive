---
layout: page
title: "Q251760: XADM: Exchange 5.5 Setup Doesn't Work on Windows 2000 (TS)"
permalink: /kb/251/Q251760/
---

## Q251760: XADM: Exchange 5.5 Setup Doesn't Work on Windows 2000 (TS)

	Article: Q251760
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Exchange Server 5.5 on a Microsoft Windows
	2000-based server (running Terminal Services in Application mode), Exchange
	Server Setup doesn't work, and you receive the following error message:
	
	  Processing file 'E:\SERVER\SETUP\(Platform)\server.ins', at or near line 205
	  The directory name is invalid.
	  Microsoft Windows NT
	  ID no: 0xc002010b
	
	  The directory name is invalid
	  Microsoft Windows NT
	  ID no: 0xc002010b
	
	RESOLUTION
	==========
	
	Before you run Exchange Server 5.5 Setup, you must put Windows 2000 in Install
	mode. To do so, install Exchange Server 5.5 by using the Windows 2000 Add/Remove
	Software tool in Control Panel, or by typing the following at a command prompt
	before you install Exchange Server 5.5 (or any application):
	
	  "change user /install" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	By default, Terminal Server runs in Excecute mode. Excecute mode enables the
	ability to map .ini files to the home directory. This allows multiple users to
	run programs from the Terminal Server.
	
	Use the change user /install command before you install an application to create
	.ini files for the application in the Terminal Server system directory. These
	files are used as master copies for the user-specific .ini files. After you
	install the application, use the change user /execute command to revert to
	normal .ini fil mapping. For additional information on the change command in
	Terminal Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q186504 Terminal Server Commands: CHANGE
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : SRVRSetup
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
