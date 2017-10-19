---
layout: page
title: "Q216197: Windows 95-Based Clients Receive Network Error from Appctl95.exe"
permalink: /kb/216/Q216197/
---

## Q216197: Windows 95-Based Clients Receive Network Error from Appctl95.exe

	Article: Q216197
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork kbtool kbPGC
	Last Modified: 09-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Appctl95.exe or try to use your Microsoft Windows 95-based computer
	running the Novell Client for Windows with Systems Management Server (SMS)
	version 1.2 Service Pack (SP) 4 installed to log on to a Novell NetWare version
	3.12 server, you may receive the following error message:
	
	  Program Group Control
	  Could not open the application database. There is a network error.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Use the Nadapi95.dll file from the original SMS 1.2 CD-ROM. Obtain the
	  Nadapi95.dl_ file from the SMS 1.2 CD-ROM, and then rename it to
	  Nadapi95.dll.
	
	2. Copy this file to sms\site.srv\maincfg.box\client.src\x86.bin. This file is
	  replicated to all SMS logon servers.
	
	3. Open the System.map file in Notepad, being careful not to modify anything,
	  and then save the file. This forces all clients into an upgrade mode so that
	  the Nadapi95.dll file is copied to them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 SP4.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	This error does not occur if the Microsoft Client for NetWare is used. This issue
	happens when you use the Novell Client for Windows 95/98 version 3.01 or version
	2.5.
	
	
	Additional query words: prodsms PGC application database NW
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork kbtool kbPGC 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
