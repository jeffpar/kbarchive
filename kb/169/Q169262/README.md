---
layout: page
title: "Q169262: FTP Service Blue Screens When Downloading"
permalink: kb/169/Q169262/
---

## Q169262: FTP Service Blue Screens When Downloading

	Article: Q169262
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to download a file from the FTP server, the server stops with the
	following error message:
	
	  STOP:0x000000a (0x0000015a, 0x00000001c, 0x00000000, 0x80116bf4
	  0x80116bf4 has base at 80100000 ntoskrnl.exe
	
	CAUSE
	=====
	
	This can be caused by an anti-virus software installed on the server.
	
	Notes:
	
	- This is known to happen with Norton Antivirus and McAfee Antivirus.
	
	- This issue is not restricted to IIS and FTP, but also peer web services and
	  simple downloading from web.
	
	WORKAROUND
	==========
	
	If there is any anti-virus software installed, remove the software and test the
	download again.
	
	Additional query words: iis
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
