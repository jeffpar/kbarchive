---
layout: page
title: "Q132401: 5250 Printer LU Hangs When Client-Server LAN Session is Lost"
permalink: kb/132/Q132401/
---

## Q132401: 5250 Printer LU Hangs When Client-Server LAN Session is Lost

	Article: Q132401
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using a third party 5250 print emulation product over SNA Server and
	the print emulator is stopped, or the client-server LAN session is lost, the
	AS/400 printer LU session is not cleaned up properly. As a result, 5250 print
	emulation product cannot reconnect to the AS/400 printing device.
	
	CAUSE
	=====
	
	When the 5250 print emulator is stopped, a Deallocate(ABEND) negative response
	is generated. If the LU6.2 session is in a receive state, the response cannot be
	sent (according to LU6.2 protocol).
	
	RESOLUTION
	==========
	
	To correct this problem in SNA Server version 2.1, install the SNA Server 2.1
	SNA Server service update (NODEUP.ZIP) located on the following electronic
	services:
	
	- On the Internet, the file is located on the Microsoft anonymous ftp server
	  (ftp.microsoft.com). To download NODEUP.ZIP, change to the following
	  directory:
	
	  \bussys\winnt\sna-unsup-ed\fixes\nodeup
	
	  The NODEUP.ZIP file must be uncompressed using PKZIP 2.04g or later, using the
	  following command:
	
	  pkunzip -d nodeup.zip
	
	A README file is included and describes how to install the update.
	
	There is no update available for SNA Server 2.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was corrected in SNA Server 2.11.
	
	MORE INFORMATION
	================
	
	If the application ends or the SNA Server client-server LAN session is lost, SNA
	Server (with the SNA Server 2.1 SNA Server service update installed) treats this
	condition as though the transaction program (TP) issued a TP_ENDED(HARD). The
	session unbinds immediately instead of trying to deallocate the conversation.
	
	Additional query words: prodsna 2.00 2.10 5250 printer unbound
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
