---
layout: page
title: "Q140335: Remote Mail Problems with Existing Connection to Mail Server"
permalink: kb/140/Q140335/
---

## Q140335: Remote Mail Problems with Existing Connection to Mail Server

	Article: Q140335
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Internet Mail service that is included with Microsoft
	Plus! and you try to use the Remote Mail feature of Microsoft Exchange to
	transfer mail or update mail headers, the following error message may be
	displayed:
	
	  You could not be logged on to mail server.
	
	  Be sure your account information for the server is accurate. If this problem
	  persists, contact your Internet Service Provider.
	
	This problem may occur even when the Internet mail server, account name, and
	password that the Internet Mail service is configured to use are correct. In
	addition, you may experience any of the following symptoms when you attempt to
	transfer mail or update mail headers:
	
	- Messages that you already downloaded and deleted may be downloaded again.
	
	- Microsoft Exchange may not download any new messages, even though you have
	  new messages on the server.
	
	- Microsoft Exchange may stop responding (hang).
	
	CAUSE
	=====
	
	These problems can occur when you attempt to connect to your POP3 mail server
	with Microsoft Exchange if you are already running a Windows sockets program
	that is connected to the mail server. Microsoft Exchange does not recognize that
	another program is already connected to the mail server.
	
	RESOLUTION
	==========
	
	Before you connect to your Internet mail server with Microsoft Exchange, make
	sure that no other program is already connected to the mail server. This
	includes third-party mail programs and other Internet connectivity programs that
	you use in Windows 95.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
