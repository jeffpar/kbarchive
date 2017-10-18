---
layout: page
title: "Q167418: Access Violation When Configuring a Printer from a MAC Client"
permalink: kb/167/Q167418/
---

## Q167418: Access Violation When Configuring a Printer from a MAC Client

	Article: Q167418
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Macintosh client configures a printer from a Microsoft Windows NT Server
	computer and the printer is using the Lexmark TCP/IP Port Monitor, the following
	error occurs:
	
	  An application error has occurred and an application error log is being
	  generated.
	  Spoolss.exe
	
	  Exception: access violation (0xc0000005), Address: 059d853ee
	
	NOTE: The address value you receive may be different.
	
	CAUSE
	=====
	
	The resulting error message is the following:
	
	  Application exception occurred:
	  App: exe\spoolss.dbg (pid=196)
	  When: 4/8/1997 @ 17:26:13.234
	  Exception number: c0000005 (access violation)
	
	
	
	RESOLUTION
	==========
	
	The problem described earlier in this article has been resolved in the latest
	version of the Lexmark TCP/IP Port Monitor. This product is available through
	the Lexmark Technical Support Center at 1-606-232-3000. The file modified is
	Lexlmpm.dll.
	
	MORE INFORMATION
	================
	
	MarkVision is manufactured by Lexmark International, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt ntmac watson sfm
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
